import { InViewWrapper } from "../ui/InViewWrapper";

export function CasesSection({ dict }: { dict: any }) {
  return (
    <InViewWrapper id="cases" className="section" style={{ background: 'var(--background-alt)' }}>
      <div className="container">
        <div className="card-wrapper main-card">
          <h2 className="animate-fade-in section-title">{dict.title}</h2>
          <p className="intro-text animate-fade-in delay-1" style={{ marginBottom: '3rem', fontSize: '1.2rem', maxWidth: '800px' }}>{dict.intro}</p>
          <div className="grid-3 industry-grid">
            {dict.items.map((item: any, i: number) => (
              <a 
                href={item.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                key={i} 
                className={`feature-card animate-scale-up delay-${i + 2}`}
                style={{ display: 'flex', flexDirection: 'column', textDecoration: 'none', color: 'inherit', height: '100%' }}
              >
                <div style={{ flex: 1 }}>
                    <h4 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', color: 'var(--heading-color)' }}>{item.title}</h4>
                    {item.tags && (
                        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
                            {item.tags.map((tag: string, j: number) => (
                                <span key={j} style={{ fontSize: '0.75rem', padding: '0.2rem 0.6rem', borderRadius: '12px', backgroundColor: 'var(--accent-color-light)', color: 'var(--accent-color-dim)', fontWeight: 600 }}>
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}
                    <p style={{ marginBottom: '2rem', color: 'var(--body-color)', lineHeight: 1.6 }}>{item.desc}</p>
                </div>
                <div style={{ marginTop: 'auto' }}>
                    <span className="btn btn-outline" style={{ padding: '0.6rem 1.2rem', fontSize: '0.95rem', width: '100%', pointerEvents: 'none' }}>
                    {dict.viewBtn || 'Visit Site'}
                    </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </InViewWrapper>
  );
}
