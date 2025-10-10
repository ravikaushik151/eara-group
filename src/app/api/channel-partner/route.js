import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
    try {
        const { name, email, phone, message } = await request.json();

        // ✅ Configure your email transport
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
            tls: {
                rejectUnauthorized: false, // ✅ ignore self-signed cert
            },
        });

        // ✅ Prepare the email content
        const mailOptions = {
            from: `"EARA Group" <${process.env.MAIL_USER}>`,
            to: process.env.MAIL_RECEIVER || process.env.ADMIN_EMAIL, // where you want to receive submissions
            subject: "New Channel Partner Enquiry",
            html: `
        <h2>New Channel Partner Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
        <hr />
        <p style="font-size:12px;color:#888;">This message was sent via the Channel Partner form on your website.</p>
      `,
        };

        // ✅ Send the email
        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true, message: "Thank you! Your request has been submitted." });
    } catch (error) {
        console.error("Error sending email:", error);
        return NextResponse.json(
            { success: false, message: "Failed to send message. Please try again later." },
            { status: 500 }
        );
    }
}
