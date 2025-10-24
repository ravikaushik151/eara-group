'use client';
import { useState, ChangeEvent, FormEvent } from 'react';

interface FormData {
  name: string;
  email: string;
  mobile: string;
  message: string;
}

interface ContactFormProps {
  inputClass?: string;
  buttonClass?: string;
  hideMessageField?: boolean;
  defaultMessage?: string;
}

export default function ContactForm({
  inputClass = 'footer-input rounded-0 mb-2',
  buttonClass = 'btn theme-bg-light text-dark mb-3',
  hideMessageField = false,
  defaultMessage = '',
}: ContactFormProps) {
  const [form, setForm] = useState<FormData>({
    name: '',
    email: '',
    mobile: '',
    message: defaultMessage,
  });

  const [loading, setLoading] = useState(false);
  const [note, setNote] = useState('');
  const [success, setSuccess] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Validation
    if (!form.name || !form.email || !form.mobile) {
      setNote('All fields are required!');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      setNote('Enter a valid email address!');
      return;
    }

    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(form.mobile)) {
      setNote('Phone number must be 10 digits!');
      return;
    }

    setLoading(true);
    setNote('Please wait...');
    setSuccess(false);

    const payload = {
      name: form.name,
      email: form.email,
      phone: form.mobile,
      message: form.message || 'interested',
      subject: 'Eara Group - Website',
      form_source: 'Eara Group - Website',
      additionalRecipients: ['lokesh@imsolutions.mobi', 'ravi.k@imsolutions.mobi'],
    };

    try {
      const res = await fetch(
        'https://us-central1-email-js-1a09b.cloudfunctions.net/emailjs/submit-form',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        }
      );

      const text = await res.text();

      if (text.trim() === 'Email sent successfully') {
        setSuccess(true);
        setNote('Email sent successfully!');
        setForm({ name: '', email: '', mobile: '', message: defaultMessage });
      } else {
        setNote(text || 'Error sending email.');
      }
    } catch (err) {
      console.error(err);
      setNote('Network error. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
        className={inputClass}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        className={inputClass}
        required
      />
      <input
        type="tel"
        name="mobile"
        placeholder="Mobile"
        value={form.mobile}
        onChange={handleChange}
        className={inputClass}
        required
      />
      {!hideMessageField && (
        <textarea
          name="message"
          placeholder="Message"
          value={form.message}
          onChange={handleChange}
          className={inputClass}
        />
      )}

      <div className="text-center">
        <button type="submit" className={buttonClass} disabled={loading}>
          {loading ? 'Sending...' : 'Submit'}
        </button>
      </div>

      {note && (
        <p className={`my-2 ${success ? 'text-success' : 'text-danger'}`} style={{ fontWeight: 600 }}>
          {note}
        </p>
      )}
    </form>
  );
}
