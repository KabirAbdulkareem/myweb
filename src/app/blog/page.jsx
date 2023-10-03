import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

const getData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store",
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  return data;
}

const Blog = async () => {
  const data = await getData();
  return (
    <div className={styles.mainContainer}>
      {data.map((item) => (
        <Link href={`/blog/${item.id}`} className={styles.container} key={item.id}>
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
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              officiis nam maiores at provident minima repellat, error amet
              molestias adipisci cumque nisi accusamus temporibus architecto
              possimus consequuntur necessitatibus sit harum! Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Optio officiis nam maiores
              at provident minima repellat, error amet molestias adipisci cumque
              nisi accusamus temporibus architecto possimus consequuntur
              necessitatibus sit harum!
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blog;
