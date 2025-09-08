import { Heart, LayoutGrid, Search, ShoppingCart, User } from "lucide-react";
import React from "react";
export default function BottomMenu() {
  return (
    <div className="lg:hidden fixed  left-0 right-0 bottom-0 z-50 bg-white shadow-md ">
      <div
        className="flex justify-between items-center
       max-w-160 mx-auto px-6 mb-5  gap-10"
      >
        <div className="flex flex-col items-center">
          <LayoutGrid />
          <p className="text-[11px] text-[#372222] font-bold
          ">Shop</p>
        </div>
        <div className="flex flex-col items-center">
          <Heart />
          <p className="text-[11px] font-bold text-[#372222]">Whislist</p>
        </div>
        <div className="flex flex-col items-center"> 
          <ShoppingCart />
          <p className="text-[11px] font-bold text-[#372222]" >Cart</p>
        </div >
        <div className="flex flex-col items-center">
          <User />
          <p className="text-[11px] font-bold text-[#372222]">Account</p>
        </div>
        <div >
          <Search />
          <p className="text-[11px] font-bold text-[#372222]">Search</p>
        </div>
      </div>
    </div>
  );
}
