import { useEffect, useRef, useState } from 'react';

export const RevealOnScroll = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay * 1000);
          observer.unobserve(node);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(node);

    return () => {
      if (node) observer.unobserve(node);
    };
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-500 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      {children}
    </div>
  );
};