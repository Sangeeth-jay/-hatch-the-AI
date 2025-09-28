import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function GET() {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    if (!token) {
        return NextResponse.json({ valid: false });
    } else {
        try {
            jwt.verify(token, process.env.JWT_SECRET!);
            return NextResponse.json({ valid: true });
        } catch {
            return NextResponse.json({ valid: false });
        }
    }

}
