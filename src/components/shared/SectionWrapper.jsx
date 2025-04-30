// File: src/components/shared/SectionWrapper.jsx (KODE YANG BENAR)
import React from 'react';
import { cn } from "@/lib/utils";

// Terima 'style' dan props lain via ...rest
const SectionWrapper = ({ children, className = '', id = '', style = {}, ...rest }) => {
  return (
    <section
      id={id}
      className={cn(
        "w-full py-12 md:py-16 lg:py-20", // Default padding bisa tetap di sini
        className // Kelas tambahan dari luar
      )}
      style={style} // <-- TERAPKAN style prop di sini (INI YANG PENTING)
      {...rest}     // Teruskan props lain jika ada (opsional)
    >
      {/* Container untuk konten tetap diperlukan agar padding konsisten */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;