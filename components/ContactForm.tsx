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

    // Validación lógica: Al menos uno de los dos debe existir
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
      setErrorMsg('Hubo un error al procesar tu inscripción. Reintentá en unos minutos.');
      console.error(error);
    }
    setLoading(false);
  };

  return (
    <div className="bg-white p-8 rounded-[2rem] shadow-2xl border border-slate-100 max-w-md mx-auto">
      <h3 className="text-2xl font-black text-slate-900 mb-2">Completá tu inscripción</h3>
      <p className="text-slate-500 text-sm mb-8">Ingresá tus datos profesionales para reservar tu vacante.</p>
      
      {success ? (
        <div className="p-6 bg-emerald-50 border border-emerald-100 text-emerald-800 rounded-2xl text-center">
          <span className="text-3xl mb-2 block">✅</span>
          <p className="font-bold text-lg">¡Registro exitoso!</p>
          <p className="text-sm opacity-90">Un asesor académico se contactará con vos a la brevedad.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          
          <div className="space-y-1">
            <label className="text-[10px] font-black uppercase tracking-wider text-slate-400 ml-1">Datos Personales</label>
            <input name="nombre_apellido" type="text" placeholder="Nombre y Apellido" required className="input-field" />
            <input name="dni" type="text" placeholder="DNI / Pasaporte" required className="input-field" />
            <input name="ciudad_pais" type="text" placeholder="Ciudad, País" required className="input-field" />
          </div>

          <div className="space-y-1">
  <label className="text-[10px] font-black uppercase tracking-wider text-slate-400 ml-1">
    Titulación
  </label>
  <select 
    name="titulo" 
    required 
    defaultValue="" // <--- React maneja el valor inicial aquí
    className="input-field appearance-none bg-white"
  >
    <option value="" disabled>Seleccioná tu título</option>
    <option value="Licenciado/a en Enfermería">Lic. en Enfermería</option>
    <option value="Técnico/a en Enfermería">Técnico/a en Enfermería</option>
    <option value="Otro profesional de salud">Otro profesional de salud</option>
  </select>
</div>

          <div className="space-y-1">
            <label className="text-[10px] font-black uppercase tracking-wider text-slate-400 ml-1">Contacto (Mínimo uno requerido)</label>
            <input name="email" type="email" placeholder="Correo electrónico" className="input-field" />
            <input name="telefono" type="tel" placeholder="Teléfono (WhatsApp)" className="input-field" />
          </div>

          {errorMsg && (
            <p className="text-red-500 text-xs font-bold bg-red-50 p-3 rounded-lg border border-red-100">
              ⚠️ {errorMsg}
            </p>
          )}

          <button 
            disabled={loading}
            className="w-full py-5 bg-[#f59e0b] hover:bg-[#d97706] text-white font-black rounded-2xl transition-all shadow-xl shadow-amber-200 active:scale-95 disabled:opacity-50"
          >
            {loading ? 'PROCESANDO...' : 'RESERVAR MI LUGAR'}
          </button>
        </form>
      )}

      {/* Estilos locales rápidos para no repetir clases de Tailwind */}
      <style jsx>{`
        .input-field {
          width: 100%;
          padding: 1rem;
          border-radius: 1rem;
          border: 1px solid #e2e8f0;
          font-weight: 500;
          font-size: 0.875rem;
          outline: none;
          transition: all 0.2s;
        }
        .input-field:focus {
          border-color: #3282b8;
          ring: 2px;
          ring-color: #bbe1fa;
        }
      `}</style>
    </div>
  );
}