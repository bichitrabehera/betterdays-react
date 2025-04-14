import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Add a small delay just in case rendering takes a moment
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant' // you can use 'smooth' for animation
      });
    }, 100);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
