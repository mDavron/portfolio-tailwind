import React from "react";
import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsClipboardData, BsBriefcase, BsChatSquareText } from "react-icons/bs";
import { Link } from "react-scroll";

const Nav = () => {
  return (
    <nav className="fixed bottom-2 z-50 w-full overflow-hidden lg:bottom-8">
      <div className=" container mx-auto ">
        {/* nav inner */}
        <div className="mx-auto flex h-[96px]  w-full max-w-[460px] items-center justify-between rounded-full bg-black/20 px-5 text-2xl text-white/50 backdrop:blur-xl">
          <Link
            activeClass="active"
            smooth={true}
            spy={true}
            to="home"
            offset={-200}
            className="flex h-[60px] w-[60px] cursor-pointer items-center justify-center"
          >
            <BiHomeAlt />
          </Link>
          <Link
            activeClass="active"
            smooth={true}
            spy={true}
            to="about"
            className="flex h-[60px] w-[60px] cursor-pointer items-center justify-center"
          >
            <BiUser />
          </Link>
          <Link
            activeClass="active"
            smooth={true}
            spy={true}
            to="services"
            className="flex h-[60px] w-[60px] cursor-pointer items-center justify-center"
          >
            <BsClipboardData />
          </Link>
          <Link
            activeClass="active"
            smooth={true}
            spy={true}
            to="work"
            className="flex h-[60px] w-[60px] cursor-pointer items-center justify-center"
          >
            <BsBriefcase />
          </Link>
          <Link
            activeClass="active"
            smooth={true}
            spy={true}
            to="contact"
            className="flex h-[60px] w-[60px] cursor-pointer items-center justify-center"
          >
            <BsChatSquareText />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
