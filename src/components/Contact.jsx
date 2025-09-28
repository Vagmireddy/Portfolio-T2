import React, { useState } from "react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORMSPREE_ENDPOINT"; 
// ← Replace with your Formspree form endpoint

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ sending: false, ok: null, msg: "" });

  function handleChange(e) {
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus({ sending: true, ok: null, msg: "" });

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setForm({ name: "", email: "", message: "" });
        setStatus({ sending: false, ok: true, msg: "Message sent — thank you!" });
      } else {
        const data = await res.json().catch(() => ({}));
        setStatus({
          sending: false,
          ok: false,
          msg: data.error || "Something went wrong. Please try again later.",
        });
      }
    } catch (err) {
      setStatus({ sending: false, ok: false, msg: "Network error. Please try again." });
    }
  }

  return (
    <section id="contact" className="contact-left">
      <div className="contact-head-row">
        <h2 className="contact-title">Contact Me</h2>
        <div className="contact-rule-long" />
      </div>

      <p className="contact-lead-left">
        I would love to hear about your project and how I can help. Please fill in the form, and I'll get back to you as soon as possible.
      </p>

      <form className="contact-form-left" onSubmit={handleSubmit}>
        <label htmlFor="name" className="label-small">NAME</label>
        <input id="name" name="name" value={form.name} onChange={handleChange} type="text" required />

        <label htmlFor="email" className="label-small">EMAIL</label>
        <input id="email" name="email" value={form.email} onChange={handleChange} type="email" required />

        <label htmlFor="message" className="label-small">MESSAGE</label>
        <textarea id="message" name="message" value={form.message} onChange={handleChange} required />

        <div className="send-block">
          <button type="submit" className="send-button" disabled={status.sending}>
            {status.sending ? "SENDING..." : "SEND MESSAGE"}
          </button>
          <div className="send-underline-long" />
        </div>

        <div className="form-status" aria-live="polite">
          {status.ok === true && <div className="status-ok">{status.msg}</div>}
          {status.ok === false && <div className="status-err">{status.msg}</div>}
        </div>
      </form>
    </section>
  );
}
