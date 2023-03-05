import Image from "next/image";
import React from "react";

function NoContent() {
  return (
    <div className="p-20  flex flex-col items-center justify-center">
      <Image
        src="/starter-code/assets/illustration-empty.svg"
        alt="Loog"
        width={300}
        height={240}
      />{" "}
      <h1 className="font-bold text-2xl mt-6 mb-2">There is nothing here</h1>
      <h6 className="text-grey mb-1">Create an invoice by clicking the</h6>
      <h6 className="text-grey">
        <span className="font-bold">New Invoice</span> button and get started
      </h6>
    </div>
  );
}

export default NoContent;
