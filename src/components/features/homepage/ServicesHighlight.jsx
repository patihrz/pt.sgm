// File: src/components/features/homepage/ServicesHighlight.jsx
import React from 'react';
import SectionWrapper from '@/components/shared/SectionWrapper';
import ServiceCard from '@/components/shared/ServiceCard'; // <-- ServiceCard sudah dimodifikasi sebelumnya jadi motion component
import { motion } from 'framer-motion'; // <--- 1. Import motion
import { LuWarehouse, LuTruck, LuShip, LuFileCheck2 } from "react-icons/lu";

const highlightedServices = [
 {
   icon: <LuWarehouse className="w-10 h-10 text-primary" />,
   title: "Warehousing & Distribution",
   description: "Penyimpanan aman, manajemen inventaris, dan distribusi efisien.",
   link: "/layanan#warehousing"
 },
 {
   icon: <LuTruck className="w-10 h-10 text-primary" />,
   title: "Transportasi Darat",
   description: "Armada modern untuk pengiriman FTL & LTL ke seluruh Jawa & Sumatera.",
   link: "/layanan#transportasi"
 },
 {
   icon: <LuShip className="w-10 h-10 text-primary" />,
   title: "Freight Forwarding Laut & Udara",
   description: "Pengiriman internasional yang handal via laut dan udara.",
   link: "/layanan#freight"
 },
  {
   icon: <LuFileCheck2 className="w-10 h-10 text-primary" />,
   title: "Customs Clearance",
   description: "Pengurusan bea cukai cepat dan sesuai regulasi untuk ekspor-impor.",
   link: "/layanan#customs"
 },
];

// 2. Definisikan variants untuk container (stagger)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Jeda antar ServiceCard saat muncul
      delayChildren: 0.1,   // Delay sebelum ServiceCard pertama muncul
    }
  }
};
// Catatan: itemVariants tidak perlu di sini karena animasi item (opacity, y)
// sudah diatur di dalam komponen ServiceCard.jsx itu sendiri.

const ServicesHighlight = () => {
  return (
    <SectionWrapper id="layanan-kami">
      <div className="text-center mb-12">
        {/* 3. Bungkus H2 dengan motion */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold tracking-tight sm:text-4xl mb-4"
        >
          Layanan Unggulan Kami
        </motion.h2>
        {/* 3. Bungkus P dengan motion */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-2xl mx-auto text-lg text-muted-foreground"
        >
          Kami menyediakan solusi logistik komprehensif untuk mendukung rantai pasok Anda.
        </motion.p>
      </div>
      {/* 3. Bungkus div grid dengan motion */}
      <motion.div
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        variants={containerVariants} // Terapkan container variants untuk efek stagger
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }} // Trigger saat 10% grid terlihat
      >
        {highlightedServices.map((service) => (
          // Langsung gunakan ServiceCard di sini.
          // Karena ServiceCard sudah merupakan motion component dari modifikasi sebelumnya,
          // properti animasi (initial, whileInView, dll) & hover akan otomatis aktif
          // dan efek stagger dari parent (motion.div) akan diterapkan padanya.
          <ServiceCard
            key={service.title}
            icon={service.icon}
            title={service.title}
            description={service.description}
            link={service.link}
          />
        ))}
      </motion.div>
    </SectionWrapper>
  );
};

export default ServicesHighlight;