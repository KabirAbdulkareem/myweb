import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

const Blog = () => {
  return (
    <div className={styles.mainContainer}>
      <Link href="/blog/testId" className={styles.container}>
        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            width={400}
            height={250}
            src="https://images.pexels.com/photos/16353919/pexels-photo-16353919/free-photo-of-fontanna-di-trevi-in-rome-italy.jpeg"
            alt=""
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
            officiis nam maiores at provident minima repellat, error amet
            molestias adipisci cumque nisi accusamus temporibus architecto
            possimus consequuntur necessitatibus sit harum! Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Optio officiis nam maiores at
            provident minima repellat, error amet molestias adipisci cumque nisi
            accusamus temporibus architecto possimus consequuntur necessitatibus
            sit harum!
          </p>
        </div>
      </Link>

      <Link href="/blog/testId" className={styles.container}>
        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            width={400}
            height={250}
            src="https://images.pexels.com/photos/16353919/pexels-photo-16353919/free-photo-of-fontanna-di-trevi-in-rome-italy.jpeg"
            alt=""
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
            officiis nam maiores at provident minima repellat, error amet
            molestias adipisci cumque nisi accusamus temporibus architecto
            possimus consequuntur necessitatibus sit harum! Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Optio officiis nam maiores at
            provident minima repellat, error amet molestias adipisci cumque nisi
            accusamus temporibus architecto possimus consequuntur necessitatibus
            sit harum!
          </p>
        </div>
      </Link>

      <Link href="/blog/testId" className={styles.container}>
        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            width={400}
            height={250}
            src="https://images.pexels.com/photos/16353919/pexels-photo-16353919/free-photo-of-fontanna-di-trevi-in-rome-italy.jpeg"
            alt=""
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
            officiis nam maiores at provident minima repellat, error amet
            molestias adipisci cumque nisi accusamus temporibus architecto
            possimus consequuntur necessitatibus sit harum! Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Optio officiis nam maiores at
            provident minima repellat, error amet molestias adipisci cumque nisi
            accusamus temporibus architecto possimus consequuntur necessitatibus
            sit harum!
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Blog;
