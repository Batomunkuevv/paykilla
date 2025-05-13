import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const lastSubmissions = new Map<string, number>();
const RATE_LIMIT_WINDOW = 60_000;

export async function POST(req: Request) {
    const ip = req.headers.get("x-forwarded-for") || "unknown";
    const now = Date.now();
    const lastSubmissionTime = lastSubmissions.get(ip) || 0;

    if (now - lastSubmissionTime < RATE_LIMIT_WINDOW) {
        return NextResponse.json({ success: false, error: "Too many requests. Please wait a minute before sending again." }, { status: 429 });
    }

    const { name, email, message, consent } = await req.json();

    if (
        typeof name !== "string" ||
        name.trim() === "" ||
        typeof email !== "string" ||
        !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email) ||
        typeof message !== "string" ||
        consent !== true
    ) {
        return NextResponse.json({ success: false, error: "Validation failed. Please check your input fields." }, { status: 400 });
    }

    try {
        if (!process.env.SMTP_USER || !process.env.CONTACT_RECEIVER_EMAIL) {
            return NextResponse.json({ success: false, error: "Server misconfiguration: missing env variables." }, { status: 500 });
        }

        await resend.emails.send({
            from: `Paykilla <${process.env.SMTP_USER}>`,
            to: [process.env.CONTACT_RECEIVER_EMAIL],
            subject: "New contact message",
            html: `
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong><br/>${message}</p>
            `,
        });

        lastSubmissions.set(ip, now);

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Email sending failed:", error);
        return NextResponse.json({ success: false, error: "Failed to send email. Please try again later." }, { status: 500 });
    }
}
