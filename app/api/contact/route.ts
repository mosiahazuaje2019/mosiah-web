const CONTACT_EMAIL = "mosiahazuaje2010@gmail.com";

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  message?: unknown;
  website?: unknown;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  if (!process.env.RESEND_API_KEY) {
    return Response.json(
      { error: "Email service is not configured." },
      { status: 503 }
    );
  }

  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = typeof payload.name === "string" ? payload.name.trim() : "";
  const email = typeof payload.email === "string" ? payload.email.trim() : "";
  const message =
    typeof payload.message === "string" ? payload.message.trim() : "";

  // Bots commonly fill hidden fields. Return success without sending anything.
  if (typeof payload.website === "string" && payload.website.trim()) {
    return Response.json({ success: true });
  }

  if (
    name.length < 2 ||
    name.length > 100 ||
    !isValidEmail(email) ||
    email.length > 254 ||
    message.length < 10 ||
    message.length > 5000
  ) {
    return Response.json(
      { error: "Please check the form fields and try again." },
      { status: 400 }
    );
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from:
        process.env.CONTACT_FROM_EMAIL ??
        "Mosiah Portfolio <onboarding@resend.dev>",
      to: [CONTACT_EMAIL],
      reply_to: email,
      subject: `Portfolio contact from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    }),
  });

  if (!response.ok) {
    console.error("Resend contact email failed", response.status);
    return Response.json(
      { error: "The message could not be sent. Please try again." },
      { status: 502 }
    );
  }

  return Response.json({ success: true });
}
