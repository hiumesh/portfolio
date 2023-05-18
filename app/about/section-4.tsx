"use client";

import { useRef } from "react";
import { motion, useScroll, useInView } from "framer-motion";

import AnimateText from "@/components/animate-text";

const educations = [
  {
    degree: "B.TECH",
    institute: "Google",
    duration: "2022-2023",
    address: "Mountain View, CA",
    score: "",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident atque dolore tempore illo, voluptatibus hic voluptas, nulla itaque sit qui ut vel autem ipsa minus doloribus similique alias enim dolorum",
  },
  {
    degree: "Intermedite",
    institute: "Google",
    duration: "2022-2023",
    address: "Mountain View, CA",
    score: "",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident atque dolore tempore illo, voluptatibus hic voluptas, nulla itaque sit qui ut vel autem ipsa minus doloribus similique alias enim dolorum",
  },
  {
    degree: "High School",
    institute: "Google",
    duration: "2022-2023",
    address: "Mountain View, CA",
    score: "",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident atque dolore tempore illo, voluptatibus hic voluptas, nulla itaque sit qui ut vel autem ipsa minus doloribus similique alias enim dolorum",
  },
];

export default function SectionFour() {
  const ref = useRef(null);
  const headingRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  const headingInView = useInView(headingRef, { amount: "all" });
  return (
    <section className="max-w-6xl m-auto my-10 flex flex-col justify-center items-center">
      <h1
        ref={headingRef}
        className={`text-center w-full mx-auto text-6xl font-bold my-7 mb-12 text-pink-800`}
      >
        <AnimateText
          animation="rise-up"
          inView={headingInView}
          identifier="about-hero-sec-3"
        >
          Education
        </AnimateText>
      </h1>
      <div ref={ref} className="relative flex flex-col justify-center items-center">
      <motion.div style={{ scaleY: scrollYProgress }} className="w-[4px] h-full absolute top-0 -left-14 origin-top bg-slate-800"></motion.div>
        {educations.map((e) => (
          <Item data={e} key={e.degree} />
        ))}
      </div>
    </section>
  );
}

export function Item({
  data,
}: {
  data: {
    degree: string;
    institute: string;
    duration: string;
    address: string;
    score: string;
    description: string;
};
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  const isInView = useInView(ref, { amount: "some" })
  return (
    <motion.div ref={ref} className="flex items-start pb-20 relative" animate={isInView ? { opacity: 1, scale: 1, } : { opacity: 0, scale: 0 }} transition={{ type: "spring", bounce: 0.25, }}>
      <figure className="w-20 h-20 m-0 p-0 absolute -right-5 top-0">
        <svg
          className="-rotate-9"
          width="60"
          height="60"
          viewBox="0 0 100 100"
        >
          <circle
            cx="50"
            cy="50"
            r="30"
            pathLength="1"
            className="stroke-[10px] opacity-20 stroke-red-900 fill-none"
          />
          <motion.circle
            cx="50"
            cy="50"
            r="30"
            pathLength="10"
            className="stroke-red-900 fill-none stroke-[10px]"
            style={{ pathLength: scrollYProgress }}
          />
        </svg>
        
      </figure>
      <div className="bg-white rounded-md p-3 w-[500px]">
        <h2 className="text-2xl font-medium capitalize">
          {data.degree}
          <span className="text-pink-700 font-bold">&nbsp;@</span>
          <span className="text-pink-700 font-bold">{data.institute}</span>
        </h2>
        <p className="text-gray-600 text-sm font-medium">
          {data.duration} - <span>{data.address}</span>
        </p>
        <p className="text-slate-700 font-medium mt-2">{data.description}</p>
      </div>
    </motion.div>
  );
}
