import { Locale } from "@/app/get-dictionary";
import Image from "next/image";
import Link from "next/link";

export function Header({ dict, lang }: { dict: any; lang: Locale }) {
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
          <Link href="/ja" className={lang === "ja" ? "active" : ""}>JP</Link>
          <span className="divider">|</span>
          <Link href="/en" className={lang === "en" ? "active" : ""}>EN</Link>
          <span className="divider">|</span>
          <Link href="/zh" className={lang === "zh" ? "active" : ""}>CN</Link>
        </div>
      </div>
    </header>
  );
}
