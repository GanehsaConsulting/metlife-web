import AnimateOnScroll from "@/components/animate-on-scroll";
import { AboutUs } from "@/components/about-us";
import { Banner } from "@/components/banner";
import { ContactSection } from "@/components/contact";
import { ServicesCarousel } from "@/components/services";
import { VisionMission } from "@/components/vm";
import { WhyUs } from "@/components/why-us";

export default function Home() {
  return (
    <>
      <AnimateOnScroll once={false} animation="blurInUp" duration={0.5} delay={0}>
        <Banner />
      </AnimateOnScroll>
      <AnimateOnScroll once={false} animation="blurInUp" duration={0.5} delay={0}>
        <AboutUs />
      </AnimateOnScroll>
      <AnimateOnScroll once={false} animation="blurInUp" duration={0.5} delay={0}>
        <VisionMission />
      </AnimateOnScroll>
      <AnimateOnScroll once={false} animation="blurInUp" duration={0.5} delay={0}>
        <WhyUs />
      </AnimateOnScroll>
      <AnimateOnScroll once={false} animation="blurInUp" duration={0.5} delay={0}>
        <ServicesCarousel />
      </AnimateOnScroll>
      <AnimateOnScroll once={false} animation="blurInUp" duration={0.5} delay={0}>
        <ContactSection />
      </AnimateOnScroll>
    </>
  );
}
