import { z } from "zod";

export const domainSearchSchema = z.object({
  query: z
    .string()
    .min(2, "Domain query must be at least 2 characters")
    .max(63, "Domain name is too long")
    .regex(/^[a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9](\.[a-zA-Z]{2,})?$/, {
      message: "Please enter a valid domain name (e.g., mybusiness or mybusiness.com)",
    }),
});

export const contactFormSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  company: z.string().optional(),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Please provide more details (at least 10 characters)"),
});

export const supportTicketSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Please enter a valid email address"),
  category: z.string().min(1, "Please select a category"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(15, "Please describe your issue in detail"),
  priority: z.enum(["low", "medium", "high"]).default("medium"),
});

export const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  rememberMe: z.boolean().default(false),
});

export const signupSchema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  company: z.string().optional(),
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  acceptTerms: z.literal(true, {
    errorMap: () => ({ message: "You must accept the terms of service" }),
  }),
});
