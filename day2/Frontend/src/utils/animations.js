// Framer Motion animation variants for reusable animations
export const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: (custom = 0) => ({
    opacity: 1,
    transition: { delay: custom * 0.1, duration: 0.6 },
  }),
};

export const slideInFromLeftVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: (custom = 0) => ({
    opacity: 1,
    x: 0,
    transition: { delay: custom * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

export const slideInFromRightVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: (custom = 0) => ({
    opacity: 1,
    x: 0,
    transition: { delay: custom * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

export const slideInFromTopVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

export const slideInFromBottomVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

export const scaleUpVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (custom = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: custom * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

export const bounceInVariants = {
  hidden: { opacity: 0, scale: 0.3 },
  visible: (custom = 0) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: custom * 0.1,
      duration: 0.6,
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  }),
};

export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const hoverScale = {
  whileHover: { scale: 1.05, transition: { duration: 0.3 } },
  whileTap: { scale: 0.95 },
};

export const hoverGlow = {
  whileHover: {
    boxShadow: "0 0 20px rgba(212, 175, 55, 0.4)",
    transition: { duration: 0.3 },
  },
};

export const buttonHover = {
  whileHover: { scale: 1.02, y: -2 },
  whileTap: { scale: 0.98, y: 0 },
  transition: { duration: 0.2 },
};

export const pulseVariants = {
  animate: {
    opacity: [0.6, 1, 0.6],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export const progressBarVariants = {
  hidden: { width: 0 },
  visible: (progress = 100) => ({
    width: `${progress}%`,
    transition: { duration: 0.8, ease: "easeOut" },
  }),
};

export const gradientShiftVariants = {
  animate: {
    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};
