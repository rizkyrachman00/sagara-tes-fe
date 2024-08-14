import SagaraTalk from "@/assets/why-sagara.png";
import ShieldBoost from "@/assets/boost.svg";
import Career from "@/assets/career.svg";
import Expertise from "@/assets/expertise.svg";
import Image from "next/image";

export const WhySagara = () => {
  return (
    <section className="py-5 px-5">
      <div className="container flex gap-10 max-w-full">
        <div className="w-[85vw]">
          <h1 className="font-extrabold text-[#A51535] text-3xl text-center md:text-left">
            WHY SAGARA IT CERTIFICATION?
          </h1>
          <div>
            <div className="flex gap-[10vw] md:gap-8 pt-9 md:pt-7">
              <div>
                <ShieldBoost />
              </div>
              <div>
                <h2 className="font-bold text-[#A51535]">
                  Global Credibility Boost
                </h2>
                <p className="font-normal">
                  Our certifications are globally recognized, enhancing your
                  credibility, and opening doors to new opportunities.
                </p>
              </div>
            </div>
            <div className="flex gap-[10vw] md:gap-8 pt-9 md:pt-7">
              <div>
                <Career />
              </div>
              <div>
                <h2 className="font-bold text-[#A51535]">Empowering Careers</h2>
                <p className="font-normal">
                  Equipped to advance your career, secure promotions, and pursue
                  new job opportunities in the ever-evolving tech industry.{" "}
                </p>
              </div>
            </div>
            <div className="flex gap-[10vw] md:gap-8 pt-9 md:pt-7">
              <div>
                <Expertise />
              </div>
              <div>
                <h2 className="font-bold text-[#A51535]">
                  Expertise Validation
                </h2>
                <p className="font-normal">
                  Showcase your expertise and validate your skills with globally
                  recognized certifications that employers trust.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="items-center justify-center w-full lg:w-full hidden md:block">
          <div className="flex items-center justify-center h-full">
            <Image src={SagaraTalk} alt="sagara-talk" />
          </div>
        </div>
      </div>
    </section>
  );
};
