import { InViewWrapper } from "../ui/InViewWrapper";
import Image from "next/image";
import { TechIcons } from "@/components/ui/icons";

export function TechAdvantagesSection({ dict }: { dict: any }) {
  const advantages = [
    { icon: <TechIcons.AI />, ...dict.items[0] },
    { icon: <TechIcons.Compute />, ...dict.items[1] },
    { icon: <TechIcons.Service />, ...dict.items[2] },
    { icon: <TechIcons.Security />, ...dict.items[3] }
  ];

  return (
    <InViewWrapper id="advantages" className="section">
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
    </InViewWrapper>
  );
}
