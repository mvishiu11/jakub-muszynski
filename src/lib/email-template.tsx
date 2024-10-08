import * as React from "react";
import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Preview,
  Text,
} from "@react-email/components";
import { ContactEmailProps } from "@/lib/types";

export const EmailTemplate = ({ message, email, name }: ContactEmailProps) => {
  const containerStyle = {
    margin: "0 auto",
    padding: "0 1.25rem",
    marginTop: "1.25rem",
    marginBottom: "3rem",
  };

  const hrStyle = {
    marginTop: "0.625rem",
    marginBottom: "1.875rem",
    border: "1px solid #ccc",
  };

  const textStyle = {
    base: {
      fontSize: "1rem",
      marginTop: "0",
      marginBottom: "0.625rem",
    },
  };

  return (
    <Html>
      <Head />
      <Preview>Portfolio Message</Preview>
      <Body style={{ fontFamily: "sans-serif", background: "#fff" }}>
        <Container style={containerStyle}>
          <Hr style={hrStyle} />

          <Text style={textStyle.base}>
            From: {name} <i>{email}</i>,
          </Text>
          <Text style={textStyle.base}>{message}</Text>
          <Text style={textStyle.base}>
            Sent via Contact Form @{" "}
            <a rel="noopener" href="https://jakub-muszynski.vercel.app/contact" target="_blank">
              eimaam.dev
            </a>
            <br />
          </Text>
          <Hr style={hrStyle} />
        </Container>
      </Body>
    </Html>
  );
};

export const emailTemplateHtml = (name: string, email: string, message: string) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Contact Form Submission</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f4f4f4;
      margin: 0;
      padding: 0;
      color: #333;
    }
    .container {
      width: 100%;
      max-width: 600px;
      margin: 20px auto;
      background-color: #ffffff;
      border: 1px solid #ddd;
      border-radius: 10px;
      box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    }
    .header {
      background-color: #007acc;
      color: #ffffff;
      padding: 20px;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      text-align: center;
    }
    .header h1 {
      margin: 0;
      font-size: 24px;
    }
    .content {
      padding: 20px;
      line-height: 1.6;
    }
    .content h2 {
      font-size: 20px;
      margin-bottom: 10px;
    }
    .content p {
      margin: 0;
      padding: 0;
    }
    .content .info {
      margin: 15px 0;
    }
    .footer {
      background-color: #f4f4f4;
      color: #666666;
      padding: 10px;
      text-align: center;
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;
      font-size: 12px;
    }
    .footer a {
      color: #007acc;
      text-decoration: none;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>New Contact Form Submission</h1>
    </div>
    <div class="content">
      <h2>You've received a new message from your website's contact form.</h2>
      <div class="info">
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      </div>
      <p>To reply to this message, simply respond to this email or contact them at the provided email address.</p>
    </div>
    <div class="footer">
      <p>Sent via <br/> © Jakub Muszynski</p>
    </div>
  </div>
</body>
</html>
`;

export default EmailTemplate;