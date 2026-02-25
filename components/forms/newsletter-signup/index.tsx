"use client";

import { useActionState, useEffect, useRef } from "react";
import NewsletterAction from "./newsletter-action";

export default function NewsletterSignupForm() {
	const [formState, formAction, isPending] = useActionState(NewsletterAction, { data: { email: "" } });
	const inputRef = useRef<HTMLInputElement>(null);

	useEffect(function () {
		if (formState.errors?.length) inputRef.current?.focus();
	}, [formState]);

	return (
		<form className="text-center" action={formAction}>
			<div className="mb-4 flex flex-col gap-4 lg:flex-row items-center">
				<label className="relative">
					<span className="text-sm absolute text-nordicink ml-2 mt-1">E-mail</span>
					<input
						ref={inputRef}
						type="email"
						name="email"
						autoComplete="email"
						defaultValue={formState.data.email}
						className={`bg-snowwhite px-2 pt-6 pb-2 w-64 text-nordicink ${formState.errors?.length ? "border-2 border-red-600": ""}`}
						placeholder="din@email.dk"
						required
					/>
				</label>
				<button
					disabled={isPending}
					type="submit"
					className="bg-fjordblue disabled:bg-nordicink text-iceblue border-none relative py-4 px-4 font-bold after:absolute after:border-2 after:border-iceblue after:top-0 after:right-0 after:bottom-0 after:left-0 after:m-[.2rem]">
					Ja tak, send mig nyhedsbrevet
				</button>
			</div>
			{formState.errors?.length ? <p className="text-red-300" role="alert">{formState.errors.toString()}</p> : null}
			{formState.success && <p role="alert">{formState.success}</p>}
		</form>
	);
}