import Image from "next/image";
import styles from "./skillCard.module.scss";

export interface SkillCardProps {
    title: string,
}

export default function SkillCard({title}: SkillCardProps) {
  return (
    <div className={styles.card}>
        <p className={styles.title}>{title}</p>
    </div>
  );
}
