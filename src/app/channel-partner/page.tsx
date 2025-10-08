'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import "./../career.css";

export default function ChannelPartner() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/channel-partner', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const result = await response.json();
            alert(result.message || 'Form submitted successfully!');
        } catch (err) {
            alert('Error submitting form. Please try again.');
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
                                className="img-fluid masterpiece rounded-4"
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

            {/* Channel Partner Form Section */}
            <section className="bg-light py-5 theme-bg-light carrer section">
                <div className="container">
                    <div className="text-center mb-5 theme-color-dark">
                        <h2 className="mb-2">Become Our Channel Partner</h2>
                        <p className="theme-color-dark text-center">
                            Partner with EARA Group and be part of a visionary journey that drives innovation and success.
                        </p>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="px-3 px-md-4 py-4 border rounded shadow-sm bg-white">
                                <h5 className="text-uppercase mb-4 theme-color-dark" style={{ color: '#282563' }}>
                                    Partner With Us
                                </h5>

                                <form onSubmit={handleSubmit}>
                                    <div className="form-group mb-3">
                                        <input
                                            type="text"
                                            name="name"
                                            className="form-control py-2"
                                            placeholder="Name"
                                            required
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div className="form-group mb-3">
                                        <input
                                            type="email"
                                            name="email"
                                            className="form-control py-2"
                                            placeholder="Email"
                                            required
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div className="form-group mb-3">
                                        <input
                                            type="text"
                                            name="phone"
                                            className="form-control py-2"
                                            placeholder="Phone Number"
                                            required
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div className="form-group mb-3">
                                        <textarea
                                            name="message"
                                            className="form-control py-2"
                                            placeholder="Message"
                                            rows={4}
                                            required
                                            onChange={handleChange}
                                        ></textarea>
                                    </div>

                                    <div className="text-center">
                                        <button
                                            type="submit"
                                            className="btn theme-bg-dark text-white py-2 px-4 mt-2"
                                        >
                                            Submit
                                        </button>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
