import Map from "../assets/map.png";
import Facebook from "../assets/facebook.png";
import Instagram from "../assets/instagram.png";
import Email from "../assets/email.png";
const Footer = () => {
  return (
    <>
      <div className="py-8 border-t-2 flex flex-row">
        <div className="flex flex-col w-1/3 items-center gap-4">
          <h2 className="font-bold">Location</h2>
          <img src={Map} alt="" />
        </div>
        <div className="flex flex-col w-1/3 items-center">
          <div className="flex flex-col gap-4">
            <h2 className="font-bold">Company</h2>
            <ul className="flex flex-col gap-4">
              <li className="text-[#9F9F9F]">Work</li>
              <li className="text-[#9F9F9F]">Service</li>
              <li className="text-[#9F9F9F]">Team</li>
              <li className="text-[#9F9F9F]">Contact</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col w-1/3 items-center gap-4">
          <h2 className="font-bold">Contact Us</h2>
          <ul className="flex flex-col gap-4">
            <li className="flex flex-row gap-4">
              <div className="my-auto">
                <img src={Facebook} alt="" />
              </div>
              <p className="text-[#9F9F9F]">designxx</p>
            </li>
            <li className="flex flex-row gap-4">
              <div className="my-auto">
                <img src={Instagram} alt="" />
              </div>
              <p className="text-[#9F9F9F]">designxx</p>
            </li>
            <li className="flex flex-row gap-4">
              <div className="my-auto">
                <img src={Email} alt="" />
              </div>
              <p className="text-[#9F9F9F]">info@designxx.com</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="py-4 border-t-2 px-20 pb-20 text-[#414141]">
        <p className="font-bold text-sm">
          Design XX Corp | Powered by BAS-IT Studio
        </p>
      </div>
    </>
  );
};

export default Footer;
