import { Resend } from "resend";


import { env } from "cloudflare:workers";

interface EmailOptions {
	to: string;
	body: string;
	subject: string;

}


export async function sendSingleEmail({
	to,
	subject,
	body,

}: EmailOptions): Promise<{ ok: boolean; error?: string }> {

	console.log(to, subject, body)
	try {
		const resendApiKey = await env.resend_api_key.get();

		const resend = new Resend(resendApiKey);
		const response = await resend.emails.send({
			from: "hola@helpycare.com.co",
			to,
			subject,
			html: body,
		});

		console.log(response);

		// Resend returns { data: { id: string }, error: null } on success
		// or { data: null, error: {...} } on failure
		if (response.error) {
			return {
				ok: false,
				error: response.error.message || "Failed to send email"
			};
		}

		return {
			ok: true
		};
	} catch (error) {
		console.log(error);

		return {
			ok: false,
			error: typeof error === "string" ? error : "Unknown error"
		};
	}
}
