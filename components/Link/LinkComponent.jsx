import Link from "next/link";
import styles from "./LinkComponent.module.css";

export default function ({ href, text, keyProp }) {
  return (
    <Link href={href} {...(keyProp ? { key: keyProp } : {})}>
      <button className={styles.navlink}>{text}</button>
    </Link>
  );
}
