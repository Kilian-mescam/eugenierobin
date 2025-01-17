"use server"

import { flattenValidationErrors } from 'next-safe-action'
import { actionClient } from '@/lib/safe-action'
import { emailRequestSchema, type EmailRequestSchemaType } from "@/zod-schemas/request"
import nodemailer from 'nodemailer'

// Define the sendEmailAction using next-safe-action
export const sendEmailAction = actionClient
  .metadata({ actionName: 'sendEmailAction' }) // Add metadata for error tracking (like Sentry)
  .schema(emailRequestSchema, {
    handleValidationErrorsShape: async (validationErrors) =>
      flattenValidationErrors(validationErrors).fieldErrors, // Handle validation errors gracefully
  })
  .action(async ({ parsedInput: request }: { parsedInput: EmailRequestSchemaType }) => {
    const { selectedServices, name, companyName, email, description,  } = request;


    console.log('Received form data:', { selectedServices, name, companyName, email, description });

  // Create a transporter using Nodemailer
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST, // E.g., "smtp.gmail.com" for Gmail
    port: 465, // 465 for SSL, 587 for TLS
    secure: true, // Use true if connecting to port 465
    auth: {
      user: process.env.SMTP_USER, // Your email (e.g., your Gmail address)
      pass: process.env.SMTP_PASSWORD, // Your email password or app password
    },
  });

    // Log the transporter details for debugging
    console.log('Configured email transporter:', transporter);

    // Email options
    const mailOptions = {
      from: process.env.SMTP_USER, // Sender address (your email)
      to: process.env.RECIPIENT_EMAIL || 'kmescam@gmail.com', // Recipient email
      subject: `New message from ${name}`,
      html: `
        <div>Selected Services: ${selectedServices}</div>
        <div>Name: ${name}</div>
        <div>Company Name: ${companyName}</div>
        <div>Email: ${email}</div>
        <div>Description: ${description}</div>
      `,
    };

    console.log('Email options:', mailOptions);

   try {
      const result = await transporter.sendMail(mailOptions); // Send email
      console.log('Email sent successfully:', result);
      return { message: 'Mail has been sent successfully' };
    } catch (error) {
      console.error('Error sending email:', error);
      throw new Error('Email sending failed');
    }
  });
