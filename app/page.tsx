"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { validationSchema } from "@/validation/schema";
import { z } from "zod";

// Define a TypeScript interface based on the Zod schema
type FormData = z.infer<typeof validationSchema>;

export default function Page() {
  const {
    register,
    handleSubmit,
    formState: { errors }, reset
  } = useForm<FormData>({
    resolver: zodResolver(validationSchema),
  });

  const onSubmit = (data: FormData) => {
    console.log("Form Submitted", data);
  };

  // Function to clear the form
  const handleClear = () => {
    reset(); // Resets all form fields
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="w-full max-w-md p-8 bg-gray-800 shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold text-center mb-6">Zod Form Validation</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Name Input */}
          <div>
            <label className="block text-gray-300">Name:</label>
            <input
              type="text"
              placeholder="Enter your name"
              {...register("name")}
              className="w-full p-2 border rounded bg-gray-700 border-gray-600 text-white focus:ring-2 focus:ring-blue-500"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Email Input */}
          <div>
            <label className="block text-gray-300">Email:</label>
            <input
              type="email"
              placeholder="Enter your email"
              {...register("email")}
              className="w-full p-2 border rounded bg-gray-700 border-gray-600 text-white focus:ring-2 focus:ring-blue-500"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Password Input */}
          <div>
            <label className="block text-gray-300">Password:</label>
            <input
              type="password"
                placeholder="Enter your password"
              {...register("password")}
              className="w-full p-2 border rounded bg-gray-700 border-gray-600 text-white focus:ring-2 focus:ring-blue-500"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
            )}
          </div>

          {/* Confirm Password Input */}
          <div>
            <label className="block text-gray-300">Confirm Password:</label>
            <input
              type="password"
                placeholder="Confirm your password"
              {...register("confirm")}
              className="w-full p-2 border rounded bg-gray-700 border-gray-600 text-white focus:ring-2 focus:ring-blue-500"
            />
            {errors.confirm && (
              <p className="text-red-500 text-sm mt-1">{errors.confirm.message}</p>
            )}
          </div>

          {/* Submit and Clear Buttons */}
          <div className="flex justify-between gap-4 mt-8">
            <button
              type="button"
              onClick={handleClear}
              className="w-1/2 bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 rounded transition duration-200"
            >
              Clear
            </button>

            <button
              type="submit"
              className="w-1/2 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded transition duration-200"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
