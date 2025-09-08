import { Heart, LayoutGrid, Search, ShoppingCart, User } from "lucide-react";
import React from "react";
export default function BottomMenu() {
  return (
    <div>
      <div
        className="flex justify-between items-center
       max-w-160 mx-auto   gap-10"
      >
        <div className="flex flex-col items-center">
          <LayoutGrid />
          <p className="text-[11px]">Shop</p>
        </div>
        <div className="flex flex-col items-center">
          <Heart />
          <p className="text-[11px] font-bold">Whislist</p>
        </div>
        <div className="flex flex-col items-center"> 
          <ShoppingCart />
          <p className="text-[11px] font-bold" >Cart</p>
        </div >
        <div className="flex flex-col items-center">
          <User />
          <p className="text-[11px] font-bold">Account</p>
        </div>
        <div className="flex flex-col items-center">
          <Search />
          <p className="text-[11px] font-bold text-[#372222]">Search</p>
        </div>
      </div>
    </div>
  );
}
