import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { source, page } = await req.json();

    if (!source) {
      return NextResponse.json({ success: true, message: "No source provided" });
    }

    const normalizedSource = source?.toLowerCase().trim();

    console.log("Incoming source:", source);
    console.log("Normalized source:", normalizedSource);
    console.log("Routing to:", normalizedSource.startsWith("fb") ? "FB" : normalizedSource.startsWith("yt") ? "YT" : "NONE");

    let botToken = "";
    let chatId = "";

    if (normalizedSource.startsWith("fb")) {
      botToken = process.env.FB_BOT_TOKEN || "";
      chatId = process.env.FB_CHAT_ID || "";
    } else if (normalizedSource.startsWith("yt")) {
      botToken = process.env.YT_BOT_TOKEN || "";
      chatId = process.env.YT_CHAT_ID || "";
    } else {
      return NextResponse.json({ success: true, message: "Source ignored" });
    }

    if (!botToken || !chatId) {
      return NextResponse.json({ success: true, message: "Bot credentials missing" });
    }

    const text = `New Lead:\nSource: ${normalizedSource}\nPage: ${page}\nTime: ${new Date().toISOString()}`;

    const res = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text: text,
      }),
    });

    if (!res.ok) {
      throw new Error(`Telegram API Error: ${res.statusText}`);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
