"use client";
import { EASING } from "@/constants/animations";
import { motion } from "framer-motion";

export default function Loading() {
  return (
    <motion.section
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: EASING }}
      className="loading"
    >
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{
          duration: 1,
          type: "spring",
          stiffness: Math.random() * 100,
          damping: 20,
          restDelta: 0.001,
        }}
        className="loading-bar"
      />
      <div className="loading-text-container">
        <h1>leotred</h1>
        <motion.span
          initial={{ x: 0 }}
          animate={{ x: 300 }}
          transition={{ duration: 10 }}
        >
          LEOTRED - レオレッド - 3d-orgasm - лёнярофлс - 2024 - LEOTRED - レオレッド - 3d-orgasm - лёнярофлс - 2024 - LEOTRED - レオレッド - 3d-orgasm - лёнярофлс - 2024 - LEOTRED - レオレッド - 3d-orgasm - лёнярофлс - 2024 - LEOTRED - レオレッド - 3d-orgasm - лёнярофлс - 2024 - LEOTRED - レオレッド - 3d-orgasm - лёнярофлс - 2024 - 
        </motion.span>
      </div>
    </motion.section>
  );
}
