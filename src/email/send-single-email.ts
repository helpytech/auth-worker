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

		// Improved payload structure for better deliverability
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
			// Add these settings for better deliverability
			headers: {
				"List-Unsubscribe": `<mailto:unsubscribe@helpycare.com.co?subject=unsubscribe>`,
				"X-Entity-Ref-ID": new Date().getTime().toString() // Unique ID for each email
			}
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
