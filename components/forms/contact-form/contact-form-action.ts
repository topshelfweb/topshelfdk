"use server";

import z from "zod";

export type ContactForm = {
	success?: false | string;
	data: {
		name: string;
		email: string;
		telephone: string;
		message: string;
	};
	errors?: {
		name?: {
			errors: string[];
		};
		email?: {
			errors: string[];
		};
		telephone?: {
			errors: string[];
		};
		message?: {
			errors: string[];
		};
	};
}

const schema = z.object({
	name: z.string().min(1, { message: "Dette felt skal udfyldes" }),
	email: z.email({ message: "Du skal bruge en gyldig email adresse, fx din@email.dk" }),
	telephone: z.string().length(8, { message: "Du skal skrive et gyldigt telefonnummer, fx 12345678" }),
	message: z.string().min(10, { message: "Din besked er for kort. Minimum 10 tegn." }).max(500, { message: "Din besked er for lang. Max 500 tegn." }),
});

export default async function ContactFormAction(prevState: ContactForm, formData: FormData): Promise<ContactForm> {
	const name = formData.get("name") as string;
	const email = formData.get("email") as string;
	const telephone = formData.get("telephone") as string;
	const message = formData.get("message") as string;

	const validated = schema.safeParse({
		name,
		email,
		telephone,
		message
	});

	if (!validated.success) {
		return {
			success: false,
			data: {
				name,
				email,
				telephone,
				message,
			},
			errors: z.treeifyError(validated.error).properties,
		}
	}

	try {
		const response = await fetch("https://www.topshelf.dk/__forms.html", {
			method: "POST",
			headers: {
				"Content-Type": "application/x-www-form-urlencoded"
			},
			body: `form-name=contact-form&name=${name}&email=${email}&telephone=${telephone}&message=${message}`
		});

		if (!response.ok) {
			return {
				success: false,
				data: {
					name,
					email,
					telephone,
					message,
				}
			}
		}
	} catch (error) {
		return {
			success: false,
			data: {
				name,
				email,
				telephone,
				message,
			}
		}
	}

	return {
		success: "Tak for din henvendelse. Jeg vender tilbage hurtigst muligt.",
		data: {
			name: "",
			email: "",
			telephone: "",
			message: ""
		}
	};
}