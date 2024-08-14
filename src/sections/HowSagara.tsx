import LineHow from "@/assets/line-how.png";
import HowImage from "@/assets/image-how.png";
import RegisterTimeline from "@/assets/register-timeline.png";
import SelectTimeline from "@/assets/select-timeline.png";
import PaymentTimeline from "@/assets/pay-timeline.png";
import TestTimeline from "@/assets/test-timeline.png";
import CertificateTimeline from "@/assets/certificate-timeline.png";
import Image from "next/image";

export const HowSagara = () => {
  return (
    <section>
      <div className="container py-16 max-w-full">
        <div className="text-3xl text-[#A51535] flex flex-col justify-center items-center text-center">
          <Image src={LineHow} alt="line-how" />
          <h2 className="font-normal pt-10">How Sagara</h2>
          <h1 className="font-extrabold">IT-Certification Works</h1>
        </div>
        <div className="pt-11 md:flex md:gap-16 lg:gap-15">
          <div className="items-center justify-center md:w-full hidden md:block">
            <div className="flex items-center justify-center h-full">
              <Image src={HowImage} alt="how-image" />
            </div>
          </div>
          <div className="px-5">
            <ol className="relative border-l-2 border-dashed border-[#A51535]">
              <li className="mb-10 ms-6 relative">
                <span className="absolute flex items-center justify-center w-10 h-10 bg-white rounded-full -start-11">
                  <Image
                    src={RegisterTimeline}
                    alt="register-timeline"
                    className="object-cover"
                  />
                </span>
                <h3 className="flex items-center mb-1 text-lg font-bold gap-2">
                  <span className="text-[#A51535]">#1</span>Register Account
                </h3>
                <p className="mb-4 text-base font-normal text-[#9E9E9E]">
                  Begin your journey by creating an account on Sagara IT
                  Certification platform. Simply fill out the registration form
                  to get started.
                </p>
              </li>
              <li className="mb-10 ms-6 relative">
                <span className="absolute flex items-center justify-center w-10 h-10 bg-white rounded-full -start-11">
                  <Image
                    src={SelectTimeline}
                    alt="register-timeline"
                    className="object-cover"
                  />
                </span>
                <h3 className="flex items-center mb-1 text-lg font-bold gap-2">
                  <span className="text-[#A51535]">#2</span>Select the Type
                </h3>
                <p className="mb-4 text-base font-normal text-[#9E9E9E]">
                  Choose from a variety of IT certification options tailored to
                  your career goals and interests. Select the certification that
                  aligns with your expertise.
                </p>
              </li>
              <li className="mb-10 ms-6 relative">
                <span className="absolute flex items-center justify-center w-10 h-10 bg-white rounded-full -start-11">
                  <Image
                    src={PaymentTimeline}
                    alt="register-timeline"
                    className="object-cover"
                  />
                </span>
                <h3 className="flex items-center mb-1 text-lg font-bold gap-2">
                  <span className="text-[#A51535]">#3</span>Register and Pay
                </h3>
                <p className="mb-4 text-base font-normal text-[#9E9E9E]">
                  Enroll in your chosen certification program by completing the
                  registration process and making payment securely through our
                  platform.
                </p>
              </li>
              <li className="mb-10 ms-6 relative">
                <span className="absolute flex items-center justify-center w-10 h-10 bg-white rounded-full -start-11">
                  <Image
                    src={TestTimeline}
                    alt="register-timeline"
                    className="object-cover"
                  />
                </span>
                <h3 className="flex items-center mb-1 text-lg font-bold gap-2">
                  <span className="text-[#A51535]">#4</span>Take Test
                </h3>
                <p className="mb-4 text-base font-normal text-[#9E9E9E]">
                  Prepare for your certification exam and schedule a convenient
                  time to take the test online.
                </p>
              </li>
              <li className="mb-10 ms-6 relative">
                <span className="absolute flex items-center justify-center w-10 h-10 bg-white rounded-full -start-11">
                  <Image
                    src={CertificateTimeline}
                    alt="register-timeline"
                    className="object-cover"
                  />
                </span>
                <h3 className="flex items-center mb-1 text-lg font-bold gap-2">
                  <span className="text-[#A51535]">#5</span>Get the certificate
                </h3>
                <p className="mb-4 text-base font-normal text-[#9E9E9E]">
                  Upon successful completion of the exam, receive your
                  certification digitally, instantly validating your skills and
                  expertise in the chosen IT field.
                </p>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};
