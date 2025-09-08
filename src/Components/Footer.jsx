import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";
import React from "react";

export default function Footer() {
  return (
    <div className="mt-5   ">
      <div className="grid grid-cols-1 lg:grid-cols-2  bg-[#F6F6F8]  lg:py-20">
        <div className=" flex justify-between ">
          <div className="md:max-w-80 w-full lg:max-w-full">
            <div>
              <p className="">Get in touch</p>
            </div>
            <div className="flex  pt-5">
              <MapPin className=" text-[#A5A5A5] h-10 w-auto" />
              <p className="text-[#A5A5A5]">
                6th Floor Makkah Tower, Adam Jee Road Opposite to Old Varan Bus
                Stop Saddar Rawalpindi, 46000
              </p>
            </div>
            <div className="flex  py-5">
              <Mail className="text-[#A5A5A5]" />
              <p className="text-[#A5A5A5]">care@metroshoes.com.pk</p>
            </div>
            <div>
              <p className="text-[#A5A5A5]">
                Office Timings 9:30 AM to 5:00 PM Mon To Fri
              </p>
              <p className="text-[#A5A5A5] py-5">
                Any Query Contact with Marketing Department Ext. 127 & 144
              </p>
            </div>
            <div className="flex gap-2">
              <Phone className="text-[#A5A5A5]" />
              <p className="text-[#A5A5A5]">051-5512055</p>
            </div>
            <div className="flex gap-3 py-5 text-[#A5A5A5]">
              <Facebook />
              <Twitter />
              <Instagram />
              <Linkedin />
              <Youtube />
            </div>
          </div>

          <div className="px-25  ">
            <p className="text-bold">Explore</p>
            <ul className="py-5 space-y-3 text-[#A5A5A5]">
              <li>Women</li>
              <li>Men</li>
              <li>Sale</li>
              <li>Bags</li>
              <li>Pret</li>
            </ul>
          </div>
        </div>

        {/* Right Section */}
        <div className=" flex justify-between lg:px-20">
          <div>
            <p className="text-bold">Useful Links</p>
            <ul className="py-5  space-y-3 text-[#A5A5A5]">
              <li>About us</li>
              <li>Contact us</li>
              <li>Search</li>
              <li>FAQs</li>
              <li>Terms & Condition</li>
              <li>Privacy Policy</li>
              <li>Return & Exchange</li>
              <li>Blogs</li>
              <li>Size Chart</li>
              <li>Outlet</li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <p className="font-bold">Newsletter Signup</p>
            <p className="py-5 text-[#A5A5A5]">Subscribe :)</p>
           
              <input type="Email"placeholder="Enter your email"className="rounded-full" />
              
            
          </div>
        </div>
      </div>
    </div>
  );
}
