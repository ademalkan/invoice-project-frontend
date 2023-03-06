import { itemCalculateTotal } from "@/utils/helpers/helper";
import React from "react";

function Items({ items }) {
  return (
    <>
      <div className="flex justify-between p-3">
        <div>
          <h6 className="text-grey mb-3">Item Name</h6>
        </div>
        <div className="flex justify-between text-center w-3/6">
          <h6 className="text-grey mb-3">QTY.</h6>
          <h6 className="text-grey mb-3">Price</h6>
          <h6 className="text-grey mb-3">Total </h6>
        </div>
      </div>
      {items?.map((item) => (
        <div className="flex justify-between p-3">
          <div>
            <h6 className="font-bold mb-3">{item?.name}</h6>
          </div>
          <div className="flex justify-between text-center w-3/6">
            <h6 className="text-grey mb-3">{item?.qty}</h6>
            <h6 className="font-bold text-grey mb-3">£ {item?.qty}</h6>
            <h6 className="font-bold mb-3">£ {item?.total}</h6>
          </div>
        </div>
      ))}
      <div className="flex items-center justify-between p-8 rounded-b-md bg-dark-open text-light">
        <h6>Amount Due</h6>
        <h2 className="text-3xl">£ {itemCalculateTotal(items)}</h2>
      </div>
    </>
  );
}

export default Items;
