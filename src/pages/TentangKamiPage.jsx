// File: src/pages/TentangKamiPage.jsx (Versi Perbaikan)
import React from 'react';
import PageLayout from '@/components/shared/PageLayout';
import SectionWrapper from '@/components/shared/SectionWrapper';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

// --- Import Ikon ---
// Pastikan SEMUA ikon yang dipakai di bawah (LuTarget, LuRocket, LuShieldCheck,
// LuHeartHandshake, LuZap, LuGem) diimpor di sini.
import {
  LuHeartHandshake,
  LuTarget,
  LuGem,
  LuZap,
  LuShieldCheck, // <-- Pastikan ini ada
  LuRocket      // <-- Pastikan ini ada (atau ganti ikon Misi jika mau)
} from "react-icons/lu";
// --- Akhir Import Ikon ---

// --- Variants Animasi ---
const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const listVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 }, // Muncul dari kiri
  visible: { opacity: 1, x: 0 }
};

// --- Data Nilai Perusahaan ---
const companyValues = [
  // Pastikan ikon yang dipakai di sini (LuShieldCheck, dll) sudah diimpor di atas
  { icon: <LuShieldCheck className="w-7 h-7 text-primary mb-2" />, title: "Integritas", description: "Beroperasi dengan jujur dan etika tinggi." },
  { icon: <LuHeartHandshake className="w-7 h-7 text-primary mb-2" />, title: "Pelayanan", description: "Mengutamakan kepuasan dan kebutuhan pelanggan." },
  { icon: <LuZap className="w-7 h-7 text-primary mb-2" />, title: "Inovasi", description: "Terus mencari cara baru untuk efisiensi logistik." },
  { icon: <LuGem className="w-7 h-7 text-primary mb-2" />, title: "Keunggulan", description: "Berkomitmen pada kualitas dan hasil terbaik." },
];
// ---------------------------

const TentangKamiPage = () => {
  return (
    <PageLayout>
      {/* Section 1: Judul Halaman */}
      <SectionWrapper className="bg-gradient-to-b from-slate-50 to-white dark:from-slate-900/50 dark:to-background pt-24 pb-16 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold tracking-tight sm:text-5xl mb-4"
        >
          Tentang PT. Sejahtera Gajah Mada
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-2xl mx-auto text-lg text-muted-foreground"
        >
          Mengenal lebih dekat partner logistik terpercaya Anda.
        </motion.p>
      </SectionWrapper>

      {/* Section 2: Profil Singkat */}
      <SectionWrapper>
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-3xl font-semibold mb-6 text-center">Profil Perusahaan</h2>
          <p className="text-center text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            PT. Sejahtera Gajah Mada adalah perusahaan logistik nasional yang berdedikasi untuk menyediakan solusi rantai pasok yang efisien, handal, dan inovatif. Sejak [Tahun Berdiri], kami telah tumbuh bersama pelanggan kami, mendukung distribusi barang dan pertumbuhan ekonomi di seluruh Indonesia dengan jaringan yang luas dan teknologi terkini.
          </p>
        </motion.div>
      </SectionWrapper>

      {/* Section 3: Visi & Misi */}
      <SectionWrapper className="bg-muted/40">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Pastikan LuTarget diimpor */}
            <h3 className="text-2xl font-semibold mb-4 text-primary flex items-center"><LuTarget className="mr-2"/> Visi Kami</h3>
            <p className="text-muted-foreground leading-relaxed">
              Menjadi perusahaan logistik terdepan di Indonesia yang dikenal karena keandalan, inovasi, dan kontribusinya terhadap efisiensi rantai pasok nasional.
            </p>
          </motion.div>
          <motion.div
             variants={sectionVariants}
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true, amount: 0.2, delay: 0.1 }}
          >
             {/* Pastikan LuRocket diimpor (atau ganti ikonnya) */}
            <h3 className="text-2xl font-semibold mb-4 text-primary flex items-center"><LuRocket className="mr-2"/> Misi Kami</h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Memberikan layanan logistik terintegrasi dengan standar kualitas tertinggi.</li>
              <li>Mengembangkan solusi inovatif berbasis teknologi untuk efisiensi operasional.</li>
              <li>Membangun kemitraan jangka panjang yang saling menguntungkan dengan pelanggan.</li>
              <li>Menciptakan lingkungan kerja yang positif dan mengembangkan potensi sumber daya manusia.</li>
            </ul>
          </motion.div>
        </div>
      </SectionWrapper>

       {/* Section 4: Nilai-Nilai Perusahaan */}
      <SectionWrapper>
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-semibold mb-4">Nilai Inti Kami</h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            Landasan kami dalam bertindak dan memberikan pelayanan terbaik.
          </p>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
          variants={listVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {companyValues.map((value) => (
            <motion.div key={value.title} variants={itemVariants}>
              <Card className="text-center h-full border-0 shadow-none bg-transparent">
                <CardHeader>
                   {/* Pastikan ikon di value.icon (LuShieldCheck, dll) sudah diimpor */}
                   <div className="flex justify-center mb-3">{value.icon}</div>
                   <CardTitle className="text-xl">{value.title}</CardTitle>
                   <CardDescription>{value.description}</CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </SectionWrapper>

    </PageLayout>
  );
};

export default TentangKamiPage;