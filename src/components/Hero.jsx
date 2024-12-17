import React from "react"
import { HERO_CONTENT } from "../constants"
import profilePic from "../assets/himuPic.jpg"
import CV from "../assets/Himanshu_Gusain_resume.pdf"

import { motion } from "framer-motion"

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
})
const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-6 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl text-slate-900  dark:text-white"
            >
              Himanshu Gusain
            </motion.h1>
            <motion.div
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="flex  items-center gap-10 mb-5"
            >
              <img
                src={profilePic}
                alt="photo"
                className="size-24 object-cover rounded-full"
              />
              <a href={CV} download>
                <button className="ml-3 p-4 w-28 bg-red-500 border-solid rounded-md transition duration-200 ease-in-out transform hover:scale-105 active:scale-95 focus:outline-none text-xl">
                  Resume
                </button>
              </a>
            </motion.div>

            <div className="flex items-center">
              <motion.span
                variants={container(0.5)}
                initial="hidden"
                animate="visible"
                className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent inline"
              >
                Full Stack Developer
              </motion.span>
            </div>

            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light text-xl tracking-tighter text-slate-900 cursor-pointer dark:text-white"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
