"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { submitConsultation } from "@/lib/submit-consultation";

type Fields = { fullName: string; email: string; whatsapp: string; businessName: string; url: string; message: string };
const initial: Fields = { fullName: "", email: "", whatsapp: "", businessName: "", url: "", message: "" };

function validate(values: Fields): Partial<Fields> {
  const errors: Partial<Fields> = {};
  if (!values.fullName.trim()) errors.fullName = "Please enter your full name.";
  if (!values.email.trim()) errors.email = "Please enter your email address.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) errors.email = "Enter a valid email address.";
  if (!values.whatsapp.trim()) errors.whatsapp = "Please enter your WhatsApp number.";
  else {
    const number = values.whatsapp.replace(/[\s()-]/g, "");
    if (!/^(?:\+?977)?9[678]\d{8}$/.test(number)) errors.whatsapp = "Enter a valid Nepal mobile number, with or without +977.";
  }
  if (!values.businessName.trim()) errors.businessName = "Please enter your business name.";
  if (values.url.trim()) {
    try { const parsed = new URL(values.url); if (!["http:", "https:"].includes(parsed.protocol) || !parsed.hostname.includes(".")) throw new Error(); }
    catch { errors.url = "Enter a valid website or Facebook page URL."; }
  }
  return errors;
}

export function ConsultationForm() {
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState<Partial<Fields>>({});
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const router = useRouter();

  function update(field: keyof Fields, value: string) {
    const next = { ...values, [field]: value };
    setValues(next);
    if (errors[field]) setErrors(validate(next));
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (loading) return;
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      const first = Object.keys(nextErrors)[0];
      document.getElementById(first)?.focus();
      setStatus("Please review the highlighted fields.");
      return;
    }
    setLoading(true); setStatus("");
    try {
      await submitConsultation({ fullName: values.fullName, email: values.email, whatsapp: values.whatsapp, businessName: values.businessName, url: values.url, message: values.message });
      router.push("/thank-you?demo=1");
    } catch {
      setStatus("We couldn’t continue just now. Please try again or contact us on WhatsApp.");
      setLoading(false);
    }
  }

  const field = (name: keyof Fields, label: string, placeholder: string, type = "text", required = false) => <div className="field"><label htmlFor={name}>{label}{required && <span className="required"> *</span>}</label><input id={name} name={name} type={type} value={values[name]} onChange={(event) => update(name, event.target.value)} placeholder={placeholder} required={required} aria-invalid={!!errors[name]} aria-describedby={errors[name] ? `${name}-error` : undefined} autoComplete={name === "fullName" ? "name" : name === "email" ? "email" : name === "whatsapp" ? "tel" : "off"} />{errors[name] && <span className="field-error" id={`${name}-error`} role="alert">{errors[name]}</span>}</div>;

  return <form className="consultation-form" onSubmit={onSubmit} noValidate>
    <div className="form-grid">
      {field("fullName", "Full name", "Your name", "text", true)}
      {field("email", "Email address", "you@example.com", "email", true)}
      {field("whatsapp", "WhatsApp number", "+977 98XXXXXXXX", "tel", true)}
      {field("businessName", "Business name", "Your business", "text", true)}
      <div className="field full-span">{field("url", "Website or Facebook page", "https://", "url", false)}</div>
      <div className="field full-span"><label htmlFor="message">Anything you want to tell us?</label><textarea id="message" name="message" value={values.message} onChange={(event) => update("message", event.target.value)} placeholder="Tell us a little about your business, goals, or marketing questions." rows={4} /></div>
    </div>
    <p className="privacy-note">We respect your privacy. No spam.</p>
    <p className="demo-note"><span aria-hidden="true">ⓘ</span> Demo mode: live submission delivery is not enabled. Your details won’t be sent or stored.</p>
    <button className="button button-primary submit-button" type="submit" disabled={loading}>{loading ? "PREPARING PREVIEW…" : "BOOK YOUR FREE STRATEGY CONSULTATION"}<span aria-hidden="true">↗</span></button>
    <p className="form-status" role="status" aria-live="polite">{status}</p>
  </form>;
}
