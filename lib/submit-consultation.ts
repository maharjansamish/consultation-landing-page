export type ConsultationPayload = {
  fullName: string;
  email: string;
  whatsapp: string;
  businessName: string;
  url?: string;
  message?: string;
};

// Replace this controlled demo handler with a real API request when delivery is enabled.
// Intentionally does not persist or transmit personal information.
export async function submitConsultation(_payload: ConsultationPayload): Promise<{ mode: "demo" }> {
  await new Promise((resolve) => setTimeout(resolve, 450));
  return { mode: "demo" };
}
