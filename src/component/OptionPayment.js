import { useState } from "react";
import Drop from "../assets/drop.png";
import Close from "../assets/close.png";


const OptionPayment = (props)=> {
    const [active, setActive] = useState(false);
    const changeActive = () => {
        setActive(!active);
  };
  return (
<div className="">
    <div className="flex flex-row">
      <p className="font-bold text-lg">{props.metode}</p>
        <span className="ml-auto ">
            <img
                src={`${active ? `${Close}` : `${Drop}`}`}
                alt=""
                onClick={() => changeActive()}
                className="hover:cursor-pointer"
            />
        </span>
    
    </div>
    {active && <div className="p-4">{props.penjelasan}</div>}
    
      
    </div>
  );
};

export default OptionPayment