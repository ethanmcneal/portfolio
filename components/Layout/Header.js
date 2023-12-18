import Link from "next/link";
import { useRouter } from "next/router";
import NavLink from "./Components/NavLink";
import styles from "./Layout.module.scss";

export default function Header(props) {


  return (
    <div className={styles.header}>
      <div className={styles.content}>
        <div>
          <h2><code className={styles.code}>ethan.mcneal</code></h2>
          <div>icons placeholder</div>
        </div>
        <div className={styles.header_icons}>
          <p>svg</p>
          <p>svg</p>
        </div>
      </div>
      <div className={styles.nav}>
        <NavLink href="/">Home</NavLink>
        <NavLink href="/projects">Projects</NavLink>
        <NavLink href="/about">About Me</NavLink>
        <NavLink href="/contact">Contact me</NavLink>
      </div>
    </div>
  );
}
