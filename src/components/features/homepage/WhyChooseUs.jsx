// File: src/components/features/homepage/WhyChooseUs.jsx
import React from 'react';
import SectionWrapper from '@/components/shared/SectionWrapper';
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { motion } from 'framer-motion'; // <--- 1. Import motion
import { LuNetwork, LuShieldCheck, LuClock, LuUsers } from "react-icons/lu";

const reasons = [
 {
   icon: <LuShieldCheck className="w-8 h-8 text-primary mb-3" />,
   title: "Keandalan & Keamanan",
   description: "Prioritas utama kami adalah memastikan barang Anda sampai tujuan dengan aman dan tepat waktu."
 },
 {
   icon: <LuNetwork className="w-8 h-8 text-primary mb-3" />,
   title: "Jaringan Luas",
   description: "Jangkauan operasional kami mencakup kota-kota besar dan daerah strategis di Indonesia."
 },
 {
   icon: <LuClock className="w-8 h-8 text-primary mb-3" />,
   title: "Efisiensi Waktu & Biaya",
   description: "Solusi logistik yang dirancang untuk mengoptimalkan waktu pengiriman dan biaya operasional Anda."
 },
 {
   icon: <LuUsers className="w-8 h-8 text-primary mb-3" />,
   title: "Layanan Pelanggan Prima",
   description: "Tim kami siap membantu dan memberikan update status pengiriman Anda secara proaktif."
 },
];

// 2. Definisikan variants untuk animasi
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Jeda antar card saat muncul
      delayChildren: 0.1,   // Delay sebelum card pertama muncul
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 }, // Mulai dari bawah 30px dan transparan
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } // Muncul ke posisi y:0
};

const WhyChooseUs = () => {
  return (
    <SectionWrapper id="mengapa-kami" className="bg-muted/40">
       <div className="text-center mb-12">
        {/* 3. Bungkus H2 dengan motion dan tambahkan props animasi */}
        <motion.h2
          initial="hidden" // State awal inline
          whileInView="visible" // State tujuan saat terlihat
          viewport={{ once: true, amount: 0.3 }} // Aturan kapan trigger
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} // Definisi state inline
          transition={{ duration: 0.5 }} // Durasi animasi
          className="text-3xl font-bold tracking-tight sm:text-4xl mb-4"
        >
          Mengapa Memilih Kami?
        </motion.h2>
         {/* 3. Bungkus P dengan motion dan tambahkan props animasi */}
         <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.5, delay: 0.1 }} // Beri sedikit delay setelah H2
          className="max-w-2xl mx-auto text-lg text-muted-foreground"
        >
          Komitmen kami adalah memberikan nilai tambah bagi kesuksesan bisnis Anda.
        </motion.p>
      </div>
       {/* 3. Bungkus div grid dengan motion dan gunakan containerVariants */}
       <motion.div
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }} // Trigger saat grid sedikit terlihat
       >
          {reasons.map((reason) => (
            // 3. Bungkus setiap Card dengan motion.div dan gunakan itemVariants + whileHover
            <motion.div
              key={reason.title}
              variants={itemVariants} // Terapkan animasi item
              whileHover={{ y: -5, transition: { duration: 0.2 } }} // Efek naik sedikit saat hover
            >
              {/* Card asli Anda tetap di sini */}
              <Card className="text-center h-full"> {/* Beri h-full agar tinggi card sama */}
                <CardHeader>
                  {reason.icon}
                  <CardTitle>{reason.title}</CardTitle>
                  <CardDescription>{reason.description}</CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
       </motion.div>
    </SectionWrapper>
  );
};

export default WhyChooseUs;