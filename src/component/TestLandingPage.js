import React from "react";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import data from "../data/data";

function TestLandingPage({handlePaket}) {
  const navigate = useNavigate();

  const Order = () => {
    navigate("/Order");
  };

  const Demo = () => {
    navigate("/Demo");
  };

  const HowItWorks = () => {
    navigate("/HowItWorks");
  };

  const Portfolio = () => {
    navigate("/Portfolio");
  };

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "orange",
          borderRadius: "50%",
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "orange",
          borderRadius: "50%",
        }}
        onClick={onClick}
      />
    );
  }

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="px-10 py-20 flex flex-col gap-20 lg:gap-40">
      <div className="flex flex-col-reverse lg:flex-row items-center w-full lg:ml-20 xl:w-[90%] mx-auto gap-5">
        <div className="flex flex-col w-full lg:w-1/2 gap-8 text-[#414141]">
          <h1 className="font-bold text-3xl lg:text-6xl lg:leading-[4.5rem] text-center lg:text-left">
            <span className="font-[600px]"></span> On-demand design services
            that save time and money
          </h1>
          <p className="border-solid border-[3px] border-black lg:w-[100px] h-0"></p>
          <p className="text-center lg:text-left ">
            Fueled by a dedicated global
            <br />
            workforce, DesignXX combines
            <br /> tech and talent, offering a design
            <br /> solution that can make work work
            <br /> for you.{" "}
          </p>
          <div className="mx-auto lg:mx-0">
            <button
              onClick={Portfolio}
              className="flex flex-row items-center border-solid border-[1px] border-[#E9520B] w-[307px] h-[54px] left-[106px] bg-[#E9520B] rounded text-white uppercase font-[DM Sans] font-normal text-2xl text-center"
            >
              <div className="w-full"> LIHAT PROJECT </div>
              <img
                className="ml-auto left-[35.79%] right-[33.33%] top-[25%] bottom-[25%] bg-[#E9520B]"
                src="assets/img/Icon.png"
              />
            </button>
          </div>
        </div>
        <div className=" lg:h-[600px] lg:w-[678px]">
          <img src="assets/img/home.png" />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center gap-20 mx-auto">
        <div className="flex flex-col items-end">
          <div className="flex flex-row">
            <h1 className="border-solid border-[1px] mt-[100px] border-[#414141] lg:w-[100px] h-0 items-start"></h1>
            <h1 className="w-[205px] h-[205px] bg-[#E9520B]">
              <p className="w-[167px] h-[72px] left-[456px] ml-3 mt-2 top-[841px] font-normal text-2xl lg:leading-9 text-white">
                Submit Your Request
              </p>
              <p className="w-[167px] h-[72px] left-[528px] top-[942px font-[Poppins] font-semibold text-end text-7xl mt-10 text-[#E5E5E5]">
                01
              </p>
            </h1>
          </div>
          <div className="flex flex-col-2">
            <div className="flex flex-col w-full items-center lg:w-[205px] lg:h-[205px] bg-gradient-to-t from-[#FFFFFF] to-[#E5E5E5]">
              <p className="w-[167px] h-[72px] left-[456px] top-[841px] font-normal text-2xl lg:leading-9 text-[#414141]">
                Your Designer Gets to Work
              </p>
              <h1 className="w-[167px] h-[72px] left-[528px] top-[942px font-[Poppins] font-semibold text-end text-7xl mt-10 text-[#E5E5E5]">
                02
              </h1>
            </div>
            <div className="flex flex-col w-full items-center lg:w-[205px] lg:h-[205px] bg-gradient-to-t from-[#FFFFFF] to-[#E5E5E5]">
              <p className="w-[167px] h-[72px] left-[456px] top-[841px] font-normal text-2xl lg:leading-9 text-[#414141]">
                You've Got a Design
              </p>
              <h1 className="w-[167px] h-[72px] left-[528px] top-[942px font-[Poppins] font-semibold text-end text-7xl mt-10 text-[#E5E5E5]">
                03
              </h1>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-9 w-full lg:[h-144px] ">
          <h1 className="font-[Poopins] font-semibold text-[64px] leading-[72px] text-center lg:text-left text-[#414141]">
            How
            <br /> We Work?
          </h1>
          <p className="font-[Poopins] font-medium text-lg leading-8 lg:text-left text-center text-[#9F9F9F]">
            Let's discuss what projects
            <br />
            you have in mind
          </p>
          <div className="mx-auto lg:mx-0">
            <button
              onClick={HowItWorks}
              className="flex flex-row items-center border-solid border-[1px] border-[#E9520B] w-[307px] h-[54px] left-[106px] bg-[#E9520B] rounded text-white uppercase font-[DM Sans] font-normal text-2xl text-center"
            >
              <div className="w-full"> SELENGKAPNYA </div>
              <img
                className="ml-auto left-[35.79%] right-[33.33%] top-[25%] bottom-[25%] bg-[#E9520B]"
                src="assets/img/Icon.png"
              />
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse lg:flex-row w-full items-center gap-[75px] lg:mx-auto w-auto justify-center">
        <div className="flex flex-col gap-[17px] lg:w-[398px] lg:[h-144px] ">
          <h1 className="font-[Poopins] font-semibold text-[64px] leading-[72px] lg:text-left text-center capitalize text-[#414141]">
            Meet Our
            <br /> Customers
          </h1>
          <p className="lg:text-left text-center text-[#9F9F9F]">
            We have helped startups around
            <br />
            the globe as well as fortune
            <br />
            500 companies
          </p>
          <div className="flex flex-row gap-8 items-center lg:text-left lg:justify-start justify-center">
            <a href="https://wa.me/6285722159221">
              <button className="font-sans font-normal text-2xl leading-[54px] uppercase text-[#E9520B] lg:text-left text-center">
                CONTACT US
              </button>
            </a>
            <img
              className=" h-6 left-[35.79%] right-[33.33%] top-[25%] bottom-[25%]"
              src="assets/img/icon1.png"
            />
          </div>
        </div>
        <div>
          <div className="grid grid-cols-3 grid-rows-3 gap-4">
            <img src="assets/img/mandiri.png" alt="logoMandiri" />
            <img src="assets/img/amartha.png" alt="logoAmartha" />
            <img src="assets/img/paxel.png" alt="logoPaxel" />
            <img src="assets/img/wahyoo.png" alt="logoWahyoo" />
            <img src="assets/img/cisco.png" alt="logoCisco" />
            <img src="assets/img/legoas.png" alt="logoLegoas" />
            <img src="assets/img/lubna.png" alt="logoLubna" />
            <img src="assets/img/riliv.png" alt="logoRiliv" />
            <img src="assets/img/unai.png" alt="logoUnai" />
          </div>
        </div>
      </div>

      <div className="flex flex-col-reverse lg:flex-row w-full gap-[110px] xl:w-[90%] lg:ml-20 justify-center">
        <div className="flex flex-row gap-2">
          <div className="flex flex-col gap-2">
            <img src="assets/img/weDo1.png" alt="logoWedo1" />
            <img src="assets/img/weDo2.png" alt="logoWedo2" />
          </div>
          <div className="flex flex-col gap-3 lg:w-[281px] lg:h-[381px]">
            <img src="assets/img/weDo3.png" alt="logoWedo3" />
            <div>
              <button
                onClick={Portfolio}
                className="flex flex-row items-center border-solid border-[1px] border-[#E9520B] w-[307px] h-[54px] left-[106px] bg-[#E9520B] rounded text-white uppercase font-[DM Sans] font-normal text-2xl text-center"
              >
                <div className="w-full"> LIHAT PROJECT </div>
                <img
                  className="ml-auto left-[35.79%] right-[33.33%] top-[25%] bottom-[25%] bg-[#E9520B]"
                  src="assets/img/Icon.png"
                />
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[17px]">
          <h1 className="font-[Poppins] font-semibold text-[64px] leading-[72px] lg:text-left text-center text-[#414141]">
            What
            <br /> We Do?
          </h1>
          <h1 className="font-[Poppins] font-medium text-lg leading-[60px] lg:text-left  text-[#444444]">
            <li>Social Media Manajemen</li>
            <li>Design Branding</li>
            <li>Design Logo</li>
            <li>Design Marketing</li>{" "}
          </h1>
        </div>
      </div>
      <div className="flex flex-col-reverse lg:flex-row w-full xl:w-[90%] gap-[37px] lg:ml-20 justify-center">
        <div className="flex flex-col gap-[37.5px]">
          <h1 className="font-Poppins font-semibold text-[64px] leading-[72px] lg:text-left text-center text-[#414141]">
            Everything
            <br /> You Need
          </h1>
          <p className="font-[Poppins] font-medium text-lg leading-8 lg:text-left text-center text-[#9F9F9F]">
            Get the production and quality of an
            <br /> in-house team without the overhead
            <br /> cost.
          </p>
          <div className="flex flex-row gap-8 items-center lg:text-left lg:justify-start justify-center">
            <button
              onClick={HowItWorks}
              className="font-sans font-normal text-2xl leading-[54px] uppercase text-[#E9520B] lg:text-left text-center"
            >
              SELENGKAPNYA
            </button>
            <img
              className=" h-6 left-[35.79%] right-[33.33%] top-[25%] bottom-[25%]"
              src="assets/img/icon1.png"
            />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row lg:w-321 lg:h-363 gap-[37px] mt-4">
          <div className="flex flex-col gap-12 lg:w-[321px] lg:h-[363px]">
            <div className="flex flex-row gap-[28px]">
              <img
                className=" w-14 h-14 bg-[#FFEFE8] p-[16px] rounded-[50px]"
                src="./assets/adp/image1.png"
              />
              <div className="flex flex-col">
                <h1 className="font-[Poppins] font-semibold text-lg leading-[27px] text-[#414141]">
                  Unlimited revisions
                </h1>
                <p className="font-[Poppins] font-medium text-xs leading-[18px] text-[#9F9F9F]">
                  Not happy yet with your design?
                  <br /> Submit as many revisions as you need
                  <br /> until it pops!
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-[28px]">
              <img
                className=" w-14 h-14 bg-[#FFEFE8] p-[16px] rounded-[50px]"
                src="./assets/adp/image2.png"
              />
              <div className="flex flex-col">
                <h1 className="font-[Poppins] font-semibold text-lg leading-[27px] text-[#414141]">
                  Fixed monthly rate
                </h1>
                <p className="font-[Poppins] font-medium text-xs leading-[18px] text-[#9F9F9F]">
                  Why pay more? Save thousands of dollars paying by the month
                  instead of per design.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-[28px]">
              <img
                className=" w-14 h-14 bg-[#FFEFE8] p-[16px] rounded-[50px]"
                src="./assets/adp/image3.png"
              />
              <div className="flex flex-col">
                <h1 className="font-[Poppins] font-semibold text-lg leading-[27px] text-[#414141]">
                  1-2 day turnaround
                </h1>
                <p className="font-[Poppins] font-medium text-xs leading-[18px] text-[#9F9F9F]">
                  Always know how long your designs will take. Never wait more
                  than 2 days for designs.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-12 lg:w-[321px] lg:h-[363px]">
            <div className="flex flex-row gap-[28px]">
              <img
                className=" w-14 h-14 bg-[#FFEFE8] p-[16px] rounded-[50px]"
                src="./assets/adp/image4.png"
              />
              <div className="flex flex-col">
                <h1 className="font-[Poppins] font-semibold text-lg leading-[27px] text-[#414141]">
                  Brand folders
                </h1>
                <p className="font-[Poppins] font-medium text-xs leading-[18px] text-[#9F9F9F]">
                  Keep your brand’s assets on Penji so your designers can match
                  your style.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-[28px]">
              <img
                className=" w-14 h-14 bg-[#FFEFE8] p-[16px] rounded-[50px]"
                src="./assets/adp/image5.png"
              />
              <div className="flex flex-col">
                <h1 className="font-[Poppins] font-semibold text-lg leading-[27px] text-[#414141]">
                  Vetted designers
                </h1>
                <p className="font-[Poppins] font-medium text-xs leading-[18px] text-[#9F9F9F]">
                  We take our quality seriously. Only 2% of designers that apply
                  to Penji make the team.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-[28px]">
              <img
                className=" w-14 h-14 bg-[#FFEFE8] p-[16px] rounded-[50px]"
                src="./assets/adp/image6.png"
              />
              <div className="flex flex-col">
                <h1 className="font-[Poppins] font-semibold text-lg leading-[27px] text-[#414141]">
                  Money-back guarantee
                </h1>
                <p className="font-[Poppins] font-medium text-xs leading-[18px] text-[#9F9F9F]">
                  Not in love with Penji by 30 days? Let us know and receive a
                  full refund, hassle-free.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row lg:flex-row w-full h-[529px] gap-[67px] bg-[#E9520B] justify-center">
        <div className="flex flex-col gap-[37.5px] mt-10 lg:mt-0 mx-auto">
          <h1 className="font-[Poppins] font-semibold lg:text-[60px] text-4xl lg:text-left text-center lg:mt-[80px] lg:ml-20 leading-[72px] text-white">
            Social Media
            <br />
            Manajemen
          </h1>
          <p className="font-[Poppins] font-medium text-lg leading-8 text-white lg:ml-20">
            Get the production and quality of an
            <br /> in-house team without the overhead
            <br /> cost.
          </p>
          <div className="lg:ml-20">
            <a href="https://wa.me/6285722159221">
              <button className="flex flex-row items-center border-solid border-[1px] border-[#FFD966] w-[307px] h-[54px] left-[106px] bg-[#FFD966] rounded text-white uppercase font-[DM Sans] font-normal text-2xl text-center">
                <div className="w-full text-black"> CONTACT US </div>
                <img
                  className="ml-auto left-[35.79%] right-[33.33%] top-[25%] bottom-[25%] bg-[#FFD966] mr-5"
                  src="assets/img/btn-us.png"
                />
              </button>
            </a>
          </div>
        </div>
        <div className="xl:flex flex-row lg:flex-row hidden ml-auto">
          <img src="assets/img/phone1.png" alt="Iconbtn"></img>
          <div className="flex flex-col gap-[81px]">
            <img
              className="w-[235px] h-[439px]"
              src="assets/img/phone3.png"
              alt="Iconbtn"
            ></img>
            <img src="assets/adp/hp4.png" alt="Iconbtn" />
          </div>
          <img src="assets/adp/hp3.png" alt="Iconbtn" />
        </div>
      </div>
      <h1 className="font-[Poppins] font-semibold text-[64px] leading-[72px] text-center gap-[68px] text-[#414141]">
        PLANS THAT
        <br /> WORK FOR YOU
      </h1>
      <div className="flex flex-cols w-full justify-center">
        <div className="flex flex-col lg:flex-row gap-[34px]">
          <div className="flex flex-col items-center p-6 gap-[33px] h-[545px] w-[317px] bg-[#F9F7F7] border-solid border-[1px] border-[#CED2D3]">
            <div className="w-[256px] h-[161px] gap-2">
              <h1 className="font-sans font-bold text-3xl leading-[39px] text-[#E9520B]">
                Bulanan
              </h1>
              <p className="font-sans font-normal text-lg leading-6 text-[#455A64]">
                Hanya <span className="line-through">Rp 5.000.000</span>{" "}
              </p>
              <p className="font-sans font-bold text-[40px] leading-[52px] text-[#455A64]">
                Rp.1.500.000
              </p>
              <p className="font-sans font-normal text-[18px] leading-[23px] text-[#455A64]">
                / Month
              </p>
            </div>
            <button
              onClick={Order}
              className="items-center justify-center border-solid border-[1px] border-[#E9520B] lg:w-[275px] lg:h-[54px] rounded text-[#E9520B] uppercase font-[DM Sans] font-normal text-2xl text-center"
            >
              {" "}
              PILIH
            </button>
            <div className="w-[269px] h-[1px] bg-[#D9D9D9]"></div>
            <div className="flex flex-col gap-[21px] w-[251px] h-[182px]">
              <h1 className="font-sans font-medium text-lg leading-6 text-[#455A64]">
                Yang kamu dapat:
              </h1>
              <div className="flex flex-cols gap-[15.23px]">
                <img src="assets/adp/icon-ckls.png" />
                <p className="font-sans font-medium text-lg text-[#455A64]">
                  1 Bulan Durasi
                </p>
              </div>
              <div className="flex flex-row gap-[15.23px]">
                <img src="assets/adp/icon-ckls.png" />
                <p className="font-sans font-medium text-lg text-[#455A64]">
                  Dedicated Designer Team
                </p>
              </div>
              <div className="flex flex-row gap-[15.23px]">
                <img src="assets/adp/icon-ckls.png" />
                <p className="font-sans font-medium text-lg text-[#455A64]">
                  Unlimited Revision
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center p-6 gap-[33px] h-[545px] w-[317px] bg-[#F9F7F7] border-solid border-[1px] border-[#CED2D3]">
            <div className="w-[256px] h-[161px] gap-2">
              <h1 className="font-sans font-bold text-3xl leading-[39px] text-[#E9520B]">
                PRO
              </h1>
              <p className="font-sans font-normal text-lg leading-6 text-[#455A64]">
                Hanya <span className="line-through">Rp 5.000.000</span>{" "}
              </p>
              <p className="font-sans font-bold text-[40px] leading-[52px] text-[#455A64]">
                Rp.1.500.000
              </p>
              <p className="font-sans font-normal text-[18px] leading-[23px] text-[#455A64]">
                / Month
              </p>
            </div>
            <button
              onClick={Order}
              className="items-center justify-center border-solid border-[1px] bg-[#E9520B] lg:w-[275px] lg:h-[54px] rounded text-white uppercase font-[DM Sans] font-normal text-2xl text-center"
            >
              {" "}
              PILIH
            </button>
            <div className="w-[269px] h-[1px] bg-[#D9D9D9]"></div>
            <div className="flex flex-col gap-[21px] w-[251px] h-[182px]">
              <h1 className="font-sans font-medium text-lg leading-6 text-[#455A64]">
                Yang kamu dapat:
              </h1>
              <div className="flex flex-row gap-[15.23px]">
                <img src="assets/adp/icon-ckls.png" />
                <p className="font-sans font-medium text-lg text-[#455A64]">
                  1 Bulan Durasi
                </p>
              </div>
              <div className="flex flex-row gap-[15.23px]">
                <img src="assets/adp/icon-ckls.png" />
                <p className="font-sans font-medium text-lg text-[#455A64]">
                  Dedicated Designer Team
                </p>
              </div>
              <div className="flex flex-row gap-[15.23px]">
                <img src="assets/adp/icon-ckls.png" />
                <p className="font-sans font-medium text-lg text-[#455A64]">
                  Unlimited Revision
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center p-6 gap-[33px] h-[545px] w-[317px] bg-[#F9F7F7] border-solid border-[1px] border-[#CED2D3]">
            <div className="w-[256px] h-[161px] gap-2">
              <h1 className="font-sans font-bold text-3xl leading-[39px] text-[#E9520B]">
                Minguuan
              </h1>
              <p className="font-sans font-normal text-lg leading-6 text-[#455A64]">
                Hanya <span className="line-through">Rp 5.000.000</span>{" "}
              </p>
              <p className="font-sans font-bold text-[40px] leading-[52px] text-[#455A64]">
                Rp.1.500.000
              </p>
              <p className="font-sans font-normal text-[18px] leading-[23px] text-[#455A64]">
                / Month
              </p>
            </div>
            <button
              onClick={Order}
              className="items-center justify-center border-solid border-[1px] border-[#E9520B] lg:w-[275px] lg:h-[54px] rounded text-[#E9520B] uppercase font-[DM Sans] font-normal text-2xl text-center"
            >
              {" "}
              PILIH
            </button>
            <div className="w-[269px] h-[1px] bg-[#D9D9D9]"></div>
            <div className="flex flex-col gap-[21px] w-[251px] h-[182px]">
              <h1 className="font-sans font-medium text-lg leading-6 text-[#455A64]">
                Yang kamu dapat:
              </h1>
              <div className="flex flex-row gap-[15.23px]">
                <img src="assets/adp/icon-ckls.png" />
                <p className="font-sans font-medium text-lg text-[#455A64]">
                  1 Bulan Durasi
                </p>
              </div>
              <div className="flex flex-row gap-[15.23px]">
                <img src="assets/adp/icon-ckls.png" />
                <p className="font-sans font-medium text-lg text-[#455A64]">
                  Dedicated Designer Team
                </p>
              </div>
              <div className="flex flex-row gap-[15.23px]">
                <img src="assets/adp/icon-ckls.png" />
                <p className="font-sans font-medium text-lg text-[#455A64]">
                  Unlimited Revision
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-[23px]">
        <h1 className="font-[Poppins] font-semibold text-[64px] leading-[71px] text-[#414141] text-center">
          If you can imagine it,
          <br />
          we can design it.
        </h1>
        <button
          onClick={Demo}
          className="w-[296px] h-[54px] bg-[#E9520B] rounded-[4px] font-sans font-normal text-2xl leading-[54px] text-center uppercase text-white"
        >
          COBA SEKARANG
        </button>
      </div>
      <div className="lg:w-[1000px] gap-[20px] lg:mx-auto justify-center">
        <Slider {...settings}>
          {data.map((item) => (
            <div className="flex flex-col gap-1">
              <p className="text-center">{item.title}</p>
              <img className="mx-auto" src={item.image} alt={item.title} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default TestLandingPage;
