import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

function Sidebar() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/invoice/dashboard");
  };
  return (
    <div className="bg-dark-open fixed z-40 flex items-center justify-between flex-col rounded-tr-3xl rounded-br-3xl w-28 h-screen">
      <div
        onClick={handleClick}
        className="bg-purple-open hover:cursor-pointer w-full h-1/6 flex items-center rounded-tr-3xl rounded-br-3xl text-center justify-center"
      >
        <Image
          src="/starter-code/assets/logo.svg"
          alt="Loog"
          width={40}
          height={40}
        />
      </div>
      <div className="w-full h-52 flex flex-col items-center justify-between">
        <div className="w-full h-1/2 border-b-stroke border-b-2 flex items-center justify-center border-solid border-red-500">
          <Image
            src="/starter-code/assets/icon-moon.svg"
            alt="Loog"
            width={25}
            height={25}
            resizemode="cover"
          />
        </div>
        <div className="w-full  h-1/2 flex items-center rounded-tr-3xl rounded-br-3xl text-center justify-center">
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
