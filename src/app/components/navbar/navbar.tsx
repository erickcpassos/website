import Image from "next/image";
import styles from "./navbar.module.scss";

import navbarMenu from "../../../../public/navbarmenu.svg";
import Link from "next/link";

export interface NavbarProps {
    isShown: boolean;
}

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
        <p className={styles.logo}>Hi! I'm <span>Erick</span>.</p>       
        <Image className={styles.icon} priority src={navbarMenu} alt="Navbar Menu"/>
        <div className={styles.options}>
          <Link href='/' legacyBehavior>
            <a href="/">About</a>
          </Link>
          <Link href='/projects' legacyBehavior>
            <a href="/projects">Projects</a>
          </Link>

          <Link href='/#skills' legacyBehavior>
            <a href="/#skills">Skills</a>
          </Link>
        </div>
    </nav>
  );
}
