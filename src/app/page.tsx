import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { AboutUs } from "@/sections/AboutUs";
import { WhySagara } from "@/sections/WhySagara";
import { HowSagara } from "@/sections/HowSagara";
import { OurCertification } from "@/sections/OurCertification";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <AboutUs />
      <WhySagara />
      <HowSagara />
      <OurCertification />
    </>
  );
}
