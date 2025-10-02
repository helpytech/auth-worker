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
		const resend = new Resend(env.RESEND_API_KEY);
		const response = await resend.emails.send({
			from: "hola@helpycare.com.co",
			to,
			subject,
			html: body,
		});

		console.log(response)


		return {
			ok: true
		}
	} catch (error) {
		console.log(error)

		return {
			ok: false,
			error: typeof error === "string" ? error : "Unknown error"
		}
	}
}
