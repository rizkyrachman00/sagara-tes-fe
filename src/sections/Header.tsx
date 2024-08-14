// import SagaraLogo from "@/assets/sagara-logo.svg";
import SagaraLogo from "@/assets/sagara-logo.png";
import Image from "next/image";
import MenuIcon from "@/assets/menu.svg";

export const Header = () => {
  return (
    <header className="sticky top-0 backdrop-blur-md z-20">
      <div className="py-4">
        <div className="container max-w-full">
          <div className="flex justify-between items-center">
            <Image src={SagaraLogo} alt="sagara-logo" className="w-24 h-8" />
            <MenuIcon className="h-6 w-6 md:hidden" />
            <nav className="hidden md:flex gap-6 text-black/50 w-full justify-between md:ml-5">
              <div className="flex justify-center items-center gap-6">
                <a href="">IT CERTIFICATION</a>
                <a href="">
                  CAREERS<i className="bx bx-chevron-down"></i>
                </a>
                <a href="">FAQ</a>
              </div>
              <button className="bg-[#A51535] text-white px-9 py-2 rounded-[4px] font-medium inline-flex items-center justify-center tracking-tighter">
                SIGN IN
              </button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
