
import Link from "next/link";

import {SiGithub, SiInstagram, SiLinkedin} from "react-icons/si";
import {TbMail} from "react-icons/tb";
import {GoLocation, GoOrganization} from "react-icons/go";

export const Footer = () => {
  return (
    <footer
      id="footer"
      className="pt-20 w-full flex flex-col justify-center items-center "
    >
      <div className="w-5/6 md:max-w-[100rem] flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <h1 className="text-accent font-bold text-5xl md:text-7xl">
            Derryl Odja
          </h1>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex flex-row gap-10">
            <div className="flex flex-row gap-2 items-center">
              <GoLocation color="#6BE7F1" />
              <p className="text-myWhite text-xs sm:text-base">Indonesia</p>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <GoOrganization color="#6BE7F1" />
              <p className="text-myWhite text-xs sm:text-base">
                Bina Nusantara University
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <TbMail color="#6BE7F1" />
            <p className="text-myWhite text-xs sm:text-base">
              derrylzodxyt@gmail.com
            </p>
          </div>
        </div>
      </div>
      <section id="Socials" className="py-4 mt-4">
        <div className="flex flex-row justify-center items-center gap-10">
          <Link
            target="_blank"
            href="https://github.com/kderrylo"
            className="p-3 rounded-full transition-colors duration-200 hover:bg-slate-800 active:scale-95 focus:outline focus:outline-2 focus:outline-myBlue1 focus:outline-offset-2"
          >
            <SiGithub color="#6BE7F1" size={25} />
          </Link>
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/kasimirus-derryl-odja-0a7bb1264/"
            className="p-3 rounded-full transition-colors duration-200 hover:bg-slate-800 active:scale-95 focus:outline focus:outline-2 focus:outline-myBlue1 focus:outline-offset-2"
          >
            <SiLinkedin color="#6BE7F1" size={25} />
          </Link>
          <Link
            target="_blank"
            href="https://www.instagram.com/derrylodja/"
            className="p-3 rounded-full transition-colors duration-200 hover:bg-slate-800 active:scale-95 focus:outline focus:outline-2 focus:outline-myBlue1 focus:outline-offset-2"
          >
            <SiInstagram color="#6BE7F1" size={25} />
          </Link>
        </div>
      </section>
    </footer>
  );
};
