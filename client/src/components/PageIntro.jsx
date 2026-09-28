export default function PageIntro({ eyebrow, title, body, marker }) {
  return (
    <section className="page-intro">
      <div className="container page-intro-grid">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
        </div>
        <div className="page-intro-side">
          {marker && <span className="page-intro-marker">{marker}</span>}
          <p>{body}</p>
        </div>
      </div>
    </section>
  );
}
