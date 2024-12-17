import React from "react"
import { PROJECTS } from "../constants"
import { motion } from "framer-motion"
const Project = () => {
  return (
    <div id="pro" className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl dark:text-white text-slate-900 "
      >
        My Projects
      </motion.h1>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-16 flex flex-wrap lg:justify-center ">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4 mr-6"
            >
              <img
                src={project.image}
                width={150}
                height={150}
                alt={project.title}
                className="mb-6 rounded-lg object-cover w-full h-full"
              />
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <div className="flex justify-between mb-4 mt-3">
                <h6 className="mb-2 font-semibold dark:text-white text-slate-900 w-12 sm:w-fit">
                  {project.title}
                </h6>
                <div className="flex justify-center gap-6 w-[65%]">
                  {" "}
                  <a
                    href={project.source}
                    target="_blank"
                    className="cursor-pointer hover:bg-cyan-500 h-fit p-2 rounded bg-neutral-900 flex  justify-center items-center text-sm font-medium transition duration-300 ease-in-out "
                  >
                    Source code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    className="cursor-pointer  hover:bg-cyan-500 p-2 h-fit rounded bg-neutral-900 flex justify-center items-center text-sm font-medium transition duration-400 ease-in-out"
                  >
                    Live Website
                  </a>
                </div>
              </div>

              <p className="mb-4 text-neutral-600 dark:text-neutral-400 ">
                {project.description}
              </p>
              <div className="flex flex-wrap">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-cyan-500 content-around mt-2"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Project
