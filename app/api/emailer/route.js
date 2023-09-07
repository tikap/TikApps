import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req) {
  const request = await req.json();

  // Create a transporter object
  const transporter = nodemailer.createTransport({
    port: 465,
    host: process.env.NEXT_PUBLIC_EMAIL_HOST,
    auth: {
      user: process.env.NEXT_PUBLIC_EMAIL_USER,
      pass: process.env.NEXT_PUBLIC_EMAIL_PASS,
    },
    secure: true,
  });

  // Email content
  const mailData = {
    from: { name: "TikApps", address: process.env.NEXT_PUBLIC_EMAIL_ADDRESS },
    to: request.sendCopy ? request.email : null,
    bcc: process.env.NEXT_PUBLIC_EMAIL_ADDRESS,
    subject: request.name + " contact form submission.",
    text: request.message,
    html: `<h2>${request.message}</h2>`,
  };

  // debug
  // return NextResponse.json(
  //   { error: false, emailSent: true, errors: [] },
  //   { status: 200 }
  // );

  // Send
  return await transporter
    .sendMail(mailData)
    .then((response) => {
      return NextResponse.json(
        { error: false, emailSent: true, errors: [], response },
        { status: 200 }
      );
    })
    .catch((error) => {
      return NextResponse.json(
        { error: true, emailSent: false, errors: [error] },
        { status: 500 }
      );
    });
}
