import { Link } from "wouter";
import { ArrowUpRight, Instagram, Linkedin, Mail } from "lucide-react";
import { site } from "../data/site";

export default function SiteFooter() {
  const communityHref = site.communityUrl || "/community#join";

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-intro">
          <Link href="/" className="brand footer-brand">
            <span className="brand-mark" aria-hidden="true">{site.shortName}</span>
            <span>
              <span className="brand-name">{site.name}</span>
              <span className="brand-tagline">{site.tagline}</span>
            </span>
          </Link>
          <p>{site.description}</p>
        </div>

        <div className="footer-column">
          <p className="footer-label">Explore</p>
          <Link href="/about">About us</Link>
          <Link href="/courses">Courses</Link>
          <Link href="/tutors">Meet the tutors</Link>
          <Link href="/signup">Sign up</Link>
        </div>

        <div className="footer-column">
          <p className="footer-label">Connect</p>
          <Link href={communityHref}>WhatsApp community <ArrowUpRight size={14} /></Link>
          {site.email ? <a href={`mailto:${site.email}`}><Mail size={14} /> Email us</a> : <span className="footer-muted">Official contact coming soon</span>}
          <div className="footer-socials">
            {site.instagramUrl && <a href={site.instagramUrl} target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={16} /></a>}
            {site.linkedinUrl && <a href={site.linkedinUrl} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={16} /></a>}
          </div>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} {site.name}. All rights reserved.</span>
        <div className="footer-legal">
          <Link href="/privacy">Privacy policy</Link>
          <Link href="/terms">Terms and conditions</Link>
        </div>
      </div>
    </footer>
  );
}
