"use server"

import { flattenValidationErrors } from 'next-safe-action'
import { actionClient } from '@/lib/safe-action'
import sgMail from '@sendgrid/mail';

// Configure SendGrid with your API key
// Check if the API key exists in the environment variables
const sendgridApiKey = process.env.SENDGRID_API_KEY;

if (!sendgridApiKey) {
  throw new Error('SENDGRID_API_KEY is not defined in environment variables');
}

sgMail.setApiKey(sendgridApiKey);
import { emailRequestSchema, type EmailRequestSchemaType } from "@/zod-schemas/request"

// Define the sendEmailAction using next-safe-action
export const sendEmailAction = actionClient
  .metadata({ actionName: 'sendEmailAction' }) // Add metadata for error tracking (like Sentry)
  .schema(emailRequestSchema, {
    handleValidationErrorsShape: async (validationErrors) =>
      flattenValidationErrors(validationErrors).fieldErrors, // Handle validation errors gracefully
  })
  .action(async ({ parsedInput: request }: { parsedInput: EmailRequestSchemaType }) => {
    const { selectedServices, name, companyName, email, description,  } = request;

    const msg = {
      to: process.env.RECIPIENT_EMAIL, // Change to your recipient
      from: 'your-email@example.com', // Use the email address verified in SendGrid
      subject: `New message from ${name}`,
      html: `
        <div>selectedServices: ${selectedServices}</div>
        <div>Name: ${name}</div>
        <div>Company Name: ${companyName}</div>
        <div>Email: ${email}</div>
        <div>Description: ${description}</div>
      `,
    };

    try {
      await sgMail.send(msg);
      return { message: 'Mail has been sent successfully' }
    } catch (error) {
      console.error('Error sending email:', error);
      throw new Error('Email sending failed');
    }
  });
