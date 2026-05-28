/**
 * api.ts
 * Centralised fetch wrapper for the JOS Webworks backend.
 */

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

export interface ContactPayload {
  name: string;
  email: string;
  phone?: string;
  service?: string;
  message: string;
}

export interface ApiResponse {
  success: boolean;
  message: string;
  errors?: { field: string; message: string }[];
}

/**
 * Send a contact form submission to the backend.
 * Returns the parsed JSON response.
 */
export async function submitContact(payload: ContactPayload): Promise<ApiResponse> {
  const res = await fetch(`${BASE_URL}/api/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const data: ApiResponse = await res.json();
  return data;
}
