import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "@fontsource/poppins";
import "@fontsource/dm-sans";
import "@fontsource/open-sans";
import { useNavigate } from "react-router-dom";

function CalendarPopup({ visible, onClose }) {
  const [time, setTime] = useState("");

  const handleTime = (newTime) => {
    setTime(newTime);
    // console.log(time);
  };

  const navigate = useNavigate();
  const Billing = () => {
    if (time === "") window.alert("Please select the time");
    else navigate("/order");
  };
  const [value, onChange] = useState(new Date());
  if (!visible) return null;
  return (
    <div className="flex flex-col px-20 py-10 w-auto items-center fixed inset-0 bg-opacity-30 backdrop-blur-sm justify-center">
      <div className="flex flex-col lg:flex-row border w-auto lg:w-[801px] h-auto lg:h-[596px] bg-white justify-center items-center">
        <div className="flex flex-col border w-[271px] h-[328px] lg:h-[596px] gap-3.5">
          <p className="text-4xl pt-20 pl-8 font-[#444444] font-[Poppins]">
            Book a call with us
          </p>
          <div className="flex flex-row gap-4 pl-8 pt-3.5 w-52 h-8">
            <button class="bg-grey-light hover:bg-grey text-grey-darkest rounded inline-flex items-center gap-4">
              <img className="h-4 w-4" src="assets/img/iconTime.png" alt="" />
              <span className="text-xs">30 Min</span>
            </button>
          </div>
          <div className="flex flex-row gap-4 pl-8 pt-3.5 w-52 h-8">
            <button class="bg-grey-light hover:bg-grey text-grey-darkest rounded inline-flex items-center gap-4">
              <img className="h-4 w-4" src="assets/img/iconDevice.png" alt="" />
              <span className="text-xs">Web Conference</span>
            </button>
          </div>
          <div className="flex flex-row gap-4 pl-8 pt-3.5 w-52 h-8">
            <button class="bg-grey-light hover:bg-grey text-grey-darkest rounded inline-flex items-center gap-4">
              <img className="h-4 w-4" src="assets/img/iconDate.png" alt="" />
              <span className="text-xs">-</span>
            </button>
          </div>
        </div>
        <div className="flex flex-col w-[530px] justify-center lg:justify-items-start">
          <p className="text-2xl pl-8 pt-8 lg:pt-24 pb-12 font-[Poppins]">
            Select a Date & Time
          </p>
          <div className="flex flex-row border-none w-[530px] h-[267px] justify-center">
            <div className="flex flex-row border-none w-[328px] h-[267px] items-center justify-center">
              <Calendar onChange={onChange} value={value} />
              <div className="flex flex-row border border-[#DADADA] w-[0px] h-[267px] my-6"></div>
            </div>
            <div className="flex flex-col px-8 overflow-auto gap-2">
              <div className="pt-2">
                <p className="font-[Opens_Sans] font-normal text-[#444444] text-xs text-center">
                  Pick Time
                </p>
              </div>
              <button
                className={`border border-[#E9520B] w-[120px] h-[34px] px-10 items-center ${
                  time === "08:00"
                    ? "bg-[#E9520B] text-white"
                    : "bg-white text-[#E9520B]"
                }`}
                onClick={() => handleTime("08:00")}
              >
                <p className="font-[Opens_Sans] text-center pt-2 pb-2 text-xs">
                  08:00
                </p>
              </button>
              <button
                className={`border border-[#E9520B] w-[120px] h-[34px] px-10 items-center ${
                  time === "09:00"
                    ? "bg-[#E9520B] text-white"
                    : "bg-white text-[#E9520B]"
                }`}
                onClick={() => handleTime("09:00")}
              >
                <p className="font-[Opens_Sans] text-center pt-2 pb-2 text-xs">
                  09:00
                </p>
              </button>
              <button
                className={`border border-[#E9520B] w-[120px] h-[34px] px-10 items-center ${
                  time === "10:00"
                    ? "bg-[#E9520B] text-white"
                    : "bg-white text-[#E9520B]"
                }`}
                onClick={() => handleTime("10:00")}
              >
                <p className="font-[Opens_Sans] text-center pt-2 pb-2 text-xs">
                  10:00
                </p>
              </button>
              <button
                className={`border border-[#E9520B] w-[120px] h-[34px] px-10 items-center ${
                  time === "11:00"
                    ? "bg-[#E9520B] text-white"
                    : "bg-white text-[#E9520B]"
                }`}
                onClick={() => handleTime("11:00")}
              >
                <p className="font-[Opens_Sans] text-center pt-2 pb-2 text-xs">
                  11:00
                </p>
              </button>
              <button
                className={`border border-[#E9520B] w-[120px] h-[34px] px-10 items-center ${
                  time === "12:00"
                    ? "bg-[#E9520B] text-white"
                    : "bg-white text-[#E9520B]"
                }`}
                onClick={() => handleTime("12:00")}
              >
                <p className="font-[Opens_Sans] text-center pt-2 pb-2 text-xs">
                  12:00
                </p>
              </button>
              <button
                className={`border border-[#E9520B] w-[120px] h-[34px] px-10 items-center ${
                  time === "13:00"
                    ? "bg-[#E9520B] text-white"
                    : "bg-white text-[#E9520B]"
                }`}
                onClick={() => handleTime("13:00")}
              >
                <p className="font-[Opens_Sans] text-center pt-2 pb-2 text-xs">
                  13:00
                </p>
              </button>
              <button
                className={`border border-[#E9520B] w-[120px] h-[34px] px-10 items-center ${
                  time === "14:00"
                    ? "bg-[#E9520B] text-white"
                    : "bg-white text-[#E9520B]"
                }`}
                onClick={() => handleTime("14:00")}
              >
                <p className="font-[Opens_Sans] text-center pt-2 pb-2 text-xs">
                  14:00
                </p>
              </button>
              <button
                className={`border border-[#E9520B] w-[120px] h-[34px] px-10 items-center ${
                  time === "15:00"
                    ? "bg-[#E9520B] text-white"
                    : "bg-white text-[#E9520B]"
                }`}
                onClick={() => handleTime("15:00")}
              >
                <p className="font-[Opens_Sans] text-center pt-2 pb-2 text-xs">
                  15:00
                </p>
              </button>
              <button
                className={`border border-[#E9520B] w-[120px] h-[34px] px-10 items-center ${
                  time === "16:00"
                    ? "bg-[#E9520B] text-white"
                    : "bg-white text-[#E9520B]"
                }`}
                onClick={() => handleTime("16:00")}
              >
                <p className="font-[Opens_Sans] text-center pt-2 pb-2 text-xs">
                  16:00
                </p>
              </button>
            </div>
          </div>
          <div className="flex flex-row justify-center lg:justify-end pt-8 lg:pt-24 pr-4 pb-4">
            <div className="flex flex-row gap-3 ">
              <button
                onClick={onClose}
                className="border w-[120px] h-[34px] bg-[#FFFFFF] text-[#E9520B] border-[#E9520B] text-xs"
              >
                Cancel
              </button>
              <button
                onClick={() => Billing()}
                className={`border w-[120px] h-[34px] text-xs" ${
                  time !== ""
                    ? "bg-[#E9520B] text-white"
                    : "bg-[#C4C4C4] text-[#FFFFFF]"
                }`}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CalendarPopup;
