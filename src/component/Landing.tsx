import React from "react";

import person1 from "../images/75.jpg";
import insta from "../images/instagram.svg";
import framer from "../images/framer.svg";
import microsoft from "../images/microsoft.svg";
import huawei from "../images/huawei.svg";
import walmart from "../images/walmart.svg";

const Landing = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-[90px] relative gap-3">

      <div className="absolute top-70 -z-10 left-[50%] -translate-1/2 size-130 bg-green-300 blur-[100px] opacity-30"></div>

      {/* Profile + Stars */}
      <div className="flex gap-3">
        {/* Profile images */}
        <div className="flex -space-x-3 items-center">
          <img src={person1} alt="" className="size-8 rounded-full border border-white border-2" />
          <img src={person1} alt="" className="size-8 rounded-full border border-white border-2" />
          <img src={person1} alt="" className="size-8 rounded-full border border-white border-2" />
          <img src={person1} alt="" className="size-8 rounded-full border border-white border-2" />
          <img src={person1} alt="" className="size-8 rounded-full border border-white border-2" />
        </div>

        {/* Stars */}
        <div className="flex flex-col">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-star text-transparent fill-green-600"
                aria-hidden="true"
              >
                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
              </svg>
            ))}
          </div>
          <p className="text-[14px] text-gray-700">Used by 10,000+ users</p>
        </div>
      </div>

      {/* Heading */}
      <div className="text-center">
        <p className="text-[60px] font-bold">
          Land your dream job with <br />
          <span className="text-green-600">AI-powered</span> resumes.
        </p>
      </div>

      {/* Subheading */}
      <div className="text-center">
        <p className="text-4 font-semibold">
          Create, edit and download professional resumes with <br />
          AI-powered assistance.
        </p>
      </div>

      {/* Buttons */}
      <div className="flex gap-4">
        {/* Get Started */}
        <button className="bg-green-500 cursor-pointer hover:bg-green-600 flex gap-2 text-4 justify-center items-center text-white ring-offset-2 ring-1 ring-green-400 px-8 py-3 rounded-full transition-all">
          <span>Get started</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-arrow-right ml-1 size-4"
            aria-hidden="true"
          >
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
        </button>

        {/* Demo */}
        <button className="text-4 flex cursor-pointer gap-2 justify-center items-center text-gray-700 border border-gray-400 hover:bg-white px-8 py-3 rounded-full transition-all">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-video size-5"
            aria-hidden="true"
          >
            <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path>
            <rect x="2" y="6" width="14" height="12" rx="2"></rect>
          </svg>
          <span>Try demo</span>
        </button>
      </div>

      {/* Brand logos */}
      <div className=" flex flex-col gap-10 justify-center items-center py-17">
        <p className="text-[14px] text-gray-700">Trusting by leading brands, including</p>

        <div className="flex gap-[80px]">
          <img className="h-[24px]" src={insta} alt="" />
          <img className="h-[24px]" src={framer} alt="" />
          <img className="h-[24px]" src={microsoft} alt="" />
          <img className="h-[24px]" src={huawei} alt="" />
          <img className="h-[24px]" src={walmart} alt="" />
        </div>
      </div>

    </div>
  );
};

export default Landing;
