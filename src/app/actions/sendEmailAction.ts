"use server"

import { eq } from "drizzle-orm"
import { flattenValidationErrors } from 'next-safe-action'
import { redirect } from 'next/navigation'

import { db } from '@/db'
import { projects } from "@/db/schema"
import { actionClient } from '@/lib/safe-action'
import { insertProjectSchema, type insertProjectSchemaType } from "@/zod-schemas/project"

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"
import nodemailer from 'nodemailer';
import { z } from 'zod';
import { emailRequestSchema, type EmailRequestSchemaType } from "@/zod-schemas/request"

// Define the sendEmailAction using next-safe-action
export const sendEmailAction = actionClient
  .metadata({ actionName: 'sendEmailAction' }) // Add metadata for error tracking (like Sentry)
  .schema(emailRequestSchema, {
    handleValidationErrorsShape: async (validationErrors) =>
      flattenValidationErrors(validationErrors).fieldErrors, // Handle validation errors gracefully
  })
  .action(async ({ parsedInput }: { parsedInput: EmailRequestSchemaType }) => {
    const { selectedServices, name, companyName, email, description,  } = parsedInput;

    // Nodemailer configuration
    const transporter = nodemailer.createTransport({
      service: 'Gmail', // Or any other email service you use (e.g., SMTP)
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Define the email options
    const mailOptions = {
      from: email, // The sender's email address (from the form)
      to: process.env.RECIPIENT_EMAIL, // Your recipient email address
      subject: `New message from ${name}`,
      text: `<div>selectedServices: ${selectedServices}</div>
            <div>Name: ${name}</div>
            <div>companyName: ${companyName}</div>
            <div>email: ${email}</div>
            <div>description: ${description}</div>
            `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);
    return { message: `Mail have been sent successfully`}
  });
