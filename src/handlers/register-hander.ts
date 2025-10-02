import { sendSingleEmail } from "../email/send-single-email";
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

		const { hashed_token } = linkData.properties;

		const constructedLink = `${env.REDIRECT_URL}/auth/verify?hashed_token=${hashed_token}&type=signup`;

		console.log(constructedLink)


		const emailResponse = await sendSingleEmail({
			to: email,
			subject: "Valida tu cuenta para acceder a Helpy",
			body: `<p>Valida tu cuenta en la siguiente URL</p>`,
		})
		if (!emailResponse.ok) {
			throw new Error(emailResponse.error)
		}

		return {
			link: constructedLink,
			ok: true
		}

	} catch (error) {
		console.error(error)
		return {
			ok: false,
			error: typeof error === "string" ? error : "Error al enviar el correo"
		}
	}
}
