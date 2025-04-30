// File: src/router/index.jsx (Versi Disesuaikan dengan Halaman Legal)

import { createBrowserRouter } from "react-router-dom";

// Impor semua komponen halaman yang digunakan
import HomePage from "@/pages/HomePage";
import TentangKamiPage from "@/pages/TentangKamiPage";
import LayananPage from "@/pages/LayananPage";
import KarirPage from "@/pages/KarirPage";
import KontakPage from "@/pages/KontakPage";
import KebijakanPrivasiPage from "@/pages/KebijakanPrivasiPage"; // <-- Tambahkan import ini
import SyaratKetentuanPage from "@/pages/SyaratKetentuanPage"; // <-- Tambahkan import ini
import NotFoundPage from "@/pages/NotFoundPage"; // Halaman 404

// Definisikan router aplikasi
export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/tentang-kami",
    element: <TentangKamiPage />,
  },
  {
    path: "/layanan",
    element: <LayananPage />,
  },
  {
    path: "/karir",
    element: <KarirPage />,
  },
  {
    path: "/kontak",
    element: <KontakPage />,
  },
  // --- Tambahkan Route untuk Halaman Legal ---
  {
    path: "/kebijakan-privasi", // Path untuk Kebijakan Privasi
    element: <KebijakanPrivasiPage />,
  },
  {
    path: "/syarat-ketentuan", // Path untuk Syarat & Ketentuan
    element: <SyaratKetentuanPage />,
  },
  // ------------------------------------------
  // Catch-all route untuk URL yang tidak cocok sama sekali
  {
    path: "*",
    element: <NotFoundPage />,
  }
]);