"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";

import AnimateText from "@/components/animate-text";

export default function ProjectsSectionOne() {
  const headingRef = useRef(null);
  const headingInView = useInView(headingRef, { amount: "all" });
  return (
    <h1
      ref={headingRef}
      className={`text-center w-full lg:w-3/4 mx-auto md:mx-0 lg:text-left text-8xl font-bold my-7`}
    >
      <AnimateText
        animation="rise-up"
        inView={headingInView}
        identifier="about-hero-sec-1"
      >
        The best way to learn is learn by doing
      </AnimateText>
    </h1>
  );
}
