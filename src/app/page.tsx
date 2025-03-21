import Image from "next/image";
import styles from "./page.module.scss";

import emailIcon from "../../public/chaticon.svg";
import githubIcon from "../../public/github.svg";
import linkedinIcon from "../../public/linkedin.svg";
import ProjectCard from "./components/projectCard/projectCard";

export default function Home() {

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>
        Hi! I'm <span>Erick</span>.
      </h1>

      <p className={styles.landingText}>I’m an electrical engineering student and my main interests are <span>electronics</span>, <span>computer science</span>, and <span>software development</span>.</p>
      <p className={styles.landingText}>This website shows some of my favourite personal and/or professional <span>projects</span>. </p>

      <div className={styles.contactIcons}>
        <Image className={styles.icon} priority src={emailIcon} alt="Email icon"/>
        <Image className={styles.icon} priority src={githubIcon} alt="Github icon"/>
        <Image className={styles.icon} priority src={linkedinIcon} alt="LinkedIn icon"/>

      </div>


      <div className={styles.subtitleContainer}>
        <h2 className={styles.subtitle}>Projects |</h2>
        <p className={styles.subtitleLink}><span>See all projects</span></p>
      </div>

      <div className={styles.projectList}>
          <ProjectCard title="Graphit" description="A simple, lightweight web-based graph editor."/>
          <ProjectCard title="Wordle Solver" description="A CLI assistant to win in Wordle (or similar word games)."/>
          <ProjectCard title="Lunetta" description="A mobile app to connect low-income students with educational opportunities."/>

      </div>


    </div>

  );
}
