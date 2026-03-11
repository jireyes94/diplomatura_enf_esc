// components/ContactForm.tsx
'use client';
import { useState } from 'react';
import { supabase } from '@/lib/supabase';

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');
    
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    const telefono = formData.get('telefono') as string;

    if (!email && !telefono) {
      setErrorMsg('Por favor, ingresá al menos un medio de contacto (Email o Teléfono).');
      setLoading(false);
      return;
    }

    const { error } = await supabase.from('inscripciones').insert([{
      nombre_completo: formData.get('nombre_apellido'),
      dni: formData.get('dni'),
      ciudad_pais: formData.get('ciudad_pais'),
      titulo_profesional: formData.get('titulo'),
      email: email || null,
      telefono: telefono || null,
    }]);

    if (!error) {
      setSuccess(true);
      (e.target as HTMLFormElement).reset();
    } else {
      setErrorMsg('Hubo un error al procesar tu inscripción.');
    }
    setLoading(false);
  };

  return (
    <div className="w-full"> {/* Removí bg, padding y shadow aquí */}
      {success ? (
        <div className="p-10 text-center animate-in fade-in zoom-in">
          <span className="text-5xl mb-4 block">✅</span>
          <p className="font-extrabold text-2xl text-slate-800">¡Registro exitoso!</p>
          <p className="text-slate-500 mt-2">Un asesor se contactará con vos a la brevedad.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-blue-600 ml-1">Datos Personales</label>
            <input name="nombre_apellido" type="text" placeholder="Nombre y Apellido" required className="input-field" />
            <div className="grid grid-cols-2 gap-3">
              <input name="dni" type="text" placeholder="DNI / Pasaporte" required className="input-field" />
              <input name="ciudad_pais" type="text" placeholder="Ciudad, País" required className="input-field" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-blue-600 ml-1">Titulación Profesional</label>
            <select name="titulo" required defaultValue="" className="input-field appearance-none bg-white">
              <option value="" disabled>Seleccioná tu título</option>
              <option value="Licenciado/a en Enfermería">Lic. en Enfermería</option>
              <option value="Técnico/a en Enfermería">Técnico/a en Enfermería</option>
              <option value="Otro profesional de salud">Otro profesional de salud</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-blue-600 ml-1">Contacto Directo</label>
            <input name="email" type="email" placeholder="Correo electrónico" className="input-field" />
            <input name="telefono" type="tel" placeholder="Teléfono (WhatsApp)" className="input-field" />
          </div>

          {errorMsg && (
            <p className="text-red-600 text-[11px] font-bold bg-red-50 p-3 rounded-xl border border-red-100 animate-shake">
              ⚠️ {errorMsg}
            </p>
          )}

          <button 
            disabled={loading}
            className="w-full py-5 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-2xl transition-all shadow-xl shadow-blue-200 active:scale-[0.97] disabled:opacity-50 mt-4 uppercase tracking-wider"
          >
            {loading ? 'Procesando...' : 'Reservar mi lugar ahora'}
          </button>
        </form>
      )}

      <style jsx>{`
        .input-field {
          width: 100%;
          padding: 1.1rem;
          border-radius: 1.25rem;
          border: 1px solid #f1f5f9;
          background-color: #f8fafc;
          font-weight: 600;
          font-size: 0.875rem;
          color: #1e293b;
          outline: none;
          transition: all 0.2s;
        }
        .input-field:focus {
          border-color: #3b82f6;
          background-color: #ffffff;
          box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.1);
        }
      `}</style>
    </div>
  );
}