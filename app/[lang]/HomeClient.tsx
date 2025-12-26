"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Locale } from "../get-dictionary";

// Custom hook for detecting when element enters viewport
function useInView(options?: IntersectionObserverInit) {
  const ref = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        observer.unobserve(element); // Only trigger once
      }
    }, {
      threshold: 0.1, // Trigger when 10% of element is visible
      rootMargin: '0px 0px -50px 0px', // Start animation slightly before fully in view
      ...options
    });

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [options]);

  return { ref, isInView };
}

export default function HomeClient({ dictionary, lang }: { dictionary: any, lang: Locale }) {
  // Helper to pass dictionary down or usage contexts
  const { header, hero, mission, coreBusiness, industries, techAdvantages, cta, footer } = dictionary;

  return (
    <div className="site-wrapper">
      <Header dict={header} lang={lang} />
      <main>
        <HeroSection dict={hero} />
        <MissionSection dict={mission} />
        <CoreBusinessSection dict={coreBusiness} />
        <IndustriesSection dict={industries} />
        <TechAdvantagesSection dict={techAdvantages} />
        <CTASection dict={cta} />
      </main>
      <Footer dict={footer} />
    </div>
  );
}

import Link from "next/link"; // Add import at the top

function Header({ dict, lang }: { dict: any, lang: Locale }) {
  return (
    <header className="header">
      <div className="header-content">
        <Link href={`/${lang}`} className="logo">
          <Image src="/logo.png" alt="Sweet Spot" width={55} height={55} className="logo-img" />
        </Link>
        <nav className="nav-links">
          <Link href="#mission">{dict.nav.mission}</Link>
          <Link href="#business">{dict.nav.business}</Link>
          <Link href="#industries">{dict.nav.industries}</Link>
          <Link href="#advantages">{dict.nav.advantages}</Link>
          <Link href="#footer">{dict.nav.contact}</Link>
        </nav>
        <div className="lang-switcher">
          <Link href="/ja" className={lang === 'ja' ? 'active' : ''}>JP</Link>
          <span className="divider">|</span>
          <Link href="/en" className={lang === 'en' ? 'active' : ''}>EN</Link>
          <span className="divider">|</span>
          <Link href="/zh" className={lang === 'zh' ? 'active' : ''}>CN</Link>
        </div>
      </div>
      <style jsx>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          padding: 10px 0;
          background: var(--card-background);
          backdrop-filter: blur(20px) saturate(170%);
          border-bottom: 1px solid var(--neutral-background);
        }
        .header-content {
          max-width: var(--container-width);
          margin: 0 auto;
          padding: 0 3.5rem; /* Aligns with Hero/Mission text content offset */
          display: grid;
          grid-template-columns: auto 1fr auto;
          align-items: center;
        }
        .logo {
            grid-column: 1;
        }
        .nav-links {
            grid-column: 2;
            display: flex;
            justify-content: center;
            gap: 2rem;
        }
        .nav-links :global(a) {
            font-weight: 500;
            color: var(--heading-color);
            transition: color 0.2s;
        }
        .nav-links :global(a:hover) {
            color: var(--accent-color);
        }
        .logo-img {
            border-radius: var(--border-radius-sm);
        }
        .lang-switcher {
            grid-column: 3;
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }
        .lang-switcher :global(a) {
            font-size: 0.9rem;
            color: var(--body-muted);
            font-weight: 600;
            transition: color 0.2s;
        }
        .lang-switcher :global(a:hover), .lang-switcher :global(a.active) {
            color: var(--accent-color);
            opacity: 1;
        }
        .lang-switcher .divider {
            color: var(--body-muted);
            font-size: 0.8rem;
            opacity: 0.5;
        }
        @media (max-width: 768px) {
            .header-content {
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
            }
            .nav-links {
                display: none; /* Hide nav links on mobile for now or implement burger menu */
            }
            .lang-switcher {
                margin-left: auto;
            }
        }
      `}</style>
    </header>
  );
}

function HeroSection({ dict }: { dict: any }) {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-card">
          <div className="hero-content">
            <h1 className="animate-fade-up">{dict.title}</h1>
            <p className="subtitle animate-fade-up delay-1">{dict.subtitle}</p>
            <div className="hero-actions animate-fade-up delay-2">
              <a href="mailto:vip@sweetspot.top" className="btn btn-primary">{dict.cta.book}</a>
              <a href="#cases" className="btn btn-outline">{dict.cta.cases}</a>
            </div>
          </div>
          <div className="hero-image-wrapper animate-scale-in">
            <Image
              src="/images/UvR0Kn6AN-a-y2cV8hFmE.png"
              alt={dict.alt}
              width={500}
              height={500}
              priority
              className="hero-img"
            />
          </div>
        </div>
      </div>
      <style jsx>{`
        /* Animation Keyframes */
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        /* Animation Classes */
        .animate-fade-up {
          animation: fadeUp 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-scale-in {
          animation: scaleIn 1s ease-out forwards;
          animation-delay: 0.3s;
          opacity: 0;
        }
        
        .delay-1 {
          animation-delay: 0.2s;
        }
        
        .delay-2 {
          animation-delay: 0.4s;
        }
        
        .hero {
          padding-top: calc(75px + 2rem); /* Header height + spacing */
          /* padding-bottom removed to eliminate gap */
          background: var(--card-background);
          backdrop-filter: blur(20px) saturate(170%);
        }
        .container {
            max-width: var(--container-width);
            margin: 0 auto;
            padding: 0 0rem;
        }
        .hero-card {
          /* background moved to parent section */
          border-radius: var(--border-radius-md);
          padding: 3.5rem;
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 2rem;
          align-items: center;
          /* box-shadow: var(--shadow-card); removed to flatten design */
        }
        .hero-content h1 {
          font-family: var(--font-heading);
          color: var(--heading-color);
          font-size: 3.5rem;
          margin-bottom: 1rem;
          line-height: 1.2;
        }
        .subtitle {
          font-size: 1.25rem;
          color: var(--body-color);
          margin-bottom: 2rem;
          white-space: pre-line;
        }
        .hero-actions {
          display: flex;
          gap: 1rem;
        }
        
        /* Button Hover Effects */
        .hero-actions :global(.btn) {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .hero-actions :global(.btn-primary:hover) {
          transform: translateY(-3px);
          box-shadow: 0 10px 20px rgba(255, 149, 79, 0.3);
        }
        
        .hero-actions :global(.btn-outline:hover) {
          transform: translateY(-3px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        }
        
        .hero-image-wrapper {
            position: relative;
            border-radius: 50%;
            overflow: hidden;
            aspect-ratio: 1 / 1;
            width: 100%;
            max-width: 450px; /* Reducing max-width slightly to fit better */
            box-shadow: var(--shadow-card);
            margin: 0 auto;
            /* Safari fix for overflow: hidden with border-radius */
            isolation: isolate;
            transform: translateZ(0); 
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: var(--card-solid); /* Fallback background */
            transition: transform 0.5s ease, box-shadow 0.5s ease;
        }
        
        .hero-image-wrapper:hover {
            transform: scale(1.02);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }
        
        .hero-img {
            object-fit: cover;
            width: 450px;
            height: 450px;
            border-radius: 0; /* Reset radius on image itself */
            transition: transform 0.5s ease;
        }
        
        .hero-image-wrapper:hover .hero-img {
            transform: scale(1.05);
        }
        
        @media (max-width: 768px) {
          .hero-card {
            grid-template-columns: 1fr;
            padding: 2rem;
            text-align: center;
          }
          .hero-actions {
            justify-content: center;
          }
        }
        
        /* Reduced motion for accessibility */
        @media (prefers-reduced-motion: reduce) {
          .animate-fade-up,
          .animate-scale-in {
            animation: none;
            opacity: 1;
          }
          .hero-image-wrapper,
          .hero-img,
          .hero-actions :global(.btn) {
            transition: none;
          }
        }
      `}</style>
    </section>
  );
}

const MissionIcons = {
  FullService: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
      <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
    </svg>
  ),
  Agent: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="10" rx="2"></rect>
      <circle cx="12" cy="5" r="2"></circle>
      <path d="M12 7v4"></path>
      <line x1="8" y1="16" x2="8" y2="16"></line>
      <line x1="16" y1="16" x2="16" y2="16"></line>
    </svg>
  ),
  Custom: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3"></circle>
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
    </svg>
  )
};

function MissionSection({ dict }: { dict: any }) {
  const { ref, isInView } = useInView();

  const cards = [
    { icon: <MissionIcons.FullService />, ...dict.cards.fullService },
    { icon: <MissionIcons.Agent />, ...dict.cards.agent },
    { icon: <MissionIcons.Custom />, ...dict.cards.custom }
  ];

  return (
    <section className={`section ${isInView ? 'in-view' : ''}`} id="mission" ref={ref as React.RefObject<HTMLElement>}>
      <div className="container">
        <div className="card-wrapper main-card">
          <h2 className="section-title animate-fade-in">{dict.title}</h2>
          <div className="grid-3">
            {cards.map((c: any, i: number) => (
              <div key={i} className={`feature-card animate-slide-up delay-${i + 1}`}>
                <div className="icon-box">{c.icon}</div>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </div>
            ))}
          </div>
          <p className="mission-statement animate-fade-in delay-4">
            {dict.statement}
          </p>
        </div>
      </div>
      <style jsx>{`
                /* Animation Keyframes */
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: 1;
                    }
                }
                
                @keyframes slideUp {
                    from {
                        opacity: 0;
                        transform: translateY(40px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                @keyframes iconBounce {
                    0%, 100% {
                        transform: scale(1);
                    }
                    50% {
                        transform: scale(1.15);
                    }
                }
                
                /* Animation Classes - only trigger when section is in view */
                .animate-fade-in,
                .animate-slide-up {
                    opacity: 0;
                }
                
                .section.in-view .animate-fade-in {
                    animation: fadeIn 0.8s ease-out forwards;
                }
                
                .section.in-view .animate-slide-up {
                    animation: slideUp 0.6s ease-out forwards;
                }
                
                .section.in-view .delay-1 { animation-delay: 0.1s; }
                .section.in-view .delay-2 { animation-delay: 0.25s; }
                .section.in-view .delay-3 { animation-delay: 0.4s; }
                .section.in-view .delay-4 { animation-delay: 0.55s; }
                
                .section {
                    background: var(--card-background);
                    backdrop-filter: blur(20px) saturate(170%);
                }
                .section-title {
                    font-size: 2.3rem;
                    margin-bottom: 2rem;
                    color: var(--heading-color);
                }
                .main-card {
                    /* background moved to parent */
                    border-radius: var(--border-radius-md);
                    padding: 2rem;
                }
                .feature-card {
                    background: var(--accent-color-light);
                    border: 2px solid var(--accent-color-light);
                    border-radius: var(--border-radius-sm);
                    padding: 1.5rem;
                    transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
                }
                
                .feature-card:hover {
                    transform: translateY(-8px);
                    box-shadow: 0 15px 30px rgba(255, 149, 79, 0.2);
                    border-color: var(--accent-color);
                }
                
                .icon-box {
                    width: 3rem;
                    height: 3rem;
                    background: var(--accent-color);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-bottom: 1rem;
                    color: #fff;
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                }
                
                .feature-card:hover .icon-box {
                    animation: iconBounce 0.5s ease;
                    box-shadow: 0 5px 15px rgba(255, 149, 79, 0.4);
                }
                
                .icon-box :global(svg) {
                    width: 1.5rem;
                    height: 1.5rem;
                }
                .feature-card h3 {
                    font-size: 1.25rem;
                    margin-bottom: 0.5rem;
                    transition: color 0.3s ease;
                }
                
                .feature-card:hover h3 {
                    color: var(--accent-color-dim);
                }
                
                .mission-statement {
                    margin-top: 2rem;
                    font-size: 1.1rem;
                    color: var(--body-color);
                    line-height: 1.8;
                }
                @media (max-width: 768px) {
                    .main-card { padding: 1.5rem; }
                }
                
                /* Reduced motion for accessibility */
                @media (prefers-reduced-motion: reduce) {
                    .animate-fade-in,
                    .animate-slide-up {
                        animation: none;
                        opacity: 1;
                    }
                    .feature-card,
                    .icon-box,
                    .feature-card h3 {
                        transition: none;
                    }
                    .feature-card:hover .icon-box {
                        animation: none;
                    }
                }
            `}</style>
    </section>
  );
}

function CoreBusinessSection({ dict }: { dict: any }) {
  const { ref, isInView } = useInView();
  const services = dict.services;

  return (
    <section className={`section ${isInView ? 'in-view' : ''}`} id="business" ref={ref as React.RefObject<HTMLElement>}>
      <div className="container">
        <div className="card-wrapper main-card">
          <div className="header-split">
            <div className="image-part animate-slide-left">
              <Image src="/images/xZplMhIWsr70AE6FCuKnM.png" width={400} height={300} alt="Business" className="rounded-img" />
            </div>
            <div className="text-part animate-slide-right">
              <h2>{dict.header.title}</h2>
              <h3 className="highlight-text">{dict.header.subtitle}</h3>
              <p>{dict.header.desc}</p>
            </div>
          </div>
          <div className="divider animate-expand"></div>
          <div className="grid-4 service-grid">
            {services.map((s: any, i: number) => (
              <div key={i} className={`service-card animate-pop-up delay-${i + 1}`}>
                <div className="num-badge">{s.num}</div>
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
                /* Animation Keyframes */
                @keyframes slideLeft {
                    from {
                        opacity: 0;
                        transform: translateX(-50px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }
                
                @keyframes slideRight {
                    from {
                        opacity: 0;
                        transform: translateX(50px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }
                
                @keyframes popUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px) scale(0.95);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0) scale(1);
                    }
                }
                
                @keyframes expand {
                    from {
                        transform: scaleX(0);
                    }
                    to {
                        transform: scaleX(1);
                    }
                }
                
                @keyframes pulse {
                    0%, 100% {
                        transform: scale(1);
                    }
                    50% {
                        transform: scale(1.1);
                    }
                }
                
                /* Animation Classes - only trigger when section is in view */
                .animate-slide-left,
                .animate-slide-right,
                .animate-pop-up {
                    opacity: 0;
                }
                
                .animate-expand {
                    transform: scaleX(0);
                    transform-origin: left center;
                }
                
                .section.in-view .animate-slide-left {
                    animation: slideLeft 0.8s ease-out forwards;
                }
                
                .section.in-view .animate-slide-right {
                    animation: slideRight 0.8s ease-out forwards;
                    animation-delay: 0.2s;
                }
                
                .section.in-view .animate-pop-up {
                    animation: popUp 0.5s ease-out forwards;
                }
                
                .section.in-view .animate-expand {
                    animation: expand 0.8s ease-out forwards;
                    animation-delay: 0.5s;
                }
                
                .section.in-view .delay-1 { animation-delay: 0.6s; }
                .section.in-view .delay-2 { animation-delay: 0.75s; }
                .section.in-view .delay-3 { animation-delay: 0.9s; }
                .section.in-view .delay-4 { animation-delay: 1.05s; }
                
                .section {
                    background: linear-gradient(rgba(255, 255, 244, 0.9), rgba(255, 255, 244, 0.9)), url('/images/vhBAV9WIIpFKHVxgSy0hh.png');
                    background-size: cover;
                    background-position: center;
                    backdrop-filter: blur(20px) saturate(170%);
                }
                .main-card {
                    /* background moved to parent */
                    border-radius: var(--border-radius-md);
                    padding: 2rem;
                }
                .header-split {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 2rem;
                    align-items: center;
                }
                .rounded-img {
                    border-radius: var(--border-radius-md);
                    width: 100%;
                    height: auto;
                    object-fit: cover;
                    transition: transform 0.5s ease, box-shadow 0.5s ease;
                }
                
                .image-part:hover .rounded-img {
                    transform: scale(1.03);
                    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
                }
                
                .text-part h2 { 
                    font-size: 2.3rem; 
                    margin-bottom: 0.5rem;
                    transition: color 0.3s ease;
                }
                .text-part h3 { 
                    font-size: 1.8rem; 
                    margin-bottom: 1rem; 
                    color: var(--heading-color);
                }
                .divider {
                    height: 1px;
                    background: linear-gradient(90deg, var(--accent-color), rgba(0,0,0,0.1));
                    margin: 2rem 0;
                }
                .service-card {
                    border: 1px solid var(--accent-color-light);
                    border-top: 3px solid var(--accent-color);
                    border-radius: var(--border-radius-sm);
                    padding: 1.5rem;
                    background: transparent;
                    transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;
                }
                
                .service-card:hover {
                    transform: translateY(-10px);
                    box-shadow: 0 20px 40px rgba(255, 149, 79, 0.15);
                    background-color: rgba(255, 224, 204, 0.3);
                }
                
                .num-badge {
                    width: 2rem;
                    height: 2rem;
                    background: var(--accent-color);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-weight: bold;
                    margin-bottom: 1rem;
                    color: #000;
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                }
                
                .service-card:hover .num-badge {
                    animation: pulse 0.6s ease;
                    box-shadow: 0 5px 15px rgba(255, 149, 79, 0.4);
                }
                
                .service-card h4 { 
                    font-size: 1.1rem; 
                    margin-bottom: 0.8rem;
                    transition: color 0.3s ease;
                }
                
                .service-card:hover h4 {
                    color: var(--accent-color-dim);
                }
                
                .service-card p { font-size: 0.9rem; color: var(--body-color); }
                
                @media (max-width: 768px) {
                    .header-split { grid-template-columns: 1fr; }
                    .service-grid { grid-template-columns: 1fr; }
                    
                    .animate-slide-left,
                    .animate-slide-right {
                        animation-name: popUp;
                    }
                }
                
                /* Reduced motion for accessibility */
                @media (prefers-reduced-motion: reduce) {
                    .animate-slide-left,
                    .animate-slide-right,
                    .animate-pop-up,
                    .animate-expand {
                        animation: none;
                        opacity: 1;
                        transform: none;
                    }
                    .service-card,
                    .rounded-img,
                    .num-badge,
                    .service-card h4 {
                        transition: none;
                    }
                    .service-card:hover .num-badge {
                        animation: none;
                    }
                }
            `}</style>
    </section>
  )
}

function IndustriesSection({ dict }: { dict: any }) {
  const { ref, isInView } = useInView();

  return (
    <section className={`section ${isInView ? 'in-view' : ''}`} id="industries" ref={ref as React.RefObject<HTMLElement>}>
      <div className="container">
        <div className="card-wrapper main-card">
          <h2 className="animate-fade-in">{dict.title}</h2>
          <p className="intro-text animate-fade-in delay-1">{dict.intro}</p>
          <div className="grid-4 industry-grid">
            {dict.items.map((ind: any, i: number) => (
              <div key={i} className={`industry-item animate-scale-up delay-${i + 2}`}>
                <div className="img-box">
                  <Image src={ind.img} alt={ind.title} width={300} height={200} className="ind-img" />
                </div>
                <h4>{ind.title}</h4>
                <p>{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
                /* Animation Keyframes */
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                
                @keyframes scaleUp {
                    from {
                        opacity: 0;
                        transform: scale(0.9) translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: scale(1) translateY(0);
                    }
                }
                
                /* Animation Classes - only trigger when in view */
                .animate-fade-in,
                .animate-scale-up {
                    opacity: 0;
                }
                
                .section.in-view .animate-fade-in {
                    animation: fadeIn 0.8s ease-out forwards;
                }
                
                .section.in-view .animate-scale-up {
                    animation: scaleUp 0.6s ease-out forwards;
                }
                
                .section.in-view .delay-1 { animation-delay: 0.15s; }
                .section.in-view .delay-2 { animation-delay: 0.3s; }
                .section.in-view .delay-3 { animation-delay: 0.45s; }
                .section.in-view .delay-4 { animation-delay: 0.6s; }
                .section.in-view .delay-5 { animation-delay: 0.75s; }
                
                .section {
                    background: var(--card-background);
                    backdrop-filter: blur(20px) saturate(170%);
                }
                .main-card {
                    padding: 2rem;
                    /* background moved to parent */
                    border-radius: var(--border-radius-md);
                }
                .intro-text {
                    margin-bottom: 2rem;
                    max-width: 800px;
                }
                .img-box {
                    margin-bottom: 1rem;
                    border-radius: var(--border-radius-sm);
                    overflow: hidden;
                }
                .ind-img {
                    width: 100%;
                    height: 150px;
                    object-fit: cover;
                    transition: transform 0.5s ease;
                }
                .industry-item {
                    padding: 1rem;
                    border-radius: var(--border-radius-sm);
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                }
                .industry-item:hover {
                    transform: translateY(-8px);
                    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
                }
                .industry-item:hover .ind-img {
                    transform: scale(1.1);
                }
                .industry-item h4 {
                    font-size: 1.2rem;
                    margin-bottom: 0.5rem;
                    transition: color 0.3s ease;
                }
                .industry-item:hover h4 {
                    color: var(--accent-color-dim);
                }
                .industry-item p {
                    font-size: 0.9rem;
                    color: var(--body-color);
                }
                 @media (max-width: 768px) {
                    .industry-grid { grid-template-columns: 1fr; }
                    .main-card { padding: 1.5rem; }
                }
                
                /* Reduced motion for accessibility */
                @media (prefers-reduced-motion: reduce) {
                    .animate-fade-in,
                    .animate-scale-up {
                        animation: none;
                        opacity: 1;
                    }
                    .industry-item,
                    .ind-img,
                    .industry-item h4 {
                        transition: none;
                    }
                }
             `}</style>
    </section>
  );
}

const TechIcons = {
  Agent: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"></path>
      <circle cx="12" cy="9" r="2.5"></circle>
    </svg>
  ),
  Compute: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
      <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
      <line x1="6" y1="6" x2="6.01" y2="6"></line>
      <line x1="6" y1="18" x2="6.01" y2="18"></line>
    </svg>
  ),
  Service: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
      <circle cx="9" cy="7" r="4"></circle>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
    </svg>
  ),
  Security: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
    </svg>
  ),
  AI: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2 2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z"></path>
      <path d="M12 8v4"></path>
      <rect x="4" y="12" width="16" height="8" rx="2" ry="2"></rect>
      <path d="M4 16h16"></path>
    </svg>
  )
};

function TechAdvantagesSection({ dict }: { dict: any }) {
  const { ref, isInView } = useInView();

  const advantages = [
    { icon: <TechIcons.AI />, ...dict.items[0] },
    { icon: <TechIcons.Compute />, ...dict.items[1] },
    { icon: <TechIcons.Service />, ...dict.items[2] },
    { icon: <TechIcons.Security />, ...dict.items[3] }
  ];

  return (
    <section className={`section ${isInView ? 'in-view' : ''}`} id="advantages" ref={ref as React.RefObject<HTMLElement>}>
      <div className="container">
        <div className="card-wrapper main-card">
          <h2 className="animate-fade-in">{dict.title}</h2>
          <div className="grid-4 adv-grid">
            {advantages.map((adv: any, i: number) => (
              <div key={i} className={`adv-card animate-flip-up delay-${i + 1}`}>
                <div className="arrow-box">
                  {adv.icon}
                </div>
                <h4>{adv.title}</h4>
                <p>{adv.desc}</p>
              </div>
            ))}
          </div>
          <div className="why-us-split">
            <div className="text-col animate-slide-left delay-5">
              <h3>{dict.whyUs.title}</h3>
              <ul>
                {dict.whyUs.items.map((item: string, i: number) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="img-col animate-slide-right delay-5">
              <Image src="/images/HsEyT5fBGPzzQ6e9ianti.png" alt="Why us" width={400} height={300} className="rounded-img" />
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
                /* Animation Keyframes */
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                
                @keyframes flipUp {
                    from {
                        opacity: 0;
                        transform: perspective(400px) rotateX(15deg) translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: perspective(400px) rotateX(0) translateY(0);
                    }
                }
                
                @keyframes slideLeft {
                    from {
                        opacity: 0;
                        transform: translateX(-40px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }
                
                @keyframes slideRight {
                    from {
                        opacity: 0;
                        transform: translateX(40px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }
                
                @keyframes iconRotate {
                    0%, 100% { transform: rotate(0deg); }
                    25% { transform: rotate(-10deg); }
                    75% { transform: rotate(10deg); }
                }
                
                /* Animation Classes - only trigger when in view */
                .animate-fade-in,
                .animate-flip-up,
                .animate-slide-left,
                .animate-slide-right {
                    opacity: 0;
                }
                
                .section.in-view .animate-fade-in {
                    animation: fadeIn 0.8s ease-out forwards;
                }
                
                .section.in-view .animate-flip-up {
                    animation: flipUp 0.7s ease-out forwards;
                }
                
                .section.in-view .animate-slide-left {
                    animation: slideLeft 0.8s ease-out forwards;
                }
                
                .section.in-view .animate-slide-right {
                    animation: slideRight 0.8s ease-out forwards;
                }
                
                .section.in-view .delay-1 { animation-delay: 0.1s; }
                .section.in-view .delay-2 { animation-delay: 0.2s; }
                .section.in-view .delay-3 { animation-delay: 0.3s; }
                .section.in-view .delay-4 { animation-delay: 0.4s; }
                .section.in-view .delay-5 { animation-delay: 0.6s; }
                
                .section {
                    background: linear-gradient(rgba(255, 255, 244, 0.9), rgba(255, 255, 244, 0.9)), url('/images/QRJG7Re6T0C3D_6rpSY8N.png');
                    background-size: cover;
                    background-position: center;
                    backdrop-filter: blur(20px) saturate(170%);
                }
                .main-card {
                    padding: 2rem;
                    /* background moved to parent */
                    border-radius: var(--border-radius-md);
                }
                .adv-card {
                    background: var(--accent-color-light);
                    border-radius: var(--border-radius-sm);
                    padding: 1.5rem;
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                }
                
                .adv-card:hover {
                    transform: translateY(-8px);
                    box-shadow: 0 15px 30px rgba(255, 149, 79, 0.2);
                }
                
                .arrow-box {
                    width: 3rem;
                    height: 3rem;
                    background: var(--accent-color);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: var(--border-radius-sm);
                    margin-bottom: 1rem;
                    color: #fff;
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                }
                
                .adv-card:hover .arrow-box {
                    animation: iconRotate 0.5s ease;
                    box-shadow: 0 5px 15px rgba(255, 149, 79, 0.4);
                }
                
                .arrow-box :global(svg) {
                    width: 1.5rem;
                    height: 1.5rem;
                }
                .adv-card h4 { 
                    margin-bottom: 0.5rem; 
                    font-size: 1.1rem;
                    transition: color 0.3s ease;
                }
                
                .adv-card:hover h4 {
                    color: var(--accent-color-dim);
                }
                
                .adv-card p { font-size: 0.9rem; }
                
                .why-us-split {
                    margin-top: 3rem;
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 3rem;
                    border-top: 1px solid rgba(0,0,0,0.1);
                    padding-top: 3rem;
                    align-items: center;
                }
                .text-col ul {
                    list-style: disc;
                    padding-left: 1.2rem;
                }
                .text-col li {
                    margin-bottom: 0.5rem;
                    transition: color 0.2s ease;
                }
                .text-col li:hover {
                    color: var(--accent-color-dim);
                }
                .rounded-img {
                    border-radius: var(--border-radius-md);
                    width: 100%;
                    transition: transform 0.5s ease, box-shadow 0.5s ease;
                }
                .img-col:hover .rounded-img {
                    transform: scale(1.03);
                    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
                }
                @media (max-width: 768px) {
                    .adv-grid { grid-template-columns: 1fr; }
                    .why-us-split { grid-template-columns: 1fr; }
                    .main-card { padding: 1.5rem; }
                }
                
                /* Reduced motion for accessibility */
                @media (prefers-reduced-motion: reduce) {
                    .animate-fade-in,
                    .animate-flip-up,
                    .animate-slide-left,
                    .animate-slide-right {
                        animation: none;
                        opacity: 1;
                    }
                    .adv-card,
                    .arrow-box,
                    .adv-card h4,
                    .text-col li,
                    .rounded-img {
                        transition: none;
                    }
                    .adv-card:hover .arrow-box {
                        animation: none;
                    }
                }
            `}</style>
    </section>
  )
}

function CTASection({ dict }: { dict: any }) {
  const { ref, isInView } = useInView();
  const actions = dict.actions;

  return (
    <section className={`section ${isInView ? 'in-view' : ''}`} ref={ref as React.RefObject<HTMLElement>}>
      <div className="container">
        <div className="card-wrapper main-card">
          <h2 className="animate-scale-fade">{dict.title}</h2>
          <p className="sub-cta animate-fade-in delay-1">{dict.intro}</p>
          <div className="grid-3 cta-grid">
            {actions.map((act: any, i: number) => (
              <div key={i} className={`cta-item animate-bounce-up delay-${i + 2}`}>
                <h4>{act.title}</h4>
                <p>{act.desc}</p>
              </div>
            ))}
          </div>
          <div className="cta-buttons animate-fade-in delay-5">
            <a href="mailto:vip@sweetspot.top" className="btn btn-primary pulse-btn">{dict.buttons.consult}</a>
            <a href="#cases" className="btn btn-outline">{dict.buttons.moreCases}</a>
          </div>
          <p className="footer-tag animate-fade-in delay-6">{dict.tagline}</p>
        </div>
      </div>
      <style jsx>{`
                /* Animation Keyframes */
                @keyframes scaleFade {
                    from {
                        opacity: 0;
                        transform: scale(0.9);
                    }
                    to {
                        opacity: 1;
                        transform: scale(1);
                    }
                }
                
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                
                @keyframes bounceUp {
                    0% {
                        opacity: 0;
                        transform: translateY(40px);
                    }
                    60% {
                        opacity: 1;
                        transform: translateY(-8px);
                    }
                    100% {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                @keyframes pulse {
                    0%, 100% {
                        box-shadow: 0 0 0 0 rgba(255, 149, 79, 0.4);
                    }
                    50% {
                        box-shadow: 0 0 0 15px rgba(255, 149, 79, 0);
                    }
                }
                
                /* Animation Classes - only trigger when in view */
                .animate-scale-fade,
                .animate-fade-in,
                .animate-bounce-up {
                    opacity: 0;
                }
                
                .section.in-view .animate-scale-fade {
                    animation: scaleFade 0.8s ease-out forwards;
                }
                
                .section.in-view .animate-fade-in {
                    animation: fadeIn 0.8s ease-out forwards;
                }
                
                .section.in-view .animate-bounce-up {
                    animation: bounceUp 0.7s ease-out forwards;
                }
                
                .section.in-view .pulse-btn {
                    animation: pulse 2s ease-in-out infinite;
                    animation-delay: 1.5s;
                }
                
                .section.in-view .delay-1 { animation-delay: 0.15s; }
                .section.in-view .delay-2 { animation-delay: 0.3s; }
                .section.in-view .delay-3 { animation-delay: 0.45s; }
                .section.in-view .delay-4 { animation-delay: 0.6s; }
                .section.in-view .delay-5 { animation-delay: 0.75s; }
                .section.in-view .delay-6 { animation-delay: 0.9s; }
                
                .section {
                    background: linear-gradient(rgba(255, 255, 244, 0.9), rgba(255, 255, 244, 0.9)), url('/images/KMJu3hu8G5iMa_gz2irl4.png');
                    background-size: cover;
                    background-position: center;
                    backdrop-filter: blur(20px) saturate(170%);
                }
                .main-card {
                    padding: 2rem;
                    /* background moved to parent */
                    border-radius: var(--border-radius-md);
                }
                .cta-item {
                    background: var(--accent-color-light);
                    padding: 1.5rem;
                    border-radius: var(--border-radius-sm);
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                }
                
                .cta-item:hover {
                    transform: translateY(-8px) scale(1.02);
                    box-shadow: 0 15px 30px rgba(255, 149, 79, 0.2);
                }
                
                .cta-item h4 { 
                    margin-bottom: 0.5rem;
                    transition: color 0.3s ease;
                }
                
                .cta-item:hover h4 {
                    color: var(--accent-color-dim);
                }
                
                .cta-buttons {
                    display: flex;
                    justify-content: center;
                    gap: 1.5rem;
                    margin: 3rem 0 2rem;
                }
                
                .cta-buttons :global(.btn) {
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                }
                
                .cta-buttons :global(.btn-primary:hover) {
                    transform: translateY(-3px) scale(1.05);
                    box-shadow: 0 10px 25px rgba(255, 149, 79, 0.4);
                }
                
                .cta-buttons :global(.btn-outline:hover) {
                    transform: translateY(-3px);
                    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
                }
                
                .footer-tag {
                    text-align: center;
                    font-weight: 600;
                    color: var(--heading-color);
                }
                 @media (max-width: 768px) {
                    .cta-grid { grid-template-columns: 1fr; }
                    .cta-buttons { flex-direction: column; align-items: center; }
                     .main-card { padding: 1.5rem; }
                }
                
                /* Reduced motion for accessibility */
                @media (prefers-reduced-motion: reduce) {
                    .animate-scale-fade,
                    .animate-fade-in,
                    .animate-bounce-up {
                        animation: none;
                        opacity: 1;
                    }
                    .section.in-view .pulse-btn {
                        animation: none;
                    }
                    .cta-item,
                    .cta-item h4,
                    .cta-buttons :global(.btn) {
                        transition: none;
                    }
                }
            `}</style>
    </section>
  );
}

// SVG Icons for Footer
function IconEmail() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
      <polyline points="22,6 12,13 2,6"></polyline>
    </svg>
  );
}

function IconPhone() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
    </svg>
  );
}

function IconMapPin() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
      <circle cx="12" cy="10" r="3"></circle>
    </svg>
  );
}

function Footer({ dict }: { dict: any }) {
  const { ref, isInView } = useInView();

  return (
    <footer className={`footer ${isInView ? 'in-view' : ''}`} id="footer" ref={ref as React.RefObject<HTMLElement>}>
      <div className="container">
        <div className="footer-content">
          {/* Column 1: Logo & Slogan */}
          <div className="footer-col brand-col animate-fade-in">
            <h2 className="footer-logo">SweetSpot</h2>
            <p className="footer-slogan">{dict.slogan}</p>
          </div>

          {/* Column 2: Navigation */}
          <div className="footer-col nav-col animate-slide-up delay-1">
            <h4>{dict.navTitle}</h4>
            <ul className="footer-nav">
              <li><a href="#business">{dict.nav.business}</a></li>
              <li><a href="#industries">{dict.nav.industries}</a></li>
              <li><a href="#advantages">{dict.nav.advantages}</a></li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="footer-col contact-col animate-slide-up delay-2">
            <h4>{dict.contactTitle}</h4>
            <div className="contact-list">
              <div className="contact-item">
                <span className="icon"><IconEmail /></span>
                <a href="mailto:vip@sweetspot.top" className="contact-link">vip@sweetspot.top</a>
              </div>
              <div className="contact-item">
                <span className="icon"><IconPhone /></span>
                <span className="contact-text">{dict.phone}</span>
              </div>
              <div className="contact-item">
                <span className="icon"><IconMapPin /></span>
                <span className="contact-text">{dict.address}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom animate-fade-in delay-3">
          <p>{dict.copyright}</p>
        </div>
      </div>
      <style jsx>{`
        /* Animation Keyframes */
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Animation Classes */
        .animate-fade-in,
        .animate-slide-up {
          opacity: 0;
        }

        .footer.in-view .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }

        .footer.in-view .animate-slide-up {
          animation: slideUp 0.8s ease-out forwards;
        }

        .footer.in-view .delay-1 { animation-delay: 0.2s; }
        .footer.in-view .delay-2 { animation-delay: 0.4s; }
        .footer.in-view .delay-3 { animation-delay: 0.6s; }

        /* Footer Styles */
        .footer {
          background-color: #0f172a; /* Dark background matching the image */
          color: #ffffff;
          padding: 4rem 2rem 2rem;
          margin-top: 0;
        }

        .footer-content {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          gap: 3rem;
          margin-bottom: 4rem;
        }

        .footer-col {
          flex: 1;
          min-width: 250px;
        }

        /* Column 1: Brand */
        .footer-logo {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
          color: #fff;
        }

        .footer-slogan {
          font-size: 1rem;
          color: #94a3b8; /* Muted text color */
          line-height: 1.6;
          max-width: 300px;
        }

        /* Column 2: Nav */
        .nav-col h4,
        .contact-col h4 {
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
          color: #fff;
        }

        .footer-nav {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-nav li {
          margin-bottom: 1rem;
        }

        .footer-nav a {
          color: #94a3b8;
          text-decoration: none;
          transition: color 0.3s ease;
          display: inline-block;
        }

        .footer-nav a:hover {
          color: #fff;
          transform: translateX(5px);
        }

        /* Column 3: Contact */
        .contact-list {
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          color: #94a3b8;
        }

        .contact-item .icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 24px;
          height: 24px;
        }
        
        .contact-link {
          color: #94a3b8;
          text-decoration: none;
          transition: color 0.3s ease;
        }
        
        .contact-link:hover {
          color: #fff;
        }

        /* Footer Bottom */
        .footer-bottom {
          border-top: 1px solid #1e293b; /* Subtle separator line */
          padding-top: 2rem;
          text-align: left;
        }

        .footer-bottom p {
          color: #64748b;
          font-size: 0.875rem;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .footer-content {
            flex-direction: column;
            gap: 2rem;
          }
          
          .footer {
            padding-top: 3rem;
          }
        }
        
        @media (prefers-reduced-motion: reduce) {
            .animate-fade-in,
            .animate-slide-up {
                animation: none;
                opacity: 1;
            }
            .footer-nav a:hover {
                transform: none;
            }
        }
      `}</style>
    </footer>
  );
}
