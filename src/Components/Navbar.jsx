import {
  Cross,
  Heart,
  Menu,
  Plus,
  Search,
  ShoppingCart,
  User,
  X,
} from "lucide-react";
import React, { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  
  function toggleSidebar() {
    setIsOpen(!isOpen);
  }
  return (
    <div className=" relative ">
      <div
        className={`w-screen  absolute  top-0 left-0 z-50  lg:hidden ${
          isOpen ? "" : "hidden"
        }`}
      >
        <Sidebar toggleSidebar={toggleSidebar} />
      </div>
      <div className=" md:hidden"></div>
      <div className="md:hidden  ">
        <MobileNavbar toggleSidebar={toggleSidebar} />
      </div>
      <div className="hidden md:block lg:hidden">
        <TabNavbar toggleSidebar={toggleSidebar}  />
      </div>
      <div className="hidden lg:block">
        <LaptopNavbar />
      </div>
    </div>
  );
}

const data = [
  { title: "Luxe Editon", dropdown: false },
  { title: "Sale", dropdown: false },
  { title: "New In", dropdown: false },
  { title: "Women", dropdown: true },
  { title: "Men", dropdown: true },
  { title: "Bag", dropdown: true },
  { title: "Outlets", dropdown: false },
];

function LaptopNavbar() {
  return (
     <div className="fixed top-0 left-0 right-0 z-10 bg-white shadow-md">

    <div className="  w-full max-w-7xl mx-auto flex justify-between items-center  ">
      <div >
        <img src="Metro.1.avif" />
      </div>
      <div className="">
        <ul className="flex gap-4">
          {data.map((item, index) => (
            <div
            key={index}
            className={` hover:text-gray-600 font-bold cursor-pointer ${
              item.title === "Sale" ? "text-red-500" : "text-black"
            }`}
            >
              {item.title}
            </div>
          ))}
        </ul>
      </div>
      <div className="flex gap-4 ">
        <Heart className="cursor-pointer" />
        <Search className="cursor-pointer" />
        <ShoppingCart className="cursor-pointer" />
        <User className="cursor-pointer" />
      </div>
    </div>
</div>
  );
}
function TabNavbar({toggleSidebar}) {
  return (
    
    <div  className="fixed top-0 left-0 right-0 z-10 bg-white shadow-md">

    <div className=" grid grid-cols-3 items-center px-8">
      <Menu onClick={toggleSidebar}/>
      <div>
        <img src="Metro.1.avif" />{" "}
      </div>
      <div className=" items-center justify-end flex gap-3">
        <Heart className="cursor-pointer" />
        <Search className="cursor-pointer" />
        <ShoppingCart className="cursor-pointer" />
        <User className="cursor-pointer" />
      </div>
    </div>
    </div>
  );
}

function MobileNavbar({ toggleSidebar }) {
  return (
    <div className="fixed top-0 left-0 right-0 z-10 bg-white shadow-md">

    <div className="grid grid-cols-3 items-center px-5">
      <Menu onClick={toggleSidebar} />
      <div>
        <img src="Metro.1.avif" />{" "}
      </div>
      <div className=" items-center justify-end flex gap-3">
        <Search className="cursor-pointer" />
        <ShoppingCart className="cursor-pointer" />
      </div>
    </div>
    </div>
  );
}

function Sidebar({ toggleSidebar }) {
  return (
    <div className=" w-[80%] h-screen bg-white z-60  ">
      <div className="">
        <div className=" flex justify-between items-center border-b  border-gray-400">
          <p className="p-4 font-bold">Menu</p>
          <div className="translate-x-16 >">
            <X className=" h-[30px] w-[30px] bg-black text-white " onClick={toggleSidebar} />
          </div>
        </div>

        {data.map((item, index) => (
          <div key={index} className="">
            <div
              className={`border-b py-1 flex justify-between  hover:bg-gray-100 h-full border-gray-400 bg-white ${
                item.title === "" ? "" : "text-black"
              }`}
            >
              <div className=" px-2 py-3">{item.title}</div>
              {item.dropdown && (
                <div className="  border-l h-ful aspect-square flex justify-center item-center flex-col px-4  border-gray-400 ">
                  <Plus className="h-4 w-4" />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="flex gap-3 items-center border-b border-gray-400 py-4 px-2">
        <div>
          <Heart />
        </div>
        <div>
          <p>Whislist</p>
        </div>
      </div>
      <div className="flex gap-3 items-center border-b border-gray-400 py-4 px-2">
        <div>
          <User />
        </div>
        <div>
          <p>Login/Register</p>
        </div>
      </div>
    </div>
  );
}
