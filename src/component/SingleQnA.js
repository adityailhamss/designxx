import { useState } from "react";
import Drop from "../assets/drop.png";
import Close from "../assets/close.png";

const SingleQnA = (props) => {
  const [active, setActive] = useState(false);
  const changeActive = () => {
    setActive(!active);
  };
  return (
    <div className="bg-[#FAF9F9] border-2">
      <div className="flex flex-row p-4 items-center">
        <p className="font-bold">{props.question}</p>
        <span className="ml-auto">
          <img
            src={`${active ? `${Close}` : `${Drop}`}`}
            alt=""
            onClick={() => changeActive()}
            className="hover:cursor-pointer"
          />
        </span>
      </div>
      {active && <div className="p-4">{props.answer}</div>}
    </div>
  );
};

export default SingleQnA;
