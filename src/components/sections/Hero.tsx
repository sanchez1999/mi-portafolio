import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { MdEmail } from "react-icons/md";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-3 grid grid-cols-1 md:grid-cols-2 gap-10">

        <div>
          <div className="flex flex-col justify-center h-full">
            <p className="mb-4 font-['Sora',sans-serif] text-[20px] font-medium text-sky-400">Hola, soy</p>

            <h1 className="font-['Sora',sans-serif] text-[72px] font-bold leading-tight">Alfredo Sánchez</h1>

            <p className="mt-6 max-w-xl font-['Inter',sans-serif] text-[20px] font-normal text-slate-300">
              Estudiante de Informática Empresarial en la UCR.
              Apacionado por el desarrollo web, las bases de datos y el análisis de datos. Me gusta crear soluciones eficientes que generen impacto.
            </p>

            <div className="mt-8 flex gap-4">
              <a href="#proyectos"
                className="px-6 py-3 rounded-lg bg-sky-400 font-['Inter',sans-serif] text-[16px] font-semibold text-slate-900 transition-colors hover:bg-sky-300">
                Ver proyectos
              </a>

              <a
                href="/CV_Geovanni Alfredo Sánchez Chaves.pdf" download
                className="flex items-center gap-2 px-6 py-3 rounded-lg border border-slate-400 font-['Inter',sans-serif] text-[16px] font-semibold text-slate-200 transition-colors hover:border-sky-400 hover:text-sky-400">
                <FiDownload size={18} />
                <span>Descargar CV</span>
              </a>
            </div>

            <div className="mt-8 flex items-center gap-6">

              <a
                href="https://github.com/sanchez1999"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-sky-400 transition-colors"
              >
                <FaGithub size={28} />
              </a>

              <a
                href="https://www.linkedin.com/in/alfredo-sanchez-chaves-9732a3259/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-sky-400 transition-colors"
              >
                <FaLinkedin size={28} />
              </a>

              <a
                href="mailto:sanchezalfredo590@gmail.com"
                title="Enviar correo"
                className="text-slate-300 hover:text-sky-400 transition-colors"
              >
                <MdEmail size={28} />
              </a>

            </div>
          </div>
        </div>

        <div>
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-sky-400 blur-3xl opacity-30"></div>

              <Image src="/images/img-hero.png" alt="Alfredo Sánchez Chaves" width={400} height={400} className="relative rounded-full object-cover" />

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}