import React, { useState, useRef, useEffect } from "react";
import styles from "./Navbar.module.scss";
import { Logo } from "../../assets/svg";
import VanillaTilt from "vanilla-tilt";
import cn from "classnames";

function Tilt(props) {
  const { options, ...rest } = props;
  const tilt = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tilt.current, options);
  }, [options]);

  return <div ref={tilt} {...rest} />;
}

const Navbar = () => {
  const options = {
    scale: 1.1,
    speed: 3000,
    max: 30,
  };

  const [deactive, setDeactive] = useState(false);
  const ToggleDeactive = (active) => {
    setDeactive(!active);

  };
 
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>FERRUMPIPE</h1>
      </div>
      <div className={styles.menubar}>
        <Tilt options={options} className={styles.boxin}>
          <div>Price List</div>
        </Tilt>
        <Tilt className={styles.box} options={options}>
          <div className={cn(styles.toggle , `${deactive ? styles.active : ""}`)} onClick={() => ToggleDeactive(deactive)}  >
            <span></span>
            <span></span>
          </div>
        </Tilt>
      </div>

      <div className={cn(styles.menus, deactive ? styles.onactive : " ")} >
        <div className={styles.menu}>
          <a
            href="#"
            className={styles.btn_flip}
            data-back="Price List"
            data-front="Price List"
          ></a>
        </div>
        <div className={styles.menu}>
          <a
            href="#"
            className={styles.btn_flip}
            data-back="Fencing"
            data-front="Fencing"
          ></a>
        </div>
        <div className={styles.menu}>
          <a
            href="#"
            className={styles.btn_flip}
            data-back="Gates"
            data-front="Gates"
          ></a>
        </div>
        <div className={styles.menu}>
          <a
            href="#"
            className={styles.btn_flip}
            data-back="Security"
            data-front="Security"
          ></a>
        </div>
        <div className={styles.menu}>
          <a
            href="#"
            className={styles.btn_flip}
            data-back="Fastenings"
            data-front="Fastenings"
          ></a>
        </div>

        <div className={styles.menu}>
          <h3>Order@ferrumpipe.ru</h3>
          <p>+8 921 836-5306</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
