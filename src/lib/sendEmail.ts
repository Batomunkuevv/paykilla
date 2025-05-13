"use server";

import nodemailer from "nodemailer";
import { FormData } from "@t";

export async function sendEmail(formData: FormData) {
    const { name, email, message } = formData;

    if (!name || !email || !message) {
        throw new Error("Missing required fields");
    }

    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT),
        secure: process.env.SMTP_SECURE === "true",
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
    });

    await transporter.sendMail({
        from: `"Paykilla Lending" <${process.env.SMTP_USER}>`,
        to: process.env.CONTACT_RECEIVER_EMAIL,
        subject: "New Contact Message",
        html: `
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong><br/>${message}</p>
        `,
    });
}
