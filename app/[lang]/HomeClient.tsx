"use client";

import Image from "next/image";
import { Locale } from "../get-dictionary";

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

function Header({ dict, lang }: { dict: any, lang: Locale }) {
  return (
    <header className="header">
      <div className="header-content">
        <a href={`/${lang}`} className="logo">
          <Image src="/logo.png" alt="Sweet Spot" width={55} height={55} className="logo-img" />
        </a>
        <nav className="nav-links">
          <a href="#mission">{dict.nav.mission}</a>
          <a href="#business">{dict.nav.business}</a>
          <a href="#industries">{dict.nav.industries}</a>
          <a href="#advantages">{dict.nav.advantages}</a>
          <a href="#footer">{dict.nav.contact}</a>
        </nav>
        <div className="lang-switcher">
          <a href="/ja" className={lang === 'ja' ? 'active' : ''}>JP</a>
          <span className="divider">|</span>
          <a href="/en" className={lang === 'en' ? 'active' : ''}>EN</a>
          <span className="divider">|</span>
          <a href="/zh" className={lang === 'zh' ? 'active' : ''}>CN</a>
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
          padding: 0 1.5rem;
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
        .nav-links a {
            font-weight: 500;
            color: var(--heading-color);
            transition: color 0.2s;
        }
        .nav-links a:hover {
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
        .lang-switcher a {
            font-size: 0.9rem;
            color: var(--body-muted);
            font-weight: 600;
            transition: color 0.2s;
        }
        .lang-switcher a:hover, .lang-switcher a.active {
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
            <h1>{dict.title}</h1>
            <p className="subtitle">{dict.subtitle}</p>
            <div className="hero-actions">
              <a href="mailto:vip@sweetspot.top" className="btn btn-primary">{dict.cta.book}</a>
              <a href="#cases" className="btn btn-outline">{dict.cta.cases}</a>
            </div>
          </div>
          <div className="hero-image-wrapper">
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
        }
        .hero-img {
            object-fit: cover;
            width: 450px;
            height: 450px;
            border-radius: 0; /* Reset radius on image itself */
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
  const cards = [
    { icon: <MissionIcons.FullService />, ...dict.cards.fullService },
    { icon: <MissionIcons.Agent />, ...dict.cards.agent },
    { icon: <MissionIcons.Custom />, ...dict.cards.custom }
  ];

  return (
    <section className="section" id="mission">
      <div className="container">
        <div className="card-wrapper main-card">
          <h2 className="section-title">{dict.title}</h2>
          <div className="grid-3">
            {cards.map((c: any, i: number) => (
              <div key={i} className="feature-card">
                <div className="icon-box">{c.icon}</div>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </div>
            ))}
          </div>
          <p className="mission-statement">
            {dict.statement}
          </p>
        </div>
      </div>
      <style jsx>{`
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
                }
                .icon-box :global(svg) {
                    width: 1.5rem;
                    height: 1.5rem;
                }
                .feature-card h3 {
                    font-size: 1.25rem;
                    margin-bottom: 0.5rem;
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
            `}</style>
    </section>
  );
}

function CoreBusinessSection({ dict }: { dict: any }) {
  const services = dict.services;

  return (
    <section className="section" id="business">
      <div className="container">
        <div className="card-wrapper main-card">
          <div className="header-split">
            <div className="image-part">
              <Image src="/images/xZplMhIWsr70AE6FCuKnM.png" width={400} height={300} alt="Business" className="rounded-img" />
            </div>
            <div className="text-part">
              <h2>{dict.header.title}</h2>
              <h3 className="highlight-text">{dict.header.subtitle}</h3>
              <p>{dict.header.desc}</p>
            </div>
          </div>
          <div className="divider"></div>
          <div className="grid-4 service-grid">
            {services.map((s: any, i: number) => (
              <div key={i} className="service-card">
                <div className="num-badge">{s.num}</div>
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
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
                }
                .text-part h2 { font-size: 2.3rem; margin-bottom: 0.5rem; }
                .text-part h3 { font-size: 1.8rem; margin-bottom: 1rem; color: var(--heading-color); }
                .divider {
                    height: 1px;
                    background: rgba(0,0,0,0.1);
                    margin: 2rem 0;
                }
                .service-card {
                    border: 1px solid var(--accent-color-light);
                    border-top: 3px solid var(--accent-color);
                    border-radius: var(--border-radius-sm);
                    padding: 1.5rem;
                    background: transparent;
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
                }
                .service-card h4 { font-size: 1.1rem; margin-bottom: 0.8rem; }
                .service-card p { font-size: 0.9rem; color: var(--body-color); }
                @media (max-width: 768px) {
                    .header-split { grid-template-columns: 1fr; }
                    .service-grid { grid-template-columns: 1fr; }
                }
            `}</style>
    </section>
  )
}

function IndustriesSection({ dict }: { dict: any }) {
  return (
    <section className="section" id="industries">
      <div className="container">
        <div className="card-wrapper main-card">
          <h2>{dict.title}</h2>
          <p className="intro-text">{dict.intro}</p>
          <div className="grid-4 industry-grid">
            {dict.items.map((ind: any, i: number) => (
              <div key={i} className="industry-item">
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
                    transition: transform 0.3s;
                }
                .industry-item:hover .ind-img {
                    transform: scale(1.05);
                }
                .industry-item h4 {
                    font-size: 1.2rem;
                    margin-bottom: 0.5rem;
                }
                .industry-item p {
                    font-size: 0.9rem;
                    color: var(--body-color);
                }
                 @media (max-width: 768px) {
                    .industry-grid { grid-template-columns: 1fr; }
                    .main-card { padding: 1.5rem; }
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
  const advantages = [
    { icon: <TechIcons.AI />, ...dict.items[0] },
    { icon: <TechIcons.Compute />, ...dict.items[1] },
    { icon: <TechIcons.Service />, ...dict.items[2] },
    { icon: <TechIcons.Security />, ...dict.items[3] }
  ];

  return (
    <section className="section" id="advantages">
      <div className="container">
        <div className="card-wrapper main-card">
          <h2>{dict.title}</h2>
          <div className="grid-4 adv-grid">
            {advantages.map((adv: any, i: number) => (
              <div key={i} className="adv-card">
                <div className="arrow-box">
                  {adv.icon}
                </div>
                <h4>{adv.title}</h4>
                <p>{adv.desc}</p>
              </div>
            ))}
          </div>
          <div className="why-us-split">
            <div className="text-col">
              <h3>{dict.whyUs.title}</h3>
              <ul>
                {dict.whyUs.items.map((item: string, i: number) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="img-col">
              <Image src="/images/HsEyT5fBGPzzQ6e9ianti.png" alt="Why us" width={400} height={300} className="rounded-img" />
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
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
                }
                .arrow-box :global(svg) {
                    width: 1.5rem;
                    height: 1.5rem;
                }
                .adv-card h4 { margin-bottom: 0.5rem; font-size: 1.1rem; }
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
                }
                .rounded-img {
                    border-radius: var(--border-radius-md);
                    width: 100%;
                }
                @media (max-width: 768px) {
                    .adv-grid { grid-template-columns: 1fr; }
                    .why-us-split { grid-template-columns: 1fr; }
                    .main-card { padding: 1.5rem; }
                }
            `}</style>
    </section>
  )
}

function CTASection({ dict }: { dict: any }) {
  const actions = dict.actions;

  return (
    <section className="section">
      <div className="container">
        <div className="card-wrapper main-card">
          <h2>{dict.title}</h2>
          <p className="sub-cta">{dict.intro}</p>
          <div className="grid-3 cta-grid">
            {actions.map((act: any, i: number) => (
              <div key={i} className="cta-item">
                <h4>{act.title}</h4>
                <p>{act.desc}</p>
              </div>
            ))}
          </div>
          <div className="cta-buttons">
            <a href="mailto:vip@sweetspot.top" className="btn btn-primary">{dict.buttons.consult}</a>
            <a href="#cases" className="btn btn-outline">{dict.buttons.moreCases}</a>
          </div>
          <p className="footer-tag">{dict.tagline}</p>
        </div>
      </div>
      <style jsx>{`
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
                }
                .cta-item h4 { margin-bottom: 0.5rem; }
                .cta-buttons {
                    display: flex;
                    justify-content: center;
                    gap: 1.5rem;
                    margin: 3rem 0 2rem;
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
            `}</style>
    </section>
  );
}

function Footer({ dict }: { dict: any }) {
  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="card-wrapper main-card">
          <h2>{dict.title}</h2>
          <div className="contact-info">
            <p><strong>{dict.emailLabel}</strong></p>
            <p>vip@sweetspot.top</p>
            <br />
            <p><strong>{dict.addressLabel}</strong></p>
            <p>{dict.addressLine1}</p>
            <p>{dict.addressLine2}</p>
          </div>
        </div>
      </div>
      <style jsx>{`
                .footer {
                    padding-bottom: 4rem;
                    background: var(--card-background);
                    backdrop-filter: blur(20px) saturate(170%);
                }
                .main-card {
                     padding: 2rem;
                     /* background moved to parent */
                     border-radius: var(--border-radius-md);
                }
            `}</style>
    </footer>
  );
}
