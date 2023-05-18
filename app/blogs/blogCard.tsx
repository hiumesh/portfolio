"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Link from "next/link";

export default function BlogCard({ data }: any) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start center"],
  });
  const scaleY = useSpring(scrollYProgress);

  return (
    <div ref={ref} className="bg-white rounded-md border shadow px-3 pt-3 pb-5 m-2 relative group">
      <motion.div style={{ scaleY }} className="w-[9px] h-full absolute top-0 left-0 origin-top bg-slate-800"></motion.div>
      <motion.div style={{ scaleY }} className="w-[9px] h-full absolute top-0 right-0 origin-top bg-pink-600"></motion.div>
      <div className="px-14">
        <div className="relative">
          <p className="m-0 text-sm text-gray-400">{data?.publish_date}</p>
        </div>
        <Link href={`/blogs/${data._id}`} className="text-2xl pt-4 pb-2 block font-bold hover:text-blue-700 leading-[23px]">
          {data?.title}
        </Link>
        <div className="mb-4">
          {data?.tags?.map((tag: string) => (
            <a
              key={tag}
              className="text-slate-500 text-sm rounded py-1 px-1.5 hover:border hover:bg-slate-50 cursor-pointer"
            >
              #{tag}
            </a>
          ))}
        </div>

        <div className="flex justify-between items-center relative -left-2">
          <button className="flex items-center text-slate-500 text-sm hover:bg-slate-100 rounded-lg py-1 px-2 mr-2">
            <svg
              className="mr-1 fill-slate-500"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              role="img"
              aria-labelledby="a3w6a0fey3vforbqyqohlsiwl00w55tk"
            >
              <title id="a3w6a0fey3vforbqyqohlsiwl00w55tk">Reactions</title>
              <path d="M18.884 12.595l.01.011L12 19.5l-6.894-6.894.01-.01A4.875 4.875 0 0112 5.73a4.875 4.875 0 016.884 6.865zM6.431 7.037a3.375 3.375 0 000 4.773L12 17.38l5.569-5.569a3.375 3.375 0 10-4.773-4.773L9.613 10.22l-1.06-1.062 2.371-2.372a3.375 3.375 0 00-4.492.25v.001z"></path>
            </svg>
            {data?.views} Views
          </button>
          <p className="text-slate-600 m-0 mr-1 text-sm">{data?.read_min} min read</p>
        </div>
      </div>
    </div>
  );
}
