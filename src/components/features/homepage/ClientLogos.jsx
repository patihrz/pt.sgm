// File: src/components/features/homepage/ClientLogos.jsx
import React from 'react';
import SectionWrapper from '@/components/shared/SectionWrapper';
import { motion } from 'framer-motion';

// Placeholder data klien
const clientPlaceholders = [
  "Klien A Logistik",
  "PT Manufaktur Maju",
  "Distributor Retail XYZ",
  "Perusahaan Ekspor Impor",
  "Grup Agribisnis Nusantara",
  "Startup Teknologi Logistik",
];

// Variants animasi (bisa disesuaikan)
const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } } // Stagger logo
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 }
};

const ClientLogos = () => {
  return (
    <SectionWrapper id="klien-kami" className="bg-white dark:bg-background"> {/* Background kontras */}
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-3xl font-semibold mb-4">Dipercaya Oleh</h2>
          <p className="max-w-xl mx-auto text-lg text-muted-foreground">
            Bergabunglah dengan berbagai perusahaan terkemuka yang mengandalkan solusi logistik kami.
          </p>
        </div>

        {/* Container untuk logo */}
        <motion.div
          className="flex flex-wrap justify-center items-center gap-x-8 gap-y-6 md:gap-x-12 lg:gap-x-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {clientPlaceholders.map((clientName) => (
            <motion.div
              key={clientName}
              variants={itemVariants}
              className="p-3 text-center" // Styling placeholder sederhana
            >
              {/* Ganti ini dengan tag <img> jika sudah punya logo asli */}
              <span className="text-sm font-medium text-muted-foreground italic">
                {clientName}
              </span>
              {/* Contoh jika pakai gambar:
               <img src={`/path/to/logo/${clientName.replace(/\s+/g, '-')}.svg`} alt={clientName} className="h-8 md:h-10 filter grayscale hover:filter-none transition-all duration-300" />
              */}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
};

export default ClientLogos;