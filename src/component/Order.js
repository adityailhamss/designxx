import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Metode from "./Metode";
import Paket from "./Paket";
import axios from 'axios'

function Order() {
  const [showMyModal, setShowMyModal] = useState(false);
  const [showMetode, setShowMetode] = useState(false);
  const [paket, setPaket] = useState("Pro");
  const handleOnClose = () => {
    setShowMyModal(false);
    setShowMetode(false);
  };
  const handlePaket = (newPaket) => {
    setPaket(newPaket);
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValue((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };
  const [formValue, setFormValue] = useState({
    nama: "",
    alamat: "",
    email: "",
    handphone: "",
    perusahaan: "",
  });
  const navigate = useNavigate();
  const handleClick = async (event) => {
    if (
      nama === "" ||
      alamat === "" ||
      email === "" ||
      handphone === "" ||
      perusahaan === ""
    ) {
      window.alert("Please input all the fields below.");
    } else {
      await axios.post('http://localhost:5000/form', {
        name: nama,
        email,
        payment_type: 'permata',
        transaction_details: {
          order_id: `Order-${Math.floor((Math.random() * 789))}`,
          gross_amount: 50000
        }
      }).then((res) => {
        console.log(res.data)
        setShowMetode(true);        
      }).catch((err) => {
        console.log(err)
      })
    }
  };
  const { nama, alamat, email, handphone, perusahaan } = formValue;
  return (
    <div className="px-10 flex justify-center pb-10">
      <div className="flex flex-col lg:w-[678px] lg:h-auto justify-center w-full">
        <div className="py-10 lg:flex flex-row justify-between items-baseline">
          <div className="flex justify-items-start">
            <h1 className="font-bold text-3xl text-[#414141]">Order details</h1>
          </div>
          <div className="flex  justify-items-end ">
            <button
              onClick={() => setShowMyModal(true)}
              className="text-[#E9520B]"
            >
              GANTI PAKET
            </button>
          </div>
        </div>
        <div className="flex lg:flex-col items-center px-3 justify-center ">
          <div className="flex flex-row bg-[#F9F7F7] lg:w-[678px] lg:h-[230px] rounded-lg border-[1px]">
            <div className="block lg:flex flex-row lg:my-6 gap-2 lg:pl-[52px] ">
              <div className="flex flex-col w-max gap-2 px-2 ">
                <h1 className="text-3xl text-[#E9520B] font-bold">{paket}</h1>
                <h4 className="text-lg text-[#455A64]">
                  Hanya <s>Rp.5.000.000</s>
                </h4>
                <h1 className="text-4xl font-bold text-[#455A64]">
                  Rp.1.500.000
                </h1>
                <h4 className="text-lg text-[#455A64]">/Month</h4>
              </div>
              <div className="flex flex-col lg:w-[2px] lg:h-[182px] bg-[#D9D9D9] lg:ml-[33px]"></div>
              <div className="flex flex-col gap-5 lg:pl-[33px] w-max">
                <h4 className="text-lg text-[#455A64]">Yang kamu dapat:</h4>
                <div className="flex flex-row">
                  <img
                    className="lg:w-6 lg:h-6"
                    src="./assets/icon/Check.png"
                    alt=""
                  />
                  <h4 className="ml-1 text-lg text-[#455A64]">
                    {" "}
                    1 Bulan Durasi
                  </h4>
                </div>
                <div className="flex flex-row">
                  <img
                    className="lg:w-6 lg:h-6"
                    src="./assets/icon/Check.png"
                    alt=""
                  />
                  <h4 className="ml-1 text-lg text-[#455A64]">
                    {" "}
                    Dedicated Designer Team
                  </h4>
                </div>
                <div className="flex flex-row">
                  <img
                    className="lg:w-6 lg:h-6"
                    src="./assets/icon/Check.png"
                    alt=""
                  />
                  <h4 className="ml-1 text-lg text-[#455A64]">
                    {" "}
                    Unlimited Revision
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-10 flex flex-col gap-3">
          <h1 className="font-bold text-3xl text-[#414141]">
            Billing information
          </h1>
          <p className="text-sm text-left text-[#414141]">
            We'll use this information to issue the first invoice. You'll be
            able to update the details for future invoices from your account
            profile.
          </p>
        </div>
        <div className="flex flex-col">
          <div className="box-o-5">
            <label class="block mb-2 font-bold" for="nama">
              Nama Lengkap
            </label>
            <input
              class="shadow appearance-none border rounded w-80 lg:w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="nama"
              type="text"
              placeholder="Nama Lengkap"
              onChange={handleChange}
              value={nama}
            />
          </div>
          <div className="box-o-5">
            <label class="block mb-2 font-bold" for="alamat">
              Alamat
            </label>
            <input
              class="shadow appearance-none border rounded w-80 lg:w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="alamat"
              type="text"
              placeholder="Alamat"
              onChange={handleChange}
              value={alamat}
            />
          </div>
          <div className="box-o-5">
            <label class="block mb-2 font-bold" for="email">
              Email
            </label>
            <input
              class="shadow appearance-none border rounded w-80 lg:w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="email"
              type="text"
              placeholder="Email"
              onChange={handleChange}
              value={email}
            />
          </div>
          <div className="box-o-5">
            <label class="block mb-2 font-bold" for="telepon">
              No Handphone/Telepon
            </label>
            <input
              class="shadow appearance-none border rounded w-80 lg:w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="handphone"
              type="text"
              placeholder="No Handphone"
              onChange={handleChange}
              value={handphone}
            />
          </div>
          <div className="box-o-5">
            <label class="block mb-2 font-bold" for="perusahaan">
              Perusahaan
            </label>
            <input
              class="shadow appearance-none border rounded w-80 lg:w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="perusahaan"
              type="text"
              placeholder="Perusahaan"
              onChange={handleChange}
              value={perusahaan}
            />
          </div>
        </div>
        <div className="py-6 flex flex-col gap-2">
          <p className="">
            By clicking next, you agree to receive communications from DesignXX
            in accordance with our <b>Privacy Policy.</b>
          </p>
          <button
            className="lg:w-[678px] h-12 lg:h-[74px] bg-[#E9520B]"
            onClick={handleClick}
          >
            {" "}
            <p className="text-white">PILIH METODE PEMBAYARAN</p>
          </button>
        </div>
      </div>
      <Paket
        onClose={handleOnClose}
        visible={showMyModal}
        handlePaket={handlePaket}
      />
      <Metode onClose={handleOnClose} visible={showMetode} />
    </div>
  );
}

export default Order;
