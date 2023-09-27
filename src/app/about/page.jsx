import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Picture of the author"
          fill={true}
          className={styles.img}
        />
        <div className={styles.imgTxt}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDesc}>
            Handcrafting award winning digital experiences
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
            dolore quod facilis perferendis saepe sequi tenetur autem voluptatem
            itaque fuga? Dolor distinctio facere illo ex aliquid ad error dolore
            illum! Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Optio exercitationem consequuntur expedita sint ipsum, voluptas eos
            ex inventore unde sit fuga molestias illo soluta quos. Maiores
            <br />
            <br />
            repudiandae exercitationem quo iusto.Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Cumque, dolore quod facilis
            perferendis saepe sequi tenetur autem voluptatem itaque fuga? Dolor
            distinctio facere illo ex aliquid ad error dolore illum! Lorem ipsum
            dolor sit.
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What We Do?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
            dolore quod facilis perferendis saepe sequi tenetur autem voluptatem
            itaque fuga? Dolor distinctio facere illo ex aliquid ad error dolore
            illum! Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Optio exercitationem .
            <br />
            <br /> - Dynamic Websites 
            <br />
            <br /> - Fast and Handy 
            <br />
            <br /> - Mobile Apps
          </p>
          <Button text="Contact" url="/contact"/>
        </div>
      </div>
    </div>
  );
};

export default About;
