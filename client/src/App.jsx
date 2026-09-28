import { useEffect } from "react";
import { Route, Switch, useLocation } from "wouter";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import CourseDetail from "./pages/CourseDetail";
import Tutors from "./pages/Tutors";
import Signup from "./pages/Signup";
import Community from "./pages/Community";
import Legal from "./pages/Legal";
import NotFound from "./pages/NotFound";

function ScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [location]);

  return null;
}

function PrivacyPage() {
  return <Legal type="privacy" />;
}

function TermsPage() {
  return <Legal type="terms" />;
}

export default function App() {
  return (
    <div className="site-shell">
      <ScrollToTop />
      <SiteHeader />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/courses" component={Courses} />
        <Route path="/courses/:slug" component={CourseDetail} />
        <Route path="/tutors" component={Tutors} />
        <Route path="/signup" component={Signup} />
        <Route path="/community" component={Community} />
        <Route path="/privacy" component={PrivacyPage} />
        <Route path="/terms" component={TermsPage} />
        <Route component={NotFound} />
      </Switch>
      <SiteFooter />
    </div>
  );
}
