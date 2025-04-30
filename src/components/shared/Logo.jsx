// File: src/components/shared/Logo.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import siteLogo from '@/assets/images/logo-sgm.png'; // Sesuaikan path jika perlu

const Logo = ({ className = '' }) => {
  return (
    <Link to="/" className={`inline-block ${className}`}>
      <img
        src={siteLogo}
        alt="Logo PT. Sejahtera Gajah Mada"
        className="h-10 w-auto" // Sesuaikan ukuran (height) sesuai desain
      />
    </Link>
  );
};

export default Logo;