import { Link } from "wouter";
import { ArrowUpRight, BarChart3, Code2, ShieldCheck } from "lucide-react";

const iconMap = {
  code: Code2,
  data: BarChart3,
  shield: ShieldCheck,
};

export default function CourseCard({ course, compact = false }) {
  const Icon = iconMap[course.icon] || Code2;

  return (
    <article className={`course-card course-${course.theme} ${compact ? "course-card-compact" : ""}`}>
      <div className="course-card-topline">
        <span className="course-number">{course.number}</span>
        <Icon size={24} strokeWidth={1.5} aria-hidden="true" />
      </div>
      <p className="course-label">{course.label}</p>
      <h3>{course.title}</h3>
      <p className="course-description">{course.shortDescription}</p>
      <div className="course-card-footer">
        <span>{course.level}</span>
        <Link href={`/courses/${course.slug}`} className="text-link">
          View course <ArrowUpRight size={16} strokeWidth={1.7} />
        </Link>
      </div>
    </article>
  );
}
