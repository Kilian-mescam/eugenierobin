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

// Define the Zod schema for ItemType
const itemTypeSchema = z.object({
  id: z.string(),
  label: z.string(),
});

// Create a Set of valid service ids for validation
const validServiceIds = new Set(serviceOptions.map(option => option.id));


// Zod schema for the email request
export const emailRequestSchema = z.object({
  selectedServices: z
  .array(z.string()) // Ensure it's an array of strings (service ids)
  .min(1, { message: "Choisissez au moins un service" }) // Ensure at least one service is selected
  .refine((ids) => ids.every((id) => validServiceIds.has(id)), {
    message: "Some selected services are invalid",
  }),   // Ensure at least one service is selected
  name: z.string().optional(),
  companyName: z.string().optional(), // Company name can be optional
  email: z.string().email({ message: "Format d'adresse mail invalide" }), // Validate email format
  description: z.string().optional() // Ensure a description is provided
});

// Type inferred from the schema
export type EmailRequestSchemaType = z.infer<typeof emailRequestSchema>;