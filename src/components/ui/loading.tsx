"use client";
import React from "react";
import logo from "@/assessts/hatch 1.png";
import Image from "next/image";
import { motion } from "motion/react";

const containerVarients = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const squareLeftVariants = {
  hidden: { x: -60, rotate: -30, opacity: 0 },
  show: {
    x: 0,
    rotate: -12,
    opacity: 1,
    transition: { type: "spring" as const, stiffness: 120, damping: 15 },
  },
};

const squareRightVariants = {
  hidden: { x: 60, rotate: 30, opacity: 0 },
  show: {
    x: 0,
    rotate: 12,
    opacity: 1,
    transition: { type: "spring" as const, stiffness: 120, damping: 15 },
  },
};

const eggVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

const LoadingUI = () => {
  return (
    <>
      <div className="w-full h-screen flex flex-col gap-8 items-center justify-center ">
        <motion.div
          variants={containerVarients}
          initial="hidden"
          animate="show"
          className="relative flex flex-row items-end justify-center"
        >
          <motion.div
            variants={squareLeftVariants}
            className="absolute w-36 h-36 bg-[var(--cgreen-1)] rounded-2xl -rotate-12 -translate-y-3 -translate-x-0.5 shadow-[0_0_3px_var(--cgreen-2)]"
          ></motion.div>
          <motion.div
            variants={squareRightVariants}
            className="absolute w-32 h-32 bg-[var(--cgreen-4)] rounded-2xl rotate-12 shadow-lg"
          ></motion.div>
          <motion.div
            variants={eggVariants}
            animate={{ rotate: [0, -5, 5, -5, 5, 0] }}
            transition={{
              duration: 1,
              delay: 0.8,
              repeat: Infinity,
              repeatDelay: 2,
              ease: "easeInOut",
            }}
            className="relative inline-block"
            style={{ transformOrigin: "50% 100%" }}
          >
            <Image src={logo} alt="logo" />
          </motion.div>
        </motion.div>

      </div>
    </>
  );
};

export default LoadingUI;
