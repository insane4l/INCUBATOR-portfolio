import React from "react";
import s from "./Header.module.css";

const routes = [
	{ label: "Главная", path: "#promo" },
	{ label: "Скилы", path: "#skills" },
	{ label: "Работы", path: "#projects" },
	{ label: "Контакты", path: "#contact" },
];

const Header = () => {

	const mappedNavItems = routes.map(el => <NavItem label={el.label} path={el.path} />)

	return (
		<header className={s.header}>
			<div className="container">
				<nav>
					<ul>
						{mappedNavItems}
					</ul>
				</nav>
			</div>
		</header>
	);
};

const NavItem = ({label, path}) => {
	return (
		<li>
			<a href={path}>{label}</a>
		</li>
	);
};

export default Header;
