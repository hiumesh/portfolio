"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { stagger, useInView, animate, motion } from "framer-motion";
import Image from "next/image";

import htmlIcon from "../../assets/images/svgs/html.svg";
import cssIcon from "../../assets/images/svgs/css.svg";
import javaScriptIcon from "../../assets/images/svgs/javascript.svg";
import typeScriptIcon from "../../assets/images/svgs/typescript-icon.svg";
import pythonIcon from "../../assets/images/svgs/python.svg";
import dockerIcon from "../../assets/images/svgs/docker-icon.svg";
import kubernetesIcon from "../../assets/images/svgs/kubernetes.svg";
import bashIcon from "../../assets/images/svgs/bash-icon.svg";
import tailwindIcon from "../../assets/images/svgs/tailwindcss.svg";
import circleCIIcon from "../../assets/images/svgs/circleci.svg";
import reactIcon from "../../assets/images/svgs/react.svg";
import nextjsIcon from "../../assets/images/svgs/nextjs-icon.svg";
import flutterIcon from "../../assets/images/svgs/flutter.svg";
import awsDynamoDbIcon from "../../assets/images/svgs/aws-dynamodb.svg";
import awsSQSIcon from "../../assets/images/svgs/aws-sqs.svg";
import electronIcon from '../../assets/images/svgs/electron.svg';
import angularIcon from '../../assets/images/svgs/angular-icon.svg';
import vueIcon from '../../assets/images/svgs/vue.svg';
import postgresql from '../../assets/images/svgs/postgresql.svg';
import dartIcon from '../../assets/images/svgs/dart.svg';
import terraformIcon from '../../assets/images/svgs/terraform-icon.svg';
import apiGatewayIcon from '../../assets/images/svgs/aws-api-gateway.svg';
import awsLambdaIcon from '../../assets/images/svgs/aws-lambda.svg';
import awsVPCIcon from '../../assets/images/svgs/aws-vpc.svg';

import AnimateText from "@/components/animate-text";

const skills = [
  {
    label: "HTML",
    icon: htmlIcon,
  },
  {
    label: "CSS",
    icon: cssIcon,
  },
  {
    label: "JS",
    icon: javaScriptIcon,
  },
  {
    label: "TS",
    icon: typeScriptIcon,
  },
  {
    label: "Python",
    icon: pythonIcon,
  },
  {
    label: "Docker",
    icon: dockerIcon,
  },
  {
    label: "Kubernetes",
    icon: kubernetesIcon,
  },
  {
    label: "Bash",
    icon: bashIcon,
  },
  {
    label: "Tailwind",
    icon: tailwindIcon,
  },
  {
    label: "CircleCI",
    icon: circleCIIcon,
  },
  {
    label: "React",
    icon: reactIcon,
  },
  {
    label: "Next.js",
    icon: nextjsIcon,
  },
  {
    label: "Flutter",
    icon: flutterIcon,
  },
  {
    label: "Dynamo DB",
    icon: awsDynamoDbIcon,
  },
  {
    label: "SQS",
    icon: awsSQSIcon,
  },
  {
    label: "Electron.js",
    icon: electronIcon,
  },
  {
    label: "Angular",
    icon: angularIcon,
  },
  {
    label: "Vue",
    icon: vueIcon,
  },
  {
    label: "Postgresql",
    icon: postgresql,
  },
  {
    label: "Dart",
    icon: dartIcon,
  },
  {
    label: "Terraform",
    icon: terraformIcon,
  },
  {
    label: "API Gateway",
    icon: apiGatewayIcon,
  },
  {
    label: "Lambda",
    icon: awsLambdaIcon,
  },
  {
    label: "VPC",
    icon: awsVPCIcon,
  },
];

function calculateDoublings(x: number, y: number) {
  if (x <= 0 || y <= 0) {
    throw new Error("Both x and y must be positive numbers.");
  }

  let count = 0;

  while (y < x) {
    y *= 2;
    count++;
  }

  return count + 1;
}

function getCircleCoordinates(n: number, radius: number) {
  let coordinates = [];
  let angleIncrement = (2 * Math.PI) / n;

  for (let i = 0; i < n; i++) {
    let angle = i * angleIncrement;
    let x = radius * Math.cos(angle);
    let y = radius * Math.sin(angle);
    coordinates.push({ x: x, y: y });
  }

  return coordinates;
}

export default function SectionTwo() {
  const headingRef = useRef(null);
  const headingInView = useInView(headingRef, { amount: "all" });
  const [isScreenLarge, setIsScreenLarge] = useState(true);

  useEffect(() => {
    setIsScreenLarge(window.innerWidth >= 1024);
    window.addEventListener("resize", () => setIsScreenLarge(window.innerWidth >= 1024));
  }, []);

  useEffect(() => {
    if (isScreenLarge) animate(
      ".skill-item",
      {
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 270, 270, 0],
        borderRadius: ["10%", "20%", "25%", "20%", "10%"],
      },
      {
        duration: 2,
        ease: "easeInOut",
        delay: stagger(2),
        times: [0, 0.2, 0.5, 0.8, 1],
        repeat: Infinity,
        repeatDelay: 4,
      }
    );
  }, [isScreenLarge]);

  const createSkillCircle = useCallback(() => {
    let layer = calculateDoublings(skills.length, 8);
    let coodinates: { x: number; y: number }[] = [];
    for (let i = 1; i <= layer; i++) {
      coodinates = coodinates.concat(getCircleCoordinates(8 * i, 200 * i));
    }
    if (!isScreenLarge) {
      return (
        <ul className="flex items-center justify-center flex-wrap relative">
          {skills.map((s) => {
            return (
              <li
                key={s.label}
                className="m-5 p-2 bg-white inline-flex flex-col justify-center items-center"
              >
                <motion.span
                  whileHover={{
                    scale: 1.2,
                  }}
                  transition={{ duration: 0.5, type: "spring" }}
                >
                  <Image src={s.icon} alt={s.label} height={60} width={60} />
                </motion.span>

                
                <span className="text-sm mt-2 text-gray-700 font-medium text-center">
                  {s.label}
                </span>
                
              </li>
            );
          })}
        </ul>
      );
    }
    return (
      <ul className="flex items-center justify-center flex-wrap relative">
        {skills.map((s, idx) => {
          return (
            <motion.li
              key={s.label}
              initial={{
                opacity: 0,
                x: 0,
                y: 0,
              }}
              whileInView={{
                opacity: 1,
                x: coodinates[idx].x,
                y: coodinates[idx].y,
              }}
              whileHover={{
                scale: 1.2,
              }}
              transition={{
                duration: 2,
                type: "spring",
              }}
              viewport={{ once: true }}
              className="m-5 p-2 bg-white absolute w-[70px] skill-item flex flex-col justify-center items-center group"
            >
              <motion.span
                whileHover={{
                  scale: 1.2,
                }}
                transition={{ duration: 0.5, type: "spring" }}
              >
                <Image src={s.icon} alt={s.label} height={50} width={50} />
              </motion.span>

              <span className="lg:hidden text-lg font-medium text-center">
                {s.label}
              </span>
            </motion.li>
          );
        })}
      </ul>
    );
  }, [isScreenLarge]);

  return (
    <section className="max-w-6xl m-auto my-10 h-screen lg:flex items-center justify-center relative">
      <h1
        ref={headingRef}
        className={`text-center w-full mx-auto text-6xl font-bold my-7 mb-12 lg:absolute`}
      >
        <AnimateText
          animation="rise-up"
          inView={headingInView}
          identifier="about-hero-sec-3"
        >
          Skills
        </AnimateText>
      </h1>

      {createSkillCircle()}
    </section>
  );
}
