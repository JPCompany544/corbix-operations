import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const userAgent = req.headers.get("user-agent") || "";

    // 7. Add basic bot filtering
    const botPattern = /bot|crawler|spider|facebookexternalhit/i;
    if (botPattern.test(userAgent)) {
      return NextResponse.json({ success: true, message: "Bot ignored" });
    }

    // 2. Detect the visitor IP using request headers
    // Vercel and other proxies usually set x-forwarded-for
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0] || "Unknown";

    // 2. Use a free IP lookup API (ipapi.co) to determine the country
    let country = "Unknown";
    if (ip !== "Unknown") {
      try {
        const ipLookup = await fetch(`https://ipapi.co/${ip}/json/`);
        const data = await ipLookup.json();
        country = data.country_name || "Unknown";
      } catch (err) {
        console.error("IP Lookup error:", err);
      }
    }

    // 2. Detect device type from the user-agent string
    let device = "Desktop";
    if (/android/i.test(userAgent)) {
      device = "Android";
    } else if (/ipad|tablet/i.test(userAgent)) {
      device = "Tablet";
    } else if (/iphone|ipod/i.test(userAgent)) {
      device = "iPhone";
    }

    // 2. Read the visited page from the request body
    const body = await req.json();
    const page = body.page || "Unknown";

    // 2. Generate a timestamp in HH:MM format
    const now = new Date();
    const time = `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;

    // 3. Send a POST request to the Telegram Bot API
    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!botToken || !chatId) {
      console.warn("TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID is missing");
    } else {
      const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;
      const text = `New Visitor\n\nIP: ${ip}\nCountry: ${country}\nDevice: ${device}\nPage: ${page}\nTime: ${time}`;

      await fetch(telegramUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text: text,
        }),
      });
    }

    // 8. Return a success JSON response
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Visitor tracking error:", error);
    return NextResponse.json({ success: false, error: "Internal Server Error" }, { status: 500 });
  }
}
