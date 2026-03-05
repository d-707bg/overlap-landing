import Hero from "@/components/Hero";
import Benefits from "@/components/benefits/Benefits";
import Container from "@/components/Container";
// import Section from "@/components/Section";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      {/*<Logos />*/}
      <Container className="py-20">
        <Benefits />

        {/*  Testimonials section */}
        {/*<Section*/}
        {/*  id="testimonials"*/}
        {/*  title="What Our Clients Say"*/}
        {/*  description="Hear from those who have partnered with us."*/}
        {/*>*/}
        {/*  <Testimonials />*/}
        {/*</Section>*/}

        <FAQ />

        {/*  Statistics section*/}
        {/*<Stats />*/}

        <CTA />
      </Container>
    </>
  );
};

export default HomePage;
