// File: src/pages/SyaratKetentuanPage.jsx
import React from 'react';
import PageLayout from '@/components/shared/PageLayout';
import SectionWrapper from '@/components/shared/SectionWrapper';
import { motion } from 'framer-motion';

const SyaratKetentuanPage = () => {
  return (
    <PageLayout>
      <SectionWrapper className="pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6 text-center">
            Syarat & Ketentuan
          </h1>
          <div className="prose dark:prose-invert max-w-none mx-auto text-muted-foreground">
             <p className="text-center italic mb-8">
              [Konten lengkap Syarat & Ketentuan Penggunaan Website PT. Sejahtera Gajah Mada akan ditambahkan di sini.]
            </p>
             <p>
               Selamat datang di website PT. Sejahtera Gajah Mada. Dengan mengakses atau menggunakan website ini, Anda setuju untuk terikat oleh Syarat dan Ketentuan berikut. Jika Anda tidak setuju dengan bagian mana pun dari syarat ini, mohon untuk tidak menggunakan website kami.
             </p>
             <h2 className="text-xl font-semibold mt-6 mb-3">Penggunaan Website</h2>
             <p>
               Website ini disediakan untuk tujuan informasi mengenai layanan logistik kami. Anda setuju untuk menggunakan website ini hanya untuk tujuan yang sah dan sesuai dengan semua hukum dan peraturan yang berlaku. Dilarang menggunakan website ini untuk tujuan ilegal atau yang dapat merusak, menonaktifkan, atau membebani server kami.
             </p>
              <h2 className="text-xl font-semibold mt-6 mb-3">Hak Kekayaan Intelektual</h2>
              <p>
                Seluruh konten yang ditampilkan atau tersedia di website ini, termasuk namun tidak terbatas pada teks, grafis, logo, ikon, gambar, klip audio, kompilasi data, dan perangkat lunak, adalah milik PT. Sejahtera Gajah Mada atau pemasok kontennya dan dilindungi oleh undang-undang hak cipta internasional dan Indonesia.
              </p>
             {/* Tambahkan bagian lain sesuai kebutuhan (Batasan Tanggung Jawab, Tautan Pihak Ketiga, Perubahan Syarat, Hukum yang Berlaku, Kontak) */}
             <p className="mt-6">
               Konten detail mengenai batasan tanggung jawab, penggunaan tautan ke situs pihak ketiga, prosedur perubahan syarat dan ketentuan, hukum yang mengatur, serta informasi kontak lebih lanjut akan dijabarkan secara lengkap dalam versi final dokumen ini.
             </p>
          </div>
        </motion.div>
      </SectionWrapper>
    </PageLayout>
  );
};

export default SyaratKetentuanPage;