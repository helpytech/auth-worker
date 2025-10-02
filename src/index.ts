/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Bind resources to your worker in `wrangler.jsonc`. After adding bindings, a type definition for the
 * `Env` object can be regenerated with `npm run cf-typegen`.
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

import { WorkerEntrypoint } from "cloudflare:workers";
import { registerHandler } from "./handlers/register-hander";
import { sendSingleEmail } from "./email/send-single-email";

export default class extends WorkerEntrypoint {

	async fetch(): Promise<Response> {
		console.log("hola!")

		const response = await sendSingleEmail({
			to: "wildchamo@gmail.com",
			subject: "Valida tu cuenta para acceder a Helpy",
			body: "<p>Valida tu cuenta en la siguiente URL</p>",
		})

		console.log(response)
		return new Response('Hello World 5!');
	}

	async sendSignUpConfirmationEmail({ email }: { email: string }) {
		console.log(email)
		const response = await registerHandler({ email })

		if (!response.ok) {
			return {
				ok: false,
				error: response.error
			}
		}
		const responsePayload = {
			ok: true,
			data: response.link
		}
		console.log(responsePayload)
		return responsePayload
	}
}
