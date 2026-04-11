import { InViewWrapper } from "../ui/InViewWrapper";
import Image from "next/image";

export function CoreBusinessSection({ dict }: { dict: any }) {
  const services = dict.services;

  return (
    <InViewWrapper id="business" className="section">
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
    </InViewWrapper>
  );
}
