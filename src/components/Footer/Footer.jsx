import React from "react";
import SectionTitle from "../common/SectionTitle";
import s from "./Footer.module.css";
import linkedinIcon from '../../assets/icons/linkedin.svg'
import githubIcon from '../../assets/icons/github.svg'
import telegramIcon from '../../assets/icons/telegram.svg'
import instagramIcon from '../../assets/icons/instagram.svg'

const contactList = [
	{label: 'linkedin', icon: linkedinIcon, link: 'https://linkedin.com/in/insane4l'},
	{label: 'github', icon: githubIcon, link: 'https://github.com/insane4l'},
	{label: 'telegram', icon: telegramIcon, link: 'tg://resolve?domain=insane4L'},
	{label: 'instagram', icon: instagramIcon, link: 'https://instagram.com/_karpeyev'},
]

const Footer = () => {

	const currentYear = new Date().getFullYear()

	const mappedLinks = contactList.map(el => <ContactItem label={el.label} icon={el.icon} link={el.link}/>)

	return (
		<footer className={`${s.footer} section`}>
			<SectionTitle title="Роман Карпеев" />

			<ul className={s.contact_list}>
				{mappedLinks}
			</ul>

			<div className={s.copyright}>(с) 2019 - {currentYear} Все права защищены</div>
		</footer>
	);
};


const ContactItem = ({icon, label, link}) => {
	return (
		<li className={s.contact_item}>
			<a className={s.contact_item_link} href={link} target="_blank" rel="noreferrer">
				<img className={s.contact_item_img} src={icon} alt={label} />
			</a>
		</li>
	)
}

export default Footer;
