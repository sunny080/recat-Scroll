import React from "react";
import styles from "./TopHeading.module.scss";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const TopHeading = () => {
  gsap.registerPlugin(ScrollTrigger);
  const circleRef = useRef(null);

  useEffect(() => {
    gsap.to(
      "#heading",
      {
        y: -150,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: "#heading",
          start: "center 200px ",
          end: "bottom 100px ",
          scrub: true,
        },
      },
      []
    );
  });

  return (
    <div className={styles.container} id='heading' ref={circleRef}>
      <h1>Metal fences and security gates</h1>
    </div>
  );
};

export default TopHeading;
