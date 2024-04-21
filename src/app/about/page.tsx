import Image from "next/image";
import React from "react";


const About = () => {
  return (
    <>
      <section className="flex flex-col min-h-screen container flex-grow max-w-screen-lg px-5 m-auto mt-16 md:px-12 lg:px-20 ">
        <h1 className="text-2xl md:text-3xl mb-12 font-bold">About me</h1>
        <div className="flex flex-col justify-items-center ">
          <div className="relative max-w-[200px] sm:mb-0 md:max-w-sm  lg:mb-12">
            <Image
              alt="Developer avatar"
              width="270"
              height="270"
              className="w-fit rounded-full align-middle justify-center"
              src="./profile.jpeg"
            />
          </div>
          <div className="flex-1 mt-12 lg:mt-0 md:mt-0 flex flex-col justify-start gap-y-4 pr-12">
            <div className="text-fore-primary mb-8 space-y-4">
              <p>
                My name is Himanshu joshi, I am Jr. Software Developer at
                Alphaloop IT (Founding Team). Currently I am pursuing my B.tech
                in Computer Science and Engineering from Techno India NJR,
                Udaipur (Raj).
              </p>
              <p>
                Throughout my academic journey, I have cultivated a strong
                foundation in full-stack development (MERN), acquiring
                comprehensive knowledge and practical skills in modern
                technologies. I have learned different programming languages
                like C++, Java and Javascript and software development
                methodologies. Additionally, I actively engage in hands-on
                projects and collaborations, leveraging platforms like GitHub to
                showcase my skills and contribute to innovative solutions.{" "}
              </p>
              <p>Get in touch to Build something innovative together!</p>
            </div>
            <div className="flex items-center">
              <a
                href="https://drive.google.com/file/d/13Nfe3tGV5bVTud6701Tccoa9n4lO1Alz/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="flex items-center mr-4 text-fore-primary border-2 border-accent w-fit px-4 py-1 rounded cursor-pointer hover:text-accent transition-colors"
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
              <span className="flex gap-x-5 ml-2">
                <a
                  href="mailto:joshihimanshu245@gmail.com"
                  className="group cursor-pointer"
                  aria-label="Email"
                  title="Email"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-xl text-fore-subtle group-hover:-translate-y-2 transition-transform"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10h5v-2h-5c-4.34 0-8-3.66-8-8s3.66-8 8-8 8 3.66 8 8v1.43c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57V12c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5c1.38 0 2.64-.56 3.54-1.47.65.89 1.77 1.47 2.96 1.47 1.97 0 3.5-1.6 3.5-3.57V12c0-5.52-4.48-10-10-10zm0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"></path>
                  </svg>
                </a>
                <a
                  href="https://github.com/joshimanshu"
                  className="group cursor-pointer"
                  aria-label="Github"
                  title="Github"
                >
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-xl text-fore-subtle group-hover:-translate-y-2 transition-transform"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/himanshujoshi011/"
                  className="group cursor-pointer"
                  aria-label="Linkedin"
                  title="Linkedin"
                >
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-xl text-fore-subtle group-hover:-translate-y-2 transition-transform"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
              </span>
            </div>
          </div>
          <div className="mt-10 mb-20  ">
            <h1 className="text-2xl md:text-3xl mb-7 font-bold">Skills</h1>
            <ul className="space-y-2 ">
              <li className="mx-3">🤹🏼‍♂️ Problem Solving</li>
              <li className="mx-3">🌐 Fullstack Development</li>
              <li className="mx-3">💻 Open-Source Contributor</li>
              <li className="mx-3">👨‍💼 Leadership</li>
              <li className="mx-3">🎨 Creative</li>
              <li className="mx-3">📚 Curious</li>
              <li className="mx-3">🤝🏼 Team Spirit</li>
              <li className="mx-3">🧠 Active Learner</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
