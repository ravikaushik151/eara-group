import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, mobile, message } = await req.json();

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
    
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL,
      subject: `Contact Form: ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMobile: ${mobile}\nMessage: ${message}`,
    });

    return NextResponse.json({ success: true, message: "Email sent successfully" });
  } catch (err) {
    console.error("Email send error:", err);
    return NextResponse.json(
      { success: false, error: err.message },
      { status: 500 }
    );
  }
}
