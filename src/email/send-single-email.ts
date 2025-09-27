import { env } from "cloudflare:workers";

interface EmailOptions {
	to: string;
	body: string;
	subject: string;

}

/**
 * Sends a single HTML email using MailChannels API
 *
 * @param options Email options including recipient, subject, and HTML body
 * @returns Promise with the response data or error
 */
export async function sendSingleEmail({
	to,
	subject,
	body,

}: EmailOptions): Promise<{ ok: boolean; error?: string }> {

	console.log(to, subject, body)
	try {
		const url = "https://api.mailchannels.net/tx/v1/send";

		const payload = {
			from: {
				email: "hola@helpycare.com.co",
				name: "Helpy",
			},
			subject: subject,

			personalizations: [
				{
					to: [
						{
							email: to,
							name: "Jose X"
						},
					],
				},
			],
			content: [
				{
					type: "text/html",
					value: body,
				},
			],
		};

		const response = await fetch(url, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"Accept": "application/json",
				"X-Api-Key": env.MAILCHANNELS_API_KEY,
			},
			body: JSON.stringify(payload),
		});

		console.log(response)

		if (!response.ok) {
			const errorText = await response.text();
			return {
				ok: false,
				error: `MailChannels API error: ${response.status} - ${errorText}`
			};
		}

		return { ok: true };
	} catch (error) {
		return {
			ok: false,
			error: `Failed to send email: ${error instanceof Error ? error.message : String(error)}`
		};
	}
}
