// File: src/components/features/homepage/HeroSection.jsx (Versi Lengkap Final)

import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button'; // Komponen tombol Shadcn
import SectionWrapper from '@/components/shared/SectionWrapper'; // Wrapper section kita
import heroBg from '@/assets/images/bg-hero.jpg'; // <-- Menggunakan gambar background Anda
import { motion } from 'framer-motion'; // Import Framer Motion

// Definisikan variants animasi untuk elemen teks dan tombol
const titleVariants = {
  hidden: { opacity: 0, y: 20 }, // Mulai transparan dan sedikit di bawah
  visible: { opacity: 1, y: 0 }  // Muncul ke posisi asli
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const buttonContainerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const HeroSection = () => {
  return (
    // Gunakan SectionWrapper. Pastikan SectionWrapper.jsx sudah diupdate
    // agar menerima dan menerapkan prop 'style'.
    <SectionWrapper
      // ID untuk navigasi jika perlu
      id="hero"
      // Kelas Tailwind untuk background, layout, teks, dan posisi
      className="bg-cover bg-center bg-no-repeat text-white min-h-[60vh] md:min-h-[70vh] flex items-center relative overflow-hidden"
      // Terapkan background image melalui style prop
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Lapisan overlay gelap agar teks lebih kontras */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      {/* Kontainer untuk konten agar terpusat dan punya padding */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">

        {/* Judul Utama dengan animasi */}
        <motion.h1
          className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl mb-4"
          variants={titleVariants} // Gunakan variants yang didefinisikan
          initial="hidden"         // State awal
          animate="visible"        // State akhir (langsung animate saat load)
          transition={{ duration: 0.6, ease: "easeOut" }} // Atur durasi dan easing
        >
          PT. Sejahtera Gajah Mada
        </motion.h1>

        {/* Deskripsi/Tagline dengan animasi */}
        <motion.p
          className="mt-4 max-w-2xl mx-auto text-lg sm:text-xl md:text-2xl text-neutral-200 mb-8"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }} // Delay sedikit setelah judul
        >
          Solusi Logistik Terintegrasi untuk Pertumbuhan Bisnis Anda di Seluruh Nusantara.
        </motion.p>

        {/* Kontainer Tombol dengan animasi */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          variants={buttonContainerVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }} // Delay lagi setelah deskripsi
        >
          <Button size="lg" asChild>
            <Link to="/layanan">Jelajahi Layanan Kami</Link>
          </Button>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default HeroSection;