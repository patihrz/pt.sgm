// File: src/components/shared/ServiceCard.jsx (Versi Disesuaikan - Fix Deprecation)
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; // Import motion
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LuArrowRight } from "react-icons/lu";
import { cn } from "@/lib/utils"; // Import cn jika perlu menggabung kelas

// Hapus baris ini:
// const MotionCard = motion(Card);

const ServiceCard = ({ icon, title, description, link, className }) => {
  return (
    // Ganti MotionCard dengan motion.div sebagai pembungkus
    <motion.div
      // Pindahkan props animasi ke sini
      className={cn("h-full", className)} // Atur tinggi wrapper jika perlu
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05, y: -5, transition: { duration: 0.2 } }} // Efek hover di wrapper
    >
      {/* Gunakan Card biasa dari Shadcn di dalamnya */}
      <Card className="flex flex-col h-full"> {/* h-full agar card mengisi wrapper */}
        <CardHeader className="items-center text-center">
          {icon && <div className="mb-4">{icon}</div>}
          <CardTitle>{title}</CardTitle>
          {description && <CardDescription>{description}</CardDescription>}
        </CardHeader>
        {link && (
          <CardFooter className="mt-auto justify-center">
            <Button asChild variant="outline" size="sm">
              <Link to={link}>
                Selengkapnya <LuArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        )}
      </Card>
    </motion.div>
  );
};

export default ServiceCard;