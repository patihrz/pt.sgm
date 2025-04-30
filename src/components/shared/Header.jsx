import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from './Logo'; // Komponen logo buatanmu
import { NAV_LINKS } from '@/constants/navigation'; // Format array objek nav
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { LuMenu } from 'react-icons/lu';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Jalankan sekali saat mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-colors duration-300 ease-out',
        isScrolled
          ? 'border-b bg-background/95 backdrop-blur shadow-sm'
          : 'border-transparent bg-background'
      )}
    >
      <div className="container flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Logo Kiri */}
        <div className="flex-shrink-0 ml-4 md:ml-10">
          <Logo />
        </div>

        {/* Navigasi Desktop */}
        <div className="hidden md:flex items-center gap-x-6 lg:gap-x-8">
          <nav className="flex gap-x-6 lg:gap-x-7">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.name}
                to={link.href}
                className={({ isActive }) =>
                  cn(
                    'text-base font-medium transition-colors hover:text-primary',
                    isActive ? 'text-primary' : 'text-foreground/70'
                  )
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
          <Button asChild variant="default" size="sm" className="hidden md:inline-flex">
            <Link to="/kontak">Hubungi Kami</Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <LuMenu className="h-5 w-5" />
                <span className="sr-only">Buka Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] sm:w-[320px]">
              <nav className="flex flex-col h-full pt-8">
                <div className="mb-6 pl-2.5">
                  <Logo />
                </div>
                <div className="flex-grow grid gap-4 text-base font-medium">
                  {NAV_LINKS.map((link) => (
                    <NavLink
                      key={link.name}
                      to={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={({ isActive }) =>
                        cn(
                          'flex items-center gap-3 rounded-md px-3 py-2 hover:bg-accent hover:text-accent-foreground',
                          isActive
                            ? 'bg-accent text-accent-foreground font-semibold'
                            : 'text-muted-foreground'
                        )
                      }
                    >
                      {link.name}
                    </NavLink>
                  ))}
                </div>
                <div className="mt-auto pb-6 px-3">
                  <Button asChild variant="default" className="w-full">
                    <Link to="/kontak" onClick={() => setIsMobileMenuOpen(false)}>
                      Hubungi Kami
                    </Link>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>

      </div>
    </header>
  );
};

export default Header;
