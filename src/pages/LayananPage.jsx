// File: src/pages/LayananPage.jsx
import React from 'react';
import PageLayout from '@/components/shared/PageLayout';
import SectionWrapper from '@/components/shared/SectionWrapper';
import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"; // Import komponen Accordion
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
// Import ikon yang relevan
import { LuWarehouse, LuTruck, LuShip, LuFileCheck2, LuPackageSearch, LuNetwork } from "react-icons/lu";

// --- Data Layanan (Lebih Detail) ---
const servicesData = [
  {
    value: "item-1", // ID unik untuk AccordionItem
    icon: LuWarehouse,
    title: "Warehousing & Distribution",
    description: "Solusi penyimpanan modern dan aman untuk berbagai jenis barang. Kami menawarkan manajemen inventaris real-time, sistem WMS terintegrasi, cross-docking, dan layanan distribusi yang efisien ke seluruh jaringan Anda. Fasilitas kami dilengkapi keamanan 24/7 dan kontrol suhu jika diperlukan."
  },
  {
    value: "item-2",
    icon: LuTruck,
    title: "Transportasi Darat",
    description: "Andalkan armada truk modern kami (CDD, CDE, Fuso, Wingbox) untuk pengiriman Full Truck Load (FTL) dan Less Than Truck Load (LTL). Jangkauan luas mencakup Jawa, Sumatera, dan wilayah strategis lainnya, didukung oleh tracking GPS dan tim operasional yang berpengalaman untuk memastikan ketepatan waktu."
  },
  {
    value: "item-3",
    icon: LuShip, // Bisa juga kombinasi LuShip dan LuPlane
    title: "Freight Forwarding (Laut & Udara)",
    description: "Permudah pengiriman internasional Anda. Kami menangani pengiriman FCL & LCL via laut serta kargo udara dengan jaringan agen global yang kuat. Kami urus dokumentasi, negosiasi harga terbaik, dan pemantauan penuh dari titik asal hingga tujuan."
  },
  {
    value: "item-4",
    icon: LuFileCheck2,
    title: "Customs Clearance (PPJK)",
    description: "Layanan Pengurusan Jasa Kepabeanan (PPJK) yang cepat, akurat, dan sesuai regulasi. Tim ahli kami memastikan kelancaran proses impor dan ekspor Anda, meminimalkan risiko keterlambatan dan biaya tak terduga."
  },
   {
    value: "item-5",
    icon: LuNetwork, // Contoh ikon lain
    title: "Supply Chain Solutions",
    description: "Kami tidak hanya memindahkan barang, tapi juga merancang solusi rantai pasok end-to-end yang disesuaikan kebutuhan bisnis Anda. Melalui analisis mendalam, kami bantu optimalkan inventaris, rute transportasi, dan proses logistik secara keseluruhan."
  },
];
// ----------------------------------

// --- Variants Animasi ---
const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const listVariants = { // Untuk stagger accordion item
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVariants = { // Untuk tiap accordion item
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};
// ----------------------

const LayananPage = () => {
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
          Layanan Logistik Kami
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-2xl mx-auto text-lg text-muted-foreground"
        >
          Solusi komprehensif untuk kelancaran rantai pasok bisnis Anda.
        </motion.p>
      </SectionWrapper>

      {/* Section 2: Daftar Layanan (Accordion) */}
      <SectionWrapper>
        <motion.div
          className="max-w-3xl mx-auto" // Batasi lebar accordion agar lebih rapi
          variants={listVariants} // Terapkan stagger ke container
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {servicesData.map((service) => (
              // Animasikan setiap item accordion
              <motion.div key={service.value} variants={itemVariants}>
                <AccordionItem value={service.value}>
                  <AccordionTrigger className="text-lg hover:no-underline">
                    <div className="flex items-center gap-3">
                       {/* Tampilkan ikon jika ada */}
                       {service.icon && <service.icon className="w-5 h-5 text-primary" />}
                       {service.title}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground pl-10 pr-2 pb-4">
                    {service.description}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </SectionWrapper>

      {/* Section 3: Call to Action */}
      <SectionWrapper className="bg-muted/40">
         <motion.div
            className="text-center"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-2xl font-semibold mb-4">Butuh Solusi Logistik Khusus?</h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Tim kami siap mendiskusikan kebutuhan unik bisnis Anda dan merancang solusi yang paling efektif.
            </p>
            <Button size="lg" asChild>
              <Link to="/kontak">Konsultasi Gratis</Link>
            </Button>
         </motion.div>
      </SectionWrapper>

    </PageLayout>
  );
};

export default LayananPage;