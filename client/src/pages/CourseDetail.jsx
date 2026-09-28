import { Link, useRoute } from "wouter";
import { ArrowLeft, ArrowUpRight, BarChart3, Check, Code2, ShieldCheck } from "lucide-react";
import PageIntro from "../components/PageIntro";
import { courses } from "../data/site";

const iconMap = {
  code: Code2,
  data: BarChart3,
  shield: ShieldCheck,
};

export default function CourseDetail() {
  const [, params] = useRoute("/courses/:slug");
  const course = courses.find((item) => item.slug === params?.slug);

  if (!course) {
    return (
      <main className="not-found-page">
        <div className="container not-found-inner">
          <p className="eyebrow">Course not found</p>
          <h1>That course page is not available.</h1>
          <Link href="/courses" className="button button-primary">Back to courses <ArrowUpRight size={17} strokeWidth={1.7} /></Link>
        </div>
      </main>
    );
  }

  const Icon = iconMap[course.icon] || Code2;

  return (
    <main>
      <PageIntro eyebrow={course.label} title={course.title} body={course.description} marker={`Track ${course.number}`} />

      <section className={`section section-paper course-detail-${course.theme}`}>
        <div className="container course-detail-grid">
          <div className="course-detail-aside">
            <div className="detail-icon"><Icon size={42} strokeWidth={1.35} /></div>
            <p className="eyebrow">Course at a glance</p>
            <div className="detail-meta">
              <div><span>Format</span><strong>{course.format}</strong></div>
              <div><span>Level</span><strong>{course.level}</strong></div>
            </div>
            <Link href="/signup" className="button button-primary">Ask about this course <ArrowUpRight size={17} strokeWidth={1.7} /></Link>
          </div>

          <div className="course-detail-main">
            <div className="detail-section">
              <p className="eyebrow">What you will work through</p>
              <h2>A route you can see from the beginning.</h2>
              <div className="module-list">
                {course.modules.map((module, index) => (
                  <div className="module-row" key={module}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <strong>{module}</strong>
                  </div>
                ))}
              </div>
            </div>

            <div className="detail-lower-grid">
              <div className="detail-section">
                <p className="eyebrow">Tools and ideas</p>
                <div className="tool-list">
                  {course.tools.map((tool) => <span className="tool-item" key={tool}>{tool}</span>)}
                </div>
              </div>
              <div className="detail-outcome">
                <p className="eyebrow">By the end</p>
                <p>{course.outcome}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-ink course-detail-close">
        <div className="container course-close-grid">
          <div>
            <p className="eyebrow eyebrow-light">Interested in {course.label}?</p>
            <h2>Speak with an admin or send your details online.</h2>
          </div>
          <div className="course-close-actions">
            <Link href="/signup" className="button button-light">Open the sign-up page <ArrowUpRight size={17} strokeWidth={1.7} /></Link>
            <Link href="/courses" className="text-link text-link-light"><ArrowLeft size={16} strokeWidth={1.7} /> All courses</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
