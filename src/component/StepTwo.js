import React from "react";
import { useNavigate } from "react-router-dom";
import "@fontsource/poppins";
import "@fontsource/dm-sans";

const StepTwo = () => {
  const handleClick = (event) => {
    // 👇️ toggle styles on click
    if (event.currentTarget.style.backgroundColor) {
      event.currentTarget.style.backgroundColor = null;
      event.currentTarget.style.color = null;
    } else {
      event.currentTarget.style.backgroundColor = "#E9520B";
      event.currentTarget.style.color = "white";
    }

    // 👇️ toggle class on click
    event.currentTarget.classList.toggle("my-class-1", "my-class-2");
  };
  const navigate = useNavigate();

  const Demo = () => {
    navigate("/Demo");
  };

  const StepThree = () => {
    navigate("/StepThree");
  };
  return (
    <div className="md:px-80 py-20 flex flex-col gap-10 lg:gap-10">
      <div className="flex flex-row justify-center md:justify-start">
        <div className="rounded-full border border-[#E9520B] w-[50px] h-[50px]">
          <p className="py-2 text-center text-2xl text-[#E9520B] font-[dm-sans]">
            1
          </p>
        </div>
        <div className="border border-[#DADADA] w-[200px] h-0 my-6"></div>
        <div className="rounded-full border border-[#E9520B] bg-[#E9520B] w-[50px] h-[50px]">
          <p className="py-2 text-center text-2xl text-[#FFFFFF] font-[dm-sans]">
            2
          </p>
        </div>
        <div className="border border-[#DADADA] w-[200px] h-0 my-6"></div>
        <div className="rounded-full border border-[#C4C4C4] w-[50px] h-[50px]">
          <p className="py-2 text-center text-2xl text-[#C4C4C4] font-[dm-sans]">
            3
          </p>
        </div>
      </div>
      <div className="flex flex-col w-full gap-8 text-[#414141]">
        <h1 className="font-bold text-2xl lg:text-3xl lg:leading-[4.5rem] text-center lg:text-left">
          <span className="font-normal"></span> What do you want to create
        </h1>
        <p className="text-center text-sm lg:text-left">
          Fill out the form to schedule a consultation with a DesignXX expert
        </p>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-6 md:grid-flow-col text-[#C4C4C4] lg:items-start items-center bg-[#FFFFFF]">
            <div className="block">
              <button
                onClick={handleClick}
                className="rounded border w-80 h-14 bg-[#FFFFFF] border-[#C4C4C4] text-2xl"
              >
                Social Media Manajemen
              </button>
            </div>
            <button
              onClick={handleClick}
              className="rounded border w-80 h-14 bg-[#FFFFFF] border-[#C4C4C4] text-2xl"
            >
              Digital Ads & Marketing
            </button>
            <button
              onClick={handleClick}
              className="rounded border w-80 h-14 bg-[#FFFFFF] border-[#C4C4C4] text-2xl"
            >
              Motion Graphic
            </button>
            <button
              onClick={handleClick}
              className="rounded border w-80 h-14 bg-[#FFFFFF] border-[#C4C4C4] text-2xl"
            >
              Presentation & Powerpoint
            </button>
            <button
              onClick={handleClick}
              className="rounded border w-80 h-14 border-[#C4C4C4] text-2xl"
            >
              Logo & Branding
            </button>
            <button
              onClick={handleClick}
              className="rounded border w-80 h-14 border-[#C4C4C4] text-2xl"
            >
              Ilustrations
            </button>
            <button
              onClick={handleClick}
              className="rounded border w-80 h-14 border-[#C4C4C4] text-2xl"
            >
              Print & Merchandise
            </button>
            <button
              onClick={handleClick}
              className="rounded border w-80 h-14 bg-[#FFFFFF] border-[#C4C4C4] text-2xl"
            >
              Other
            </button>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-row gap-4 lg:gap-6 justify-center md:justify-start ">
            <button
              onClick={Demo}
              className="rounded border w-40 h-10 md:w-52 md:h-14 bg-[#FFFFFF] text-[#E9520B] border-[#E9520B] text-2xl"
            >
              PREVIOUS
            </button>
            <button
              onClick={StepThree}
              className="rounded border w-40 h-10 md:w-52 md:h-14 bg-[#E9520B] text-[#FFFFFF] border-[#E9520B] text-2xl"
            >
              NEXT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepTwo;
