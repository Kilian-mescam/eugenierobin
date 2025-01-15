// /pages/api/send-email.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { selectedServices, name, companyName, email, description } = req.body;

        // Create a transporter object using your email service
        const transporter = nodemailer.createTransport({
            service: 'Gmail', // or use SMTP settings for other email services
            auth: {
                user: process.env.EMAIL_USER, // Your email address
                pass: process.env.EMAIL_PASS, // Your email password or app-specific password
            },
        });

        // Email options
            const mailOptions = {
                from: email,
                to: process.env.RECIPIENT_EMAIL, // Your email
                subject: `New message from ${name}`,
                text: `
                    <p><strong>Service:</strong> ${selectedServices}</p>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Company:</strong> ${companyName}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Description:</strong> ${description}</p>
                `,
            };

        try {
            // Send the email
            await transporter.sendMail(mailOptions);
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
