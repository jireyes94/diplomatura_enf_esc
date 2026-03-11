'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react'; 
import { planEstudios } from '@/lib/data'; 
import ContactForm from '@/components/ContactForm';
import WhatsAppButton from '@/components/WhatsAppButton';

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
      <section className="relative min-h-screen flex items-center bg-slate-900 overflow-hidden">
        <Image 
          src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop"
          alt="Enfermería Escolar Profesional"
          fill
          priority
          className="object-cover opacity-40"
        />
        <div className="container mx-auto px-6 relative z-10 text-white">
          <div className="max-w-3xl">
            <h1 className="text-6xl lg:text-8xl font-black leading-none mb-6">
              Diplomatura en <br/>
              <span className="text-emerald-400">Enfermería Escolar</span>
            </h1>
            <p className="text-2xl lg:text-3xl font-light mb-10 text-slate-200 leading-relaxed">
              Especialización que integra salud, educación y prevención dentro de las instituciones educativas. 
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#inscripcion" className="px-10 py-5 bg-amber-500 hover:bg-amber-600 text-white font-black rounded-full transition-all transform hover:scale-105 shadow-2xl">
                INSCRIBIRME AHORA
              </a>
              <a href="#info" className="px-10 py-5 bg-white/10 hover:bg-white/20 border border-white/30 backdrop-blur-md text-white font-bold rounded-full transition-all">
                MÁS INFORMACIÓN
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 2 — CONTEXTO / PROBLEMA */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <h2 className="text-4xl font-bold text-emerald-800 mb-10 italic">"La salud también se cuida en la escuela" </h2>
          <div className="space-y-6 text-xl text-slate-600 leading-relaxed">
            <p>Cada día miles de niños y adolescentes asisten a las escuelas con condiciones de salud que requieren seguimiento y atención profesional. </p>
            <p>Alergias, enfermedades crónicas, crisis asmáticas y otras situaciones sanitarias forman parte de la vida cotidiana dentro de las instituciones educativas. </p>
            <p className="font-semibold text-slate-900">La presencia de profesionales de enfermería en el ámbito escolar permite mejorar la prevención, el cuidado y la respuesta ante emergencias. </p>
          </div>
        </div>
      </section>

      {/* SECCIÓN 3 — FUNCIONES DEL ENFERMERO ESCOLAR */}
      <section className="py-32 bg-[#f8fafc]" id="info">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mb-20">
            <h2 className="text-sm font-black tracking-[0.2em] text-emerald-600 uppercase mb-4">Rol Profesional</h2>
            <h3 className="text-4xl lg:text-5xl font-black text-slate-900 leading-tight">
              Funciones que transforman <br /> 
              <span className="text-slate-400">la comunidad educativa</span>
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
                <span className="absolute -top-6 -right-2 text-8xl font-black text-slate-200/50 select-none group-hover:text-emerald-100 transition-colors duration-500">
                  0{i + 1}
                </span>
                <div className="relative z-10 h-full bg-white/60 backdrop-blur-md p-8 rounded-[2.5rem] border border-white shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-emerald-200 transition-transform">
                    {f.icon}
                  </div>
                  <span className="inline-block px-3 py-1 bg-emerald-50 text-emerald-600 text-[10px] font-black uppercase tracking-widest rounded-full mb-4">{f.tag}</span>
                  <h4 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-emerald-700 transition-colors">{f.t}</h4>
                  <p className="text-slate-500 leading-relaxed font-medium">{f.d}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-20 text-center">
            <a href="#inscripcion" className="inline-block px-12 py-5 bg-emerald-600 text-white font-black rounded-2xl hover:bg-emerald-700 shadow-xl shadow-emerald-200 transition-all transform hover:-translate-y-1 active:scale-95">
              INSCRIBIRME AHORA 
            </a>
            <p className="mt-4 text-slate-400 font-medium text-sm">Formación profesional con certificación nacional </p>
          </div>
        </div>
      </section>

      {/* SECCIÓN 4 — SALIDA LABORAL */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative h-[600px] rounded-[3rem] overflow-hidden shadow-2xl">
            <Image 
              src="https://images.unsplash.com/photo-1516534775068-ba3e7458af70?q=80&w=2070&auto=format&fit=crop" 
              alt="Campo Laboral" fill className="object-cover" 
            />
          </div>
          <div className="max-w-4xl mx-auto lg:max-w-none">
            <h2 className="text-4xl lg:text-5xl font-extrabold mb-8 text-slate-900 tracking-tight leading-tight">
              Un nuevo campo profesional <br />
              <span className="text-emerald-600">en crecimiento </span>
            </h2>
            <p className="text-xl text-slate-600 mb-12 leading-relaxed max-w-2xl">
              Cada vez más instituciones educativas incorporan profesionales de enfermería para garantizar entornos escolares más seguros. 
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: "Escuelas Públicas y Privadas ", icon: "🏛️", color: "bg-blue-100 text-blue-600" },
                { title: "Educación Especial ", icon: "❤️", color: "bg-rose-100 text-rose-600" },
                { title: "Clubes y Colonias ", icon: "⚽", color: "bg-amber-100 text-amber-600" },
                { title: "Programas de Salud Escolar ", icon: "📋", color: "bg-emerald-100 text-emerald-600" }
              ].map((item, i) => (
                <div key={i} className="group p-6 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-xl transition-all flex items-center gap-5">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${item.color} text-xl`}>{item.icon}</div>
                  <h4 className="text-lg font-bold text-slate-900">{item.title}</h4>
                </div>
              ))}
            </div>
            <div className="mt-12">
              <a href="#inscripcion" className="px-10 py-5 bg-emerald-600 text-white font-black rounded-2xl hover:bg-emerald-700 shadow-lg transition-all text-center">
                INICIAR MI INSCRIPCIÓN 
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 5 — PERFIL DEL ESTUDIANTE */}
      <section className="py-24 bg-emerald-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8 italic">Dirigido a quienes buscan transformar la salud </h2>
          <p className="text-2xl font-light max-w-3xl mx-auto leading-relaxed">
            Profesionales de enfermería y de la salud que desean ampliar su campo profesional y especializarse en el ámbito educativo. 
          </p>
        </div>
      </section>

      {/* SECCIÓN 6 — PLAN DE ESTUDIOS (12 MÓDULOS CON MODAL) */}
      <section className="py-32 bg-white" id="plan">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-sm font-black tracking-[0.3em] text-emerald-600 uppercase mb-4">Currícula Completa</h2>
            <h3 className="text-4xl lg:text-6xl font-black text-slate-900 mb-6">Plan de Estudios 2026 </h3>
            <p className="text-lg text-slate-500 font-medium">Click en cada módulo para ver el temario técnico completo. </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {planEstudios.map((modulo, i) => (
              <div 
                key={i} 
                onClick={() => setSelectedModule(i)}
                className="group relative p-8 bg-slate-50 border border-slate-100 rounded-[2rem] hover:bg-emerald-900 transition-all duration-500 cursor-pointer overflow-hidden shadow-sm"
              >
                <div className="absolute -right-4 -bottom-4 text-9xl font-black text-slate-200/40 group-hover:text-white/10 transition-colors">{i + 1}</div>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="flex h-2 w-2 rounded-full bg-emerald-500 group-hover:bg-amber-400"></span>
                    <span className="text-[10px] font-black tracking-widest text-slate-400 group-hover:text-emerald-200 uppercase">
                      Módulo {(i + 1).toString().padStart(2, '0')}
                    </span>
                  </div>
                  <h4 className="text-xl font-bold text-slate-800 group-hover:text-white leading-snug pr-8 transition-colors">{modulo.title}</h4>
                  <div className="mt-8 flex items-center gap-2 text-emerald-600 group-hover:text-amber-400 font-bold text-xs uppercase tracking-tighter transition-all">
                    VER TEMARIO TÉCNICO + 
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 p-8 bg-emerald-50 rounded-[2.5rem] border border-emerald-100 flex flex-col md:flex-row items-center justify-between gap-8 max-w-5xl mx-auto">
            <div className="flex items-center gap-6 text-left">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm text-2xl">🎓</div>
              <div>
                <h5 className="font-bold text-emerald-900 text-lg">Carga Horaria Total </h5>
                <p className="text-emerald-700/70 font-medium">600 horas cátedra con certificación nacional. </p>
              </div>
            </div>
            <a href="#inscripcion" className="whitespace-nowrap px-8 py-4 bg-emerald-600 text-white font-black rounded-xl hover:bg-emerald-700 transition-all">
              DESCARGAR BROCHURE PDF 
            </a>
          </div>
        </div>
      </section>

      {/* COMPONENTE MODAL INTEGRADO */}
      {selectedModule !== null && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-md transition-opacity" onClick={() => setSelectedModule(null)} />
          <div className="relative w-full max-w-2xl bg-white rounded-[2.5rem] shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
            <button onClick={() => setSelectedModule(null)} className="absolute top-6 right-6 p-3 bg-slate-100 hover:bg-rose-100 text-slate-500 hover:text-rose-600 rounded-full transition-colors">
              <X size={14} />
            </button>
            <div className="p-8 sm:p-12">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-emerald-100 text-3xl flex items-center justify-center rounded-2xl">{planEstudios[selectedModule].icon}</div>
                <div>
                  <span className="text-xs font-black text-emerald-600 uppercase">Módulo {selectedModule + 1}</span>
                  <h4 className="text-2xl sm:text-3xl font-black text-slate-900">{planEstudios[selectedModule].title}</h4>
                </div>
              </div>
              <div className="space-y-4">
                <p className="text-sm font-bold text-slate-400 uppercase tracking-widest border-b border-slate-100 pb-2">Contenidos del programa </p>
                <div className="grid gap-3">
                  {planEstudios[selectedModule].items.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-4 p-4 bg-slate-50 rounded-2xl hover:bg-emerald-50 transition-colors">
                      <span className="mt-1 flex h-2 w-2 rounded-full bg-emerald-500"></span>
                      <p className="text-slate-700 font-medium">{item} </p>
                    </div>
                  ))}
                </div>
              </div>
              <button onClick={() => setSelectedModule(null)} className="w-full mt-10 py-5 bg-slate-900 text-white font-black rounded-2xl hover:bg-emerald-700 transition-all">VOLVER AL PLAN</button>
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

      {/* SECCIÓN 12 — CTA FINAL + FORMULARIO */}
      <section className="py-24 bg-emerald-50" id="inscripcion">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-5xl font-black text-slate-900 mb-8 italic">Inscripción abierta </h2>
            <p className="text-2xl text-slate-600 mb-8 leading-relaxed">
              Sumate a una formación que integra salud, educación y prevención dentro de las instituciones educativas. 
            </p>
            <div className="inline-block p-6 bg-white rounded-3xl shadow-sm border border-emerald-100 italic font-bold text-emerald-800 text-xl">
              "La salud también se construye en la escuela" 
            </div>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* SECCIÓN 10 — PIE DE PÁGINA E INSTITUCIONAL */}
<footer className="bg-white border-t border-slate-100">
  {/* Subsección: Aliados e Instituciones */}
  <div className="py-20 border-b border-slate-50">
    <div className="container mx-auto px-6">
      <p className="text-center text-slate-400 font-black uppercase tracking-[0.2em] mb-12 text-xs">
        Organizaciones que acompañan y avalan la formación
      </p>
      <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-20">
        {/* Placeholder de Logos con mejor estilo */}
        {[1, 2, 3, 4].map((v) => (
          <div key={v} className="group relative">
            <div className="h-10 w-32 bg-slate-200 rounded-lg filter grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 group-hover:bg-emerald-50 transition-all duration-500" />
            <span className="absolute -bottom-6 left-0 w-full text-[10px] text-center font-bold text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-tighter">
              Institución {v}
            </span>
          </div>
        ))}
      </div>
    </div>
  </div>

  {/* Subsección: Navegación y Contacto */}
  <div className="py-20 bg-[#fcfdfe]">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        
        {/* Columna 1: Branding */}
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center text-white font-black text-xl">
              +
            </div>
            <span className="text-xl font-black text-slate-900 tracking-tighter">
              ENFERMERÍA <span className="text-emerald-600">ESCOLAR</span>
            </span>
          </div>
          <p className="text-slate-500 font-medium leading-relaxed text-sm">
            Especialización técnica profesional para la integración de la salud y la prevención en entornos educativos modernos.
          </p>
        </div>

        {/* Columna 2: Navegación Rápida */}
        <div>
          <h4 className="font-black uppercase tracking-widest text-xs text-slate-900 mb-8">Navegación</h4>
          <ul className="space-y-4 text-sm font-bold text-slate-500">
            <li><a href="#info" className="hover:text-emerald-600 transition-colors">Rol Profesional</a></li>
            <li><a href="#plan" className="hover:text-emerald-600 transition-colors">Plan de Estudios</a></li>
            <li><a href="#inscripcion" className="hover:text-emerald-600 transition-colors">Inscripción Abierta</a></li>
            <li><a href="#" className="hover:text-emerald-600 transition-colors">Preguntas Frecuentes</a></li>
          </ul>
        </div>

        {/* Columna 3: Contacto Directo */}
        <div>
          <h4 className="font-black uppercase tracking-widest text-xs text-slate-900 mb-8">Contacto Técnico</h4>
          <ul className="space-y-4 text-sm font-medium text-slate-500">
            <li className="flex items-center gap-3">
              <span className="text-emerald-500">📍</span> 
              Sede Central, La Plata, Bs. As.
            </li>
            <li className="flex items-center gap-3">
              <span className="text-emerald-500">✉️</span> 
              consultas@enfermeriaescolar.edu.ar
            </li>
            <li className="flex items-center gap-3">
              <span className="text-emerald-500">📞</span> 
              +54 221 000-0000
            </li>
          </ul>
        </div>

        {/* Columna 4: Redes y Social */}
        <div>
          <h4 className="font-black uppercase tracking-widest text-xs text-slate-900 mb-8">Seguí el Crecimiento</h4>
          <div className="flex gap-4">
            {['IG', 'FB', 'LI'].map((red) => (
              <a 
                key={red} 
                href="#" 
                className="w-10 h-10 rounded-xl bg-white border border-slate-100 flex items-center justify-center text-xs font-black text-slate-400 hover:bg-emerald-600 hover:text-white hover:border-emerald-600 transition-all shadow-sm"
              >
                {red}
              </a>
            ))}
          </div>
          <p className="mt-6 text-[11px] text-slate-400 font-bold leading-relaxed">
            Unite a nuestra comunidad de profesionales de la salud.
          </p>
        </div>
      </div>

      {/* Footer Legal */}
      <div className="mt-20 pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
          © 2026 Diplomatura en Enfermería Escolar — Todos los derechos reservados.
        </p>
       {/*<div className="flex gap-8 text-[10px] font-black text-slate-400 uppercase tracking-widest">
          <a href="#" className="hover:text-slate-900">Privacidad</a>
          <a href="#" className="hover:text-slate-900">Términos Legales</a>
        </div>*/}
      </div>
    </div>
  </div>
</footer>
    </main>
  );
}