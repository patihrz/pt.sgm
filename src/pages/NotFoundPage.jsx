// File: src/pages/NotFoundPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '@/components/shared/PageLayout'; // Gunakan layout standar
import { Button } from '@/components/ui/button';
import SectionWrapper from '@/components/shared/SectionWrapper';

const NotFoundPage = () => {
  return (
    <PageLayout>
      <SectionWrapper className="flex flex-col items-center justify-center text-center min-h-[calc(100vh-8rem)]"> {/* Sesuaikan min-height agar pas */}
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-3xl font-semibold mb-4">Halaman Tidak Ditemukan</h2>
        <p className="text-muted-foreground mb-8 max-w-md">
          Maaf, halaman yang Anda cari tidak ada atau mungkin telah dipindahkan.
        </p>
        <Button asChild>
          <Link to="/">Kembali ke Beranda</Link>
        </Button>
      </SectionWrapper>
    </PageLayout>
  );
};

export default NotFoundPage;