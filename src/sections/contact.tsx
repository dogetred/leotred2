import InView from "@/components/InView";
import AnimatedText from "@/components/animatedText";
import { EASING } from "@/constants/animations";
import styles from "@/sections/styles/contact.module.css";
import { useRef } from "react";
import {
  motion,
  useAnimation,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";

const ContactBar = ({
  title,
  url,
  delay = 0,
}: {
  title: string;
  url: string;
  delay?: number;
}) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const hoverHandler = () => {
    controls.start({
      height: "100%",
      transition: { ease: EASING, duration: 0.3 },
    });
  };

  const unhoverHandler = () => {
    controls.start({
      height: 0,
      transition: { ease: EASING, duration: 0.3 },
    });
  };

  return (
    <motion.a
      href={url}
      target="_blank"
      ref={ref}
      className={styles.contactBar}
      onHoverStart={hoverHandler}
      onHoverEnd={unhoverHandler}
      whileHover={{ color: "#000" }}
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{ ease: EASING, duration: 0.4, delay }}
    >
      <motion.div
        className={styles.barBackground}
        initial={{ height: 0 }}
        animate={controls}
      />
      <h2>{title}</h2>
    </motion.a>
  );
};

const Contact = () => {
  const titleContainer = useRef(null);
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], [500, -100]);
  const x2 = useTransform(scrollYProgress, [0, 1], [-300, 0]);

  return (
    <section className={styles.container}>
      <motion.div
        style={{ x: x2 }}
        ref={titleContainer}
        className={styles.titleContainer}
      >
        <InView containerRef={titleContainer}>
          <AnimatedText
            className="heading-3"
            text="Wanna cool 3d model? Let`s connect"
          />
        </InView>
      </motion.div>
      <motion.h1 transition={{ type: "keyframes" }} style={{ x }}>
        call me
      </motion.h1>
      <div className={styles.barContainer}>
        <ContactBar title="telegram" url="https://t.me/leotred" />
        <ContactBar delay={0.3} title="blog" url="t.me/leotreds" />
        <ContactBar
          delay={0.5}
          title="@svpra"
          url="https://github.com/svpra"
        />
      </div>
    </section>
  );
};

export default Contact;
