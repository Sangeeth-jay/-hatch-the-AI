import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const OTP_STORE = new Map<string, {otp: string; expires: number}>();


export async function POST(req:Request) {
    const {email} = await req.json();

    const otp = Math.floor(1000 + Math.random() * 9000).toString();
    OTP_STORE.set(email, {otp, expires: Date.now() + 5 * 60 * 1000});

    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: 587,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
    });

    const info = await transporter.sendMail({
        from: process.env.SMTP_USER,
        to: email,
        subject: "OTP code for log in to #hatch AI",
        text: `Your OTP is ${otp}, It will expire in 5 minutes.`
    });

    console.log("Preview URL:", nodemailer.getTestMessageUrl(info));
    return NextResponse.json({ok: true});

}

export {OTP_STORE}