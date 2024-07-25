import React, { useState, useCallback, useRef, useEffect } from "react";
import { useTransition, useSpring, animated } from "@react-spring/web";
import instaIcon from "../../assets/insta.png";
import githubIcon from "../../assets/git.png";
import linkedinIcon from "../../assets/linkedin.png";
import developerImg from "../../assets/developer.png";
import CV from "../../assets/cv.pdf";

import styles from "./FontComp.module.css";

const FONT_MESSAGES = [
  ["Hey👋 !", " Welcome to My Space", "I am - G. Mustafa"],
  ["Hey👋 !", "I am G. Mustafa"],
  [
    "Hey👋 !",
    "I'm - G. Mustafa",
    "A FullStack Developer💻",
    "Innovator | Creator | Problem Solver",
  ],
];

const FontComp = () => {
  const ref = useRef([]);
  const [items, setItems] = useState(FONT_MESSAGES[0]);
  const [hoveredImage, setHoveredImage] = useState(null);

  const transitions = useTransition(items, {
    from: {
      opacity: 0,
      height: 0,
      innerHeight: 0,
      transform: "perspective(600px) rotateX(0deg)",
      color: "#8fa5b6",
    },
    enter: [
      { opacity: 1, height: 40, innerHeight: 40 },
      { transform: "perspective(600px) rotateX(180deg)", color: "black" },
      { transform: "perspective(600px) rotateX(0deg)" },
    ],
    leave: [{ color: "black" }, { innerHeight: 0 }, { opacity: 0, height: 0 }],
    update: { color: "black" },
  });

  const reset = useCallback(() => {
    ref.current.forEach(clearTimeout);
    ref.current = [];

    FONT_MESSAGES.forEach((message, index) => {
      ref.current.push(
        setTimeout(() => setItems(message), index * 3000 + 2000)
      );
    });
  }, []);

  const getSpringProps = (isHovered) =>
    useSpring({
      from: { opacity: 0, transform: "scale(0.8)" },
      to: {
        opacity: 1,
        transform: isHovered ? "scale(1.1)" : "scale(1)",
      },
      config: isHovered ? { tension: 300, friction: 15 } : { duration: 1000 },
    });

  useEffect(() => {
    reset();
    return () => ref.current.forEach(clearTimeout);
  }, [reset]);

  const handleMouseEnter = (icon) => () => setHoveredImage(icon);
  const handleMouseLeave = () => setHoveredImage(null);

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        {transitions(({ innerHeight, ...rest }, item) => (
          <animated.div
            key={item} 
            className={styles.transitionsItem}
            style={rest}
            onClick={reset}
          >
            <animated.div style={{ overflow: "hidden", height: innerHeight }}>
              {item}
            </animated.div>
          </animated.div>
        ))}
        <span className={styles.icons}>
          {[
           
            {
              href: "https://github.com/MustafaCode-1",
              src: githubIcon,
              alt: "Github icon",
            },
            {
              href: "https://www.linkedin.com/in/ghulam-mustafa-49725b288/",
              src: linkedinIcon,
              alt: "LinkedIn icon",
            },
            {
              href: "https://www.instagram.com/shayan_s.ig/?igsh=Yjl3Y3pxbmp0aWIz&utm_source=qr",
              src: instaIcon,
              alt: "Insta icon",
            }
          ].map(({ href, src, alt }) => (
            <a
              key={alt} 
              href={href}
              target="_blank"
              rel="noopener noreferrer" 
            >
              <animated.img
                src={src}
                alt={alt}
                width={50}
                style={getSpringProps(hoveredImage === alt)}
                onMouseEnter={handleMouseEnter(alt)}
                onMouseLeave={handleMouseLeave}
              />
            </a>
          ))}
        </span>
        <div>
          <a href={CV} download>
            <button className="downloadBtn">Download CV</button>
          </a>
        </div>
      </div>
      <animated.img
        src={developerImg}
        alt="Developer"
        className={styles.bannerImg}
        style={getSpringProps(hoveredImage === "Developer")}
        onMouseEnter={handleMouseEnter("Developer")}
        onMouseLeave={handleMouseLeave}
      />
    </div>
  );
};

export default FontComp;
