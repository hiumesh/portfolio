import Image from "next/image";
import { Bree_Serif } from "next/font/google";

import profileImage from "@/assets/images/developer-pic-1.png";

const breeSerif = Bree_Serif({ subsets: ["latin"], weight: ["400"] });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="max-w-6xl flex flex-col lg:flex-row justify-center items-center">
        <div className="flex-1 overflow-hidden">
          <h2 className={`text-5xl w-96 lg:w-auto text-center lg:text-left ${breeSerif.className} mb-3 animate-reveal`}>
            Turning Vision Into Reality With Code
          </h2>
        </div>
        <div>
          <Image
            src={profileImage}
            height={580}
            width={580}
            alt="profile image"
          />
        </div>
        <div className="flex-1">
          <p className={`text-gray-500 text-base text-center lg:text-left font-medium pb-3`}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis
            eaque ab maiores cupiditate enim dolorum impedit fugiat voluptatum,
            delectus obcaecati ad ducimus, dolor assumenda illum qui ratione
            harum, temporibus autem.
          </p>
          <div className="flex justify-center lg:justify-start overflow-hidden">
            <button className="bg-gray-900 text-white py-1.5 px-3 rounded-md flex justify-center items-center animate-reveal">
              Resume&nbsp;&nbsp;{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <g
                  fill="none"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
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
            </button>{" "}
            <button className="text-gray-700 underline mx-3 animate-reveal">Contact</button>
          </div>
        </div>
      </div>
    </main>
  );
}
