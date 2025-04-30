// File: src/pages/KontakPage.jsx (Versi Revisi)
import React from 'react';
import PageLayout from '@/components/shared/PageLayout';
import SectionWrapper from '@/components/shared/SectionWrapper';
import ContactForm from '@/components/shared/ContactForm';
import { motion } from 'framer-motion';
// Import ikon untuk info kontak
import { LuMapPin, LuPhone, LuMail, LuClock } from "react-icons/lu";

// --- Variants Animasi ---
const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const itemVariants = { // Untuk item kontak atau elemen lain
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
};
// ----------------------

const KontakPage = () => {
  // Ganti dengan info kontak asli PT. SGM
  const contactInfo = {
    address: "Jl. Logistik Raya No. 123, Jakarta Selatan, DKI Jakarta 12xxx, Indonesia",
    phone: "(021) 123-4567",
    email: "info@sejahtera-gm.co.id",
    hours: "Senin - Jumat: 08:00 - 17:00 WIB"
  };

  // Ganti SRC iframe dengan embed code Google Maps lokasi kantor Anda
  const mapEmbedSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.718816272803!2d106.82496467499108!3d-6.29971999368946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1e8a91d1b8f%3A0x7c2caddac9e6b4c!2sMenara%20Standard%20Chartered!5e0!3m2!1sen!2sid!4v1714480000000!5m2!1sen!2sid"; // <-- GANTI INI

  return (
    <PageLayout>
      {/* Section 1: Judul Halaman (Sama seperti sebelumnya) */}
      <SectionWrapper className="bg-gradient-to-b from-slate-50 to-white dark:from-slate-900/50 dark:to-background pt-24 pb-16 text-center">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
          Hubungi Kami
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="max-w-xl mx-auto text-lg text-muted-foreground">
          Kami siap membantu menjawab pertanyaan Anda atau mendiskusikan kebutuhan logistik Anda.
        </motion.p>
      </SectionWrapper>

      {/* Section 2: Info Kontak & Form (Layout Baru) */}
      <SectionWrapper>
        {/* Grid 2 kolom untuk layar medium ke atas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* Kolom Kiri: Info Kontak & Peta */}
          <motion.div
            className="space-y-8"
            initial="hidden"
            whileInView="visible"
            variants={{ visible: { transition: { staggerChildren: 0.2 } } }} // Stagger item di kolom kiri
            viewport={{ once: true, amount: 0.1 }}
          >
            {/* Info Kontak Detail */}
            <motion.div variants={itemVariants}>
              <h2 className="text-2xl font-semibold mb-4">Informasi Kontak</h2>
              <div className="space-y-3 text-muted-foreground">
                <p className="flex items-start gap-3">
                  <LuMapPin className="w-5 h-5 mt-1 text-primary shrink-0" />
                  <span>{contactInfo.address}</span>
                </p>
                <p className="flex items-center gap-3">
                  <LuPhone className="w-5 h-5 text-primary shrink-0" />
                  <span>{contactInfo.phone}</span>
                </p>
                <p className="flex items-center gap-3">
                  <LuMail className="w-5 h-5 text-primary shrink-0" />
                  <span>{contactInfo.email}</span>
                </p>
                 <p className="flex items-center gap-3">
                  <LuClock className="w-5 h-5 text-primary shrink-0" />
                  <span>{contactInfo.hours}</span>
                </p>
              </div>
            </motion.div>

            {/* Peta Lokasi */}
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-semibold mb-3">Lokasi Kami</h3>
              <div className="aspect-video overflow-hidden rounded-md border">
                <iframe
                  src={mapEmbedSrc}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Peta Lokasi Kantor"
                ></iframe>
              </div>
            </motion.div>
          </motion.div>

          {/* Kolom Kanan: Form Kontak */}
          <motion.div
            variants={sectionVariants} // Animasi untuk blok form
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="text-2xl font-semibold mb-6">Kirim Pesan Langsung</h2>
            <ContactForm /> {/* Form kontak akan dianimasikan dari dalam */}
          </motion.div>

        </div>
      </SectionWrapper>
    </PageLayout>
  );
};

export default KontakPage;