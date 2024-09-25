import { NextRequest, NextResponse } from "next/server";
import sendgrid from '@sendgrid/mail';
import { emailTemplateHtml } from "@/lib/email-template";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY as string);

export async function POST(req: NextRequest) {
  const csrfToken = req.cookies.get('csrfToken')?.value;
  const body = await req.json();

  const clientToken = body.csrfToken?.toString();

  if (csrfToken !== clientToken) {
    return NextResponse.json({ error: 'Invalid CSRF token' }, { status: 403 });
  }

  const { name, email, message } = body;

  if (!message || !email || !name) {
    console.error("Missing required fields");
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 }
    );
  }

  try {
    const msg = {
      to: 'jakub.m.muszynski@gmail.com',
      from: 'jakub.m.muszynski@gmail.com',
      subject: `Contact form submission from ${name}`,
      text: message,
      html: emailTemplateHtml(name, email, message),
    };

    const result = await sendgrid.send(msg);
    console.log("Email sent successfully", result);
    return NextResponse.json(
      { message: "Email sent successfully"},
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Failed to send email", error },
      { status: 500 }
    );
  }
}