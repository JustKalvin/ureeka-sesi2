"use client";

import Image from "next/image";
import {
  CardBody,
  CardContainer,
  CardItem,
} from "../../../components/ui/3d-card";
import PhotoProfile from "../../../images/pp_linkedin.jpg"
import { motion } from "framer-motion";

const typingContainer = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.2 * i },
  }),
};

const typingText = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};


const about = () => {

  return(
    <div style={{height : "1000px"}}>
       <CardContainer className="bg-white dark:bg-black rounded-3xl p-6 shadow-xl">
      <CardBody className="bg-gray-100 dark:bg-gray-900 rounded-2xl overflow-hidden">
        <CardItem
          translateZ={40}
          className="text-xl font-bold text-center text-gray-800 dark:text-white"
        >
          Photo Profile
        </CardItem>

        <CardItem translateZ={30} className="mt-4">
          <Image
            src={PhotoProfile} // ganti dengan gambar kamu
            alt="Logo"
            width={300}
            height={200}
            className="rounded-xl object-cover"
          />
        </CardItem>

        <CardItem
          translateZ={20}
          className="mt-4 text-center text-gray-600 dark:text-gray-300"
        >
          Kalvin, Your Bae
        </CardItem>

        <CardItem
          translateZ={10}
          translateY={20}
          className="mt-6 text-center"
        >
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
            Klik Saya
          </button>
        </CardItem>
      </CardBody>
    </CardContainer>
    <div className="mt-10 text-center px-4">
    <motion.h2
      className="text-2xl font-semibold text-gray-800 dark:text-white"
      variants={typingContainer}
      initial="hidden"
      animate="visible"
    >
      {"Hello, I’m Kalvin 👋".split("").map((char, index) => (
        <motion.span key={index} variants={typingText}>
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.h2>
      <p className="mt-2 text-gray-600 dark:text-black-300 max-w-xl mx-auto">
        I'm currently pursuing my studies at <strong>Bina Nusantara University</strong> with a passion for technology, creativity, and innovation. I love building projects that make a difference and constantly strive to grow as a developer and designer.
      </p>
    </div>

    </div>
  )
}
export default about;