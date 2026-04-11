import Image from "next/image";

export function HeroSection({ dict }: { dict: any }) {
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
    </section>
  );
}
