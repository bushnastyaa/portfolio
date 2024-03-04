'use client';

import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-8 text-4xl sm:text-5xl lg:text-8xl lg:leading-tight font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-400">
              Фронтенд-разработчик
            </span>
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg lg:leading-relaxed mb-6 lg:text-xl">
            Привет, я Бушмакина Анастасия <br />
            Фронтенд-разработчик из Санкт-Петербурга
          </p>
          <div>
            <a
              href="#contact"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full 
              bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Связаться со мной
              </span>
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full w-[270px] h-[240px] lg:w-[430px] lg:h-[400px] relative">
            <Image
              src="/images/avatar.png"
              alt="hero image"
              className="absolute"
              fill
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
};

export default Hero;
