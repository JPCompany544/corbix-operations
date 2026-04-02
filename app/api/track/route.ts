import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { source, page } = await req.json();

    if (!source) {
      return NextResponse.json({ error: "Source is required" }, { status: 400 });
    }

    let token = "";
    let chatId = "";

    // Route based on source
    if (source.toLowerCase().startsWith("fb")) {
      token = process.env.FB_BOT_TOKEN || "";
      chatId = process.env.FB_CHAT_ID || "";
    } else if (source.toLowerCase().startsWith("yt")) {
      token = process.env.YT_BOT_TOKEN || "";
      chatId = process.env.YT_CHAT_ID || "";
    } else {
      return NextResponse.json({ message: "Source ignored" });
    }

    if (!token || !chatId) {
      return NextResponse.json({ error: "Bot credentials missing" }, { status: 500 });
    }

    // Prepare Lead Notification
    const text = `New Lead:\nSource: ${source}\nPage: ${page}\nTime: ${new Date().toISOString()}`;

    const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text }),
    });

    if (!res.ok) {
      throw new Error(`Telegram API Error: ${res.statusText}`);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
