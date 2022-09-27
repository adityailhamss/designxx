import Facebook from "../assets/facebook.png";
import Instagram from "../assets/instagram.png";
import Email from "../assets/email.png";
const Footer = () => {
  return (
    <>
      <div className="py-8 border-t-2 flex flex-col lg:flex-row px-10 xl:px-0 lg:gap-0 gap-10">
        <div className="flex flex-col lg:w-1/3 items-center gap-4 lg:pl-10">
          <h2 className="font-bold">Location</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.145592752943!2d107.58448451539668!3d-6.873152895033246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e690baf9d69d%3A0xc39012a3b0b4145b!2sIndigoHub%20Bandung!5e0!3m2!1sid!2sid!4v1663850427983!5m2!1sid!2sid"
            className="border-0 sm:w-[400px] sm:h-[250px]"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="map"
          ></iframe>
        </div>
        <div className="flex flex-col lg:w-1/3 items-center">
          <div className="flex flex-col gap-4">
            <h2 className="font-bold">Company</h2>
            <ul className="flex flex-col gap-4 text-center lg:text-left">
              <li className="text-[#9F9F9F]">Work</li>
              <li className="text-[#9F9F9F]">Service</li>
              <li className="text-[#9F9F9F]">Team</li>
              <li className="text-[#9F9F9F]">Contact</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col lg:w-1/3 items-center gap-4">
          <h2 className="font-bold">Contact Us</h2>
          <ul className="flex flex-col gap-4 items-center lg:items-start">
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
            <li className="flex flex-row gap-4">
              <div className="my-auto">Call</div>
              <p className="text-[#9F9F9F]">0857-2215-9221</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="py-4 border-t-2 lg:px-20 pb-20 text-[#414141]">
        <p className="font-bold text-sm text-center lg:text-left">
          Design XX Corp | Powered by BAS-IT Studio | Supported by BAS-IT Studio
        </p>
      </div>
    </>
  );
};

export default Footer;
