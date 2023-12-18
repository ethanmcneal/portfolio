import Link from "next/link";
import classnames from "classnames";
import styles from "../Layout.module.scss";
import {useRouter} from "next/router";

export default function NavLink({href, children}) {
  const {pathname} = useRouter();

  const isLinkActive = (href) => href === pathname;


  return (
    <Link href={href} className={classnames([styles.nav_link, {[`${styles.active}`]: isLinkActive(href)}])}>
      <>{children}</>
    </Link>
  );
}
