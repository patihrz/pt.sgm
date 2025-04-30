# Website Company Profile - PT. Sejahtera Gajah Mada (Frontend)

[![React](https://img.shields.io/badge/React-18+-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-%5E5.0.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3+-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Shadcn UI](https://img.shields.io/badge/shadcn/ui-Radix_UI-000000?style=for-the-badge&logo=shadcnui&logoColor=white)](https://ui.shadcn.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-Animation-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)

Website company profile modern, responsif, dan profesional untuk PT. Sejahtera Gajah Mada, sebuah perusahaan di bidang logistik. Dibangun menggunakan teknologi frontend terkini.

## ✨ Fitur Utama

* Tampilan Profesional & Modern
* Desain Responsif (Desktop, Tablet, Mobile)
* Halaman Utama (Homepage) dengan section: Hero, Layanan Unggulan, Keunggulan, Klien (placeholder).
* Halaman Tentang Kami (struktur dasar)
* Halaman Layanan (menggunakan Accordion)
* Halaman Karir (struktur dasar)
* Halaman Kontak (dengan info, peta placeholder, dan form fungsional via Formspree)
* Halaman Legal (Kebijakan Privasi, Syarat & Ketentuan - placeholder)
* Header Sticky dengan efek scroll & Menu Mobile (Sheet)
* Animasi halus menggunakan Framer Motion (entrance, hover, loading)
* Loading Screen awal aplikasi

## 🚀 Teknologi yang Digunakan

* **Framework/Library:** [React.js](https://reactjs.org/)
* **Build Tool:** [Vite.js](https://vitejs.dev/)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **UI Components:** [Shadcn UI](https://ui.shadcn.com/) (menggunakan Radix UI + Tailwind)
* **Routing:** [React Router DOM](https://reactrouter.com/)
* **Animasi:** [Framer Motion](https://www.framer.com/motion/)
* **Form Backend:** [Formspree](https://formspree.io/) (untuk formulir kontak)
* **Icons:** [React Icons](https://react-icons.github.io/react-icons/) (Lucide Icons)
* **Package Manager:** npm (atau yarn/pnpm)

## ⚙️ Memulai (Getting Started)

Untuk menjalankan proyek ini secara lokal di komputer Anda:

**Prasyarat:**

* Node.js (versi 18 atau lebih baru direkomendasikan)
* npm (biasanya terinstall bersama Node.js) atau Yarn/PNPM

**Langkah Instalasi:**

1.  **Clone repositori ini:**
    ```bash
    git clone [URL_REPOSITORY_ANDA]
    ```
    *(Ganti `[URL_REPOSITORY_ANDA]` dengan URL repo GitHub Anda)*

2.  **Masuk ke direktori proyek:**
    ```bash
    cd [NAMA_FOLDER_PROYEK]
    ```
    *(Ganti `[NAMA_FOLDER_PROYEK]` dengan nama folder hasil clone)*

3.  **Install dependencies:**
    ```bash
    npm install
    ```
    *(Atau `yarn install` / `pnpm install`)*

4.  **Konfigurasi Environment Variables:**
    * Buat file baru bernama `.env` di root direktori proyek.
    * Salin isi dari file `.env.example` (jika ada) atau tambahkan variabel berikut:
        ```env
        # Ganti dengan URL Endpoint Formspree Anda untuk form kontak
        VITE_FORMSPREE_ENDPOINT="MASUKKAN_URL_FORMSPREE_ANDA_DI_SINI"
        ```
    * *Catatan:* Anda perlu membuat akun dan form di [Formspree](https://formspree.io/) untuk mendapatkan endpoint ini agar form kontak berfungsi.

5.  **Jalankan Development Server:**
    ```bash
    npm run dev
    ```
    Buka browser Anda dan kunjungi `http://localhost:5173` (atau port lain yang ditampilkan di terminal).

**Build untuk Produksi:**

Untuk membuat versi produksi yang siap di-deploy:

```bash
npm run build