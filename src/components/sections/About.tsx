import Image from "next/image";
import { FaCalendarDays, FaLocationDot, FaGraduationCap } from "react-icons/fa6";
import {
    FaCode,
    FaFolderOpen,
    FaLaptopCode,
    FaBullseye,
    FaArrowRight,
} from "react-icons/fa";

export default function About() {
    return (
        <section
            id="sobre-mi"
            className="min-h-screen pt-27 py-10">
            <div className="max-w-7xl mx-auto px-6 lg:px-3 grid grid-cols-1 lg:grid-cols-[35%_65%] gap-10">
                <div>
                    <div className="flex justify-center lg:justify-start">
                        <Image
                            src="/images/mi-foto.jpg"
                            alt="Alfredo Sánchez"
                            width={400}
                            height={400}
                            className="w-[400px] h-[400px] rounded-lg object-cover object-top"
                        />
                    </div>

                    <div className="mt-10 flex gap-4 justify-center lg:justify-start">
                        <div className="w-[122px] h-[134px] rounded-lg bg-[#1E293B] flex flex-col items-center justify-between py-4">
                            <FaCalendarDays size={24} className="text-[#3B82F6]" />
                            <span className="font-['Sora',sans-serif] text-[18px] font-medium text-[#CBD5E1]"> 27 años </span>
                            <span className="font-['Inter',sans-serif] text-[16px] font-normal text-[#CBD5E1]"> Edad </span>
                        </div>

                        <div className="w-[122px] h-[134px] rounded-lg bg-[#1E293B] flex flex-col items-center justify-between py-4">
                            <FaLocationDot size={24} className="text-[#3B82F6]" />
                            <span className="font-['Sora',sans-serif] text-[18px] font-medium text-[#CBD5E1]"> Turrialba </span>
                            <span className="font-['Inter',sans-serif] text-[16px] font-normal text-[#CBD5E1]"> Ubicación </span>
                        </div>

                        <div className="w-[122px] h-[134px] rounded-lg bg-[#1E293B] flex flex-col items-center justify-between py-4">
                            <FaGraduationCap size={24} className="text-[#3B82F6]" />
                            <span className="w-full text-center font-['Sora',sans-serif] text-[18px] font-medium text-[#CBD5E1] leading-tight">Informática Empresarial</span>
                            <span className="font-['Inter',sans-serif] text-[16px] font-normal text-[#CBD5E1]"> UCR </span>
                        </div>
                    </div>

                    <div>

                    </div>

                </div>

                <div>

                    <div>
                        
                        <p className="mt-3 font-['Inter',sans-serif] text-[16px] font-medium leading-9 text-[#3B82F6]">
                            SOBRE MI
                        </p>

                        <h2 className="font-['Sora',sans-serif] text-[32px] lg:text-[40px] font-bold text-[#CBD5E1]">
                            Conociendo un poco sobre mí
                        </h2>

                        <hr className="w-16 md:w-20 border-t-4 border-[#3B82F6] my-3 md:mx-0" />

                        <p className="mt-3 font-['Inter',sans-serif] text-[17px] lg:text-[20px] leading-8 lg:leading-9 text-[#CBD5E1] text-justify">
                            Soy estudiante de Informática Empresarial en la Universidad de Costa Rica, apasionado por el desarrollo de software y la resolución de problemas. Me especializo en el desarrollo web full stack y disfruto crear soluciones que generen un impacto positivo en las personas.
                        </p>
                        <p className="mt-3 font-['Inter',sans-serif] text-[17px] lg:text-[20px] leading-8 lg:leading-9 text-[#CBD5E1] text-justify">
                            Me considero una persona responsable, curiosa y con muchas ganas de aprender. Disfruto trabajar en equipo y asumir nuevos retos que me permitan seguir creciendo profesionalmente.
                        </p>

                    </div>

                    <div>
                        <a
                            href="/CV_Geovanni Alfredo Sánchez Chaves.pdf" download
                            className="mt-4 w-full sm:w-[250px] h-[46px] flex items-center justify-center gap-2 rounded-lg border border-[#3B82F6] font-['Inter',sans-serif] text-[16px] font-semibold text-[#3B82F6] transition-colors hover:bg-[#3B82F6] hover:text-white duration-300">
                            <span>Conoce mi experiencia</span>
                            <FaArrowRight size={18} />
                        </a>

                    </div>

                    <div className="mt-5 grid grid-cols-2 lg:grid-cols-4 gap-6">

                        <div className="flex flex-col items-start lg:border-r lg:border-[#1E293B] px-6">
                            <FaCode size={24} className="text-[#3B82F6]" />
                            <span className="mt-2 font-['Sora',sans-serif] text-3xl font-bold text-[#CBD5E1]">
                                6+
                            </span>
                            <span className="font-['Inter',sans-serif] text-sm text-[#CBD5E1]">
                                Años aprendiendo a programar.
                            </span>
                        </div>

                        <div className="flex flex-col items-start lg:border-r lg:border-[#1E293B] px-6">
                            <FaFolderOpen size={24} className="text-[#3B82F6]" />
                            <span className="mt-2 font-['Sora',sans-serif] text-3xl font-bold text-[#CBD5E1]">
                                10+
                            </span>
                            <span className="font-['Inter',sans-serif] text-sm text-[#CBD5E1]">
                                Proyectos completados.
                            </span>
                        </div>

                        <div className="flex flex-col items-start lg:border-r lg:border-[#1E293B] px-6">
                            <FaLaptopCode size={24} className="text-[#3B82F6]" />
                            <span className="mt-2 font-['Sora',sans-serif] text-3xl font-bold text-[#CBD5E1]">
                                30+
                            </span>
                            <span className="font-['Inter',sans-serif] text-sm text-[#CBD5E1]">
                                Tecnologías dominadas.
                            </span>
                        </div>

                        <div className="flex flex-col items-start">
                            <FaBullseye size={24} className="text-[#3B82F6]" />
                            <span className="mt-2 font-['Sora',sans-serif] text-3xl font-bold text-[#CBD5E1]">
                                100%
                            </span>
                            <span className="font-['Inter',sans-serif] text-sm text-[#CBD5E1]">
                                Comprometido con mi crecimiento.
                            </span>
                        </div>

                    </div>

                    <div>

                    </div>

                </div>

            </div>
        </section>
    );
}