import Container from "@/app/components/@shared/Container";
import Header from "@/app/components/@shared/Header/Header";
import Hero from "@/app/sections/Hero/Hero";
import About from "@/app/sections/About/About";
import Services from "@/app/sections/Services/Services";
import Collaborators from "@/app/sections/Collaborators/Collaborators";
import Artists from "@/app/sections/Artists/Artists";
import Footer from "@/app/sections/Footer/Footer";
import FooterBottom from "@/app/sections/Footer/FooterBottom/FooterBottom";

export default function Home() {
  return (
    <Container>
      <Header />
      <Hero />
      <About />
      <Services />
      <Collaborators />
      <div className="mt-[10%]">
        <Artists />
      </div>
      <Footer />
      <div className={" w-full"}>
        <FooterBottom />
      </div>
    </Container>
  );
}
