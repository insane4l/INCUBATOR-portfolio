import React from "react";
import SectionTitle from "../common/SectionTitle";
import s from "./Projects.module.css";
import prExample1 from "../../assets/images/sn_mockup.jpg"
import prExample2 from "../../assets/images/mockup_stub.jpg"

const projectsList = [
	{img: prExample1, link: 'https://github.com/insane4l', title: 'Social Network', descr: 'lorem lorem dasflorem lorem lorefasdfm lorem lorem lorem lorem'},
	{img: prExample2, link: 'https://github.com/insane4l', title: 'Todo Lists', descr: 'lorem lofsdafasdfrem lorem lorem lorfasdfsda lorem lorem lorem lorem'},
]

const Projects = () => {

	const mappedProjects = projectsList.map(el => <ProjectItem img={el.img} link={el.link} title={el.title} descr={el.descr}/>)

	return (
		<section id="projects" className={`${s.projects} section`}>
			<SectionTitle title="Мои работы" />

			<ul className={s.projects_list}>
				{mappedProjects}
			</ul>
		</section>
	);
};

const ProjectItem = ({ img, title, descr, link }) => {
	return (
		<li className={s.project_card}>
			<div className={s.project_card_preview}>
				<img src={img} alt="" />
				<a href={link} target="_blank" rel="noreferrer" className={`${s.project_card_btn} btn btn_filled`}>
					Смотреть
				</a>
			</div>
			<div className={s.project_card_title}>{title}</div>
			<div className={s.project_card_descr}>{descr}</div>
		</li>
	);
};

export default Projects;
