import React from "react";
import styles from "./ImageGallery.module.scss";
import shoes from "../../assets/Images/atri.webp";
import lether from "../../assets/Images/lather.webp";
import soul from "../../assets/Images/shoes.webp";
import { useRef , useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ImgGallery = () => {
  
  gsap.registerPlugin(ScrollTrigger);
  const circleRef = useRef(null);

  useEffect(() => {
    gsap.to("#firstone", {
      y: -150,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: "#firstone",
        start: "top center ",
        end: "center 200px",
        scrub: true,
        
      }
    });

    gsap.to("#firsttwo", {
      y: -150,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: "#firsttwo",
        start: "top center ",
        end: "center 200px",
        scrub: true,
        
      }
    });

    gsap.to("#firstthree", {
      y: -150,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: "#firstthree",
        start: "top center ",
        end: "center 200px",
        scrub: true,
        
      }
    });
  }, []);

  return (
    <div className={styles.container} >
        
      <div className={styles.content} id='firstone'ref={circleRef} >
        <div>
          <img src={shoes}  />
        </div>
        <div className={styles.info}>
          <h3>Modular Packaging</h3>
          <h4>Unboxing like never before</h4>
          <p>
            <a href="#">Read story</a>
          </p>
        </div>
      </div>
      <div className={styles.content} id='firsttwo' ref={circleRef}  >
        <div>
          <img src={lether}  />
        </div>
        <div className={styles.info}>
          <h3>Modular Packaging</h3>
          <h4>Unboxing like never before</h4>
          <p>
            <a href="#">Read story</a>
          </p>
        </div>
      </div>
      <div className={styles.content} id='firstthree' ref={circleRef}>
        <div>
          <img src={soul} />
        </div>
        <div className={styles.info}>
          <h3>Modular Packaging</h3>
          <h4>Unboxing like never before</h4>
          <p>
            <a href="#">Read story</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImgGallery;
