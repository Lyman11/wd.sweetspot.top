import { InViewWrapper } from "../ui/InViewWrapper";
import { IconEmail, IconPhone, IconMapPin } from "@/components/ui/icons";

export function Footer({ dict }: { dict: any }) {
  return (
    <footer id="footer">
      <InViewWrapper className="footer" id="foo">
        <div className="container">
          <div className="footer-content">
            <div className="footer-col brand-col animate-fade-in">
              <h2 className="footer-logo">SweetSpot</h2>
              <p className="footer-slogan">{dict.slogan}</p>
            </div>
            <div className="footer-col nav-col animate-slide-up delay-1">
              <h4>{dict.navTitle}</h4>
              <ul className="footer-nav">
                <li><a href="#business">{dict.nav.business}</a></li>
                <li><a href="#industries">{dict.nav.industries}</a></li>
                <li><a href="#advantages">{dict.nav.advantages}</a></li>
              </ul>
            </div>
            <div className="footer-col contact-col animate-slide-up delay-2">
              <h4>{dict.contactTitle}</h4>
              <div className="contact-list">
                <div className="contact-item">
                  <span className="icon"><IconEmail /></span>
                  <a href="mailto:vip@sweetspot.top" className="contact-link">vip@sweetspot.top</a>
                </div>
                <div className="contact-item">
                  <span className="icon"><IconPhone /></span>
                  <span className="contact-text">{dict.phone}</span>
                </div>
                <div className="contact-item">
                  <span className="icon"><IconMapPin /></span>
                  <span className="contact-text">{dict.address}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom animate-fade-in delay-3">
            <p>{dict.copyright}</p>
          </div>
        </div>
      </InViewWrapper>
    </footer>
  );
}
