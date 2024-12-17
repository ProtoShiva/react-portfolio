import React from "react"
import { CONTACT } from "../constants"
import { motion } from "framer-motion"
import { BsTelephoneFill } from "react-icons/bs"
import { IoLogoWhatsapp } from "react-icons/io"
const Contact = () => {
  return (
    <div
      id="contact"
      className="border-b border-neutral-900 pb-20 dark:text-white text-slate-900 "
    >
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        Get in Touch
      </motion.h1>
      <div className="text-center tracking-tighter">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-4 dark:text-white text-slate-900 "
        >
          {CONTACT.address}
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="my-4 dark:text-white text-slate-900 flex justify-center items-center gap-2  "
        >
          <BsTelephoneFill className="dark:text-white text-black text-xl" />
          {CONTACT.phoneNo}
        </motion.p>

        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="my-4 dark:text-white text-slate-900 flex justify-center items-center gap-2 "
        >
          <IoLogoWhatsapp className="text-xl dark:text-white text-black" />
          {CONTACT.Whatsapp}
        </motion.p>

        <a href="#" className="border-b dark:text-white text-slate-900 ">
          {CONTACT.email}
        </a>
      </div>
    </div>
  )
}

export default Contact
