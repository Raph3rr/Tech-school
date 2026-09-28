import { Link } from "wouter";
import { ArrowUpRight, Check } from "lucide-react";
import PageIntro from "../components/PageIntro";
import SectionHeading from "../components/SectionHeading";
import { site } from "../data/site";

const values = [
  ["Clarity", "Explain the difficult thing in a way that gives a learner somewhere to stand."],
  ["Practice", "Use exercises and projects to turn an idea into something you can do."],
  ["Community", "Make room for questions, feedback, and the encouragement that keeps learning going."],
  ["Responsibility", "Teach technology with care, including the security and consequences behind the tools."],
];

const model = [
  "A clear starting point for each track",
  "Sessions that connect concepts to practical work",
  "A place to ask questions between sessions",
  "Projects that help you see your progress",
];

export default function About() {
  return (
    <main>
      <PageIntro
        eyebrow="About the school"
        title="A small school for people ready to begin."
        body={site.description}
        marker="Our approach"
      />

      <section className="section section-paper">
        <div className="container about-story-grid">
          <div className="about-story-lead">
            <p className="eyebrow">Why this exists</p>
            <h2>Technology becomes less intimidating when the path is clear.</h2>
          </div>
          <div className="about-story-copy">
            <p>We are building this school around three areas that shape how people work and live online: making for the web, understanding data, and protecting the systems around us.</p>
            <p>The goal is not to overwhelm you with a long catalogue. It is to give you a focused route, patient teaching, and a community where you can keep asking the next question.</p>
            <Link href="/courses" className="text-link text-link-large">Explore the three tracks <ArrowUpRight size={17} strokeWidth={1.7} /></Link>
          </div>
        </div>
      </section>

      <section className="section section-cream">
        <div className="container values-grid">
          <SectionHeading eyebrow="What we value" title="Good learning needs more than information." body="The way a subject is taught matters as much as the list of topics." />
          <div className="values-list">
            {values.map(([title, body], index) => (
              <div className="value-row" key={title}>
                <span className="value-number">0{index + 1}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-paper">
        <div className="container model-grid">
          <div className="model-panel">
            <p className="eyebrow">What learning looks like</p>
            <h2>Structured enough to guide you. Open enough to let you think.</h2>
          </div>
          <div className="model-list">
            {model.map((item) => (
              <div className="model-list-item" key={item}>
                <Check size={18} strokeWidth={1.7} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-rust about-close">
        <div className="container about-close-inner">
          <div>
            <p className="eyebrow eyebrow-light">Ready when you are</p>
            <h2>Choose a direction and take the first step.</h2>
          </div>
          <Link href="/signup" className="button button-light">Start your sign-up <ArrowUpRight size={17} strokeWidth={1.7} /></Link>
        </div>
      </section>
    </main>
  );
}
