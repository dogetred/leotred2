import InView from "@/components/InView";
import AnimatedText from "@/components/animatedText";
import styles from "@/sections/styles/introduction.module.css";
import { useRef } from "react";

const Introduction = () => {
  const ref = useRef(null);

  return (
    <section ref={ref} className={styles.container}>
      <InView containerRef={ref}>
        <AnimatedText
          className="heading-2 align-center"
          text="Cool 3d modeler, ohuennyj chelovek"
        />
        <span className={styles.lineThrough}>
          <AnimatedText
            className="heading-2 align-center"
            text="and he is also have a big huy"
          />
        </span>
      </InView>
    </section>
  );
};

export default Introduction;
