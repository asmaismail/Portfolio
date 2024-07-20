export const NavbarAnimate = {
  hidden: {
    opacity: 0,
    y: -50,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 140,
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      delay: 0.5,
    },
  },
};

export const SidebarAnimate = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
};

export const IntroAnimate = {
  hidden: {
    opacity: 0,
    x: -50,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 140,
    },
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      delay: 1,
    },
  },
};

export const picAnimate = {
  hidden: {
    opacity: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 140,
    },
    scale: 0,
  },
  show: {
    opacity: 0.75,
    transition: {
      type: "spring",
      stiffness: 80,
      delay: 1.5,
    },
    scale: 1,
  },
};

export const SocialAnimate = {
  hidden: {
    opacity: 0,
    y: 50,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 140,
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      delay: 1,
    },
  },
};

export const MenuAnimate = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
};


export const FooterAnimate = {
  hidden: {
    opacity: 0,
    y: 50,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 140,
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      delay: 0.5,
    },
  },
};

export const ListAnimate = {
  hidden: {
    opacity: 0,
    x: -50,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 140,
    },
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      delay: 0.3,
    },
  },
};