import { createClient } from "@supabase/supabase-js";
import type { Database } from "../types/database.types.ts";
import { env } from "cloudflare:workers";

export async function getSupabaseClient() {
	const supabaseUrl = await env.supabase_url.get();
	const supabaseServiceRoleKey = await env.supabase_admin_key.get()

	const supabase = createClient<Database>(supabaseUrl, supabaseServiceRoleKey);

	return supabase;
}
