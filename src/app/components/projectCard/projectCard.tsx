import Image, { StaticImageData } from "next/image";
import styles from "./projectCard.module.scss";
import { useState } from "react";

export interface ProjectCardProps {
    title: string,
    description: string,
    tryItLink: string,
    imgFront: StaticImageData,
    imgBack: StaticImageData,
}

export default function ProjectCard({title, description, tryItLink, imgFront, imgBack}: ProjectCardProps) {

  const [isHovering, setIsHovering] = useState(false); 

  return (
    <div className={styles.card}>
        <Image className={styles.image} src={isHovering ? imgBack : imgFront} onMouseOver={() => {setIsHovering(true)}} onMouseOut={() => {setIsHovering(false)}} width={600} height={400} alt="placeholder"/>
        <p className={styles.title}>{title}</p>
        <p className={styles.description}>{description} <a className={styles.seemore}>Read more</a></p>
        <div className={styles.buttons}>
          <a href={tryItLink} target="_blank" className={`${styles.button} ${styles.tryit}`}>Try it!</a>
        </div>
    </div>
  );
}
