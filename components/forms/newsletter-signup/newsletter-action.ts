"use server";

import z from "zod";

export type FormState = {
	success?: false | string;
	data: {
		email: string;
	};
	errors?: string[];
}

export default async function NewsletterAction(prevState: FormState, formData: FormData): Promise<FormState> {
	const email = formData.get("email") as string;

	const schema = z.object({
		email: z.email({ message: "Du skal bruge en gyldig email adresse, fx din@email.dk" })
	});

	const validated = schema.safeParse({
		email
	});

	if (!validated.success) {
		return {
			success: false,
			data: {
				email
			},
			errors: (z.treeifyError(validated.error)).properties?.email!.errors
		}
	}

	try {
		const response = await fetch("https://www.topshelf.dk/__forms.html", {
			method: "POST",
			headers: {
				"Content-Type": "application/x-www-form-urlencoded"
			},
			body: "form-name=newsletter-signup-form&email=" + email
		});

		if (!response.ok) {
			return {
				success: false,
				data: { email },
				errors: ["Der skete en fejl på serveren. Prøv igen senere."]
			}
		}

		return {
			success: "Tak for din tilmelding. Du modtager dit første nyhedsbrev meget snart.",
			data: {
				email: ""
			},
			errors: []
		}
	} catch (error) {
		console.log(error);
		return {
			success: false,
			data: { email },
			errors: ["Der skete en fejl på serveren. Prøv igen senere."]
		}
	}
}