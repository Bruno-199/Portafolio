import { motion } from 'framer-motion';

export default function ProfileImage() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="relative aspect-square rounded-2xl overflow-hidden shadow-xl"
    >
      <img
        src="/images/profile.webp"
        alt="Foto de perfil"
        width={500}
        height={500}
        loading="lazy"
        onError={(e) => {
          console.error('Error loading image:', e);
          e.currentTarget.src = '/images/profile-fallback.webp';
        }}
        className="w-full h-full object-cover"
      />
    </motion.div>
  );
}