import React, { useState } from "react";
export default function Card() {
  const carddata = [
    {
      title: "Heels For Women 10650976",
      OldPrice: "RS8,912",
      DiscountPrice: "Rs6,912",
      Banner: "Cards/1.1.webp",
      img1: "Cards/1.2.webp",
      img2: "Cards/1.3.webp",
      img3: "Cards/1.4.webp",
    },
    {
      title: "Wedges For Women 10350841",
      OldPrice: "RS8,912",
      DiscountPrice: "Rs6,912",
      Banner: "Cards/2.1.webp",
      img1: "Cards/2.2.webp",
      img2: "Cards/2.3.webp",
      img3: "Cards/2.4.webp",
    },
    {
      title: "Heels For Women 10350841",
      OldPrice: "RS9,912",
      DiscountPrice: "Rs7,912",
      Banner: "Cards/3.1.webp",
      img1: "Cards/3.2.webp",
      img2: "Cards/3.3.webp",
      img3: "Cards/3.4.webp",
    },
    {
      title: "Wedges For Women 10350841",
      OldPrice: "RS7,912",
      DiscountPrice: "Rs6,912",
      Banner: "Cards/4.1.webp",
      img1: "Cards/4.2.webp",
      img2: "Cards/4.3.webp",
      img3: "Cards/4.4.webp",
    },

    {
      title: "Heels For Women 10650977",
      OldPrice: "RS8,912",
      DiscountPrice: "Rs6,912",
      Banner: "Cards/5.1.webp",
      img1: "Cards/5.2.webp",
      img2: "Cards/5.3.webp",
      img3: "Cards/5.4.webp",
    },
    {
      title: "Wedges For Women 10350841",
      OldPrice: "RS8,912",
      DiscountPrice: "Rs6,912",
      Banner: "Cards/6.1.webp",
      img1: "Cards/6.2.webp",
      img2: "Cards/6.3.webp",
      img3: "Cards/6.4.webp",
    },
    {
      title: "Wedges For Women 10350841",
      OldPrice: "RS8,912",
      DiscountPrice: "Rs6,912",
      Banner: "Cards/7.1.webp",
      img1: "Cards/7.2.webp",
      img2: "Cards/7.3.webp",
      img3: "Cards/7.4.webp",
     
    },
    {
      title: "Wedges For Women 10350841",
      OldPrice: "RS8,912",
      DiscountPrice: "Rs6,912",
      Banner: "Cards/8.1.webp",
      img1: "Cards/8.2.webp",
      img2: "Cards/8.3.webp",
      img3: "Cards/8.4.webp",
    },
    {
      title: "Wedges For Women 10350841",
      OldPrice: "RS8,912",
      DiscountPrice: "Rs6,912",
      Banner: "Cards/9.1.webp",
      img1: "Cards/9.2.webp",
      img2: "Cards/9.3.webp",
    },
    {
      title: "Wedges For Women 10350841",
      OldPrice: "RS8,912",
      DiscountPrice: "Rs6,912",
      Banner: "Cards/10.1.webp",
      img1: "Cards/10.2.webp",
      img2: "Cards/10.3.webp",
      img3: "Cards/10.4.webp",
    },
    {
      title: "Wedges For Women 10350841",
      OldPrice: "RS8,912",
      DiscountPrice: "Rs6,912",
      Banner: "Cards/11.1.webp",
      img1: "Cards/11.2.webp",
      img2: "Cards/11.3.webp",
      img3: "Cards/11.4.webp",
    },
    {
      title: "Wedges For Women 10350841",
      OldPrice: "RS8,912",
      DiscountPrice: "Rs6,912",
      Banner: "Cards/12.1.webp",
      img1: "Cards/12.2.webp",
      img2: "Cards/12.3.webp",
      img3: "Cards/12.4.webp",
      img4: "Cards/12.5.webp",
    },
  ];

  return (
    <>
      <div className="mt-10 py-5 px-5 md:pd-10">
        <div className="grid grid-cols-1  lg:grid-cols-2 gap-6">
          {carddata.map((item, index) => (
            <CardDesign items={item} index={index} />
          ))}
        </div>
      </div>
    </>
  );
}

function CardDesign({items, index}) {
  console.log("items is ", items.title)
  const [Tab, SetTab] = useState(0);
key={index}
  return (
    <div key={index} className=" flex justify-between ">
      <div className="">
        <div className="overflow-hidden ">
          <img
            title="{Tab===0?items.img1:items.img2}"
            src={Tab === 0 ? items.img1 : Tab === 1 ? items.img2 : items.img3}
            className=" transform transition-transform hover:scale-105"
          />
        </div>
        <div>
          <p className="font-bold text-[13px]">{items.title}</p>
        </div>
        <div className="flex items-center gap-3">
          <p className="text-gray-500 line-through text-[13px] ">
            {items.OldPrice}
          </p>

          <p className="text-red-600  text-[15px]">{items.DiscountPrice}</p>
        </div>
        <div className="flex justify-start items-center  gap-3">
          <div className=" h-8 w-8">
            <img
              src={items.img1}
              className="border rounded-md  border-gray-400"
              onClick={() => {
                SetTab(0);
              }}
            />
          </div>
          <div className=" h-8 w-8">
            <img
              src={items.img2}
              className="border rounded-md border-gray-400"
              onClick={() => {
                SetTab(1);
              }}
            />
          </div>
          <div className="  h-8 w-8">
            {" "}
            <img
              src={items.img3}
              className="border rounded-md border-gray-400"
              onClick={() => {
                SetTab(2);
              }}
            />
          </div>
        </div>
      </div>
      <div className=" h-auto w-120 rounded-lg  ">
        <img
          src={items.Banner}
          className="rounded-lg transform transition-transform hover:scale-110"
        />
      </div>
    </div>
  );
}
