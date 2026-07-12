"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { HiOutlineBars3, HiOutlineXMark } from "react-icons/hi2";

const navLinks = [
  { name: "Inicio", id: "inicio" },
  { name: "Sobre mí", id: "sobre-mi" },
  { name: "Habilidades", id: "habilidades" },
  { name: "Proyectos", id: "proyectos" },
  { name: "Experiencia", id: "experiencia" },
  { name: "Contacto", id: "contacto" },
];

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  useEffect(() => {
    const sections = navLinks.map((link) =>
      document.getElementById(link.id)
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-80px 0px -50% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <>
      <nav className="fixed top-0 left-0 z-50 w-full h-20 bg-[#1E293B] border-b-3 border-slate-500 py-6">
        <div className="max-w-7xl px-3 h-full mx-auto flex items-center justify-between">

          <a href="#inicio" className="flex items-center gap-3">
            <Image src="/images/logo2.svg" alt="Logo" width={50} height={50} />
            <span className="font-['Sora',sans-serif] text-xl font-semibold text-slate-200">A.Sanchez</span>
          </a>

          <div className="hidden lg:flex items-center gap-6">
            <div className="flex gap-7">
              {navLinks.map((link) => (
                <a
                  href={`#${link.id}`}
                  key={link.name}
                  className={`relative font-['Inter',sans-serif] text-base transition-all duration-300 
                  ${activeSection === link.id
                      ? "text-[#3B82F6] font-semibold"
                      : "text-[#CBD5E1] hover:text-[#3B82F6]"
                    }
                `}
                >
                  {link.name}
                  <span
                    className={`absolute left-0 -bottom-2 h-[2px] bg-[#3B82F6] transition-all duration-300
                      ${activeSection === link.id ? "w-full opacity-100" : "w-0 opacity-0"}
                    `}
                  />
                </a>
              ))}
            </div>

            <a href="/CV_Geovanni Alfredo Sánchez Chaves.pdf" download
              className="flex items-center justify-center w-[88px] h-[48px] rounded-lg border border-[#3B82F6] font-['Inter',sans-serif] text-[16px] font-semibold text-[#3B82F6] transition-all duration-300 hover:bg-[#3B82F6] hover:text-white">
              CV
            </a>
          </div>
          <button aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-[#CBD5E1] text-3xl"
          >
            {menuOpen ? <HiOutlineXMark /> : <HiOutlineBars3 />}
          </button>
        </div>
      </nav >

      {

        <div
          className={`fixed top-20 left-0 w-full bg-[#1E293B] border-t border-slate-600 lg:hidden transition-all duration-300 ${menuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-5 pointer-events-none"
            }`}
        >
          <div className="flex flex-col px-6 py-4">

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={`#${link.id}`}
                onClick={() => setMenuOpen(false)}
                className="py-3 font-['Inter',sans-serif] text-[#CBD5E1] hover:text-[#3B82F6]"
              >
                {link.name}
              </a>
            ))}

            <a
              href="/CV_Geovanni Alfredo Sánchez Chaves.pdf"
              download
              className="mt-4 flex items-center justify-center h-12 rounded-lg border border-[#3B82F6] text-[#3B82F6] font-semibold hover:bg-[#3B82F6] hover:text-white transition-colors duration-300"
            >
              CV
            </a>

          </div>
        </div>

      }
    </>
  );
}