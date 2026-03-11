// components/ContactForm.tsx
'use client';
import { useState } from 'react';
import { supabase } from '@/lib/supabase';

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    
    const { error } = await supabase.from('leads').insert([{
      nombre: formData.get('nombre'),
      email: formData.get('email'),
      telefono: formData.get('telefono'),
    }]);

    if (!error) {
      setSuccess(true);
      (e.target as HTMLFormElement).reset();
    }
    setLoading(false);
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
      <h3 className="text-2xl font-bold text-slate-800 mb-6">Solicitá información técnica</h3>
      {success ? (
        <div className="p-4 bg-green-50 text-green-700 rounded-lg">
          ¡Gracias! Un asesor se contactará con vos a la brevedad.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <input 
            name="nombre" 
            type="text" 
            placeholder="Nombre completo" 
            required 
            className="w-full p-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
          />
          <input 
            name="email" 
            type="email" 
            placeholder="Correo electrónico" 
            required 
            className="w-full p-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
          />
          <input 
            name="telefono" 
            type="tel" 
            placeholder="Teléfono (WhatsApp)" 
            required 
            className="w-full p-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
          />
          <button 
            disabled={loading}
            className="w-full py-4 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-lg transition-colors shadow-lg shadow-amber-200"
          >
            {loading ? 'Enviando...' : 'CONSULTAR AHORA'}
          </button>
        </form>
      )}
    </div>
  );
}