"use client"
import Image from "next/image";
import styles from "./page.module.scss";
import Link from "next/link";

export default function NotFound() {

  return (
    <div className={styles.page} style={{height: '100%'}}>
        <h1>404 - Not found</h1>
        <p>Sorry, this website is not fully complete yet. Please, let me lead you back to the home page: <Link href="/" legacyBehavior><a href='/' className={styles.goback}>go back</a></Link>.</p>
    </div>
    
  );
}
