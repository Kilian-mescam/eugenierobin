// /pages/api/send-email.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { firstName, lastName, email, phone, notes, address1, address2, city, state, zip } = req.body;

        // Create a transporter object using your email service
        const transporter = nodemailer.createTransport({
            service: 'Gmail', // or use SMTP settings for other email services
            auth: {
                user: process.env.EMAIL_USER, // Your email address
                pass: process.env.EMAIL_PASS, // Your email password or app-specific password
            },
        });

        try {
            // Send the email
            await transporter.sendMail({
                from: process.env.EMAIL_USER, // Your email address
                to: process.env.EMAIL_TO || process.env.EMAIL_USER, // Send the email to yourself (website owner)
                subject: 'New Form Submission',
                html: `
                    <p><strong>First Name:</strong> ${firstName}</p>
                    <p><strong>Last Name:</strong> ${lastName}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Phone:</strong> ${phone}</p>
                    <p><strong>Address:</strong> ${address1} ${address2 ? ", " + address2 : ""}, ${city}, ${state}, ${zip}</p>
                    <p><strong>Notes:</strong> ${notes}</p>
                `,
            });

            res.status(200).json({ message: 'Email sent successfully!' });
        } catch (error) {
            // Type guard to ensure error is an instance of Error
            if (error instanceof Error) {
                res.status(500).json({ message: 'Failed to send email', error: error.message });
            } else {
                res.status(500).json({ message: 'Failed to send email due to unknown error' });
            }
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
