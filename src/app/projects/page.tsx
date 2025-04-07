"use client"
import Image from "next/image";
import styles from "./projects.module.scss";

import ProjectCard from "../components/projectCard/projectCard";

import graphitImg1 from '../../../public/graphit.png';
import graphitImg2 from '../../../public/graphit_screenshot.png';
import wordleImg1 from '../../../public/wordle.png';
import wordleImg2 from '../../../public/wordle_screenshot.png';
import lunettaImg1 from '../../../public/lunetta.png';
import lunettaImg2 from '../../../public/lunetta_screenshot.png';


export default function Projects() {

  return (
    <div className={styles.page}>
        <h1 className={styles.title}>Projects</h1>
        <div className={styles.projectList}>
          <ProjectCard title="Graphit" imgFront={graphitImg1} imgBack={graphitImg2} description="A simple, lightweight web-based graph editor. (desktop recommended)" tryItLink="https://erickcpassos.github.io/graphit/"/>
          <ProjectCard title="Termo Solver" imgFront={wordleImg1} imgBack={wordleImg2} description="A CLI assistant to win in Wordle-like games (such as the Brazilian 'Termo')." tryItLink="https://github.com/erickcpassos/termo-solver"/>
          <ProjectCard title="Lunetta" imgFront={lunettaImg1} imgBack={lunettaImg2} description="A mobile app to connect low-income students with educational opportunities." tryItLink="https://www.figma.com/proto/vCajqHM9aGAHz2IRQxfo5n/OBT?node-id=570-1479&t=ox1tHIwfxJ4V0KeP-1"/>
      </div>
    </div>

  );
}
