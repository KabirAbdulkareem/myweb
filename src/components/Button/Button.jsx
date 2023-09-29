import Link from "next/link";
import React from "react";
import styles from './button.module.css'

const Button = ({ url, text }) => {
  return (
    <Link href={url} className={styles.container}>
      <button className={styles.btn}>{text}</button>
    </Link>
  );
};

export default Button;
