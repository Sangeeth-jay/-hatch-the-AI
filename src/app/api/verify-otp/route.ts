import { NextResponse } from "next/server";
import { OTP_STORE } from "../send-otp/route";

export async function POST(req: Request) {

    const {email, otp} = await req.json();

    const record = OTP_STORE.get(email);

    if(!record) {
        return NextResponse.json({ok: false, error: "No OTP found for this email"}, {status: 400});
    } else if(Date.now() > record.expires) {
        return NextResponse.json({ok: false, error: "OTP expired"}, {status:400});
    } else if(record.otp !== otp) {
        return NextResponse.json({ok: false, error: "Invalid OTP"}, {status: 400});
    } else {
        OTP_STORE.delete(email);
        return NextResponse.json({ok: true});
    }
}