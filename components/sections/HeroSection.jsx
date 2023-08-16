import React from "react";
import withContainer from "../wrapper/Container";
import { AiFillGithub, AiFillHeart } from "react-icons/ai";
import Image from "next/image";
function HeroSection(props) {
  return (
    <section>
      <div className="flex">
        <div className="w-7/12">
          <div className="mt-10 ">
            <div className=" bg-slate-800 w-56 relative h-10 rounded-lg  ">
              <div className="absolute text-lg justify-start gap-2 font-semibold -top-1.5 -left-1 w-full h-full px-2 py-5 flex items-center bg-white border rounded-lg border-slate-800">
                <p>Simple but impactful</p>
                <Image
                  height={20}
                  width={20}
                  alt="tailwindlogo"
                  src={"/assets/fire.png"}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
          <div className="capitalize text-[2.9rem] mt-5 mb-3  font-extrabold text-slate-800">
            <h1>Free Neubrutalism</h1>
            <div className="flex gap-3">
              <h1>Components for tailwindcss</h1>
              <Image
                height={50}
                width={50}
                alt="tailwindlogo"
                src={"/assets/tailwindlogo.png"}
                className="object-contain"
              />
            </div>
          </div>
          <p className="text-slate-500 w-11/12 ">
            Tailwindbrutalism is a collection of free Tailwind CSS components
            that can be used in your next project. With a range of components,
            you can build your unique style for your website, enjoy your daily
            code development, chaww....
          </p>
          <div className="mt-10 flex gap-3 items-center ">
            <div className=" bg-slate-800 w-32 relative h-10 rounded-lg  ">
              <p className="absolute justify-center gap-3 text-lg font-bold hover:-top-0 transition-all duration-200 hover:bg-slate-400 hover:-left-0 -top-1 -left-1 w-full h-full p-2 flex items-center bg-slate-300 border w-53 rounded-lg border-slate-800">
                <AiFillGithub size={20} />
                Star
              </p>
            </div>
            <div className=" bg-slate-800 w-32 relative h-10 rounded-lg  ">
              <p className="absolute gap-3 font-bold justify-center hover:-top-0 transition-all duration-200 hover:bg-rose-400 hover:-left-0 -top-1 -left-1 w-full h-full p-2 flex items-center bg-rose-300 border w-53 rounded-lg border-slate-800">
                <AiFillHeart size={20} className="text-rose-500 " />
                Support
              </p>
            </div>
          </div>
        </div>
        <div className=""></div>
      </div>
    </section>
  );
}

export default withContainer(HeroSection, "bg-white", "hero");
