import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import {notFound} from "next/navigation";

async function getData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    cache: "no-store",
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    return notFound()
  }

  return res.json();
}

const BlogPost = async ({ params }) => {
  const data = await getData(params.id);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>
            {data.title}
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
          possimus consequuntur necessitatibus sit harum! Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Optio officiis nam maiores at
          provident minima repellat, error amet molestias adipisci cumque nisi
          accusamus temporibus architecto possimus consequuntur necessitatibus
          sit harum!
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
          officiis nam maiores at provident minima repellat, error amet
          molestias adipisci cumque nisi accusamus temporibus architecto
          possimus consequuntur necessitatibus sit harum! Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Optio officiis nam maiores at
          provident minima repellat, error amet molestias adipisci cumque nisi
          accusamus temporibus architecto possimus consequuntur necessitatibus
          sit harum!
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
          officiis nam maiores at provident minima repellat, error amet
          molestias adipisci cumque nisi accusamus temporibus architecto
          possimus consequuntur necessitatibus sit harum! Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Optio officiis nam maiores at
          provident minima repellat, error amet molestias adipisci cumque nisi
          accusamus temporibus architecto possimus consequuntur necessitatibus
          sit harum!
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
