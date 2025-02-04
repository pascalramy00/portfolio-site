import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
	try {
		const { name, email, message, company } = await req.json();

		if (!name || !email || !message) {
			return NextResponse.json(
				{ error: "All fields are required" },
				{ status: 400 }
			);
		}

		const transporter = nodemailer.createTransport({
			service: "Gmail",
			auth: {
				user: process.env.EMAIL_USER,
				pass: process.env.EMAIL_PASS,
			},
		});

		await transporter.sendMail({
			from: process.env.EMAIL_USER,
			to: process.env.EMAIL_TO,
			subject: `New Contact Form Submission from ${name}`,
			text: `Name: ${name}\nCompany: ${company}\nEmail: ${email}\nMessage: ${message}`,
		});

		return NextResponse.json(
			{ success: "Message sent successfully" },
			{ status: 200 }
		);
	} catch (error) {
		console.error("Error sending email:", error);
		return NextResponse.json(
			{ error: "Failed to send message" },
			{ status: 500 }
		);
	}
}
