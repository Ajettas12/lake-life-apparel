"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

type FormData = {
  name: string;
  organization: string;
  email: string;
  phone: string;
  customerType: string;
  apparelType: string;
  estimatedQuantity: string;
  designStatus: string;
  deadline: string;
  notes: string;
  website: string; // honeypot
};

type Errors = Partial<Record<keyof FormData, string>>;

const INITIAL: FormData = {
  name: "",
  organization: "",
  email: "",
  phone: "",
  customerType: "",
  apparelType: "",
  estimatedQuantity: "",
  designStatus: "",
  deadline: "",
  notes: "",
  website: "",
};

function validate(data: FormData): Errors {
  const e: Errors = {};
  if (!data.name.trim()) e.name = "Name is required.";
  if (!data.organization.trim()) e.organization = "Organization is required.";
  if (!data.email.trim()) {
    e.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    e.email = "Please enter a valid email address.";
  }
  if (!data.customerType) e.customerType = "Please select a customer type.";
  if (!data.apparelType) e.apparelType = "Please select an apparel type.";
  if (!data.estimatedQuantity) e.estimatedQuantity = "Please select an estimated quantity.";
  return e;
}

const inputBase =
  "w-full px-4 py-2.5 border rounded text-sm text-charcoal-800 placeholder:text-charcoal-400 bg-white focus:outline-none focus:ring-2 focus:ring-lake-blue-600 transition";

function Field({
  label,
  required,
  error,
  children,
}: {
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-medium text-charcoal-700">
        {label}
        {required && <span className="text-lake-blue-800 ml-0.5">*</span>}
      </label>
      {children}
      {error && (
        <p className="text-xs text-red-600 flex items-center gap-1">
          <AlertCircle size={11} />
          {error}
        </p>
      )}
    </div>
  );
}

export function QuoteForm() {
  const [form, setForm] = useState<FormData>(INITIAL);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  function set(field: keyof FormData, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setStatus("submitting");
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm(INITIAL);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center text-center gap-5 py-16 px-8 bg-stone-50 border border-stone-200 rounded">
        <div className="w-16 h-16 rounded-full bg-evergreen-100 flex items-center justify-center">
          <CheckCircle size={32} className="text-evergreen-700" />
        </div>
        <h3 className="font-display text-2xl font-bold text-charcoal-800">Quote Request Received!</h3>
        <p className="text-charcoal-500 max-w-md leading-relaxed">
          Thanks for reaching out. We typically respond within 1 business day with a clear,
          no-pressure quote. Keep an eye on your inbox.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="text-lake-blue-800 text-sm font-medium hover:underline"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">

      {/* Honeypot — hidden from real users */}
      <div className="hidden" aria-hidden="true">
        <input
          type="text"
          name="website"
          value={form.website}
          onChange={(e) => set("website", e.target.value)}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {/* Contact info */}
      <div>
        <p className="text-xs font-semibold tracking-widest uppercase text-evergreen-700 mb-4">
          Your Info
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field label="Name" required error={errors.name}>
            <input
              type="text"
              placeholder="Your name"
              value={form.name}
              onChange={(e) => set("name", e.target.value)}
              className={cn(inputBase, errors.name ? "border-red-400" : "border-stone-200")}
            />
          </Field>
          <Field label="Organization" required error={errors.organization}>
            <input
              type="text"
              placeholder="School, team, business..."
              value={form.organization}
              onChange={(e) => set("organization", e.target.value)}
              className={cn(inputBase, errors.organization ? "border-red-400" : "border-stone-200")}
            />
          </Field>
          <Field label="Email" required error={errors.email}>
            <input
              type="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={(e) => set("email", e.target.value)}
              className={cn(inputBase, errors.email ? "border-red-400" : "border-stone-200")}
            />
          </Field>
          <Field label="Phone" error={errors.phone}>
            <input
              type="tel"
              placeholder="(optional)"
              value={form.phone}
              onChange={(e) => set("phone", e.target.value)}
              className={cn(inputBase, "border-stone-200")}
            />
          </Field>
        </div>
      </div>

      {/* Order details */}
      <div>
        <p className="text-xs font-semibold tracking-widest uppercase text-evergreen-700 mb-4">
          Order Details
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field label="Customer Type" required error={errors.customerType}>
            <select
              value={form.customerType}
              onChange={(e) => set("customerType", e.target.value)}
              className={cn(inputBase, errors.customerType ? "border-red-400" : "border-stone-200")}
            >
              <option value="">Select one...</option>
              <option>School</option>
              <option>Sports Team</option>
              <option>Church</option>
              <option>Business</option>
              <option>Camp</option>
              <option>Community Group</option>
              <option>Other</option>
            </select>
          </Field>
          <Field label="Apparel Type" required error={errors.apparelType}>
            <select
              value={form.apparelType}
              onChange={(e) => set("apparelType", e.target.value)}
              className={cn(inputBase, errors.apparelType ? "border-red-400" : "border-stone-200")}
            >
              <option value="">Select one...</option>
              <option>T-Shirts</option>
              <option>Hoodies / Sweatshirts</option>
              <option>Polo Shirts</option>
              <option>Jackets / Outerwear</option>
              <option>Hats</option>
              <option>Mixed / Not Sure Yet</option>
            </select>
          </Field>
          <Field label="Estimated Quantity" required error={errors.estimatedQuantity}>
            <select
              value={form.estimatedQuantity}
              onChange={(e) => set("estimatedQuantity", e.target.value)}
              className={cn(inputBase, errors.estimatedQuantity ? "border-red-400" : "border-stone-200")}
            >
              <option value="">Select one...</option>
              <option>24-49 pieces</option>
              <option>50-99 pieces</option>
              <option>100-249 pieces</option>
              <option>250-499 pieces</option>
              <option>500+ pieces</option>
              <option>Not sure yet</option>
            </select>
          </Field>
          <Field label="Design Status" error={errors.designStatus}>
            <select
              value={form.designStatus}
              onChange={(e) => set("designStatus", e.target.value)}
              className={cn(inputBase, "border-stone-200")}
            >
              <option value="">Select one...</option>
              <option>I have a finished design ready</option>
              <option>I have a logo or rough idea</option>
              <option>I need design help</option>
              <option>Not sure yet</option>
            </select>
          </Field>
          <Field label="Deadline" error={errors.deadline}>
            <select
              value={form.deadline}
              onChange={(e) => set("deadline", e.target.value)}
              className={cn(inputBase, "border-stone-200")}
            >
              <option value="">Select one...</option>
              <option>ASAP</option>
              <option>Within 2-3 weeks</option>
              <option>Within a month</option>
              <option>No specific deadline</option>
            </select>
          </Field>
        </div>
      </div>

      {/* Notes */}
      <Field label="Anything else we should know?" error={errors.notes}>
        <textarea
          rows={4}
          placeholder="Colors, specific garment brands, special requests, event details..."
          value={form.notes}
          onChange={(e) => set("notes", e.target.value)}
          className={cn(inputBase, "border-stone-200 resize-none")}
        />
      </Field>

      {/* Error banner */}
      {status === "error" && (
        <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded text-red-700 text-sm">
          <AlertCircle size={16} />
          Something went wrong. Please try again or email us directly.
        </div>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="self-start inline-flex items-center gap-2 px-8 py-4 bg-lake-blue-800 text-white font-semibold rounded hover:bg-lake-blue-700 disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
      >
        {status === "submitting" ? "Sending..." : "Submit Quote Request"}
        {status !== "submitting" && <ArrowRight size={18} />}
      </button>

      <p className="text-xs text-charcoal-400">
        Fields marked <span className="text-lake-blue-800">*</span> are required. We&apos;ll
        respond within 1 business day.
      </p>
    </form>
  );
}
