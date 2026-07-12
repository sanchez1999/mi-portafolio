"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { MdEmail } from "react-icons/md";

export default function Hero() {

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="inicio" className="min-h-screen flex items-center mt-10 py-24 pt-32 md:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-3 grid grid-cols-1 md:grid-cols-2 gap-10">

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.25,
              },
            },
          }}
        >
          <div>
            <motion.p className="font-['Sora',sans-serif] text-[16px] md:text-[18px] lg:text-[20px] font-medium text-[#CBD5E1]"
              variants={itemVariants}
            >
              Hola, soy
            </motion.p>

            <motion.h1 className="font-['Sora',sans-serif] text-[40px] md:text-[56px] lg:text-[72px] font-bold leading-tight text-[#CBD5E1]"
              variants={itemVariants}
            >
              Alfredo Sánchez
            </motion.h1>

            <motion.h3 className="font-['Sora',sans-serif] text-[24px] md:text-[28px] lg:text-[32px] font-semibold text-[#CBD5E1]"
              variants={itemVariants}
            >
              Desarrollador Full Stack
            </motion.h3>

            <motion.hr className="w-16 md:w-20 border-t-4 border-[#3B82F6] my-3 mx-auto md:mx-0"
              variants={itemVariants}
            />

            <motion.p className="mt-6 max-w-xl font-['Inter',sans-serif] text-[16px] md:text-[18px] lg:text-[18px] font-normal text-[#CBD5E1] text-justify"
              variants={itemVariants}
            > Estudiante de Informática Empresarial en la Universidad de Costa Rica, enfocado en el desarrollo de software full stack, bases de datos y creación de soluciones digitales eficientes.
            </motion.p>

            <motion.div className="mt-8 flex flex-col sm:flex-row gap-4"
              variants={itemVariants}
            >
              <a href="#proyectos"
                className="flex items-center justify-center w-full sm:w-[200px] h-[56px] rounded-lg bg-[#3B82F6] font-['Inter',sans-serif] text-[16px] font-semibold text-white transition-all duration-300 hover:bg-[#2563EB] hover:-translate-y-1 active:translate-y-0">
                Ver proyectos
              </a>

              <a
                href="/CV_Geovanni Alfredo Sánchez Chaves.pdf" download
                className="w-full sm:w-[250px] h-[56px] flex items-center justify-center gap-2 rounded-lg border border-[#3B82F6] font-['Inter',sans-serif] text-[16px] font-semibold text-[#3B82F6] transition-all duration-300 hover:bg-[#3B82F6] hover:text-white hover:-translate-y-1 active:translate-y-0">
                <FiDownload size={18} />
                <span>Descargar CV</span>
              </a>
            </motion.div>

            <motion.div className="mt-8 flex justify-center md:justify-start items-center gap-12"
              variants={itemVariants}
            >

              <a
                href="https://github.com/sanchez1999"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#CBD5E1] transition-all duration-300 hover:text-[#3B82F6] hover:scale-110"
              >
                <FaGithub size={32} />
              </a>

              <a
                href="https://www.linkedin.com/in/alfredo-sanchez-chaves-9732a3259/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#CBD5E1] transition-all duration-300 hover:text-[#3B82F6] hover:scale-110"
              >
                <FaLinkedin size={32} />
              </a>

              <a
                href="mailto:sanchezalfredo590@gmail.com"
                title="Enviar correo"
                className="text-[#CBD5E1] transition-all duration-300 hover:text-[#3B82F6] hover:scale-110"
              >
                <MdEmail size={32} />
              </a>

            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        >
          <div className="flex justify-center">
            <div className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] rounded-full object-cover">
              <div className="absolute inset-0 bg-sky-400 blur-3xl opacity-30"></div>

              <Image src="/images/img-hero.png" alt="Alfredo Sánchez Chaves" width={450} height={450} className="relative rounded-full object-cover" />

            </div>
          </div>
        </motion.div>

      </div>
    </section >
  );
}