"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { FaCalendarDays, FaLocationDot, FaGraduationCap } from "react-icons/fa6";
import {
    FaCode,
    FaFolderOpen,
    FaLaptopCode,
    FaBullseye,
    FaArrowRight,
} from "react-icons/fa";

export default function About() {

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
        <section
            id="sobre-mi"
            className="min-h-screen pt-32 pb-10 scroll-mt-1">
            <div className="max-w-7xl mx-auto px-6 lg:px-3 grid grid-cols-1 lg:grid-cols-[35%_65%] gap-6 lg:gap-10">
                <div className="flex flex-col items-center lg:items-start">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <Image
                            src="/images/mi-foto.jpg"
                            alt="Alfredo Sánchez"
                            width={400}
                            height={400}
                            className="w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] lg:w-[400px] lg:h-[400px] rounded-lg object-cover object-top"
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                        className="mt-10 flex flex-wrap gap-4 justify-center lg:justify-start"
                    >
                        <div className="w-[122px] h-[134px] rounded-lg bg-[#1E293B] flex flex-col items-center justify-between py-4 transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(59,130,246,0.25)]">
                            <FaCalendarDays size={24} className="text-[#3B82F6]" />
                            <span className="font-['Sora',sans-serif] text-[18px] font-medium text-[#CBD5E1]"> 27 años </span>
                            <span className="font-['Inter',sans-serif] text-[16px] font-normal text-[#CBD5E1]"> Edad </span>
                        </div>

                        <div className="w-[122px] h-[134px] rounded-lg bg-[#1E293B] flex flex-col items-center justify-between py-4 transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(59,130,246,0.25)]">
                            <FaLocationDot size={24} className="text-[#3B82F6]" />
                            <span className="font-['Sora',sans-serif] text-[18px] font-medium text-[#CBD5E1]"> Turrialba </span>
                            <span className="font-['Inter',sans-serif] text-[16px] font-normal text-[#CBD5E1]"> Ubicación </span>
                        </div>

                        <div className="w-[122px] h-[134px] rounded-lg bg-[#1E293B] flex flex-col items-center justify-between py-4 transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(59,130,246,0.25)]">
                            <FaGraduationCap size={24} className="text-[#3B82F6]" />
                            <span className="w-full text-center font-['Sora',sans-serif] text-[18px] font-medium text-[#CBD5E1] leading-tight">Informática Empresarial</span>
                            <span className="font-['Inter',sans-serif] text-[16px] font-normal text-[#CBD5E1]"> UCR </span>
                        </div>
                    </motion.div>

                </div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                        hidden: {},
                        visible: {
                            transition: {
                                staggerChildren: 0.15,
                            },
                        },
                    }}
                >

                    <div>

                        <motion.p className="mt-3 font-['Inter',sans-serif] text-[16px] font-medium leading-9 text-[#3B82F6]"
                            variants={itemVariants}>
                            SOBRE MI
                        </motion.p>

                        <motion.h2 className="font-['Sora',sans-serif] text-[32px] lg:text-[40px] font-bold text-[#CBD5E1]"
                            variants={itemVariants}>
                            Conociendo un poco sobre mí
                        </motion.h2>

                        <motion.hr className="w-16 md:w-20 border-t-4 border-[#3B82F6] my-3 md:mx-0"
                            variants={itemVariants} />

                        <motion.p className="mt-3 font-['Inter',sans-serif] text-[17px] lg:text-[18px] leading-8 lg:leading-9 text-[#CBD5E1] text-left md:text-justify"
                            variants={itemVariants}>
                            Soy estudiante de Informática Empresarial en la Universidad de Costa Rica, apasionado por el desarrollo de software y la resolución de problemas. Me especializo en el desarrollo web full stack y disfruto crear soluciones que generen un impacto positivo en las personas.
                        </motion.p>
                        <motion.p className="mt-3 font-['Inter',sans-serif] text-[17px] lg:text-[18px] leading-8 lg:leading-9 text-[#CBD5E1] text-left md:text-justify"
                            variants={itemVariants}>
                            Me considero una persona responsable, curiosa y con muchas ganas de aprender. Disfruto trabajar en equipo y asumir nuevos retos que me permitan seguir creciendo profesionalmente.
                        </motion.p>

                    </div>

                    <motion.div variants={itemVariants}>
                        <a
                            href="/CV_Geovanni Alfredo Sánchez Chaves.pdf" download
                            className="mt-10 w-full sm:w-[250px] h-[56px] flex items-center justify-center gap-2 rounded-lg border border-[#3B82F6] font-['Inter',sans-serif] text-[16px] font-semibold text-[#3B82F6] transition-all duration-300 hover:bg-[#3B82F6] hover:text-white hover:-translate-y-1 active:translate-y-0">
                            <span>Conoce mi experiencia</span>
                            <FaArrowRight size={18} />
                        </a>

                    </motion.div>

                    <motion.div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-6" variants={itemVariants}>

                        <div className="flex flex-col items-start lg:border-r lg:border-[#1E293B] px-2 sm:px-6 transition-all duration-300 hover:-translate-y-1">
                            <FaCode size={24} className="text-[#3B82F6]" />
                            <span className="mt-2 font-['Sora',sans-serif] text-3xl font-bold text-[#CBD5E1]">
                                6+
                            </span>
                            <span className="font-['Inter',sans-serif] text-sm text-[#CBD5E1]">
                                Años aprendiendo a programar.
                            </span>
                        </div>

                        <div className="flex flex-col items-start lg:border-r lg:border-[#1E293B] px-2 sm:px-6 transition-all duration-300 hover:-translate-y-1">
                            <FaFolderOpen size={24} className="text-[#3B82F6]" />
                            <span className="mt-2 font-['Sora',sans-serif] text-3xl font-bold text-[#CBD5E1]">
                                10+
                            </span>
                            <span className="font-['Inter',sans-serif] text-sm text-[#CBD5E1]">
                                Proyectos completados.
                            </span>
                        </div>

                        <div className="flex flex-col items-start lg:border-r lg:border-[#1E293B] px-2 sm:px-6 transition-all duration-300 hover:-translate-y-1">
                            <FaLaptopCode size={24} className="text-[#3B82F6]" />
                            <span className="mt-2 font-['Sora',sans-serif] text-3xl font-bold text-[#CBD5E1]">
                                30+
                            </span>
                            <span className="font-['Inter',sans-serif] text-sm text-[#CBD5E1]">
                                Tecnologías dominadas.
                            </span>
                        </div>

                        <div className="flex flex-col items-start transition-all duration-300 hover:-translate-y-1">
                            <FaBullseye size={24} className="text-[#3B82F6]" />
                            <span className="mt-2 font-['Sora',sans-serif] text-3xl font-bold text-[#CBD5E1]">
                                100%
                            </span>
                            <span className="font-['Inter',sans-serif] text-sm text-[#CBD5E1]">
                                Comprometido con mi crecimiento.
                            </span>
                        </div>

                    </motion.div>

                </motion.div>

            </div>
        </section>
    );
}