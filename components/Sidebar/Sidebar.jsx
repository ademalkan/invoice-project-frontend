import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { removeToken } from "@/utils/helpers/auth";

function Sidebar() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/invoice/dashboard");
  };

  function handleLogout() {
    removeToken();
    router.push("/");
  }
  return (
    <div className="bg-dark-open fixed z-40 flex items-center justify-between  lg:rounded-tr-3xl lg:rounded-br-3xl  w-screen lg:w-28 lg:h-screen lg:flex-col">
      <div
        onClick={handleClick}
        className="bg-purple-open hover:cursor-pointer w-1/4 h-20 lg:w-full lg:h-1/6 flex items-center rounded-tr-3xl rounded-br-3xl text-center justify-center"
      >
        <Image
          src="/starter-code/assets/logo.svg"
          alt="Loog"
          width={40}
          height={40}
        />
      </div>
      <div className="w-full lg:h-52 flex lg:flex-col items-center justify-end  lg:justify-between">
        <div className="lg:w-full mr-12 lg:mr-0 h-1/2 lg:border-b-stroke lg:border-b-2 flex items-center justify-center border-solid border-red-500">
          <Image
            src="/starter-code/assets/icon-moon.svg"
            alt="Loog"
            width={25}
            height={25}
            resizemode="cover"
          />
        </div>
        <div
          onClick={handleLogout}
          className="lg:w-full mr-4 hover:cursor-pointer lg:mr-4  h-1/2 flex items-center rounded-tr-3xl rounded-br-3xl text-center justify-center"
        >
          <Image
            src="/starter-code/assets/image-avatar.jpg"
            alt="Loog"
            width={40}
            height={40}
            resizemode="cover"
            className="rounded-full"
          />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
