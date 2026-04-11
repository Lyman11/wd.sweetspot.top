import { InViewWrapper } from "../ui/InViewWrapper";
import Image from "next/image";

export function IndustriesSection({ dict }: { dict: any }) {
  return (
    <InViewWrapper id="industries" className="section">
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
    </InViewWrapper>
  );
}
