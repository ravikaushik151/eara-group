"use client";
import { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  name: string;
  email: string;
  mobile: string;
  message: string;
}

interface ContactFormProps {
  showMessage?: boolean;
  inputClass?: string;
  buttonClass?: string;
  hideMessageField?: boolean; // New prop to hide textarea
  defaultMessage?: string;    // New prop for default message value
}

export default function ContactForm({
  showMessage = true,
  inputClass = "form-control mb-2",
  buttonClass = "btn btn-primary",
  hideMessageField = false,
  defaultMessage = "Interested in this project",
}: ContactFormProps) {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    mobile: "",
    message: defaultMessage, // default value
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setSuccess(true);
        setForm({ name: "", email: "", mobile: "", message: defaultMessage });
      } else {
        alert(data.message || "Something went wrong, please try again.");
      }
    } catch (err) {
      console.error("Submit error:", err);
      alert("Network error, try again later.");
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <input
        type="text"
        name="name"
        placeholder="Name"
        required
        value={form.name}
        onChange={handleChange}
        className={inputClass}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        required
        value={form.email}
        onChange={handleChange}
        className={inputClass}
      />
      <input
        type="tel"
        name="mobile"
        placeholder="Mobile"
        required
        value={form.mobile}
        onChange={handleChange}
        className={inputClass}
      />

      {!hideMessageField && (
        <textarea
          name="message"
          placeholder="Message"
          required
          value={form.message}
          onChange={handleChange}
          className={inputClass}
        />
      )}

      <div className="text-start">
        <button type="submit" disabled={loading} className={buttonClass}>
          {loading ? "Sending..." : "Submit"}
        </button>
      </div>

      {success && showMessage && (
        <div className="text-center">
          <p className="text-success mt-2">
            ✅ Thank you! We’ll get back to you soon.
          </p>
        </div>
      )}
    </form>
  );
}
