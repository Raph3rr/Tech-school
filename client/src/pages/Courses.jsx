import { Link } from "wouter";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import PageIntro from "../components/PageIntro";
import CourseCard from "../components/CourseCard";
import WhatsAppBanner from "../components/WhatsAppBanner";
import { courses, faqs } from "../data/site";

export default function Courses() {
  return (
    <main>
      <PageIntro
        eyebrow="The courses"
        title="Three focused ways to start learning."
        body="Choose the subject that pulls you in. Each track is designed around foundations, guided practice, and a project you can keep developing."
        marker="Explore the tracks"
      />

      <section className="section section-paper">
        <div className="container course-list-grid">
          {courses.map((course) => <CourseCard key={course.slug} course={course} />)}
        </div>
      </section>

      <section className="section section-cream">
        <div className="container course-note-grid">
          <div>
            <p className="eyebrow">Before you enrol</p>
            <h2>Start with a conversation if you are unsure.</h2>
          </div>
          <div className="course-note-copy">
            <p>Course dates, prices, and payment instructions are confirmed by an official admin for each intake. You can sign up online or join the general community and ask a question first.</p>
            <div className="inline-actions">
              <Link href="/signup" className="button button-primary">Sign up online <ArrowUpRight size={17} strokeWidth={1.7} /></Link>
              <Link href="/community" className="text-link">Join the conversation <ArrowUpRight size={16} strokeWidth={1.7} /></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-paper">
        <div className="container faq-grid">
          <div>
            <p className="eyebrow">Common questions</p>
            <h2>Good questions are part of the process.</h2>
            <p className="faq-intro">If you do not see what you need here, join the community and speak with an admin.</p>
          </div>
          <div className="faq-list">
            {faqs.map((faq) => (
              <details className="faq-item" key={faq.question}>
                <summary>{faq.question}<ChevronDown size={18} strokeWidth={1.6} /></summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <div className="container banner-wrap">
        <WhatsAppBanner compact />
      </div>
    </main>
  );
}
