// File: src/components/shared/LoadingScreen.jsx (Versi Spinner + Fade)
import React from 'react';
import Logo from './Logo'; // Tetap tampilkan logo
import { motion } from 'framer-motion'; // Import motion
import { LuLoader } from "react-icons/lu"; // Import ikon loader

const LoadingScreen = () => {
  return (
    // Bungkus dengan motion.div untuk animasi fade
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background space-y-4" // Tambah flex-col & space-y
      initial={{ opacity: 0 }} // Mulai transparan
      animate={{ opacity: 1 }} // Muncul (fade in)
      exit={{ opacity: 0 }}    // Hilang (fade out)
      transition={{ duration: 0.3 }} // Durasi fade
    >
      {/* Logo tetap di atas */}
      <Logo />

      {/* Ikon Loader berputar di bawah logo */}
      <LuLoader className="h-6 w-6 animate-spin text-primary" />

    </motion.div>
  );
};

export default LoadingScreen;