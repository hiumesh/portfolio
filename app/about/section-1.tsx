"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

import profileImage from "@/assets/images/developer-pic-1.png";
import AnimateText from "@/components/animate-text";


export default function SectionOne() {
  const headingRef = useRef(null);
  const headingInView = useInView(headingRef, { amount: "all" });

  return (
    <section className="max-w-6xl m-auto flex flex-col">
      <h1
        ref={headingRef}
        className={`text-center w-full lg:w-3/4 mx-auto md:mx-0 lg:text-left text-6xl font-bold my-7`}
      >
        <AnimateText animation="rise-up" inView={headingInView} identifier="about-hero-sec-1">
          Discover inspiring websites built by the Webflow community
        </AnimateText>
      </h1>
      <div className="flex flex-col justify-center items-center lg:flex-row flex-1">
        <motion.div
          className="w-full lg:w-1/3"
          initial={{ opacity: 0, x: -200, scale: 0 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ type: "spring", duration: 1 }}
        >
          <Image
            src={profileImage}
            className="mx-auto"
            height={580}
            width={580}
            alt="profile image"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 200, scale: 0 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ type: "spring", duration: 1 }}
          className="flex-1 text-lg text-slate-700 m-5 lg:m-0 text-center lg:text-left bg-white p-6 rounded-lg font-medium"
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero id
          voluptas, saepe sed sit et nobis accusantium culpa qui, assumenda quia
          corrupti minus quibusdam omnis temporibus amet soluta velit magnam?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro velit,
          qui, ab, consectetur non deleniti dolorem odit ipsam mollitia
          provident quae placeat? Suscipit, velit! Consectetur voluptate
          nesciunt quidem distinctio soluta. Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Porro facilis at voluptas illum sequi
          placeat rerum, eligendi, quae deleniti architecto minus consectetur
          ducimus voluptatum hic dolorem velit saepe quos pariatur!
        </motion.div>
      </div>
    </section>
  );
}
