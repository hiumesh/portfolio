import Image from "next/image";

import { Project } from "./page";

interface ProjectCardPropeTypes {
  data: Project;
}

export default function ProjectCard({ data }: ProjectCardPropeTypes) {
  return (
    <div className="flex flex-col lg:flex-row bg-white p-3 mx-5 lg:mx-0  my-5 rounded-lg shadow-md h-fit lg:h-[300px] overflow-hidden">
      <div className="rounded-md overflow-hidden relative h-[500px]  lg:h-full w-full lg:w-[450px] mr-4">
        <Image
          src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&h=1280&q=80"
          style={{ objectFit: "cover" }}
          fill
          alt="demo image"
        />
      </div>
      <div className="flex-1 overflow-auto">
        <h2 className="text-xl font-semibold mb-3">{data.title}</h2>
        <div className="mb-3">
          <h4 className="font-semibold text-sm text-slate-700">
            TECHNOLOGIES USED
          </h4>
          <p className="relative -left-1 flex flex-wrap">
            {data.technologies_used.map((t) => (
              <span key={t} className="py-0.5 px-2 m-1 bg-gray-200 rounded-md">
                {t}
              </span>
            ))}
          </p>
        </div>
        <div className="flex justify-between mb-3">
        <div>

          <a href={data.deploy_link} className="inline-flex justify-center items-center px-3 py-1 rounded text-white text-sm bg-blue-600 font-semibold">
            LIVE DEMO&nbsp;&nbsp;{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <g
                fill="none"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              >
                <path
                  strokeDasharray="36"
                  strokeDashoffset="36"
                  d="M12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12"
                >
                  <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    dur="0.6s"
                    values="36;0"
                  />
                </path>
                <path
                  strokeDasharray="12"
                  strokeDashoffset="12"
                  d="M13 11L20 4"
                >
                  <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    begin="0.6s"
                    dur="0.3s"
                    values="12;0"
                  />
                </path>
                <path
                  strokeDasharray="8"
                  strokeDashoffset="8"
                  d="M21 3H15M21 3V9"
                >
                  <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    begin="0.9s"
                    dur="0.2s"
                    values="8;0"
                  />
                </path>
              </g>
            </svg>
          </a>
        </div>
        <div>

          <a href={data.deploy_link} className="inline-flex justify-center items-center px-3 py-1 rounded text-slate-700 text-sm bg-slate-200 font-semibold">
            SOURCE CODE&nbsp;&nbsp;{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <g
                fill="none"
                className="stroke-slate-700"
            
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              >
                <path
                  strokeDasharray="36"
                  strokeDashoffset="36"
                  d="M12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12"
                >
                  <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    dur="0.6s"
                    values="36;0"
                  />
                </path>
                <path
                  strokeDasharray="12"
                  strokeDashoffset="12"
                  d="M13 11L20 4"
                >
                  <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    begin="0.6s"
                    dur="0.3s"
                    values="12;0"
                  />
                </path>
                <path
                  strokeDasharray="8"
                  strokeDashoffset="8"
                  d="M21 3H15M21 3V9"
                >
                  <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    begin="0.9s"
                    dur="0.2s"
                    values="8;0"
                  />
                </path>
              </g>
            </svg>
          </a>
        </div>

        
        </div>
        <div>
          <p className="text-slate-500">{data.description}</p>
        </div>
      </div>
    </div>
  );
}
