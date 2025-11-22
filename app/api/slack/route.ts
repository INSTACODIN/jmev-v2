import { NextRequest, NextResponse } from "next/server";
import { sendToSlack, SlackMessage } from "@/lib/slack";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { type, name, email, phone, message, preferredDate, preferredTime } = body;

    // Validate required fields
    if (!type || !name || !email || !phone) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    const slackData: SlackMessage = {
      type,
      name,
      email,
      phone,
      message,
      preferredDate,
      preferredTime,
    };

    const success = await sendToSlack(slackData);

    if (!success) {
      return NextResponse.json(
        { error: "Failed to send message to Slack" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Error in Slack API route:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

