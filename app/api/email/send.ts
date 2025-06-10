import type { NextApiRequest, NextApiResponse } from "next";
import { EmailTemplate } from "@/components/EmailTemplate";
import { Resend } from "resend";
import { ReactNode } from "react";

const resend = new Resend(process.env.RESEND_API_KEY!);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { data } = await resend.emails.send({
      from: "Tulsi <no-reply@tulsi.com>",
      to: ["hellotulsiofficial@gmail.com"],
      subject: "New Booking Details",
      react: EmailTemplate({ Name: 'Admin' }) as ReactNode ,
    });
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json(error);
  }
}
