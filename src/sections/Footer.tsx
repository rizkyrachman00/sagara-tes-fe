import FooterLogo from "@/assets/footer-logo.png";
import FbIcon from "@/assets/fb-icon.png";
import TwitterIcon from "@/assets/twitter-icon.png";
import LinkedInIcon from "@/assets/linkin-icon.png";
import IgIcon from "@/assets/ig-icon.png";
import Telephone from "@/assets/telepone.png";
import Email from "@/assets/email.png";
import Location from "@/assets/location.png";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="bg-[#1C1C1C] text-white py-12 px-5">
      <div className="p-6 max-w-full md:flex md:gap-20 lg:gap-80 ">
        <div className="sm:mb-14 md:mb-0">
          <div className="w-full flex justify-center md:justify-start">
            <Image src={FooterLogo} alt="footer-logo" className="pb-7" />
          </div>
          <div className="w-56">
            <p className="text-sm">
              Plan, build, grow digital products. Continuously delivering
              impact.
            </p>
            <div className="flex gap-4 pt-3">
              <Image src={FbIcon} alt="fb-icon" />
              <Image src={TwitterIcon} alt="twitter-icon" />
              <Image src={LinkedInIcon} alt="Linked-icon" />
              <Image src={IgIcon} alt="ig-icon" />
            </div>
          </div>
        </div>

        <div className="container max-w-full grid grid-cols-1 md:grid-cols-3 gap-8  pl-0 pr-0 ">
          <div>
            <h4 className="font-bold text-lg mb-12">Pages</h4>
            <ul>
              <li className="pb-4">
                <a href="#" className="hover:underline">
                  IT Certification
                </a>
              </li>
              <li className="pb-4">
                <a href="#" className="hover:underline">
                  Careers
                </a>
              </li>
              <li className="pb-4">
                <a href="#" className="hover:underline">
                  FAQ
                </a>
              </li>
              <li className="pb-4">
                <a href="#" className="hover:underline">
                  Terms & Condition
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-12">Careers</h4>

            <ul>
              <li className="pb-4">
                <a href="#" className="hover:underline">
                  Front End Developer
                </a>
              </li>
              <li className="pb-4">
                <a href="#" className="hover:underline">
                  Back End Developer
                </a>
              </li>
              <li className="pb-4">
                <a href="#" className="hover:underline">
                  Quality Assurance
                </a>
              </li>
              <li className="pb-4">
                <a href="#" className="hover:underline">
                  UI/UX Design
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-12">Contact</h4>
            <div className="pb-4 flex justify-start items-center gap-2">
              <Image src={Telephone} alt="telepon" className="w-6 h-6" />
              <p>+62 856-4097-7356</p>
            </div>
            <div className="pb-4 flex justify-start items-center gap-2">
              <Image src={Email} alt="Email" className="w-6 h-6" />
              <p>consult@sagara.asia</p>
            </div>
            <div className="pb-4 flex justify-start items-center gap-2">
              <Image src={Location} alt="Location" className="w-6 h-6" />
              <p>South Jakarta and Bandung, Indonesia.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-16 flex justify-center items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © {new Date().getFullYear()} PT. Sagara Asia Teknologi
        </p>
      </div>
    </footer>
  );
};
