"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

interface InViewWrapperProps {
  children: ReactNode;
  id?: string;
  className?: string;
}

export function InViewWrapper({ children, id, className = "" }: InViewWrapperProps) {
  const ref = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    observer.observe(element);
    return () => observer.unobserve(element);
  }, []);

  return (
    <section ref={ref} id={id} className={`${className} ${isInView ? "in-view" : ""}`}>
      {children}
    </section>
  );
}
