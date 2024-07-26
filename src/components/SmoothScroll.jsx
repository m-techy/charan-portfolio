// SmoothScroll.jsx
import { useEffect } from "react";
import Scrollbar from "smooth-scrollbar";
import overscroll from "smooth-scrollbar/plugins/overscroll";

const overscrollOptions = {
  enable: true,
  effect: "bounce",
  damping: 0.15,
  maxOverscroll: 150,
};

const options = {
  damping: 0.07,
  plugins: {
    overscroll: { ...overscrollOptions },
  },
};

const SmoothScroll = () => {
  useEffect(() => {
    const container = document.querySelector("#scroll-container");
    if (container) {
      const scrollbar = Scrollbar.init(container, options);
      return () => {
        scrollbar.destroy();
      };
    }
  }, []);

  return null;
};

export default SmoothScroll;
