import { InViewWrapper } from "../ui/InViewWrapper";
import { MissionIcons } from "@/components/ui/icons";

export function MissionSection({ dict }: { dict: any }) {
  const cards = [
    { icon: <MissionIcons.FullService />, ...dict.cards.fullService },
    { icon: <MissionIcons.Agent />, ...dict.cards.agent },
    { icon: <MissionIcons.Custom />, ...dict.cards.custom }
  ];

  return (
    <InViewWrapper id="mission" className="section">
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
    </InViewWrapper>
  );
}
