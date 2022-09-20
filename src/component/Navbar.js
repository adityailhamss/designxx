import Logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="flex flex-row px-14 items-center">
        <div>
          <NavLink to={"/"}>
            <img src={Logo} alt="" />
          </NavLink>
        </div>
        <ul className="flex flex-row ml-auto mr-20">
          <li className="py-8">
            <NavLink
              to={"/"}
              className="py-8 px-6 tracking-widest"
              style={(isActive) => ({
                color: isActive.isActive ? "#E9520B" : "#C4C4C4",
              })}
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
      </div>
    </>
  );
};

export default Navbar;
