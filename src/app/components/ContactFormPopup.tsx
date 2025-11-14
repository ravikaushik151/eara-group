'use client';

import { useState, ChangeEvent, FormEvent, MouseEvent } from 'react';

// Define a type for the props
interface ContactFormPopupProps {
    buttonClassName?: string; // class for the button that opens the modal
    buttonText?: string;      // text to display on the button
    redirectUrl?: string;     // optional redirect after success
}

export default function ContactFormPopup({ 
    buttonClassName = 'btn btn-primary', 
    buttonText = 'Contact Us', 
    redirectUrl 
}: ContactFormPopupProps) {
    const [show, setShow] = useState(false);
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
    const [note, setNote] = useState<string | null>(null);
    const [submitting, setSubmitting] = useState(false);

    // Stop click propagation on the dialog to prevent closing when clicking inside the form
    const stopPropagation = (e: MouseEvent<HTMLDivElement>) => e.stopPropagation();

    const handleClose = () => {
        setShow(false);
        setNote(null);
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Validation remains the same...
    const validateForm = () => {
        let isValid = true;
        if (!formData.name.match(/^[a-zA-Z ]+$/)) {
            setNote('Name must only contain letters and spaces.');
            isValid = false;
        } else if (!formData.email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
            setNote('Please enter a valid email address.');
            isValid = false;
        } else if (!formData.phone.match(/^\d{10}$/)) {
            setNote('Phone number must be 10 digits.');
            isValid = false;
        } else {
            setNote(null);
        }
        return isValid;
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (!validateForm()) return;

        setSubmitting(true);
        setNote('Please wait...');

        const payload = {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            message: formData.message || 'interested',
            subject: 'Enquire From Eara Group - Website',
            form_source: 'Enquire From Eara Group - Website',
            additionalRecipients: ['lokesh@imsolutions.mobi', 'ravi.k@imsolutions.mobi'],
        };

        try {
            const res = await fetch(
                'https://earagroup.com/emailer',
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload),
                }
            );
            const msg = await res.text();

            if (msg.trim() === 'OK') {
                setNote('Email Sent Successfully!');
                setFormData({ name: '', email: '', phone: '', message: '' });
                
                if (redirectUrl) {
                    setTimeout(() => (window.location.href = redirectUrl), 2000);
                }
            } else {
                setNote(msg);
            }
        } catch (error) {
            setNote('Error sending email!');
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <>
            {/* 1. Button to open the modal */}
            <button className={buttonClassName} onClick={() => setShow(true)}>
                {buttonText} 
            </button> 

            {/* 2. Modal structure */}
            {show && (
                <div
                    // The main modal container (backdrop)
                    className="modal fade show d-block"
                    tabIndex={-1}
                    style={{ 
                        backgroundColor: 'rgba(0,0,0,0.5)', 
                        // Ensure it is on top of other elements
                        zIndex: 1050, 
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%'
                    }}
                    // Click outside the dialog closes the modal
                    onClick={handleClose}
                >
                    <div 
                        className="modal-dialog modal-dialog-centered" 
                        // Click inside the dialog is prevented from propagating to the backdrop
                        onClick={stopPropagation}
                    >
                        <div className="modal-content theme-bg-dark">
                            <div className="modal-header">
                                <h5 className="modal-title theme-color-light">Get in Touch</h5>
                                <button type="button" className="btn-close theme-bg-light" onClick={handleClose}></button>
                            </div>
                            <div className="modal-body">
                                {note && <p style={{ color: note && (note.includes('Error') || note.includes('valid') || note.includes('digits')) ? 'red' : 'green', fontWeight: 600 }}>{note}</p>}
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-1">
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder='Name'
                                            className="form-control"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            disabled={submitting}
                                        />
                                    </div>
                                    <div className="mb-1">
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder='Email'
                                            className="form-control"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            disabled={submitting}
                                        />
                                    </div>
                                    <div className="mb-1">
                                        <input
                                            type="tel"
                                            name="phone"
                                            placeholder='Phone'
                                            className="form-control"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                            disabled={submitting}
                                        />
                                    </div>
                                    <div className="mb-1">
                                        <textarea
                                            name="message"
                                            placeholder='Message'
                                            className="form-control"
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows={3}
                                            disabled={submitting}
                                        ></textarea>
                                    </div>
                                    <div className='text-center'>
                                        <button type="submit" className="btn theme-bg-light theme-color-dark" disabled={submitting}>
                                            {submitting ? 'Please Wait...' : 'Submit'}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
// Example Usage:
// <ContactFormPopup buttonText="Download Brochure" buttonClassName="btn btn-warning" redirectUrl="/download-success" />