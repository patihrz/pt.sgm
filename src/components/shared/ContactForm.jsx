// File: src/components/shared/ContactForm.jsx (Revisi - Menggunakan Environment Variable)
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { motion } from 'framer-motion';

// Variants untuk field form
const formItemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
};

// HAPUS definisi konstanta hardcoded ini:
// const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mgvkopdq';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // --- AMBIL ENDPOINT DARI ENVIRONMENT VARIABLE ---
    const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;
    // ---------------------------------------------

    // Cek apakah environment variable sudah di-set
    if (!endpoint) {
       console.error("Error: VITE_FORMSPREE_ENDPOINT environment variable is not set!");
       setSubmitStatus('error');
       setIsSubmitting(false);
       return;
    }

    try {
      // Gunakan variabel 'endpoint' yang diambil dari env var
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' }); // Reset form
      } else {
        const responseData = await response.json();
        console.error("Formspree submission error:", responseData);
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error("Network error submitting form:", error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* ... (Bagian field form dengan motion.div tidak berubah) ... */}
      <motion.div className="grid grid-cols-1 gap-6 sm:grid-cols-2" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
         <motion.div className="space-y-2" variants={formItemVariants}><Label htmlFor="name">Nama Lengkap</Label><Input id="name" placeholder="Masukkan nama Anda" value={formData.name} onChange={handleChange} required disabled={isSubmitting} /></motion.div>
         <motion.div className="space-y-2" variants={formItemVariants}><Label htmlFor="email">Alamat Email</Label><Input id="email" type="email" placeholder="contoh@email.com" value={formData.email} onChange={handleChange} required disabled={isSubmitting} /></motion.div>
       </motion.div>
       <motion.div className="space-y-2" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={formItemVariants} transition={{ delay: 0.1 }}><Label htmlFor="subject">Subjek</Label><Input id="subject" placeholder="Subjek pesan Anda" value={formData.subject} onChange={handleChange} required disabled={isSubmitting} /></motion.div>
       <motion.div className="space-y-2" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={formItemVariants} transition={{ delay: 0.2 }}><Label htmlFor="message">Pesan</Label><Textarea id="message" placeholder="Tuliskan pesan Anda di sini..." rows={5} value={formData.message} onChange={handleChange} required disabled={isSubmitting} /></motion.div>
       <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={formItemVariants} transition={{ delay: 0.3 }}>
         <Button type="submit" disabled={isSubmitting} className="w-full sm:w-auto">
           {isSubmitting ? 'Mengirim...' : 'Kirim Pesan'}
         </Button>
       </motion.div>

       {submitStatus === 'success' && ( <p className="mt-4 text-sm text-green-600">✓ Pesan Anda berhasil terkirim! Terima kasih.</p> )}
       {submitStatus === 'error' && ( <p className="mt-4 text-sm text-red-600"> Gagal mengirim pesan. Silakan coba lagi atau hubungi kami via email/telepon.</p> )}
    </form>
  );
};

export default ContactForm;