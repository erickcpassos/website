"use client"
import Image from "next/image";
import styles from "./navbar.module.scss";

import navbarMenu from "../../../../public/navbarmenu.svg";
import navbarClose from "../../../../public/navbarClose.svg";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {

  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const closeNavbar = () => { setIsNavbarOpen(false) };

  return (
    <>
      <div className={`${styles.navbarBackdrop} ${!isNavbarOpen ? styles.closed : ''}`}></div>

      <nav className={styles.navbar}>

        <p className={styles.logo}>Hi! I'm <span>Erick</span>.</p>

        <Image className={styles.icon} priority src={!isNavbarOpen ? navbarMenu : navbarClose} alt="Navbar Menu" onClick={() => setIsNavbarOpen(!isNavbarOpen)} />
        
        <div className={styles.options}>
          <Link href='/' legacyBehavior>
            <a href="/" className={styles.dropdownlink}>About</a>
          </Link>
          <Link href='/projects' legacyBehavior>
            <a href="/projects" className={styles.dropdownlink}>Projects</a>
          </Link>

          <Link href='/#skills' legacyBehavior>
            <a href="/#skills" className={styles.dropdownlink}>Skills</a>
          </Link>
        </div>



        <div className={`${styles.dropdown} ${!isNavbarOpen ? styles.closed : ''}`}>
          <Link href='/' legacyBehavior>
            <a href="/" onClick={closeNavbar} className={styles.dropdownlink}>About</a>
          </Link>

          <Link href='/projects' legacyBehavior>
            <a href="/projects" onClick={closeNavbar} className={styles.dropdownlink}>Projects</a>
          </Link>

          <Link href='/#skills' legacyBehavior>
            <a href="/#skills" onClick={closeNavbar} className={styles.dropdownlink}>Skills</a>
          </Link>
        </div>
      </nav>

    </>
  );
}
