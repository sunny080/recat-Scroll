import React from "react";
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  MoveOut,
  Sticky,
  StickyIn,
  ZoomIn,
} from "react-scroll-motion";
import styles from "./Header.module.scss";

const Header = () => {
  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());

  return (
    <div className={styles.container}>
      <ScrollContainer>
        <ScrollPage page={0}>
          <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -400))}>
            hello
          </Animator>
        </ScrollPage>

        <ScrollPage page={1}>
          <Animator animation={ZoomInScrollOut}>hello</Animator>
        </ScrollPage>
      </ScrollContainer>
    </div>
  );
};

export default Header;
