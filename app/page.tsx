'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react'; 
import { planEstudios } from '@/lib/data'; 
import ContactForm from '@/components/ContactForm';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Instagram, Facebook, Linkedin } from 'lucide-react';

export default function LandingPage() {
  const [selectedModule, setSelectedModule] = useState<number | null>(null);

  useEffect(() => {
    if (selectedModule !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedModule]);

  return (
    <main className="min-h-screen bg-white font-sans text-slate-900">
      <WhatsAppButton />

{/* SECCIÓN 1 — HERO (PORTADA) */}
<section className="relative min-h-screen flex items-center bg-[#0a192f] overflow-hidden py-12 lg:py-0">
  {/* Imagen de Fondo con Overlay Gradiente */}
  <div className="absolute inset-0 z-0">
    <Image 
      src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop"
      alt="Diplomatura en Enfermería Escolar Profesional"
      fill
      priority
      className="object-cover opacity-30"
    />
    {/* Gradiente: En PC va de izquierda a derecha, en Mobile de arriba a abajo */}
    <div className="absolute inset-0 bg-gradient-to-b from-[#0a192f] via-[#0a192f]/60 lg:via-[#0a192f]/80 lg:bg-gradient-to-r to-transparent" />
  </div>

  <div className="container mx-auto px-6 relative z-10 text-white">
    <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
      
      {/* Contenido de Texto */}
      <div className="w-full lg:w-3/5 text-center lg:text-left flex flex-col items-center lg:items-start order-2 lg:order-1">
        {/* Badge Institucional */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-400/30 rounded-full mb-6 lg:mb-10 backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          <span className="text-[10px] font-black tracking-[0.2em] text-blue-300 uppercase">
            Inscripciones Abiertas 2026
          </span>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-[1.1] lg:leading-none mb-6 tracking-tighter">
          Diplomatura en <br className="hidden lg:block"/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
            Enfermería Escolar
          </span>
        </h1>
        
        <p className="text-lg lg:text-2xl xl:text-3xl font-light mb-10 text-slate-300 leading-relaxed max-w-2xl italic">
          "Liderazgo, Gestión del Cuidado y Transformación en la Comunidad Educativa."
        </p>

        <div className="flex flex-col sm:flex-row gap-4 lg:gap-5 w-full sm:w-auto">
          <a 
            href="#inscripcion" 
            className="px-10 lg:px-12 py-4 lg:py-5 bg-[#f59e0b] hover:bg-[#d97706] text-white font-black rounded-2xl transition-all transform hover:scale-105 shadow-[0_20px_50px_rgba(245,158,11,0.3)] flex items-center justify-center gap-3"
          >
            INSCRIBIRME AHORA
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
          <a 
            href="#plan" 
            className="px-10 lg:px-12 py-4 lg:py-5 bg-white/5 hover:bg-white/10 border border-white/20 backdrop-blur-md text-white font-bold rounded-2xl transition-all text-center"
          >
            VER PLAN DE ESTUDIOS
          </a>
        </div>

        {/* Info Rápida */}
        <div className="mt-12 flex flex-wrap justify-center lg:justify-start gap-6 lg:gap-10 opacity-70">
          <div className="flex items-center gap-2">
            <span className="text-xl text-blue-400">📅</span>
            <span className="text-xs font-bold uppercase tracking-widest">6 Meses</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xl text-blue-400">💻</span>
            <span className="text-xs font-bold uppercase tracking-widest">Modalidad Híbrida</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xl text-blue-400">📜</span>
            <span className="text-xs font-bold uppercase tracking-widest">Certificado de Aprobación</span>
          </div>
        </div>
      </div>

      {/* Contenedor del Logo - En mobile arriba, en PC a la derecha */}
      <div className="w-full lg:w-2/5 flex justify-center items-center order-1 lg:order-2">
        <div className="relative group max-w-[240px] sm:max-w-[320px] lg:max-w-none">
          {/* Glow de fondo */}
          <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-[60px] lg:blur-[100px] animate-pulse" />
          
          <Image 
            src="/images/logo.png" 
            alt="Logo Campus Profesional"
            width={450}
            height={450}
            className="relative z-10 drop-shadow-[0_0_35px_rgba(255,255,255,0.15)] object-contain transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      </div>

    </div>
  </div>
</section>

      {/* SECCIÓN 2 — CONTEXTO / PROBLEMA */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <h2 className="text-4xl font-bold blue-400 mb-10 italic">"La salud también se cuida en la escuela" </h2>
          <div className="space-y-6 text-xl text-slate-600 leading-relaxed">
            <p>Cada día miles de niños y adolescentes asisten a las escuelas con condiciones de salud que requieren seguimiento y atención profesional. </p>
            <p>Alergias, enfermedades crónicas, crisis asmáticas y otras situaciones sanitarias forman parte de la vida cotidiana dentro de las instituciones educativas. </p>
            <p className="font-semibold text-slate-900">La presencia de profesionales de enfermería en el ámbito escolar permite mejorar la prevención, el cuidado y la respuesta ante emergencias. </p>
          </div>
        </div>
      </section>

{/* SECCIÓN 3 — FUNCIONES DEL ENFERMERO ESCOLAR */}
<section className="py-32 bg-[#fafaf9]" id="info"> {/* Fondo sutil para dar contraste */}
  <div className="container mx-auto px-6">
    <div className="max-w-2xl mb-20">
      <h2 className="text-sm font-black tracking-[0.2em] text-[#0f4c75] uppercase mb-4">Rol Profesional</h2>
      <h3 className="text-4xl lg:text-5xl font-black text-slate-800 leading-tight">
        Funciones que transforman <br /> 
        <span className="text-[#3282b8]/60 italic font-serif">la comunidad educativa</span>
      </h3>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {[
        { 
          t: "Prevención", 
          d: "Promoción de la salud y prevención de enfermedades en toda la comunidad. ",
          tag: "Impacto Social",
          icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          )
        },
        { 
          t: "Emergencias", 
          d: "Atención inmediata y profesional ante accidentes o urgencias críticas. ",
          tag: "Respuesta Rápida",
          icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          )
        },
        { 
          t: "Educación", 
          d: "Capacitación sanitaria estratégica para docentes, padres y alumnos. ",
          tag: "Pedagogía",
          icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          )
        },
        { 
          t: "Seguimiento", 
          d: "Control de enfermedades crónicas bajo protocolos profesionales. ",
          tag: "Cuidado Continuo",
          icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
            </svg>
          )
        }
      ].map((f, i) => (
        <div key={i} className="group relative">
          <span className="absolute -top-6 -right-2 text-8xl font-black text-slate-200/40 select-none group-hover:text-[#bbe1fa]/40 transition-colors duration-500">
            0{i + 1}
          </span>
          <div className="relative z-10 h-full bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-br from-[#0f4c75] to-[#3282b8] text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-blue-900/10 transition-transform">
              {f.icon}
            </div>
            <span className="inline-block px-3 py-1 bg-[#bbe1fa]/30 text-[#0f4c75] text-[10px] font-black uppercase tracking-widest rounded-full mb-4">
              {f.tag}
            </span>
            <h4 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-[#3282b8] transition-colors">
              {f.t}
            </h4>
            <p className="text-slate-500 leading-relaxed font-medium">
              {f.d}
            </p>
          </div>
        </div>
      ))}
    </div>

    <div className="mt-20 text-center">
      <a 
        href="#inscripcion" 
        className="inline-block px-12 py-5 bg-[#f59e0b] text-white font-black rounded-2xl hover:bg-[#d97706] shadow-xl shadow-amber-200/50 transition-all transform hover:-translate-y-1 active:scale-95"
      >
        SOLICITAR INFORMACIÓN
      </a>
      <p className="mt-4 text-slate-400 font-medium text-sm">
        Formación profesional con certificación nacional
      </p>
    </div>
  </div>
</section>

     {/* SECCIÓN 4 — SALIDA LABORAL */}
<section className="py-24 bg-white">
  <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
    
    <div className="relative h-[600px] rounded-[2.5rem] overflow-hidden shadow-xl shadow-slate-200/50">
      <Image 
        src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=2070&auto=format&fit=crop" 
        alt="Estudiante de enfermería" 
        fill 
        className="object-cover" 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0f4c75]/40 to-transparent" />
      <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/80 backdrop-blur-md rounded-2xl border border-white/50">
        <p className="text-[#0f4c75] font-bold italic leading-relaxed">
          "La enfermería escolar es el puente entre el bienestar físico y el éxito académico de los estudiantes."
        </p>
      </div>
    </div>

    <div className="max-w-4xl mx-auto lg:max-w-none">
      <h2 className="text-4xl lg:text-5xl font-black mb-8 text-slate-800 tracking-tight leading-tight">
        Un nuevo campo <br />
        <span className="text-[#3282b8]">profesional y humano</span>
      </h2>
      
      <p className="text-lg text-slate-500 mb-12 leading-relaxed max-w-2xl font-medium">
        Convertite en el referente de salud de la institución, trabajando en entornos dinámicos donde tu rol es vital para la seguridad de la comunidad.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          { title: "Colegios Privados", icon: "🏛️" },
          { title: "Educación Especial", icon: "💙" },
          { title: "Centros Deportivos", icon: "🏟️" },
          { title: "Gestión Sanitaria", icon: "📋" }
        ].map((item, i) => (
          <div key={i} className="group p-5 bg-[#f8fafc] border border-slate-100 rounded-2xl hover:bg-white hover:border-[#bbe1fa] hover:shadow-lg transition-all duration-300 flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-xl shadow-sm group-hover:scale-110 transition-transform">
              {item.icon}
            </div>
            <h4 className="text-base font-bold text-slate-700 group-hover:text-[#0f4c75] transition-colors">
              {item.title}
            </h4>
          </div>
        ))}
      </div>

      <div className="mt-12 flex flex-col sm:flex-row items-center gap-6">
        <a 
          href="#inscripcion" 
          className="w-full sm:w-auto px-10 py-5 bg-[#f59e0b] text-white font-black rounded-xl hover:bg-[#d97706] shadow-lg shadow-amber-200 transition-all transform hover:-translate-y-1 text-center"
        >
          INICIAR MI INSCRIPCIÓN 
        </a>
        <div className="text-slate-400 text-[11px] font-bold uppercase tracking-[0.2em] max-w-[180px]">
          Certificación con aval profesional nacional
        </div>
      </div>
    </div>
  </div>
</section>

      {/* SECCIÓN 5 — PERFIL DEL ESTUDIANTE */}
      <section className="py-24 bg-slate-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">Dirigido a quienes buscan transformar la salud.</h2>
          <p className="text-2xl font-light max-w-3xl mx-auto leading-relaxed  italic">
            "Profesionales de enfermería y de la salud que desean ampliar su campo profesional y especializarse en el ámbito educativo."
          </p>
        </div>
      </section>

      {/* SECCIÓN 6 — PLAN DE ESTUDIOS (12 MÓDULOS CON MODAL) */}
<section className="py-32 bg-white" id="plan">
  <div className="container mx-auto px-6">
    <div className="text-center max-w-3xl mx-auto mb-20">
      <h2 className="text-sm font-black tracking-[0.3em] text-[#3282b8] uppercase mb-4">Currícula Completa</h2>
      <h3 className="text-4xl lg:text-5xl font-black text-slate-800 mb-6">Plan de Estudios 2026</h3>
      <p className="text-lg text-slate-500 font-medium italic">Click en cada módulo para ver el temario técnico detallado.</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
      {planEstudios.map((modulo, i) => (
        <div 
          key={i} 
          onClick={() => setSelectedModule(i)}
          className="group relative p-8 bg-[#fcfdfe] border border-slate-100 rounded-[2.5rem] hover:bg-white hover:border-[#bbe1fa] hover:shadow-[0_20px_40px_rgba(15,76,117,0.06)] transition-all duration-500 cursor-pointer overflow-hidden"
        >
          {/* Número de fondo más sutil */}
          <div className="absolute -right-2 -bottom-4 text-9xl font-black text-slate-50 group-hover:text-blue-50/50 transition-colors select-none">
            {i + 1}
          </div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <span className="flex h-2 w-2 rounded-full bg-[#3282b8] group-hover:bg-[#f59e0b] transition-colors"></span>
              <span className="text-[10px] font-black tracking-widest text-slate-400 uppercase">
                Módulo {(i + 1).toString().padStart(2, '0')}
              </span>
            </div>
            
            <h4 className="text-xl font-extrabold text-slate-800 group-hover:text-[#0f4c75] leading-tight pr-8 transition-colors">
              {modulo.title}
            </h4>
            
            <div className="mt-8 flex items-center gap-2 text-[#3282b8] font-black text-[10px] uppercase tracking-tighter group-hover:text-[#f59e0b] transition-all">
              EXPLORAR CONTENIDOS 
              <span className="transform group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* Caja de Carga Horaria Suavizada */}
    <div className="mt-20 p-10 bg-[#f8fafc] rounded-[3rem] border border-slate-100 flex flex-col md:flex-row items-center justify-between gap-8 max-w-5xl mx-auto shadow-sm">
      <div className="flex items-center gap-6 text-left">
        <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm text-3xl border border-slate-50">
          🎓
        </div>
        <div>
          <h5 className="font-black text-[#0f4c75] text-xl">Carga Horaria Total</h5>
          <p className="text-slate-500 font-bold uppercase tracking-widest text-xs mt-1">
            140 horas cátedra • Certificación Instituto Ferrer
          </p>
        </div>
      </div>
      <a 
  href="https://hsjpvvchlfdaswnmnmsk.supabase.co/storage/v1/object/public/files/Diplomatura%20en%20Enfermeria%20Escolar.pdf" 
  target="_blank" rel="noopener noreferrer"
  download="Plan_de_Estudios_2026.pdf"
  className="whitespace-nowrap px-10 py-5 bg-[#0f4c75] text-white font-black rounded-2xl hover:bg-[#3282b8] transition-all shadow-lg shadow-blue-900/10 flex items-center gap-3"
>
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
  </svg>
  DESCARGAR PLAN EN PDF
</a>
    </div>
  </div>
</section>

     {/* COMPONENTE MODAL INTEGRADO — OPTIMIZADO PARA PC Y MOBILE */}
{selectedModule !== null && (
  <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-4">
    {/* Overlay con desenfoque suave */}
    <div 
      className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" 
      onClick={() => setSelectedModule(null)} 
    />
    
    <div className="relative w-full max-w-2xl bg-white rounded-t-[2.5rem] sm:rounded-[3rem] shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-10 sm:zoom-in duration-300 border border-slate-100 max-h-[92vh] sm:max-h-none flex flex-col">
      
      {/* Botón Cerrar - Más pequeño y mejor posicionado en mobile */}
      <button 
        onClick={() => setSelectedModule(null)} 
        className="absolute top-4 right-4 sm:top-8 sm:right-8 p-2 sm:p-3 bg-slate-50 hover:bg-rose-50 text-slate-400 hover:text-rose-500 rounded-full transition-all z-20"
      >
        <X size={16} />
      </button>

      <div className="p-6 sm:p-14 overflow-y-auto custom-scrollbar">
        {/* Cabecera del Modal */}
        <div className="flex flex-row items-center gap-4 sm:gap-6 mb-6 sm:mb-10 pr-8 sm:pr-0">
          <div className="w-14 h-14 sm:w-20 sm:h-20 bg-[#3282b8]/10 text-2xl sm:text-4xl flex items-center justify-center rounded-2xl sm:rounded-[1.5rem] shrink-0 shadow-sm">
            {planEstudios[selectedModule].icon}
          </div>
          <div>
            <span className="text-[9px] sm:text-[10px] font-black text-[#3282b8] uppercase tracking-[0.2em]">
              Módulo {(selectedModule + 1).toString().padStart(2, '0')}
            </span>
            <h4 className="text-xl sm:text-3xl font-black text-[#0f4c75] leading-tight">
              {planEstudios[selectedModule].title}
            </h4>
          </div>
        </div>

        {/* Lista de Contenidos */}
        <div className="space-y-4 sm:space-y-6">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3 sm:pb-4">
            <p className="text-[10px] sm:text-[11px] font-black text-slate-400 uppercase tracking-widest">
              Contenidos Técnicos
            </p>
            <span className="text-[9px] sm:text-[10px] font-bold text-[#3282b8] bg-[#3282b8]/5 px-2 py-1 rounded-full uppercase">
              Actualizado 2026
            </span>
          </div>

          <div className="grid gap-2 sm:gap-3 max-h-[45vh] sm:max-h-[40vh] overflow-y-auto pr-1 custom-scrollbar">
            {planEstudios[selectedModule].items.map((item, idx) => (
              <div 
                key={idx} 
                className="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 bg-[#fafaf9] border border-slate-50 rounded-xl sm:rounded-2xl hover:border-[#bbe1fa] hover:bg-white transition-all group"
              >
                <div className="mt-1.5 flex h-1.5 w-1.5 shrink-0 rounded-full bg-[#3282b8] group-hover:bg-[#f59e0b] transition-colors shadow-sm" />
                <p className="text-slate-600 font-bold text-xs sm:text-sm leading-snug uppercase tracking-tight">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Botón de Acción Principal */}
        <div className="mt-8 sm:mt-12 flex flex-col gap-3 sm:gap-4">
          <button 
            onClick={() => setSelectedModule(null)} 
            className="w-full py-4 sm:py-5 bg-[#0f4c75] text-white font-black rounded-xl sm:rounded-2xl hover:bg-[#3282b8] shadow-lg shadow-blue-900/10 transition-all active:scale-[0.98] text-sm sm:text-base"
          >
            ENTENDIDO, VOLVER AL PLAN
          </button>
          <p className="text-center text-[9px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-tighter hidden sm:block">
            Hacé click fuera de la ventana para cerrar rápido
          </p>
        </div>
      </div>
    </div>
  </div>
)}

      {/* SECCIÓN 7, 8, 9 — METODOLOGÍA */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-12">
          <div className="border-l-4 border-amber-500 pl-6">
            <h3 className="text-2xl font-bold mb-4 uppercase">Metodología </h3>
            <p className="text-slate-400">Cursada híbrida con clases sincrónicas y material en plataforma virtual. </p>
          </div>
          <div className="border-l-4 border-amber-500 pl-6">
            <h3 className="text-2xl font-bold mb-4 uppercase">Duración </h3>
            <p className="text-slate-400">6 meses con evaluación final integradora. </p>
          </div>
          <div className="border-l-4 border-amber-500 pl-6">
            <h3 className="text-2xl font-bold mb-4 uppercase">Certificación </h3>
            <p className="text-slate-400">Título oficial avalado por instituciones nacionales. </p>
          </div>
        </div>
      </section>

      {/* SECCIÓN 11 — PREGUNTAS FRECUENTES */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-4xl font-black mb-12 text-center">Preguntas Frecuentes </h2>
          <div className="space-y-4">
            {[
              { q: "¿Es necesario tener título de enfermero? ", a: "Sí, es una especialización para profesionales técnicos o licenciados. " },
              { q: "¿La modalidad es virtual? ", a: "Es híbrida, con encuentros en vivo y trabajo autónomo. " },
              { q: "¿Se entrega certificado? ", a: "Sí, avalado por organización profesional. " }
            ].map((faq, i) => (
              <div key={i} className="bg-slate-50 p-8 rounded-2xl">
                <h4 className="text-xl font-bold mb-3 text-emerald-900">Q. {faq.q}</h4>
                <p className="text-slate-600 font-medium">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

{/* SECCIÓN 12 — CTA FINAL + FORMULARIO (INSCRIPCIÓN) - OPTIMIZADA & EQUILIBRADA */}
<section className="py-20 bg-[#fafaf9] relative" id="inscripcion">
  {/* Sutil acento de color en el fondo para mobile y PC */}
  <div className="absolute top-0 right-0 w-full h-32 bg-gradient-to-b from-blue-50/50 to-transparent lg:hidden" />

  <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
    
    <div className="max-w-xl lg:py-10">
      {/* Badge de Urgencia - Más sobrio */}
      <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-slate-200 rounded-full mb-6 shadow-sm">
        <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
        <span className="text-[10px] font-black tracking-widest text-slate-500 uppercase">
          Ciclo Lectivo 2026
        </span>
      </div>

      <h2 className="text-4xl lg:text-6xl font-black text-slate-900 mb-6 leading-tight tracking-tighter">
        Inscribite y asegurá <br className="hidden sm:block" />
        <span className="text-blue-600">tu vacante hoy.</span>
      </h2>
      
      <p className="text-lg text-slate-500 font-medium leading-relaxed mb-8">
        Completá tus datos para recibir el programa detallado, costos y el beneficio del 30% OFF por pago único.
      </p>

      {/* Caja de Precios - Optimizada para Mobile (Stack vertical en cel, horizontal en PC) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
        <div className="p-5 bg-white border border-slate-100 rounded-2xl shadow-sm">
          <p className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-1">Inversión mensual</p>
          <div className="flex items-baseline gap-1">
            <span className="text-2xl font-black text-slate-800">$65.000</span>
            <span className="text-[10px] text-slate-400 font-bold">/MES</span>
          </div>
        </div>
        
        <div className="p-5 bg-blue-600 rounded-2xl shadow-md relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-amber-400 text-amber-950 text-[9px] font-black px-2 py-1 rounded-bl-lg uppercase">
            Más elegido
          </div>
          <p className="text-[9px] font-black uppercase tracking-widest text-blue-100 mb-1">Pago Único</p>
          <span className="text-2xl font-black text-white italic">30% DESCUENTO</span>
        </div>
      </div>

      {/* Info de pago rápida */}
      <div className="flex flex-wrap gap-4 pt-6 border-t border-slate-200">
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-[10px]">✓</div>
          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-tight">Transferencia</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-[10px]">✓</div>
          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-tight">Western Union</span>
        </div>
      </div>
    </div>

    {/* Contenedor del Formulario - Limpio y con aire */}
    <div className="relative w-full">
      {/* Sombra decorativa lateral solo en PC */}
      <div className="absolute -inset-4 bg-blue-600/5 rounded-[3rem] blur-2xl hidden lg:block" />
      
      <div className="bg-white rounded-[2.5rem] sm:rounded-[3rem] shadow-[0_20px_50px_-12px_rgba(15,76,117,0.15)] border border-slate-50 relative">
        
        <div className="p-6 sm:p-10">
          <div className="mb-8">
            <h3 className="text-2xl font-black text-slate-900">Formulario de <span className="text-blue-600">Inscripción</span></h3>
            <p className="text-slate-400 text-xs font-medium mt-1 uppercase tracking-wider italic">Reserva inmediata de cupo</p>
          </div>

          <ContactForm />
        </div>
      </div>
    </div>

  </div>
</section>  

{/* SECCIÓN 10 — PIE DE PÁGINA E INSTITUCIONAL */}
<footer className="bg-white border-t border-slate-100">
  {/* Subsección: Aliados e Instituciones */}
<div className="py-20 border-b border-slate-50">
  <div className="container mx-auto px-6">
    <p className="text-center text-slate-400 font-black uppercase tracking-[0.2em] mb-12 text-[10px]">
      Organizaciones que acompañan y avalan la formación
    </p>
    <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-20">
      
      {/* CONTENEDOR DEL LOGO ÚNICO O PRINCIPAL */}
      <div className="group relative">
        <div className="relative h-16 w-64 transition-all duration-500 filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100">
          <Image 
            src="/images/logo_ferrer.png" // Asegurate de que el archivo esté en la carpeta /public
            alt="Logos Institucionales Campus 2026"
            fill
            className="object-contain"
          />
        </div>
        <span className="absolute -bottom-6 left-0 w-full text-[9px] text-center font-black text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-tighter">
          Aval Institucional 2026
        </span>
      </div>

      {/* Si tenés más logos individuales, podés agregarlos siguiendo la misma estructura */}
    </div>
  </div>
</div>

  {/* Subsección: Navegación y Contacto */}
  <div className="py-20 bg-[#fafaf9]"> {/* Fondo Stone 50 para calidez */}
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        
        {/* Columna 1: Branding */}
        <div className="space-y-6">
          <div className="relative group">
  <div className="relative h-20 w-48 transition-transform duration-500 group-hover:scale-105">
    <Image 
      src="/images/logo.png" 
      alt="Logo Campus Profesional"
      fill
      className="object-contain"
      priority={false}
    />
  </div>
</div>
          <p className="text-slate-500 font-medium leading-relaxed text-sm">
            Especialización técnica profesional para la integración de la salud y la prevención en entornos educativos modernos.
          </p>
        </div>

        {/* Columna 2: Navegación Rápida */}
        <div>
          <h4 className="font-black uppercase tracking-widest text-[10px] text-[#0f4c75] mb-8">Navegación</h4>
          <ul className="space-y-4 text-sm font-bold text-slate-400">
            <li><a href="#info" className="hover:text-[#3282b8] transition-colors">Rol Profesional</a></li>
            <li><a href="#plan" className="hover:text-[#3282b8] transition-colors">Plan de Estudios</a></li>
            <li><a href="#inscripcion" className="hover:text-[#3282b8] transition-colors">Inscripción Abierta</a></li>
            <li><a href="#" className="hover:text-[#3282b8] transition-colors">Preguntas Frecuentes</a></li>
          </ul>
        </div>

        {/* Columna 3: Contacto Directo */}
        <div>
          <h4 className="font-black uppercase tracking-widest text-[10px] text-[#0f4c75] mb-8">Contacto Técnico</h4>
          <ul className="space-y-4 text-sm font-bold text-slate-500">
            <li className="flex items-center gap-3">
              <span className="text-[#3282b8]">📍</span> 
              Provincia de Buenos Aires, Argentina
            </li>
            <li className="flex items-center gap-3">
              <span className="text-[#3282b8]">✉️</span> 
              consultas@enfermeriaescolar.edu.ar
            </li>
            <li className="flex items-center gap-3">
              <span className="text-[#3282b8]">📞</span> 
              +54 221 552-2315
            </li>
          </ul>
        </div>

        {/* Columna 4: Redes y Social */}
        <div>
  <h4 className="font-black uppercase tracking-widest text-[10px] text-[#0f4c75] mb-8">
    Seguí el Crecimiento
  </h4>
  <div className="flex gap-4">
    {[
      { name: 'IG', icon: <Instagram size={18} />, href: 'https://instagram.com/tu_cuenta' },
      { name: 'FB', icon: <Facebook size={18} />, href: 'https://facebook.com/tu_cuenta' },
      { name: 'LI', icon: <Linkedin size={18} />, href: 'https://linkedin.com/in/tu_cuenta' }
    ].map((red) => (
      <a 
        key={red.name} 
        href={red.href}
        target="_blank"
        rel="noopener noreferrer"
        className="w-11 h-11 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-[#0f4c75] hover:text-white hover:border-[#0f4c75] transition-all shadow-sm group"
        aria-label={red.name}
      >
        <span className="transition-transform group-hover:scale-110">
          {red.icon}
        </span>
      </a>
    ))}
  </div>
  <p className="mt-6 text-[11px] text-slate-400 font-bold leading-relaxed">
    Unite a nuestra comunidad de profesionales de la salud.
  </p>
</div>
      </div>

      {/* Footer Legal */}
      <div className="mt-20 pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
          © 2026 Diplomatura en Enfermería Escolar — Todos los derechos reservados.
        </p>
      </div>
    </div>
  </div>
</footer>
    </main>
  );
}