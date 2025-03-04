// Importing Zod, a schema validation library for form validation
import { z } from "zod";

// Defining a validation schema using Zod
export const validationSchema = z.object({
    // Name field validation
    name: z.string()
        .min(1, { message: "Name is required" }),
    // Ensures 'name' is a string and must have at least 1 character (not empty)

    // Email field validation
    email: z.string()
        .email({ message: "Invalid email address" }),
    // Ensures 'email' is a valid email format (e.g., user@example.com)

    // Password field validation
    password: z.string()
        .min(6, { message: "Password must be at least 6 characters" }) // Minimum length of 6
        .regex(/[0-9]/, { message: "Password must contain at least one number" }) // At least one numeric digit
        .regex(/[!@#$%^&*()]/, { message: "Password must contain at least one special character" }), // At least one special character

    // Confirm Password field validation
    confirm: z.string()
        .min(6, { message: "Confirmation password is required" })
    // Ensures 'confirm' password is also at least 6 characters long

    // Refine method to check if "confirm" password matches "password"
}).refine((data) => data.password === data.confirm, {
    message: "Confirmation password does not match", // Error message when passwords don't match
    path: ["confirm"], // Targets the "confirm" field to display the error
});
