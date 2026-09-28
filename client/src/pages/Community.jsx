import { Link } from "wouter";
import { ArrowUpRight, Check, MessageCircle, ShieldCheck } from "lucide-react";
import PageIntro from "../components/PageIntro";
import { site } from "../data/site";

const steps = [
  ["Join", "Enter the general community to see announcements, ask questions, and follow the school's next intake."],
  ["Ask", "Message an official admin if you want course details, payment information, or help choosing a track."],
  ["Enrol", "Complete the sign-up process and receive the right next step for your selected course."],
];

export default function Community() {
  const hasLink = Boolean(site.communityUrl);

  return (
    <main>
      <PageIntro
        eyebrow="The community"
        title="A place to ask before you decide."
        body="The general WhatsApp community is the open door to the school. It is where people can get updates, ask questions, and find their route into a course."
        marker="Join the conversation"
      />

      <section className="section section-paper" id="join">
        <div className="container community-join-grid">
          <div className="community-join-card">
            <div className="community-icon"><MessageCircle size={32} strokeWidth={1.5} /></div>
            <p className="eyebrow">General community</p>
            <h2>Come in, look around, and ask a real question.</h2>
            <p>Use the community for school announcements, free resources, course updates, and conversations with people who are also learning.</p>
            <a
              className={`button button-primary ${!hasLink ? "button-disabled" : ""}`}
              href={hasLink ? site.communityUrl : "#community-link"}
              target={hasLink ? "_blank" : undefined}
              rel={hasLink ? "noreferrer" : undefined}
              aria-disabled={!hasLink}
              onClick={(event) => { if (!hasLink) event.preventDefault(); }}
            >
              {hasLink ? "Join on WhatsApp" : "Add the WhatsApp link"} <ArrowUpRight size={17} strokeWidth={1.7} />
            </a>
            {!hasLink && <p className="setup-note" id="community-link">The official community link is not connected yet. Add it to <code>client/src/data/site.js</code> before launch.</p>}
          </div>

          <div className="community-principles">
            <p className="eyebrow">How it works</p>
            <div className="community-step-list">
              {steps.map(([title, body], index) => (
                <div className="community-step" key={title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div><h3>{title}</h3><p>{body}</p></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section-cream">
        <div className="container community-rules-grid">
          <div>
            <p className="eyebrow">A clear boundary</p>
            <h2>General community first. Course groups after confirmation.</h2>
          </div>
          <div className="community-rules-copy">
            <p>People can join the general community without paying. When you decide to enrol, an official admin handles the payment conversation and confirms the next steps.</p>
            <p>Private course groups are separate spaces for confirmed students. They are used for course-specific announcements, questions, and learning support.</p>
            <div className="community-rule"><ShieldCheck size={19} strokeWidth={1.5} /><span>Only pay through an official admin or the payment route confirmed by the school.</span></div>
          </div>
        </div>
      </section>

      <section className="section section-rust">
        <div className="container about-close-inner">
          <div>
            <p className="eyebrow eyebrow-light">Prefer to sign up online?</p>
            <h2>Send your details and choose your track.</h2>
          </div>
          <Link href="/signup" className="button button-light">Open the sign-up page <ArrowUpRight size={17} strokeWidth={1.7} /></Link>
        </div>
      </section>
    </main>
  );
}
