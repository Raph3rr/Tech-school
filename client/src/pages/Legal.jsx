import PageIntro from "../components/PageIntro";
import { legal, site } from "../data/site";

export default function Legal({ type }) {
  const isPrivacy = type === "privacy";
  const sections = isPrivacy ? legal.privacySections : legal.termsSections;
  const title = isPrivacy ? "Privacy policy" : "Terms and conditions";
  const intro = isPrivacy
    ? "A plain-language overview of how this school handles information shared through the website and community routes."
    : "The basic terms for using this website, asking about a course, and taking part in the school community.";

  return (
    <main>
      <PageIntro eyebrow="School information" title={title} body={intro} marker={`Last updated ${legal.lastUpdated}`} />
      <section className="section section-paper">
        <div className="container legal-layout">
          <div className="legal-aside">
            <p className="eyebrow">Please read</p>
            <p>These pages are written for this school and should be reviewed with your local requirements and final contact details before launch.</p>
          </div>
          <div className="legal-content">
            {sections.map((section) => (
              <section key={section.heading} className="legal-section">
                <h2>{section.heading}</h2>
                <p>{section.body}</p>
              </section>
            ))}
            <p className="legal-contact">Questions about this page should be sent through the official contact route for {site.name}.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
