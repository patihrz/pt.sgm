// File: src/components/shared/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { FOOTER_LINKS } from '@/constants/navigation'; // Ambil dari konstanta
import { NAV_LINKS } from '@/constants/navigation';
import { LuLinkedin, LuFacebook, LuInstagram } from "react-icons/lu"; // Contoh ikon medsos

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Ganti dengan link medsos asli perusahaan Anda
  const socialMediaLinks = [
    { name: 'LinkedIn', icon: LuLinkedin, href: '#' },
    { name: 'Facebook', icon: LuFacebook, href: '#' },
    { name: 'Instagram', icon: LuInstagram, href: '#' },
  ];

  return (
    <footer className="border-t bg-muted/40">
      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Kolom Logo & Copyright */}
          <div>
            <Logo />
            <p className="mt-4 text-sm text-muted-foreground">
              PT. Sejahtera Gajah Mada <br />
              Solusi Logistik Terpercaya Anda.
            </p>
            <p className="mt-4 text-xs text-muted-foreground">
              &copy; {currentYear} PT. Sejahtera Gajah Mada. All rights reserved.
            </p>
          </div>

          {/* Kolom Navigasi Cepat & Legal (Contoh) */}
          <div className="grid grid-cols-2 gap-8 lg:col-span-1 lg:justify-self-center">
             <div>
               <p className="font-medium text-foreground">Navigasi</p>
               <ul className="mt-4 space-y-2 text-sm">
                  {NAV_LINKS.slice(0, 4).map((link) => ( // Ambil beberapa link utama
                    <li key={link.name}>
                      <Link to={link.href} className="text-muted-foreground hover:text-primary">
                        {link.name}
                      </Link>
                    </li>
                  ))}
               </ul>
             </div>
             <div>
               <p className="font-medium text-foreground">Legal</p>
               <ul className="mt-4 space-y-2 text-sm">
                  {FOOTER_LINKS.map((link) => (
                    <li key={link.name}>
                      <Link to={link.href} className="text-muted-foreground hover:text-primary">
                        {link.name}
                      </Link>
                    </li>
                  ))}
               </ul>
             </div>
          </div>


          {/* Kolom Kontak & Social Media */}
          <div className="lg:justify-self-end">
             <p className="font-medium text-foreground">Hubungi Kami</p>
             <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li>Alamat Kantor Pusat Anda...</li>
                <li>Email: info@sejahtera-gm.co.id</li>
                <li>Telepon: (021) 123-4567</li>
             </ul>
             <div className="mt-6 flex gap-4">
                {socialMediaLinks.map((social) => (
                   <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary"
                      aria-label={social.name}
                   >
                      <social.icon className="h-5 w-5" />
                   </a>
                ))}
             </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;