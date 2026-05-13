export type QuoteFormData = {
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
  honeypot: string;
};

export type QuoteFormErrors = Partial<Record<keyof QuoteFormData, string>>;

export function validateQuoteForm(data: QuoteFormData): QuoteFormErrors {
  const errors: QuoteFormErrors = {};

  if (!data.name.trim()) errors.name = "Name is required.";
  if (!data.organization.trim()) errors.organization = "Organization is required.";
  if (!data.email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!data.customerType) errors.customerType = "Please select a customer type.";
  if (!data.apparelType) errors.apparelType = "Please select an apparel type.";
  if (!data.estimatedQuantity) errors.estimatedQuantity = "Please select an estimated quantity.";

  return errors;
}
