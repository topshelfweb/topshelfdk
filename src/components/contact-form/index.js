import React from "react";
import Spacer from "../spacer";
import "./contact-form.css";

function ContactForm({ contact }) {
	return (
		<section id="kontakt" className="container wrapper contactSection">
			<article>
				<h1>{ contact.heading }</h1>
				<p>{ contact.content }</p>
				<address>
					{ contact.address.name }<br/>
					{ contact.address.street }<br/>
					{ contact.address.zip + " " + contact.address.city }<br/><br/>
					Tlf: <a href={ "tel:0045" + contact.address.phonenumber }>{ contact.address.phonenumber }</a><br/>
					<a href={ "mailto:" + contact.address.email }>{ contact.address.email }</a>
				</address>
			</article>
			<form action="/" name="contact-form" data-netlify="true" data-netlify-honeypot="contact-form">
				<div className="formGroup">
					<label htmlFor="name">
						Navn
					</label>
					<input type="text" name="name" id="name"/>
				</div>
				<Spacer vertical="16"/>
				<div className="formGroup">
					<label htmlFor="email">
						E-mail
					</label>
					<input type="email" name="email" id="email"/>
				</div>
				<Spacer vertical="16"/>
				<div className="formGroup">
					<label htmlFor="phone">
						Telefon
					</label>
					<input type="tel" name="phone" id="phone"/>
				</div>
				<Spacer vertical="32"/>
				<div className="formGroup formGroup--alt">
					<label htmlFor="message">
						Jeg vil gerne kontaktes om
					</label>
					<textarea name="message" id="message" cols="30" rows="10"></textarea>
				</div>
				<Spacer vertical="32"/>
				<button type="submit">Send <span className="sr-only">knap</span></button>
			</form>
		</section>
	);
}

export default ContactForm;
