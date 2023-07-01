import React from "react";
import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsClipboardData, BsBriefcase, BsChatSquare } from "react-icons/bs";
import { Link } from "react-scroll";

const Nav = () => {
  return (
    <nav className="fixed bottom-2 z-50 w-full overflow-hidden lg:bottom-8">
      <div className=" container mx-auto ">
        {/* nav inner */}
        <div className="mx-auto flex h-[96px]  w-full max-w-[460px] items-center justify-between rounded-full bg-black/20 px-5 text-2xl text-white/50 backdrop:blur-xl">
          <Link className="flex h-[60px] w-[60px] cursor-pointer items-center justify-center">
            <BiHomeAlt />
          </Link>
          <Link className="flex h-[60px] w-[60px] cursor-pointer items-center justify-center">
            <BiUser />
          </Link>
          <Link className="flex h-[60px] w-[60px] cursor-pointer items-center justify-center">
            <BsClipboardData />
          </Link>
          <Link className="flex h-[60px] w-[60px] cursor-pointer items-center justify-center">
            <BsBriefcase />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
