import { getSupabaseClient } from "../supabase/supabase-client"
import { env } from "cloudflare:workers";


export async function registerHandler({ email }: { email: string }) {
	try {
		const supabase = await getSupabaseClient()

		const { data: linkData, error } = await supabase.auth.admin.generateLink({
			email,
			type: "magiclink",
		})

		if (error) {
			throw error
		}

		console.log(linkData)

		const { hashed_token } = linkData.properties;

		const constructedLink = `${env.REDIRECT_URL}/auth/verify?hashed_token=${hashed_token}&type=signup`;


		//send link throu email

		console.log(constructedLink)
		return {
			ok: true
		}

	} catch (error) {
		console.error(error)
		return {
			ok: false,
			error: error
		}
	}
}
