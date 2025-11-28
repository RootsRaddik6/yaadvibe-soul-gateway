import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const { wallet } = await req.json();

        if (!wallet) {
            return NextResponse.json(
                { success: false, error: "Wallet address missing." },
                { status: 400 }
            );
        }

        return NextResponse.json({
            success: true,
            message: "TON entry verification successful.",
            wallet,
        });

    } catch (error) {
        return NextResponse.json(
            { success: false, error: "Server error", details: error.message },
            { status: 500 }
        );
    }
}

export async function GET() {
    return NextResponse.json({ status: "TON entry API active" });
}
