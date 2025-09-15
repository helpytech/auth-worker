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
import { getSupabaseClient } from "./supabase/supabase-client";

export default class extends WorkerEntrypoint {

	async fetch(): Promise<Response> {
		const supabase = await getSupabaseClient()
		return new Response('Hello World!');
	}

	async sendSignUpConfirmationEmail({ email }: { email: string }) {
		console.log(email)

		return {
			ok: true
		}
	}
}
