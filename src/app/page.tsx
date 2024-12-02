import Container from "@/app/components/@shared/Container";
import Header from "@/app/components/@shared/Header/Header";
import Hero from "@/app/sections/Hero/Hero";
import About from "@/app/sections/About/About";

export default function Home() {
  return (
    <Container>
        <Header />
        <Hero />
        <div className={"my-[10%] w-full"}>
            <About />
        </div>

    </Container>
  );
}
