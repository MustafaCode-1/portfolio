import React from "react";
import { motion } from "framer-motion";
import styles from "./About.module.css";
import CV from "../../assets/cv.pdf";
import ParallaxText from "../ParallaxText/ParallaxText";

const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.container}>
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          transition={{ delay: 0.4 }}
          className={styles.photo}
        >
          <img
            src="https://png.pngtree.com/png-vector/20231213/ourmid/pngtree-sitting-male-programmer-using-laptop-png-image_11331360.png"
            alt="G. Mustafa"
            className={styles.image}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className={styles.details}
        >
          <h1>Hi There! I'm G. Mustafa</h1>
          <h2>Fullstack Developer</h2>
          <p>
            Seasoned MERN Stack Developer with 5 years of experience in
            designing and deploying web applications.
          </p>
          <p>
            Expertise in both frontend and backend development, with a proven
            track record of solving complex problems and delivering
            high-quality, scalable solutions.
          </p>
          <p>
            Dedicated to continuous learning and contributing effectively to the
            IT industry.
          </p>
          <a href={CV} download>
            <button className="downloadBtn">Download CV</button>
          </a>
        </motion.div>
      </div>
      <div className={styles.parallaxContainer}>
        <ParallaxText baseVelocity={-5}>A FullStack Developer</ParallaxText>
      </div>    
    </div>
  );
};

export default About;
