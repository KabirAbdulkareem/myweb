import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

const BlogPost = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>
            Lorem ipsum dolor sit amet conse ctetur adipi sicing elit adipi sicing.
          </h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
            officiis nam maiores at provident minima repellat, error amet
            molestias adipisci cumque nisi accusamus temporibus architecto
            possimus consequuntur necessitatibus sit harum!
          </p>
          <div className={styles.author}>
            <Image
              src="https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="#"
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span>Maxwell Abdulkareem</span>
          </div>
        </div>
        <div className={styles.imgContainer}>
          <Image
            src="https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="#"
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
          officiis nam maiores at provident minima repellat, error amet
          molestias adipisci cumque nisi accusamus temporibus architecto
          possimus consequuntur necessitatibus sit harum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
          officiis nam maiores at provident minima repellat, error amet
          molestias adipisci cumque nisi accusamus temporibus architecto
          possimus consequuntur necessitatibus sit harum!
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
          officiis nam maiores at provident minima repellat, error amet
          molestias adipisci cumque nisi accusamus temporibus architecto
          possimus consequuntur necessitatibus sit harum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
          officiis nam maiores at provident minima repellat, error amet
          molestias adipisci cumque nisi accusamus temporibus architecto
          possimus consequuntur necessitatibus sit harum!
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
          officiis nam maiores at provident minima repellat, error amet
          molestias adipisci cumque nisi accusamus temporibus architecto
          possimus consequuntur necessitatibus sit harum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
          officiis nam maiores at provident minima repellat, error amet
          molestias adipisci cumque nisi accusamus temporibus architecto
          possimus consequuntur necessitatibus sit harum!
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
