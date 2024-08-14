import bgHero from "@/assets/bg-hero.png";
import Image from "next/image";

export const Hero = () => {
  return (
    <section
      style={{ backgroundImage: `url(${bgHero.src})` }}
      className="bg-cover bg-center bg-no-repeat py-5 md:py-12 lg:py-[200px] overflow-x-clip"
      // bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#A51535,#ffffff_66%)]
    >
      <div className="container py-7 pr-[20vw] md:pr-[40vw] lg:pr-[40vw] max-w-fit">
        <div className="text-white items-center">
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-semibold tracking-tighter">
            Live <span className="font-black">Your Best</span> Life
          </h1>
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-semibold tracking-tighter ">
            Using <span className="font-black">Your Strengths</span>
          </h1>
          <p className="text-sm pr-14 tracking-tight mt-4 lg:text-3xl">
            Meet some of the people who have completed the Sagara Technology and
            use their results to maximize their potential at work and everywhere
            else.
          </p>
          <button className="btn btn-primary text-sm mt-[44px] lg:text-2xl">
            Get Certification
          </button>
        </div>
      </div>
    </section>
  );
};
