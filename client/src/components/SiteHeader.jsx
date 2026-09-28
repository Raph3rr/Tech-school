import { Link, useLocation } from "wouter";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { site } from "../data/site";

const navItems = [
  ["About", "/about"],
  ["Courses", "/courses"],
  ["Tutors", "/tutors"],
  ["Community", "/community"],
];

export default function SiteHeader() {
  const [location] = useLocation();
  const [open, setOpen] = useState(false);
  const communityHref = site.communityUrl || "/community#join";

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-mark" aria-hidden="true">{site.shortName}</span>
          <span>
            <span className="brand-name">{site.name}</span>
            <span className="brand-tagline">{site.tagline}</span>
          </span>
        </Link>

        <button
          className="menu-toggle"
          type="button"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={22} strokeWidth={1.7} /> : <Menu size={22} strokeWidth={1.7} />}
        </button>

        <nav className={`main-nav ${open ? "is-open" : ""}`} aria-label="Primary navigation">
          <div className="nav-links">
            {navItems.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className={(href === "/courses" ? location.startsWith("/courses") : location === href) ? "nav-link is-active" : "nav-link"}
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            ))}
          </div>
          <Link href="/signup" className="header-action" onClick={() => setOpen(false)}>
            Sign up <ArrowUpRight size={16} strokeWidth={1.7} />
          </Link>
          <Link href={communityHref} className="header-community" onClick={() => setOpen(false)}>
            Join community
          </Link>
        </nav>
      </div>
    </header>
  );
}
