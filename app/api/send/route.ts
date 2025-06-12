import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';
import { EmailTemplate } from '@/components/EmailTemplate';

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(
  req: NextApiRequest,
  res: NextApiResponse
) {

  try {
    const data = await resend.emails.send({
      from: 'Tulsi <no-reply@hellotulsi.com>',
      to: ['abhishekkp1721@gmail.com'],
      subject: 'New Booking Details',
      react: EmailTemplate(),
    });
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error });
  }
}
