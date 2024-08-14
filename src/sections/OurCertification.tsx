import LineHow from "@/assets/line-how.png";
import CodeCertification from "@/assets/code-certification.png";
import MenuCollapse from "@/assets/menu-collapse.png";
import LayerCertification from "@/assets/layer.png";
import PeopleCertification from "@/assets/people.png";
import Image from "next/image";

export const OurCertification = () => {
  return (
    <section>
      <div className="container py-5 px-5 max-w-full">
        <div className="text-3xl text-[#A51535] flex flex-col justify-center items-center text-center">
          <Image src={LineHow} alt="line-how" />
          <h2 className="font-normal pt-10">Empower Yourself with</h2>
          <h1 className="font-extrabold">Our Certification</h1>
        </div>
        <div className="flex justify-center items-center md:py-10">
          <div className="flex flex-col md:flex-row md:gap-6 -tracking-tighter">
            <button className="rounded-[4px] py-2 px-9 md:py-4 md:px-5 lg:py-4 lg:px-5 -tracking-tight font-medium btn-primary text-sm mt-5 lg:text-lg flex-1">
              FRONT END DEVELOPER
            </button>
            <button className="text-[#344054] rounded-[4px] py-2 px-9 lg:py-4 lg:px-5 -tracking-tight font-medium border border-[#D0D5DD] text-sm mt-5 lg:text-lg lg:w-96 flex-1">
              BACK END DEVELOPER
            </button>
            <button className="text-[#344054] rounded-[4px] py-2 px-9 lg:py-4 lg:px-5 -tracking-tight font-medium border border-[#D0D5DD] text-sm mt-5 lg:text-lg flex-1">
              QUALITY ASSURANCE
            </button>
            <button className="text-[#344054] rounded-[4px] py-2 px-9 lg:py-4 lg:px-5 -tracking-tight font-medium border border-[#D0D5DD] text-sm mt-5 lg:text-lg flex-1">
              UI/UX DESIGN
            </button>
          </div>
        </div>
        <div className="flex justify-center p-6 md:pl-20 md:gap-14 md:pr-24">
          <div className="md:mt-20 lg:mt-7 relative items-center rounded-2xl overflow-hidden h-full hidden md:block">
            <Image
              src={CodeCertification}
              alt="code-certification"
              className="rounded-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#A51535] to-transparent"></div>
          </div>
          <div className="py-8">
            <h1 className="font-extrabold text-[#A51535] text-3xl text-center md:text-left">
              Front End Certification
            </h1>
            <div className="py-8">
              <div className="flex gap-7 pb-6">
                <div className="w-16 flex items-center">
                  <span className="flex items-center justify-center w-14 h-14 bg-[#FBFBFB] rounded-full shadow-xl">
                    <Image
                      src={MenuCollapse}
                      alt="register-timeline"
                      className="object-cover"
                    />
                  </span>
                </div>
                <p>
                  This program equips you with the essential skills and
                  knowledge to create visually appealing websites or
                  applications.
                </p>
              </div>
              <div className="flex gap-7 pb-6">
                <div className="w-16 flex items-center">
                  <span className="flex items-center justify-center w-14 h-14 bg-[#FBFBFB] rounded-full shadow-xl">
                    <Image
                      src={LayerCertification}
                      alt="register-timeline"
                      className="object-cover"
                    />
                  </span>
                </div>
                <p>
                  Evaluates your proficiency in frontend programming languages
                  and other relevant frontend technologies.
                </p>
              </div>
              <div className="flex gap-7 pb-6">
                <div className="w-16 flex items-center">
                  <span className="flex items-center justify-center w-14 h-14 bg-[#FBFBFB] rounded-full shadow-xl">
                    <Image
                      src={PeopleCertification}
                      alt="register-timeline"
                      className="object-cover"
                    />
                  </span>
                </div>
                <p>
                  Gain recognition as a qualified frontend developer, enhance
                  your career prospects, and open doors to exciting job
                  opportunities.
                </p>
              </div>
              <div className="flex items-center justify-center">
                <button className="rounded-[4px] py-4 px-16 md:py-4 md:px-32 -tracking-tight font-medium btn-primary text-sm mt-5 lg:text-lg ">
                  Get Detail
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
