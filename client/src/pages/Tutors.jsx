import { Link } from "wouter";
import { ArrowUpRight, Check } from "lucide-react";
import PageIntro from "../components/PageIntro";
import TutorCard from "../components/TutorCard";
import { tutors } from "../data/site";

const principles = [
  "Explain the why before asking you to copy the how.",
  "Give feedback that helps you make the next decision yourself.",
  "Connect each lesson to a piece of work you can keep.",
];

export default function Tutors() {
  return (
    <main>
      <PageIntro
        eyebrow="Meet your tutors"
        title="Three teaching leads. One shared standard."
        body="The people leading each track care about clear explanations, useful practice, and helping learners become more independent over time."
        marker="The teaching team"
      />

      <section className="section section-paper">
        <div className="container tutor-page-grid">
          <div className="tutor-page-intro">
            <p className="eyebrow">Close to the work</p>
            <h2>Learn with a guide for the subject you chose.</h2>
            <p>Each track has a teaching lead responsible for making the route understandable and keeping the learning grounded in practical work.</p>
          </div>
          <div className="tutor-page-list">
            {tutors.map((tutor) => <TutorCard key={tutor.discipline} tutor={tutor} />)}
          </div>
        </div>
      </section>

      <section className="section section-cream">
        <div className="container principles-grid">
          <div>
            <p className="eyebrow">How we teach</p>
            <h2>Good teaching leaves room for your own judgement.</h2>
          </div>
          <div className="principles-list">
            {principles.map((principle) => (
              <div className="principle-row" key={principle}>
                <Check size={18} strokeWidth={1.7} />
                <p>{principle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-rust">
        <div className="container about-close-inner">
          <div>
            <p className="eyebrow eyebrow-light">Find your track</p>
            <h2>Come with a question. Leave with a next step.</h2>
          </div>
          <Link href="/signup" className="button button-light">Start your sign-up <ArrowUpRight size={17} strokeWidth={1.7} /></Link>
        </div>
      </section>
    </main>
  );
}
