import { ItemType } from '@/types';
import { z } from 'zod';

// Define the possible selections as an array of strings

export const serviceOptions: ItemType[] = [
  {
    id: "uxDesign",
    label: "UX Design"
  },
  {
    id: "uiDesign",
    label: "UI Design"
  },  
  {
    id: "branding",
    label: "Branding"
  },
  {
    id: "logo",
    label: "Logo"
  },
  {
    id: "website",
    label: "Site Web"
  },  
  {
    id: "app",
    label: "Applications"
  },
  {
    id: "other",
    label: "Autre"
  },
] as const

// Zod schema for the email request
export const emailRequestSchema = z.object({
  selectedServices:  z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one item.",
  }),

  name: z.string().min(1, { message: "Name is required" }),

  companyName: z.string().optional(), // Company name can be optional

  email: z.string().email({ message: "Invalid email format" }), // Validate email format

  description: z.string().min(1, { message: "Description is required" }) // Ensure a description is provided
});

export type EmailRequestSchemaType = {
  selectedServices: ItemType[];
  name: string;
  email: string;
  description: string;
  companyName?: string | undefined;
}