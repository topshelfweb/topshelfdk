"use client";

import { useActionState, useEffect } from "react";
import ContactFormAction from "./contact-form-action";

export default function ContactForm() {
	const [formState, formAction, isPending] = useActionState(ContactFormAction, { data: { name: "", email: "", telephone: "", message: "" } });

	useEffect(function () {
		//console.log("formState", formState);
	}, [formState]);

	return (
		<form className="col-span-1" action={formAction} noValidate>
			<div className="mb-4">
				<label className="flex justify-between">
					<span className="after:content-['_*']">Navn</span>
					<input type="text" name="name" defaultValue={formState.data.name} autoComplete="name" required className="bg-snowwhite border border-fjordblue text-nordicink py-[.1rem] px-[.2rem] min-w-[70%]" />
				</label>
				{formState.errors?.name && <span className="text-red-400" role="alert">{formState.errors?.name.errors}</span>}
			</div>
			<div className="mb-4">
				<label className="flex justify-between">
					<span className="after:content-['_*']">E-mail</span>
					<input type="email" name="email" defaultValue={formState.data.email} autoComplete="email" required className="bg-snowwhite border border-fjordblue text-nordicink py-[.1rem] px-[.2rem] min-w-[70%]" />
				</label>
				{formState.errors?.email && <span className="text-red-400" role="alert">{formState.errors?.email.errors}</span>}
			</div>
			<div className="mb-4">
				<label className="flex justify-between">
					<span className="after:content-['_*']">Telefon</span>
					<input type="tel" name="telephone" defaultValue={formState.data.telephone} autoComplete="tel" required className="bg-snowwhite border border-fjordblue text-nordicink py-[.1rem] px-[.2rem] min-w-[70%]" />
				</label>
				{formState.errors?.telephone && <span className="text-red-400" role="alert">{formState.errors?.telephone.errors}</span>}
			</div>
			<div className="mb-4">
				<label className="flex justify-between flex-col">
					<span className="after:content-['_*']">Jeg vil gerne kontaktes om</span>
					<textarea name="message" defaultValue={formState.data.message} required className="bg-snowwhite border border-fjordblue text-nordicink py-[.1rem] px-[.2rem] min-w-full resize-none"></textarea>
				</label>
				{formState.errors?.message && <span className="text-red-400" role="alert">{formState.errors?.message.errors}</span>}
			</div>
			<button
				type="submit"
				className="bg-fjordblue disabled:bg-nordicink text-iceblue border-none relative py-2 px-4 font-bold after:absolute after:border-2 after:border-iceblue after:top-0 after:right-0 after:bottom-0 after:left-0 after:m-[.2rem]"
				disabled={isPending}>
				Send
			</button>
			<p className="text-sm">Felter markeret med * er påkrævet</p>
			{formState.success ? <p role="alert">{formState.success}</p> : null}
		</form>
	);
}