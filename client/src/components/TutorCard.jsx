import { Link } from "wouter";
import { ArrowUpRight } from "lucide-react";

export default function TutorCard({ tutor }) {
  return (
    <article className={`tutor-card tutor-${tutor.theme}`}>
      <div className="tutor-avatar" aria-hidden="true">{tutor.initials}</div>
      <div className="tutor-card-content">
        <p className="course-label">{tutor.discipline}</p>
        <h3>{tutor.title}</h3>
        <p>{tutor.description}</p>
        <Link href="/tutors" className="text-link">
          Meet the team <ArrowUpRight size={16} strokeWidth={1.7} />
        </Link>
      </div>
    </article>
  );
}
