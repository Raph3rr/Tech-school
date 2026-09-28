import { useState } from "react";
import { ArrowUpRight, Check, MessageCircle } from "lucide-react";
import PageIntro from "../components/PageIntro";
import { courses, site } from "../data/site";

const initialForm = {
  name: "",
  email: "",
  whatsapp: "",
  course: "",
  experience: "",
  message: "",
};

export default function Signup() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle");

  function updateField(event) {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!form.name || !form.email || !form.whatsapp || !form.course) {
      setStatus("missing");
      return;
    }

    if (site.adminWhatsAppNumber) {
      const selected = courses.find((course) => course.slug === form.course);
      const message = [
        `Hello, my name is ${form.name}.`,
        `I am interested in the ${selected?.label || "course"} track.`,
        `Email: ${form.email}`,
        `WhatsApp: ${form.whatsapp}`,
        `Experience: ${form.experience || "Not specified"}`,
        form.message ? `Message: ${form.message}` : "",
      ].filter(Boolean).join("\n");
      window.open(`https://wa.me/${site.adminWhatsAppNumber}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
      setStatus("sent");
      return;
    }

    setStatus("not-connected");
  }

  return (
    <main>
      <PageIntro
        eyebrow="Sign up"
        title="Tell us what you want to learn."
        body="Send your details online, or join the general WhatsApp community and speak with an admin. Course payment and final enrolment are confirmed directly by the school."
        marker="Your next step"
      />

      <section className="section section-paper">
        <div className="container signup-grid">
          <div className="signup-aside">
            <p className="eyebrow">The process</p>
            <h2>Simple steps, clear conversations.</h2>
            <div className="signup-steps">
              <div><span>01</span><p>Share your details and choose a track.</p></div>
              <div><span>02</span><p>An admin follows up with course dates, payment, and next steps.</p></div>
              <div><span>03</span><p>Once payment is confirmed, you receive the right course-group information.</p></div>
            </div>
            <div className="signup-note">
              <MessageCircle size={20} strokeWidth={1.5} />
              <p>The general community is open to people who want to ask questions before deciding.</p>
            </div>
          </div>

          <form className="signup-form" onSubmit={handleSubmit} noValidate>
            <div className="form-heading">
              <p className="eyebrow">Interest form</p>
              <h2>Start the conversation</h2>
            </div>

            <div className="form-grid">
              <label>
                <span>Full name</span>
                <input name="name" value={form.name} onChange={updateField} placeholder="Your name" required />
              </label>
              <label>
                <span>Email address</span>
                <input name="email" type="email" value={form.email} onChange={updateField} placeholder="you@example.com" required />
              </label>
              <label>
                <span>WhatsApp number</span>
                <input name="whatsapp" type="tel" value={form.whatsapp} onChange={updateField} placeholder="Include your country code" required />
              </label>
              <label>
                <span>Choose a course</span>
                <select name="course" value={form.course} onChange={updateField} required>
                  <option value="">Select a track</option>
                  {courses.map((course) => <option key={course.slug} value={course.slug}>{course.label}</option>)}
                </select>
              </label>
              <label>
                <span>Current experience</span>
                <select name="experience" value={form.experience} onChange={updateField}>
                  <option value="">Choose one</option>
                  <option value="Starting from zero">Starting from zero</option>
                  <option value="Some self-study">Some self-study</option>
                  <option value="Already practising">Already practising</option>
                </select>
              </label>
              <label className="form-full">
                <span>What would you like us to know?</span>
                <textarea name="message" value={form.message} onChange={updateField} rows="5" placeholder="Tell us what you hope to learn or ask a question." />
              </label>
            </div>

            <div className="form-submit-row">
              <button className="button button-primary" type="submit">Send my details <ArrowUpRight size={17} strokeWidth={1.7} /></button>
              <p>We will only use these details to respond to your enquiry.</p>
            </div>

            {status === "missing" && <p className="form-status form-status-error">Please complete your name, email, WhatsApp number, and course choice.</p>}
            {status === "not-connected" && <p className="form-status">The form is ready, but the school contact details have not been connected yet. Add the official WhatsApp number in <code>client/src/data/site.js</code> before launch, or use the community page for now.</p>}
            {status === "sent" && <p className="form-status form-status-success"><Check size={17} strokeWidth={1.8} /> Your details are ready to send. The WhatsApp conversation has been opened in a new tab.</p>}
          </form>
        </div>
      </section>
    </main>
  );
}
