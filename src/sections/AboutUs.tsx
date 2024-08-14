import LineAbout from "@/assets/line-aboutUs.png";
import Image from "next/image";

export const AboutUs = () => {
  return (
    <section className="overflow-hidden">
      <div className="container py-20 md:flex md:gap-[10vw] max-w-full">
        <div className="flex flex-col justify-center items-center md:w-screen">
          <Image src={LineAbout} alt="garis" width={100} />
          <h1 className="font-semibold text-lg">ABOUT US</h1>
        </div>
        <div className="pt-12">
          <h2 className="font-semibold text-center md:text-left text-lg text-[#A51535] pb-4">
            SAGARA IT CERTIFICATION
          </h2>
          <p className=" font-semibold text-center md:text-left text-3xl bg-gradient-to-l from-[#A51535] to-black text-transparent bg-clip-text">
            <span className="text-[#A51535]">Join thousands</span> of
            professionals who have elevated their skills and carved out success
            in the technology industry. Start your journey to excellence with us
            today!
          </p>
          <p className="text-lg text-center md:text-left font-normal text-[#9E9E9E] pt-4">
            Boost your career prospects in the digital era with
            industry-recognized information technology certifications from
            Sagara IT Certification.
          </p>
        </div>
      </div>
    </section>
  );
};
