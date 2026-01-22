import Articles from "../components/ui/new-articles-section";
import Contact from "../components/ui/contact-section";
import Hero from "../components/ui/hero-section";
import Services from "../components/ui/services-section";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Articles />
      <Contact />
    </>
  );
}
