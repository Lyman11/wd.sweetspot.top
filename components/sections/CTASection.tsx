import { InViewWrapper } from "../ui/InViewWrapper";

export function CTASection({ dict }: { dict: any }) {
  const actions = dict.actions;

  return (
    <InViewWrapper id="cta" className="section">
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
    </InViewWrapper>
  );
}
