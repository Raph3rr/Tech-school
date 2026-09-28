import { Link } from "wouter";
import { ArrowUpRight } from "lucide-react";

export default function NotFound() {
  return (
    <main className="not-found-page">
      <div className="container not-found-inner">
        <p className="eyebrow">404</p>
        <h1>That page is not part of the route.</h1>
        <p>Use the main navigation to find the courses, tutors, community, or sign-up page.</p>
        <Link href="/" className="button button-primary">Back to the home page <ArrowUpRight size={17} strokeWidth={1.7} /></Link>
      </div>
    </main>
  );
}
