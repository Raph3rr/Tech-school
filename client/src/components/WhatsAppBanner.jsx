import { Link } from "wouter";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { site } from "../data/site";

export default function WhatsAppBanner({ compact = false }) {
  const hasLink = Boolean(site.communityUrl);
  const href = hasLink ? site.communityUrl : "/community#join";

  return (
    <section className={`community-banner ${compact ? "community-banner-compact" : ""}`}>
      <div className="community-banner-icon" aria-hidden="true"><MessageCircle size={26} strokeWidth={1.5} /></div>
      <div className="community-banner-copy">
        <p className="eyebrow">The open door</p>
        <h2>Join the general WhatsApp community.</h2>
        <p>Get course updates, ask questions, and meet people who are also finding their way into technology.</p>
      </div>
      <Link
        href={href}
        className="button button-dark"
        target={hasLink ? "_blank" : undefined}
        rel={hasLink ? "noreferrer" : undefined}
      >
        Join community <ArrowUpRight size={17} strokeWidth={1.7} />
      </Link>
    </section>
  );
}
