import Articles from "./articles";
import Contact from "./contact";
import Hero from "./hero";
import Services from "./services";

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
