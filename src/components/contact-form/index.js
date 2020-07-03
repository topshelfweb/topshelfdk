import React from "react";
import Spacer from "../spacer";
import "./contact-form.css";

function ContactForm({ data }) {
	return (
		<section id="kontakt" className="container wrapper contactSection">
			<article>
				<h1>{ data.heading }</h1>
				<p>{ data.content }</p>
				<address>
					{ data.address.name }<br/>
					{ data.address.street }<br/>
					{ data.address.zip + " " + data.address.city }<br/><br/>
					Tlf: <a href={ "tel:0045" + data.address.phonenumber }>{ data.address.phonenumber }</a><br/>
					<a href={ "mailto:" + data.address.email }>{ data.address.email }</a>
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
