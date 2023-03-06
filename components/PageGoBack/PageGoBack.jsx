import Link from "next/link";
import React from "react";
import { BsChevronLeft } from "react-icons/bs";

function PageGoBack() {
  return (
    <div className="flex my-8 items-center w-full">
      <h6>
        <Link className="flex font-bold" href={"/invoice/dashboard"}>
          <span className="mr-4 font-extrabold text-purple">
            <BsChevronLeft />
          </span>{" "}
          Go Back
        </Link>
      </h6>
    </div>
  );
}

export default PageGoBack;
