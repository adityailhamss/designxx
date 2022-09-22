import Logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";
import Menu from "../assets/menu.png";
import { useState } from "react";

const Navbar = () => {
  const [drop, setDrop] = useState(false);
  const dropDown = () => {
    setDrop(!drop);
  };
  return (
    <>
      <div className="flex flex-row px-14 items-center">
        <div className="py-5 lg:py-0">
          <NavLink to={"/"}>
            <img src={Logo} alt="" />
          </NavLink>
        </div>
        <ul className="hidden lg:flex flex-row ml-auto xl:mr-20">
          <li className="py-8">
            <NavLink
              to={"/"}
              className="py-8 px-6 tracking-widest"
              style={(isActive) => ({
                color: isActive.isActive ? "#E9520B" : "#C4C4C4",
              })}
              end
            >
              HOME
            </NavLink>
          </li>
          <li className="py-8">
            <NavLink
              to={"/Portfolio"}
              className="py-8 px-6 tracking-widest"
              style={(isActive) => ({
                color: isActive.isActive ? "#E9520B" : "#C4C4C4",
              })}
            >
              PORTOFOLIO
            </NavLink>
          </li>
          <li className="py-8">
            <NavLink
              to={"/HowItWorks"}
              className="py-8 px-6 tracking-widest"
              style={(isActive) => ({
                color: isActive.isActive ? "#E9520B" : "#C4C4C4",
              })}
            >
              HOW IT WORK
            </NavLink>
          </li>
          <li className="py-8 px-6">
            <NavLink
              to={"/demo"}
              className="py-1 px-4 bg-[#E9520B] text-white rounded"
            >
              <button className="tracking-widest">BOOK A DEMO</button>
            </NavLink>
          </li>
        </ul>
        <div className="ml-auto my-auto lg:hidden inline-block w-[2rem] relative hover:cursor-pointer">
          <img src={Menu} alt="" onClick={dropDown} />
          <div
            className={`absolute z-[1] right-0 ${
              drop ? "block" : "hidden"
            } min-w-[200px] flex flex-col items-center text-center gap-4 border-2 rounded-xl border-black py-4 bg-white`}
          >
            <ul className="">
              <li className="py-4">
                <NavLink
                  to={"/"}
                  className="py-8 px-6 tracking-widest"
                  style={(isActive) => ({
                    color: isActive.isActive ? "#E9520B" : "#C4C4C4",
                  })}
                  end
                >
                  HOME
                </NavLink>
              </li>
              <li className="py-4">
                <NavLink
                  to={"/Portfolio"}
                  className="py-8 px-6 tracking-widest"
                  style={(isActive) => ({
                    color: isActive.isActive ? "#E9520B" : "#C4C4C4",
                  })}
                >
                  PORTOFOLIO
                </NavLink>
              </li>
              <li className="py-4">
                <NavLink
                  to={"/HowItWorks"}
                  className="py-8 px-6 tracking-widest"
                  style={(isActive) => ({
                    color: isActive.isActive ? "#E9520B" : "#C4C4C4",
                  })}
                >
                  HOW IT WORK
                </NavLink>
              </li>
              <li className="py-4">
                <NavLink
                  to={"/demo"}
                  className="py-1 px-4 bg-[#E9520B] text-white rounded"
                >
                  <button className="tracking-widest">BOOK A DEMO</button>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
