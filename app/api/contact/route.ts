import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    // ── Option: Formspree ─────────────────────────────────────────
    // 1. Sign up free at https://formspree.io
    // 2. Create a form and copy the form ID
    // 3. Add FORMSPREE_ID=your_id to .env.local
    const formspreeId = process.env.FORMSPREE_ID;
    if (formspreeId) {
      const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          company: company || "Not provided",
          message,
          _replyto: email,
          _subject: `Portfolio enquiry from ${name}`,
        }),
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        console.error("Formspree error:", err);
        return NextResponse.json(
          { error: "Failed to send message. Please try again." },
          { status: 500 }
        );
      }
    } else {
      // No email service configured — log to console (dev mode)
      console.log("📧 Contact form submission (configure FORMSPREE_ID to enable emails):");
      console.log({ name, email, company, message });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact route error:", error);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}
