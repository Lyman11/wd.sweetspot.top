import { getDictionary } from "../get-dictionary";
import { Locale } from "../get-dictionary";

export async function generateStaticParams() {
    return [{ lang: 'ja' }, { lang: 'en' }, { lang: 'zh' }]
}

// 强制静态生成以优化字体预加载
export const dynamic = 'force-static';
export const revalidate = false;

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { MissionSection } from "@/components/sections/MissionSection";
import { CoreBusinessSection } from "@/components/sections/CoreBusinessSection";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { TechAdvantagesSection } from "@/components/sections/TechAdvantagesSection";
import { CasesSection } from "@/components/sections/CasesSection";
import { CTASection } from "@/components/sections/CTASection";

export default async function Page({ params: { lang } }: { params: { lang: Locale } }) {
    const dictionary = await getDictionary(lang);
    const { header, hero, mission, coreBusiness, industries, techAdvantages, cases, cta, footer } = dictionary;

    return (
      <div className="site-wrapper">
        <Header dict={header} lang={lang} />
        <main>
          <HeroSection dict={hero} />
          <MissionSection dict={mission} />
          <CoreBusinessSection dict={coreBusiness} />
          <IndustriesSection dict={industries} />
          <TechAdvantagesSection dict={techAdvantages} />
          <CasesSection dict={cases} />
          <CTASection dict={cta} />
        </main>
        <Footer dict={footer} />
      </div>
    );
}
