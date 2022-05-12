import React from "react";
import SectionTitle from "../common/SectionTitle";
import s from "./Skills.module.css";
import tsIcon from '../../assets/icons/typescript.svg'
import reactIcon from '../../assets/icons/react.svg'
import reduxIcon from '../../assets/icons/redux.svg'

const skillList = [
	{
		img: tsIcon,
		title: "TypeScript",
		descr: "lorem lorem lorem lorem lorem lorem lorem lorem lorem",
	},
	{
		img: reactIcon,
		title: "React",
		descr: "lorem lorem lorem lem lorem lorem lorem",
	},
	{ img: reduxIcon, title: "Redux", descr: "lorem  lorem" },
];

const Skills = () => {
	const mappedSkills = skillList.map((el) => (
		<SkillItem img={el.img} title={el.title} descr={el.descr} />
	));

	return (
		<section id="skills" className={`${s.skills} section`}>
			<SectionTitle title="Мои скиллы" />
			<ul className={s.skills_list}>{mappedSkills}</ul>
		</section>
	);
};

const SkillItem = ({ img, title, descr }) => {
	return (
		<li className={s.skill_card}>
			<div className={s.skill_card_image}>
				<img src={img} alt={title} />
			</div>
			<div className={s.skill_card_title}>{title}</div>
			<div className={s.skill_card_descr}>{descr}</div>
		</li>
	);
};

export default Skills;
