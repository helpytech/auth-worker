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
import { confirmAdminHandler } from "./handlers/confirm-admin-handler";

export default class extends WorkerEntrypoint {

	async fetch(): Promise<Response> {

		return new Response("hola")
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
		return {
			ok: true,
		}
	}

	async sendSignUpAdminConfirmationEmail({ email, password }: { email: string, password: string }) {
		console.log(email)
		const response = await confirmAdminHandler({ email, password })

		if (!response.ok) {
			return {
				ok: false,
				error: response.error
			}
		}
		return {
			ok: true,
		}

	}
}
