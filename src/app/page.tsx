"use client"
import Image from "next/image";
import styles from "./page.module.scss";

import emailIcon from "../../public/chaticon.svg";
import githubIcon from "../../public/github.svg";
import linkedinIcon from "../../public/linkedin.svg";
import ProjectCard from "./components/projectCard/projectCard";
import SkillCard from "./components/skillCard/skillCard";

import graphitImg1 from '../../public/graphit.png';
import graphitImg2 from '../../public/graphit_screenshot.png';
import wordleImg1 from '../../public/wordle.png';
import wordleImg2 from '../../public/wordle_screenshot.png';
import lunettaImg1 from '../../public/lunetta.png';
import lunettaImg2 from '../../public/lunetta_screenshot.png';
import flemingImg1 from '../../public/fleming.png'
import flemingImg2 from '../../public/fleming_screenshot.png'
import Link from "next/link";



export default function Home() {

  return (
    <div className={styles.page}>
      <h1 className={`${styles.title}`}>
        
      </h1>

      <p className={styles.landingText}>I’m an Electronic and Electrical Engineering student at UCL and my main interests are <span>electronics</span>, <span>computer science</span>, and <span>software development</span>.</p>
      <p className={styles.landingText}>This website shows some of my favourite personal and/or professional <span>projects</span>. </p>

      <div className={styles.contactIcons}>
        <a href='mailto:erickcassianopassos@gmail.com'>
         <Image className={styles.icon} priority src={emailIcon} alt="Email icon"/>
        </a>
        
        <a href='https://github.com/erickcpassos' target="_blank">
          <Image className={styles.icon} priority src={githubIcon} alt="Github icon"/>
        </a>
        
        <a href="https://www.linkedin.com/in/erickcpassos/" target="_blank">
          <Image className={styles.icon} priority src={linkedinIcon} alt="LinkedIn icon"/>
        </a>

      </div>


      <div id="projects" className={styles.subtitleContainer}>
        <h2 className={styles.subtitle}>Projects |</h2>
        <Link href='/projects' legacyBehavior>
          <a className={styles.subtitleLink}>See all projects</a>
        </Link>
      </div>

      <div className={styles.projectList}>
          <ProjectCard title="Fleming Society" imgFront={flemingImg1} imgBack={flemingImg2} description="The official website. Made with love for the best society in UCL." tryItLink="https://beta.flemingsociety.com/"/>
          <ProjectCard title="Graphit" imgFront={graphitImg1} imgBack={graphitImg2} description="A simple, lightweight web-based graph editor. (desktop recommended)" tryItLink="https://erickcpassos.github.io/graphit/"/>
          <ProjectCard title="Lunetta" imgFront={lunettaImg1} imgBack={lunettaImg2} description="A mobile app to connect low-income students with educational opportunities." tryItLink="https://www.figma.com/proto/vCajqHM9aGAHz2IRQxfo5n/OBT?node-id=570-1479&t=ox1tHIwfxJ4V0KeP-1"/>
          <ProjectCard title="Termo Solver" imgFront={wordleImg1} imgBack={wordleImg2} description="A CLI assistant to win in Wordle-like games (such as the Brazilian 'Termo')." tryItLink="https://github.com/erickcpassos/termo-solver"/>

      </div>

      <div id="skills" className={styles.subtitleContainer}>
        <h2 className={styles.subtitle}>Skills</h2>
      </div>

      <div className={styles.skillList}>
        <SkillCard title="Python"/>
        <SkillCard title="Javascript"/>
        <SkillCard title="HTML/CSS"/>
        <SkillCard title="MATLAB"/>
        <SkillCard title="C/C++"/>
        <SkillCard title="ReactJS"/>
        <SkillCard title="Figma"/>
        <SkillCard title="Git + Github"/>
        <SkillCard title="Arduino"/>
        <SkillCard title="Data Structures & Algorithms"/>
        <SkillCard title="NI Multisim"/>
        <SkillCard title="KiCad"/>
      </div>


    </div>

  );
}
