export function getWelcomeAdminEmailTemplate(verificationLink: string, email: string, password: string): string {
	return `
<!DOCTYPE html>
<html lang="es">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f5f5f5;">
	<table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5f5; padding: 40px 20px;">
		<tr>
			<td align="center">
				<table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
					<!-- Header -->
					<tr>
						<td style="padding: 40px 40px 30px; text-align: center; background: linear-gradient(135deg, #3C83EF 0%, #2968d4 100%);">
							<h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 600;">¡Bienvenido a Helpy! 🎉</h1>
						</td>
					</tr>

					<!-- Content -->
					<tr>
						<td style="padding: 40px;">
							<p style="margin: 0 0 20px; color: #333333; font-size: 16px; line-height: 1.6;">
								Hola,
							</p>
							<p style="margin: 0 0 30px; color: #333333; font-size: 16px; line-height: 1.6;">
								Estamos emocionados de tenerte con nosotros desepeñando el rol de administrador. Para completar tu registro y acceder a tu cuenta, por favor valida tu correo electrónico haciendo clic en el botón de abajo. Una vez validado, podrás iniciar sesión en el panel de administración con el correo y contraseña que se te asignaron.
							</p>

							
							<!-- Button -->
							<table width="100%" cellpadding="0" cellspacing="0">
								<tr>
									<td align="center" style="padding: 20px 0;">
										<a href="${verificationLink}" style="display: inline-block; padding: 16px 40px; background-color: #3C83EF; color: #ffffff; text-decoration: none; border-radius: 8px; font-size: 16px; font-weight: 600; box-shadow: 0 4px 12px rgba(60, 131, 239, 0.3);">
										Validar mi cuenta
										</a>
									</td>
								</tr>
							</table>


							<!-- Credentials -->
							<p style="margin: 0 0 20px; color: #333333; font-size: 16px; line-height: 1.6;">
							   Estas son tus credenciales asignadas para ingresar al panel, ¡No las pierdas!:
						   </p>
						   <div style="margin: 0 0 30px; padding: 18px 24px; background-color: #f0f5ff; border-radius: 10px; border: 1px solid #d6e4ff; color: #1f3c88; font-size: 15px; line-height: 1.6;">
							   <strong>Correo:</strong> ${email}<br>
							   <strong>Contraseña temporal:</strong> ${password}
						   </div>

							<p style="margin: 30px 0 0; color: #666666; font-size: 14px; line-height: 1.6;">
								Si no creaste esta cuenta, puedes ignorar este correo de forma segura.
							</p>
						</td>
					</tr>

					<!-- Footer -->
					<tr>
						<td style="padding: 30px 40px; background-color: #f9f9f9; border-top: 1px solid #eeeeee;">
							<p style="margin: 0; color: #999999; font-size: 12px; line-height: 1.5; text-align: center;">
								Este enlace expirará en 24 horas por seguridad.<br>
								© ${new Date().getFullYear()} Helpy. Todos los derechos reservados.
							</p>
						</td>
					</tr>
				</table>
			</td>
		</tr>
	</table>
</body>
</html>
	`;
}
