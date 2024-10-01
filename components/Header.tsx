import { FC } from "react";
import Image from "next/image";
import logo from "@/app/assets/images/logo.png";

const Header: FC = () => {
  return (
    <div className="bg-header p-6">
      <div className="bg-white w-24 h-8 flex items-center justify-center rounded-md">
        <Image src={logo} alt="company logo" priority />
      </div>
    </div>
  );
};

export default Header;
