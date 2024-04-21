"use client";

import Image from "next/image";
import React from "react";
import { TracingBeam } from "../components/ui/tracing-beam";


export default function Home() {
  return (
    <>
      <div className="container mx-auto px-4 sm:px-6  mt-11 flex flex-col md:flex-row items-center md:items-start justify-between divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-5 pb-8 pt-6 md:space-y-5 md:pr-8">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Himanshu joshi
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Founding Software Engineer
          </p>
          <a
            href="https://drive.google.com/file/d/13Nfe3tGV5bVTud6701Tccoa9n4lO1Alz/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="flex items-center mr-4 text-fore-primary border-2 border-gradient w-fit px-4 py-1 rounded cursor-pointer hover:text-accent transition-colors"
          >
            <span className="mr-2">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M124 80v322c0 7.7-6.3 14-14 14s-14-6.3-14-14V112H80c-17.7 0-32 14.3-32 32v288c0 17.7 14.3 32 32 32h353.1c17 0 30.9-13.8 30.9-30.9V80c0-17.7-14.3-32-32-32l-278 2c-17.7 0-30 12.3-30 30zm66 32h84c7.7 0 14 6.3 14 14s-6.3 14-14 14h-84c-7.7 0-14-6.3-14-14s6.3-14 14-14zm0 160h148c7.7 0 14 6.3 14 14s-6.3 14-14 14H190c-7.7 0-14-6.3-14-14s6.3-14 14-14zm196 108H190c-7.7 0-14-6.3-14-14s6.3-14 14-14h196c7.7 0 14 6.3 14 14s-6.3 14-14 14zm0-160H190c-7.7 0-14-6.3-14-14s6.3-14 14-14h196c7.7 0 14 6.3 14 14s-6.3 14-14 14z"></path>
              </svg>
            </span>
            Resume
          </a>
        </div>
        <Image
          src={"./profile.jpeg"}
          alt={"Profile"}
          height={"200"}
          width={"200"}
          className="rounded-full"
        />
      </div>

      <div className="container py-5 space-y-2  mx-auto md:space-y-10 ">
        <p className="">
          Undergoing a Bachelor of Technology in Computer Science and
          Engineering from 2020 to 2024, I have delved deep into full-stack
          development, specializing in MERN Stack and Next.js and gaining
          expertise in modern technologies. Right now, I am diving into Web3 and
          blockchain, learning all about them and discovering what they have to
          offer.
        </p>
        <p>
          My journey includes significant contributions to the tech community,
          such as my role as a contributor in the Cloud Native Computing
          Foundation &apos Zero to Merge Incubator Program. Additionally, I &rsquo; ve honed
          my skills as a Junior Software Developer at Alphaloop IT, where I&apos;ve
          implemented CI/CD pipelines and collaborated with digital marketing
          teams to boost client&apos;s online presence.
          <br />
          <br />
          My commitment to continuous learning and hands-on experience
          underscores my dedication to excelling in the tech industry.
        </p>

        <div className="mt-10 flex flex-wrap gap-4 text-center ">
          <a
            className="focusable flex flex-none cursor-pointer items-center justify-center gap-2 rounded-md bg-blue-500 py-2 px-2.5 font-medium text-white shadow-lg shadow-blue-500/10 transition selection:bg-white/30 hover:bg-blue-500/80 hover:shadow-blue-500/5 focus:ring-blue-500/40 dark:bg-blue-400 dark:text-zinc-900 dark:shadow-blue-400/10 dark:selection:bg-zinc-900/30 dark:hover:bg-blue-400/80 dark:hover:shadow-blue-400/5 dark:focus:ring-blue-400/40 sm:w-auto sm:px-3 sm:pl-2.5"
            href="https://www.linkedin.com/in/himanshujoshi011"
            rel="noreferrer"
            target="_blank"
          >
            <svg
              height="24"
              role="presentation"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                fill="currentColor"
                fillRule="evenodd"
              ></path>
            </svg>
            <span className="hidden sm:inline">LinkedIn</span>
          </a>
          <a
            className="focusable flex flex-none cursor-pointer items-center justify-center gap-2 rounded-md bg-black py-2 px-2.5 font-medium text-white shadow-lg shadow-indigo-500/10 transition selection:bg-white/30 hover:bg-green-600 hover:shadow-indigo-500/5 focus:ring-green-500/40 dark:bg-green-400 dark:text-zinc-900 dark:shadow-indigo-400/10 dark:selection:bg-zinc-900/30 dark:hover:bg-green-400/80 dark:hover:shadow-indigo-400/5 dark:focus:ring-green-400/40 sm:w-auto sm:px-3 sm:pl-2.5"
            href="https://github.com/joshimanshu"
            rel="noreferrer"
            target="_blank"
          >
            <svg
              height="24"
              role="presentation"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                d="M12 2C6.475 2 2 6.47 2 11.988c0 4.42 2.862 8.153 6.838 9.476.5.087.687-.212.687-.474 0-.238-.013-1.024-.013-1.86C7 19.59 6.35 18.517 6.15 17.955c-.113-.287-.6-1.174-1.025-1.411-.35-.187-.85-.65-.013-.662.788-.012 1.35.724 1.538 1.024.9 1.51 2.338 1.086 2.912.824.088-.65.35-1.086.638-1.336-2.225-.25-4.55-1.111-4.55-4.931 0-1.087.387-1.986 1.025-2.685-.1-.25-.45-1.273.1-2.646 0 0 .837-.263 2.75 1.023a9.29 9.29 0 0 1 2.5-.337c.85 0 1.7.113 2.5.337 1.912-1.298 2.75-1.023 2.75-1.023.55 1.373.2 2.397.1 2.646.637.7 1.025 1.586 1.025 2.685 0 3.832-2.337 4.681-4.562 4.931.362.312.675.912.675 1.848 0 1.336-.013 2.41-.013 2.747 0 .262.188.574.688.474C19.137 20.141 22 16.395 22 11.988 22 6.47 17.525 2 12 2Z"
                fill="currentColor"
                fillRule="evenodd"
              ></path>
            </svg>
            <span className="hidden sm:inline">GitHub</span>
          </a>
          <a
            className="focusable flex flex-none cursor-pointer items-center justify-center gap-2 rounded-md bg-red-500 py-2 px-2.5 font-medium text-white shadow-lg shadow-lime-500/10 transition selection:bg-white/30 hover:bg-red-500/80 hover:shadow-lime-500/5 focus:ring-lime-500/40 dark:bg-red-400 dark:text-zinc-900 dark:shadow-lime-400/10 dark:selection:bg-zinc-900/30 dark:hover:bg-red-400/80 dark:hover:shadow-lime-400/5 dark:focus:ring-lime-400/40 sm:w-auto sm:px-3 sm:pl-2.5"
            href="mailto:joshihimanshu245@gmail.com"
          >
            <svg
              height="24"
              role="presentation"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                d="M7.727 2.959A10 10 0 0 1 22 11.999v.9a3.7 3.7 0 0 1-6.642 2.244 4.6 4.6 0 1 1-.741-6.928A1 1 0 0 1 16.6 8.4v4.5a1.7 1.7 0 1 0 3.4 0V12a8 8 0 1 0-3.136 6.353 1 1 0 1 1 1.216 1.587A10 10 0 1 1 7.727 2.96Zm6.873 9.04a2.6 2.6 0 1 0-5.2 0 2.6 2.6 0 0 0 5.2 0Z"
                fill="currentColor"
                fillRule="evenodd"
              ></path>
            </svg>
            <span className="hidden sm:inline">Email</span>
          </a>
          <a
            className="focusable flex flex-none cursor-pointer items-center justify-center gap-2 rounded-md bg-blue-500 py-2 px-2.5 font-medium text-white shadow-lg shadow-blue-500/10 transition selection:bg-white/30 hover:bg-blue-500/80 hover:shadow-blue-500/5 focus:ring-blue-500/40 dark:bg-blue-400 dark:text-zinc-900 dark:shadow-blue-400/10 dark:selection:bg-zinc-900/30 dark:hover:bg-blue-400/80 dark:hover:shadow-blue-400/5 dark:focus:ring-blue-400/40 sm:w-auto sm:px-3 sm:pl-2.5"
            href="https://twitter.com/himanshuJ144"
            rel="noreferrer"
            target="_blank"
          >
            <svg
              height="24"
              role="presentation"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                d="M21.5 5.894a7.571 7.571 0 0 1-2.239.636 4.024 4.024 0 0 0 1.714-2.235 7.646 7.646 0 0 1-2.475.98A3.83 3.83 0 0 0 15.654 4c-2.516 0-4.366 2.433-3.797 4.959-3.239-.168-6.111-1.776-8.034-4.22-1.021 1.816-.53 4.19 1.206 5.393a3.78 3.78 0 0 1-1.765-.505c-.043 1.87 1.252 3.622 3.126 4.011-.548.155-1.15.19-1.76.07.495 1.604 1.934 2.771 3.641 2.804A7.642 7.642 0 0 1 2.5 18.185 10.757 10.757 0 0 0 8.476 20c7.237 0 11.326-6.334 11.079-12.015a8.101 8.101 0 0 0 1.945-2.09Z"
                fill="currentColor"
                fillRule="evenodd"
              ></path>
            </svg>
            <span className="hidden sm:inline">Twitter</span>
          </a>
        </div>
      </div>

      <section className="py-24 ">
        <span className="flex items-center mb-8 justify-center text-center">
          <div className="bg-back-subtle p-2 mr-4 rounded-full">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
              className="text-2xl text-accent"
            >
              <path d="M94.09 57L33 209.7V327h174V217h-87c-23.75 0-41-23-41-49s17.25-49 41-49h50.7l-24.8-62zm272.01 0L305 209.7V489h174V209.7L417.9 57zm25.9 62c23.8 0 41 23 41 49s-17.2 49-41 49-41-23-41-49 17.2-49 41-49zm-272 18c-11.6 0-23 12.8-23 31s11.4 31 23 31h169.9l24.8-62zm272 0c-11.6 0-23 12.8-23 31s11.4 31 23 31 23-12.8 23-31-11.4-31-23-31zM33 345v144h254V345z"></path>
            </svg>
          </div>
          <h4
            className="text-xl text-accent font-semibold"
            data-sider-select-id="191fca8c-5d03-414e-81ca-af1d2f53c78c"
          >
            Toolbox
          </h4>
        </span>
        <ul className="grid grid-cols-2 sm:grid-cols-4 gap-6 ">
          <li className="flex items-center">
            <i
              className="devicon-html5-plain"
              data-sider-select-id="77ef8be6-7a76-47c9-ab1b-680f8c0a614b"
            ></i>
            <span className="ml-2">HTML</span>
          </li>
          <li className="flex items-center">
            <i className="devicon-css3-plain"></i>
            <button className="ml-2 hover:bg-gradient-to-r from-blue-500 to-purple-500 rounded-md border border-gradient hover:border-transparent px-3 py-1 transition duration-300">
              CSS
            </button>
          </li>
          <li className="flex items-center">
            <i className="devicon-javascript-plain"></i>
            <span className="ml-2">JavaScript</span>
          </li>
          <li className="flex items-center">
            <i className="devicon-typescript-original"></i>
            <span className="ml-2">TypeScript</span>
          </li>
          <li className="flex items-center">
            <i className="devicon-java-plain"></i>
            <span className="ml-2">Java</span>
          </li>
          <li className="flex items-center">
            <i className="devicon-nodejs-plain"></i>
            <span className="ml-2">Node.js</span>
          </li>
          <li className="flex items-center">
            <i className="devicon-react-original"></i>
            <span className="ml-2">React.js</span>
          </li>
          <li className="flex items-center">
            <i className="devicon-nextjs-original-wordmark colored"></i>
            <span className="ml-2">Next.js</span>
          </li>
          <li className="flex items-center">
            <i className="devicon-tailwindcss-plain"></i>
            <span className="ml-2">Tailwind CSS</span>
          </li>
          <li className="flex items-center">
            <i className="devicon-npm-original-wordmark"></i>
            <span className="ml-2">NPM</span>
          </li>
          <li className="flex items-center">
            <i className="devicon-azuresqldatabase-plain"></i>
            <span className="ml-2">Database</span>
          </li>
          <li className="flex items-center">
            <i className="devicon-express-original"></i>
            <span className="ml-2">Express.js</span>
          </li>
          <li className="flex items-center">
            <i className="devicon-vscode-plain"></i>
            <span className="ml-2">VS-Code</span>
          </li>
          <li className="flex items-center">
            <i className="devicon-git-plain"></i>
            <span className="ml-2">Git</span>
          </li>
          <li className="flex items-center">
            <i className="devicon-github-plain"></i>
            <span className="ml-2">Github</span>
          </li>
          <li className="flex items-center">
            <i className="devicon-googlecloud-plain"></i>
            <span className="ml-2">DevOps</span>
          </li>
          <li className="flex items-center">
            <i className="devicon-githubactions-plain"></i>
            <span className="ml-2">CI/CD</span>
          </li>
          <li className="flex items-center">
            <i className="devicon-linux-plain"></i>
            <span className="ml-2">Linux</span>
          </li>
          <li className="flex items-center">
            <i className="devicon-mongodb-plain"></i>
            <span className="ml-2">MongoDb</span>
          </li>
          <li className="flex items-center">
            <i className="devicon-amazonwebservices-plain-wordmark "></i>
            <span className="ml-2">AWS</span>
          </li>
        </ul>
      </section>

      <section className="container mt-16 ">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6 ">
          Experience and Open-Source Contributions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-1 divide-y divide-gray-200 dark:divide-gray-700 gap-8">
          <div className="flex py-5 flex-col lg:flex-row lg:items-start">
            <img
              src="./company/alphaloop.jpeg"
              alt="Company 1 Logo"
              className="h-20 w-20 mx-4 mt-5 lg:mt-0 lg:mr-4"
            />
            <div className="">
              <div className="flex flex-col my-5 items-start  lg:flex-row lg:items-center lg:-mt-2">
                {/* Added a wrapper to align title and span in a row */}
                <h3 className="text-xl font-semibold text-gray-900 mx-4 dark:text-gray-100 mb-2 mt-4">
                  Jr. Software Engineer (Founding team)
                </h3>
                <span
                  className="ml-5 inline-block flex-none translate-y-px rounded bg-zinc-100 p-1 text-xs font-medium leading-none text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400 border-2 border-gradient"
                  data-sider-select-id="a331a226-7d50-4681-a122-196f5942d2bd"
                >
                  Aug - 2023
                  <span className="text-zinc-350 dark:text-zinc-550 mx-0.5">
                    —
                  </span>
                  present
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-2 mx-4">
                As a Junior Software Developer at Alphaloop IT, I have a good
                foundation in full-stack development, specializing in MERN stack
                technologies and Next.js. With a keen understanding of the
                DevOps lifecycle, I am proficient in implementing CI/CD
                pipelines to ensure seamless project delivery with Github
                Actions.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-2 mx-4 lg:mx-7">
                - Digital Marketing Collaboration: I have collaborated with
                digital marketing teams to enhance client&rsquo;s website visibility
                and optimize online presence for business growth.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-2 mx-4 lg:mx-7">
                - I&rsquo;m really good at figuring out what clients need and turning
                those ideas into plans we can use to make things
              </p>
            </div>
          </div>
          <div className="flex py-5 flex-col lg:flex-row lg:items-start">
            <img
              src="./company/cncf-logo.png"
              alt="CNCF"
              className="h-20 w-20 mx-4 mt-5 lg:mt-0 lg:mr-4"
            />
            <div className="">
              <div className="flex flex-col my-5 items-start  lg:flex-row lg:items-center lg:-mt-2">
                <h3 className="text-xl font-semibold text-gray-900 mx-4 dark:text-gray-100 mb-2 mt-4">
                  CNCF Mentee & Open-source Contributor
                </h3>
                <span
                  className="ml-1.5 inline-block flex-none translate-y-px rounded bg-zinc-100 p-1 text-xs font-medium leading-none text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400 border-2 border-gradient"
                  data-sider-select-id="a331a226-7d50-4681-a122-196f5942d2bd"
                >
                  Oct-2023
                  <span className="text-zinc-350 dark:text-zinc-550 mx-0.5">
                    —
                  </span>
                  Present
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-2 mx-4">
                During my internship with the Cloud Native Computing Foundation
                (CNCF), I participated in the Zero to Merge Incubator Program,
                contributing remotely.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-2 mx-4 lg:mx-7">
                - Recognition: Acknowledged as one of the initial program
                participants, highlighting my commitment to learning and
                contributing. Program Engagement: Engaged in a comprehensive
                four-week program focused on essential skills development.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-4 mx-7">
                {" "}
                - Activities: I actively participated in identifying issues,
                collaborating on open GitHub problems, and submitting Pull
                Requests (PRs) for review.{" "}
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-4 mx-7">
                {" "}
                - Learning: Through this experience, I gained valuable insights
                into cloud-native technologies, enhancing my understanding of
                modern computing practices.
              </p>
            </div>
          </div> 
        </div>
      </section>

      <section className="group h-72 flex flex-col items-center justify-center my-32 ">
        <h3 className="text-3xl flex items-center gap-x-2 font-bold">
          <span className="bg-back-subtle p-1 rounded-full">
         
          </span>
          Get in touch
        </h3>
        <div className="text-fore-subtle my-3 text-center space-y-4">
          <p>
            While I&apos;m always looking for new opportunities, I &rsquo;m currently
            looking for an awesome team to code with.
          </p>
        </div>
        <a
          href="mailto:joshihimanshu245@gmail.com"
          className="text-white px-12 py-3 mt-8 text-lg bg-gradient-to-r from-accent to-violet-400 rounded from-pink-500 hover:to-yellow-500"
        >
          Say Hii👋
        </a>
      </section>
    </>
  );
}
