import X from "../assets/X.png";
import drop from "../assets/right.png";
import mandiri from "../assets/mandiri.png";
import bca from "../assets/bca.png";
import bni from "../assets/bni.png";
import alfamart from "../assets/alfamart.png";
import indomaret from "../assets/indomaret.png";
import pos from "../assets/pos.png";
import { useNavigate } from "react-router-dom";

const Metode = ({ visible, onClose, handlePaket }) => {

  const navigate = useNavigate();

  const BCA = () => {
    navigate("/bca");
  };
  const Mandiri = () => {
    navigate("/mandiri");
};
const BNI = () => {
  navigate("/bni");
};

  if (!visible) return null;
  return (
    <div className="flex flex-col px-20 py-10 w-auto mx-auto items-center fixed inset-0 bg-opacity-30 backdrop-blur-sm">
      <div className="flex flex-col bg-[#ffffff] lg:w-[700px] lg:h-[550px] gap-4 rounded-lg py-4 border-2 px-4">
        <div className="flex flex-row">
          <div className="flex lg:pl-56">
            <div className="flex">
              <p className="font-bold lg:text-2xl text-[#444444]">
                Metode Pembayaran
              </p>
            </div>
          </div>
          <button onClick={onClose} className="flex lg: pl-40 items-center">
            <img src={X} alt="" />
          </button>
        </div>
        <div className="flex flex-col px-2 overflow-y-scroll gap-2">
          <div className="flex flex-col gap-4 border-b-4 py-8">
            <h2 className="font-semibold">Bank Transfer</h2>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-center gap-4 px-6">
                <div>
                  <img alt="" src={mandiri} />
                </div>
                <h2>Mandiri Virtual Account</h2>
                <button onClick={Mandiri} className="ml-auto">
                  <img alt="" src={drop} />
                </button>
              </div>
              <div className="flex flex-row items-center gap-4 px-6">
                <div>
                  <img alt="" src={bca} />
                </div>
                <h2>BCA Virtual Account</h2>
                <button onClick={BCA} className="ml-auto">
                  <img alt="" src={drop} />
                </button>
              </div>
              <div className="flex flex-row items-center gap-4 px-6">
                <div>
                  <img alt="" src={bni} />
                </div>
                <h2>BNI Virtual Account</h2>
                <button onClick={BNI} className="ml-auto">
                  <img alt="" src={drop} />
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 border-b-4 py-8">
            <h2 className="font-semibold">Tunai Di Gerai</h2>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-center gap-4 px-6">
                <div>
                  <img alt="" src={alfamart} />
                </div>
                <h2>Alfamart</h2>
                <div className="ml-auto">
                  <img alt="" src={drop} />
                </div>
              </div>
              <div className="flex flex-row items-center gap-4 px-6">
                <div>
                  <img alt="" src={indomaret} />
                </div>
                <h2>Indomaret</h2>
                <div className="ml-auto">
                  <img alt="" src={drop} />
                </div>
              </div>
              <div className="flex flex-row items-center gap-4 px-6">
                <div>
                  <img alt="" src={pos} />
                </div>
                <h2>Pos Indonesia</h2>
                <div className="ml-auto">
                  <img alt="" src={drop} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Metode;
