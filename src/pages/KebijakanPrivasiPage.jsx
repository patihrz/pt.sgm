// File: src/pages/KebijakanPrivasiPage.jsx
import React from 'react';
import PageLayout from '@/components/shared/PageLayout';
import SectionWrapper from '@/components/shared/SectionWrapper';
import { motion } from 'framer-motion';

const KebijakanPrivasiPage = () => {
  return (
    <PageLayout>
      <SectionWrapper className="pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto" // Atur lebar konten
        >
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6 text-center">
            Kebijakan Privasi
          </h1>
          <div className="prose dark:prose-invert max-w-none mx-auto text-muted-foreground"> {/* Styling dasar teks */}
            <p className="text-center italic mb-8">
              [Konten lengkap Kebijakan Privasi PT. Sejahtera Gajah Mada akan ditambahkan di sini.]
            </p>
            <p>
              Kami di PT. Sejahtera Gajah Mada menghargai privasi pengunjung kami. Dokumen Kebijakan Privasi ini menjelaskan jenis informasi pribadi yang diterima dan dikumpulkan oleh website kami dan bagaimana informasi tersebut digunakan.
            </p>
            <h2 className="text-xl font-semibold mt-6 mb-3">Informasi yang Kami Kumpulkan</h2>
            <p>
              Kami dapat mengumpulkan informasi pribadi seperti nama, alamat email, nomor telepon, dll., hanya jika Anda memberikannya secara sukarela melalui formulir kontak atau cara lain di website ini. Kami juga dapat mengumpulkan data non-pribadi secara otomatis seperti alamat IP, jenis browser, waktu akses, dll., untuk tujuan analisis statistik.
            </p>
             <h2 className="text-xl font-semibold mt-6 mb-3">Penggunaan Informasi</h2>
             <p>
               Informasi yang kami kumpulkan digunakan untuk memahami kebutuhan Anda, memberikan layanan yang lebih baik, memproses pertanyaan atau permintaan Anda, dan untuk tujuan administratif internal serta analisis website. Kami tidak akan menjual, mendistribusikan, atau menyewakan informasi pribadi Anda kepada pihak ketiga kecuali kami memiliki izin Anda atau diwajibkan oleh hukum.
             </p>
            {/* Tambahkan bagian lain sesuai kebutuhan (Cookies, Keamanan Data, Hak Anda, Perubahan Kebijakan, Kontak) */}
             <p className="mt-6">
               Konten detail mengenai penggunaan cookies, keamanan data, hak-hak Anda terkait data pribadi, prosedur perubahan kebijakan, dan informasi kontak lebih lanjut terkait privasi akan dijabarkan secara lengkap dalam versi final dokumen ini.
             </p>
          </div>
        </motion.div>
      </SectionWrapper>
    </PageLayout>
  );
};

export default KebijakanPrivasiPage;