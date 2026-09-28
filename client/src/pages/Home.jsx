import { Link } from "wouter";
import { ArrowRight, ArrowUpRight, Check, Compass, MessageCircle } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import CourseCard from "../components/CourseCard";
import TutorCard from "../components/TutorCard";
import WhatsAppBanner from "../components/WhatsAppBanner";
import { courses, site, tutors } from "../data/site";

const learningSteps = [
  ["01", "Learn the foundations", "Start with the ideas and vocabulary that make the rest of the track easier to understand."],
  ["02", "Practise with intention", "Work through guided exercises instead of only watching someone else build."],
  ["03", "Make something real", "Use what you learn in a project you can explain, improve, and keep building after class."],
];

export default function Home() {
  return (
    <>
      <main>
        <section className="hero-section">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">{site.tagline}</p>
              <h1>Start with a practical path into technology.</h1>
              <p className="hero-lede">Learn web development, data analysis, or cybersecurity with a small teaching team and a community that keeps you moving.</p>
              <div className="hero-actions">
                <Link href="/courses" className="button button-primary">Explore the courses <ArrowUpRight size={17} strokeWidth={1.7} /></Link>
                <Link href="/community" className="text-link text-link-large">Join the community <ArrowRight size={17} strokeWidth={1.7} /></Link>
              </div>
              <p className="hero-footnote"><Compass size={15} strokeWidth={1.7} /> Beginner-friendly foundations. Serious practice.</p>
            </div>

            <div className="hero-index" aria-label="Course pathways">
              <div className="hero-index-heading">
                <span>Choose your track</span>
                <span className="index-rule" aria-hidden="true" />
              </div>
              <div className="hero-index-list">
                {courses.map((course) => (
                  <Link key={course.slug} href={`/courses/${course.slug}`} className={`hero-course-row course-row-${course.theme}`}>
                    <span className="hero-course-number">{course.number}</span>
                    <span className="hero-course-copy">
                      <strong>{course.label}</strong>
                      <span>{course.shortDescription}</span>
                    </span>
                    <ArrowUpRight size={18} strokeWidth={1.6} aria-hidden="true" />
                  </Link>
                ))}
              </div>
              <div className="hero-index-note">
                <MessageCircle size={18} strokeWidth={1.5} />
                <span>Not sure where to start? Join the community and ask an admin.</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-paper">
          <div className="container">
            <SectionHeading
              eyebrow="Three practical paths"
              title="Learn the craft behind the screen."
              body="Each track is built around foundations, guided practice, and a clear reason for learning the next thing."
            />
            <div className="course-grid">
              {courses.map((course) => <CourseCard key={course.slug} course={course} />)}
            </div>
          </div>
        </section>

        <section className="section section-ink">
          <div className="container learning-grid">
            <div className="learning-intro">
              <p className="eyebrow eyebrow-light">The learning approach</p>
              <h2>Less performance. More practice.</h2>
              <p>We are building a school where it is normal to ask questions, make mistakes, and return to a difficult idea until it makes sense.</p>
              <Link href="/about" className="button button-light">About the school <ArrowUpRight size={17} strokeWidth={1.7} /></Link>
            </div>
            <div className="learning-steps">
              {learningSteps.map(([number, title, body]) => (
                <div className="learning-step" key={number}>
                  <span className="step-number">{number}</span>
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
          <div className="container">
            <SectionHeading
              eyebrow="Meet the teaching team"
              title="Learn from people who are close to the work."
              body="Each course has a teaching lead who keeps the subject grounded in practical decisions, not just theory."
            />
            <div className="tutor-grid tutor-grid-home">
              {tutors.map((tutor) => <TutorCard key={tutor.discipline} tutor={tutor} />)}
            </div>
          </div>
        </section>

        <section className="section section-warm">
          <div className="container split-note">
            <div>
              <p className="eyebrow">A place to begin</p>
              <h2>You do not have to figure out the route alone.</h2>
            </div>
            <div className="split-note-copy">
              <p>Our general WhatsApp community is open to people who want to ask questions, follow course updates, and decide what to learn next.</p>
              <Link href="/community" className="text-link text-link-large">See how the community works <ArrowRight size={17} strokeWidth={1.7} /></Link>
            </div>
          </div>
        </section>

        <div className="container banner-wrap">
          <WhatsAppBanner />
        </div>
      </main>
    </>
  );
}
