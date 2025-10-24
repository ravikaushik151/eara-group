'use client';

import { useState, ChangeEvent, FormEvent } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import "./../career.css";

export default function ChannelPartner() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '', // hidden message default
    });

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [note, setNote] = useState('');

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setSuccess(false);
        setNote('');

        // Validation
        if (!formData.name || !formData.email || !formData.phone) {
            setNote('All fields are required!');
            setLoading(false);
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setNote('Enter a valid email address!');
            setLoading(false);
            return;
        }

        const phoneRegex = /^\d{10}$/;
        if (!phoneRegex.test(formData.phone)) {
            setNote('Phone number must be 10 digits!');
            setLoading(false);
            return;
        }

        try {
            const payload = {
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                message: formData.message || 'interested',
                subject: 'Eara Group - Channel Partner',
                form_source: 'Eara Group - Channel Partner',
                additionalRecipients: ['lokesh@imsolutions.mobi', 'ravi.k@imsolutions.mobi'],
            };

            const response = await fetch(
                'https://us-central1-email-js-1a09b.cloudfunctions.net/emailjs/submit-form',
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload),
                }
            );

            const resultText = await response.text();

            if (resultText.trim().toLowerCase() === 'email sent successfully') {
                setSuccess(true);
                setFormData({ name: '', email: '', phone: '', message: 'interested' });
                setNote('Email sent successfully!');
            } else {
                setNote(resultText || 'Error sending email. Please try again.');
            }
        } catch (err) {
            console.error(err);
            setNote('Network error. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            {/* Banner Section */}
            <div className="header-section">
                <div className="row">
                    <div className="col-md-12">
                        <div className="image-container">
                            <Image
                                src="/images/Channel partner.webp"
                                height={2880}
                                width={1920}
                                className="img-fluid masterpiece"
                                alt="Channel Partner"
                            />
                            <div className="overlay2">
                                <div className="text-white d-block">
                                    <p className="text-center fs-1 mb-3 text-uppercase">Channel Partner</p>
                                    <p className="text-center fs-6">
                                        <Link className="text-white text-decoration-none" href={'./'}>Home</Link> / Channel Partner
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Form Section */}
            <section className="bg-light py-5 theme-bg-light carrer section">
                <div className="container">
                    <div className="text-center mb-5 theme-color-dark">
                        <h2 className="mb-2">Become Our Channel Partner</h2>
                        <p className="theme-color-dark text-center">
                            Partner with EARA Group and be part of a visionary journey that drives innovation and success.
                        </p>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-lg-6 d-flex align-items-center">
                            <p className='lh-lg'>
                                At EARA Group, we believe that great collaborations build greater success stories. As a Channel Partner, you become an integral part of our vision - shaping communities, driving innovation, and redefining excellence in real estate. Together, we’ll unlock new opportunities, create lasting value, and grow stronger as one team with a shared purpose. Partner with us and be a part of a journey that’s truly transformative.
                            </p>
                        </div>
                        <div className="col-lg-6">
                            <div className="px-3 px-md-4 py-4 border rounded shadow-sm bg-white">
                                <h5 className="text-uppercase mb-4 theme-color-dark" style={{ color: '#282563' }}>
                                    Partner With Us
                                </h5>

                                <form onSubmit={handleSubmit}>
                                    <div className="form-group mb-2">
                                        <input
                                            type="text"
                                            name="name"
                                            className="form-control py-2"
                                            placeholder="Name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <div className="form-group mb-2">
                                        <input
                                            type="email"
                                            name="email"
                                            className="form-control py-2"
                                            placeholder="Email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <div className="form-group mb-2">
                                        <input
                                            type="text"
                                            name="phone"
                                            className="form-control py-2"
                                            placeholder="Phone Number"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    {/* Hidden message field is optional */}
                                    <textarea
                                        name="message"
                                        className="form-control "
                                        placeholder="Message"
                                        value={formData.message}
                                        onChange={handleChange}
                                    ></textarea>

                                    <div className="text-center">
                                        <button
                                            type="submit"
                                            className="btn theme-bg-dark text-white py-2 px-4 mt-2"
                                            disabled={loading}
                                        >
                                            {loading ? "Sending..." : "Submit"}
                                        </button>
                                    </div>

                                    {note && <p className={`mt-2 text-center ${success ? 'text-success' : 'text-danger'}`} style={{ fontWeight: 600 }}>{note}</p>}
                                    {success && <p className="text-success mt-2 text-center">✅ Thank you! We’ll get back to you soon.</p>}
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
