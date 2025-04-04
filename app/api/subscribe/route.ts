import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    // Send welcome email to subscriber
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Welcome to Tatsam Society Newsletter!',
      html: `
        <h1>Welcome to Tatsam Society!</h1>
        <p>Thank you for subscribing to our newsletter. We're excited to keep you updated with our latest events, blogs, and cultural activities.</p>
        <p>Best regards,<br>Tatsam Society Team</p>
      `,
    });

    return NextResponse.json({ message: 'Subscribed successfully' });
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return NextResponse.json(
      { error: 'Failed to subscribe to newsletter' },
      { status: 500 }
    );
  }
}