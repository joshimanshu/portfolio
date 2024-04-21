"use client";

import React from "react";

const Projects = () => {
  return (
    <>
      <section className="flex flex-col min-h-screen flex-grow max-w-screen-lg px-5 mt-16 md:px-12 lg:px-20 ">
        <div
          className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative my-7"
          role="alert"
        >
          <strong className="font-bold">Flagged Account ! </strong>
          <span className="block sm:inline">
            My Github Account has been Flagged, Public profile is not Visible
            Right Now.{" "}
          </span>
          <br />
          <a href="https://github.com/himanshuJ011/">
            https://github.com/himanshuJ011/
          </a>
          <span className="absolute top-0 bottom-0 right-0 px-4 py-3"></span>
        </div>

        <div
          className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative my-7"
          role="alert"
        >
          <strong className="font-bold">Here is Backup Account ! </strong>
          <br />
          <a href="https://github.com/joshimanshu/">
            https://github.com/joshimanshu
          </a>
          <span className="absolute top-0 bottom-0 right-0 px-4 py-3"></span>
        </div>
        <h1 className="text-2xl md:text-5xl mb-12 font-bold">Projects</h1>

        <div className="grid grid-cols-1 space-y-5 sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-5">
          <div className="max-w-sm rounded overflow-hidden shadow-lg border from-green-400 to-red-400">
            <img
              className="w-full min-h-64"
              src="/Projects/EMP.png"
              alt="Employee Management System"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">
                Employee Management System
              </div>
              <p className="text-w-700 text-base">
                Build a Employee Management System with Java and AWT, Utilize
                MYSQl for Database
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-yellow-700 mr-2 mb-2">
                #Java
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #Swing
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #SQL
              </span>
            </div>
          </div>

          <div className="max-w-sm rounded overflow-hidden shadow-lg border from-green-400 to-red-400">
            <img
              className="w-full h-1/64"
              src="/Projects/IMP.jpg"
              alt="Inventory Management System"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">
                Inventory Management System
              </div>
              <p className="text-w-700 text-base">
                Create a Inventory Management System with MERN Stack, Add
                Authenticationa and Authorization using JWt
              </p>
            </div>
            <div className="px-6 pt-4 pb-4">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-yellow-700 mr-2 mb-2">
                #Nodejs
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #MongoDB
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #React
              </span>
            </div>
          </div>

          <div className="max-w-sm rounded overflow-hidden shadow-lg border from-green-400 to-red-400">
            <img
              className="w-full min-h-40"
              src="/Projects/bot.webp"
              alt="Discord Bot"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Discord-AI Bot</div>
              <p className="text-w-700 text-base">
                Crafted a Node.js Discord AI bot leveraging OpenAI API,
                empowering seamless interaction and intelligent responses within
                Discord communities.{" "}
              </p>
            </div>
            <div className="px-6 pt-4 pb-4">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-yellow-700 mr-2 mb-2">
                #Nodejs
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #OPEN-AI
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #Discord
              </span>
            </div>
          </div>

          {/* <CardContainer className="inter-var ">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black/40 dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-full lg:min-w-[21rem] lg:max-w-[30rem] h-auto rounded-xl p-6 border ">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                Make things float in air
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                Hover over this card to unleash the power of CSS perspective
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src={"/profile.jpeg"}
                  height="700"
                  width="700"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
            </CardBody>
          </CardContainer> */}
        </div>
      </section>
    </>
  );
};

export default Projects;
