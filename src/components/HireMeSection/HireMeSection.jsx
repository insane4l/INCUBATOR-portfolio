import React from "react";
import SectionTitle from "../common/SectionTitle";
import s from "./HireMeSection.module.css";

const HireMeSection = () => {
	return (
		<section className={`${s.skills} section`}>
			<SectionTitle title="Рассматриваю варианты удаленной работы" />
			<a className={`${s.skills_btn} btn`} href="tg://resolve?domain=insane4L">Нанять меня</a>
		</section>
	);
};

export default HireMeSection;
