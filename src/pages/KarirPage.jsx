// File: src/pages/KarirPage.jsx (Halaman Karir Baru)

import React from 'react';
import PageLayout from '@/components/shared/PageLayout';
import SectionWrapper from '@/components/shared/SectionWrapper';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'; // Opsional jika mau pakai card
import { LuBriefcase, LuSend } from "react-icons/lu"; // Contoh ikon

// --- Variants Animasi ---
const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};
// ----------------------

const KarirPage = () => {
  // Ganti dengan email HRD atau email karir PT. SGM
  const careerEmail = "hrd@sejahtera-gm.co.id";

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
          Bergabung dengan Tim Kami
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-2xl mx-auto text-lg text-muted-foreground"
        >
          Temukan peluang karir dan tumbuh bersama PT. Sejahtera Gajah Mada.
        </motion.p>
      </SectionWrapper>

      {/* Section 2: Intro Budaya Kerja (Contoh) */}
      <SectionWrapper>
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-3xl font-semibold mb-6 text-center">Mengapa Bergabung Dengan Kami?</h2>
          <p className="text-center text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            Di PT. Sejahtera Gajah Mada, kami percaya bahwa sumber daya manusia adalah aset terpenting. Kami menawarkan lingkungan kerja yang dinamis, kolaboratif, dan mendukung pertumbuhan profesional Anda di industri logistik yang terus berkembang. Kami mencari talenta terbaik yang memiliki semangat integritas dan inovasi.
          </p>
        </motion.div>
      </SectionWrapper>

      {/* Section 3: Lowongan Tersedia */}
      <SectionWrapper id="lowongan" className="bg-muted/40">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center"
        >
          <h2 className="text-3xl font-semibold mb-8 flex items-center justify-center gap-2">
            <LuBriefcase /> Lowongan Tersedia
          </h2>

          {/* --- Tampilkan ini jika belum ada lowongan --- */}
          <div className="max-w-xl mx-auto">
            <Card className="p-6 border-dashed">
              <CardHeader className="p-0 text-center">
                <CardTitle className="text-xl mb-2">Belum Ada Lowongan</CardTitle>
                <CardDescription className="text-base text-muted-foreground">
                  Saat ini belum ada posisi yang terbuka. Namun, kami selalu mencari talenta potensial. Jangan ragu untuk mengirimkan CV terbaru Anda ke alamat email di bawah ini.
                </CardDescription>
                <a href={`mailto:${careerEmail}?subject=Lamaran Kerja / Open Application`} className="inline-block mt-6">
                  <Button>
                    <LuSend className="mr-2 h-4 w-4" /> Kirim CV Anda
                  </Button>
                </a>
                 <p className="text-sm text-muted-foreground mt-4">Email: {careerEmail}</p>
              </CardHeader>
            </Card>
          </div>
          {/* --- Akhir bagian jika belum ada lowongan --- */}

          {/* --- Nanti jika ada lowongan, bisa tampilkan list di sini --- */}
          {/* Contoh:
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
             {daftarLowongan.map(lowongan => <JobCard key={lowongan.id} {...lowongan} />)}
          </div>
          */}

        </motion.div>
      </SectionWrapper>

    </PageLayout>
  );
};

export default KarirPage;