import Container from "@/components/ui/container";
import Articles from "@/components/ui/new-articles-section";

export const metadata = {
  title: "404 - Artikel ikke fundet",
  description: "Den ønskede artikel kunne ikke findes.",
};

export default function NotFound() {

  return (
    <>
      <Container className="text-center p-8">
        <h1>Ups. Her var tomt.</h1>
        <p>Det her link førte ikke til en artikel - kun til denne besked.</p>
        <p>Det kan ske for selv de bedste URL'er. Lad os finde noget bedre at læse.</p>
      </Container>
      <Articles />
    </>
  );
}