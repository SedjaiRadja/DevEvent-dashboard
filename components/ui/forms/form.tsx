"use client";
import * as React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

/* Validation schema */
const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  number:z.string().min(10).max(14),
  role: z.enum(["admin" , "user"])
});

type FormValues = z.infer<typeof formSchema>;

export default function CustomForm() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      number:"",
      role:"user",
    },
  });

  function onSubmit(values: FormValues) {
    console.log("Form submitted:", values);
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">

      {/* Name */}
      <div className="space-y-2">
        <label className="text-sm font-medium">Name</label>
        <Input
          placeholder="Enter your name"
          {...form.register("name")}
        />
        {form.formState.errors.name && (
          <p className="text-red-500 text-sm">
            {form.formState.errors.name.message}
          </p>
        )}
      </div>

      {/* Email */}
      <div className="space-y-2">
        <label className="text-sm font-medium">Email</label>
        <Input
          placeholder="example@gmail.com"
          {...form.register("email")}
        />
        {form.formState.errors.email && (
          <p className="text-red-500 text-sm">
            {form.formState.errors.email.message}
          </p>
        )}
      </div>
      {/* number */}
      <div className="space-y-2">
        <label className="text-sm font-medium">Number</label>
        <Input
          placeholder="+213 7** ** ** **"
          {...form.register("number")}
        />
        {form.formState.errors.number && (
          <p className="text-red-500 text-sm">
            {form.formState.errors.number.message}
          </p>
        )}
      </div>

        {/* role */}
      <div className="space-y-2">
        <label className="text-sm font-medium">Role</label>

        <select
          {...form.register("role")}
          className="w-full border rounded-md h-10 px-3"
        >
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>

        {form.formState.errors.role && (
          <p className="text-red-500 text-sm">
            {form.formState.errors.role.message}
          </p>
          )}
      </div>

      <Button type="submit">
        Submit
      </Button>

    </form>
  );
}