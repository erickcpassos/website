import Image from "next/image";
import styles from "./projectCard.module.scss";

export interface ProjectCardProps {
    title: string,
    description: string,
}

export default function ProjectCard({title, description}: ProjectCardProps) {
  return (
    <div className={styles.card}>
        <Image className={styles.image} src={'https://placehold.co/600x400'} width={600} height={400} alt="placeholder"/>
        <p className={styles.title}>{title}</p>
        <p className={styles.description}>{description}</p>
    </div>
  );
}
