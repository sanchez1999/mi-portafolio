import Image from "next/image";

const navLinks = [
  { name: "Inicio", active: true, },
  { name: "Sobre mí", active: false, },
  { name: "Habilidades", active: false, },
  { name: "Proyectos", active: false, },
  { name: "Experiencia", active: false, },
  { name: "Contacto", active: false, },
];

export default function Navbar() {

  return (
    <nav className="fixed top-0 left-0 z-50 w-full h-20 bg-[#1E293B] border-b-3 border-slate-500 py-6">
      <div className="max-w-7xl px-3 h-full mx-auto flex items-center justify-between">

        <div className="flex items-center gap-3">
          <Image src="/images/logo2.svg" alt="Logo" width={50} height={50} />
          <span className="font-['Sora',sans-serif] text-xl font-semibold text-slate-200">A.Sanchez</span>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex gap-7">
            {navLinks.map((link) => (
              <a
                href="#" key={link.name}
                className={`relative font-['Inter',sans-serif] text-base transition-colors 
                  ${link.active
                    ? "text-sky-400 font-semibold"
                    : "text-slate-300 hover:text-sky-400"
                  }
                `}
              >
                {link.name}
                {link.active && (
                  <span className="absolute left-0 -bottom-2 h-[2px] w-full bg-sky-400" />
                )}
              </a>
            ))}
          </div>

          <a href="/CV_Geovanni Alfredo Sánchez Chaves.pdf" download
            className="px-6 py-2 rounded-lg border border-slate-400 font-['Inter',sans-serif] text-[16px] font-semibold text-slate-200 transition-colors hover:border-sky-400 hover:text-sky-400">
            CV
          </a>
        </div>
      </div>
    </nav >
  );
}