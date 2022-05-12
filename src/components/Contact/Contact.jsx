import React from "react";
import SectionTitle from "../common/SectionTitle";
import s from "./Contact.module.css";

const Contact = () => {
	return (
		<section id="contact" className={`${s.contact} section`}>
			<SectionTitle title="Контакты" />
			<ContactForm />
		</section>
	);
};


const ContactForm = () => {
	return (
		<form className={s.contact_form}>
			<input type="email" name="email" placeholder="Your Email"/>
			<input type="text" name="name" placeholder="Your Name"/>

			<textarea name="message" placeholder="Message"></textarea>
			<button className="btn">Отправить</button>
		</form>
	)
}

export default Contact;
