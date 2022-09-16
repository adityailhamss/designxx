import HowItWork1 from "../assets/howitwork-1.png";
import HowItWork2 from "../assets/howitwork-2.png";
import HowItWork3 from "../assets/howitwork-3.png";
import HowItWork4 from "../assets/howitwork-4.png";
import SingleQnA from "./SingleQnA";

const HowItWork = () => {
  const Data = {
    data1: [
      {
        question: "What type design can i request?",
        answer:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      },
      {
        question: "How many project can i create?",
        answer:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      },
      {
        question: "How long its turnaround time?",
        answer:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      },
    ],
    data2: [
      {
        question: "Are DesignXX Designer experienced?",
        answer:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      },
      {
        question: "How are designers DesignXX?",
        answer:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      },
    ],
    data3: [
      {
        question: "How long do revision take?",
        answer:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      },
      {
        question: "What if I don't like my designers?",
        answer:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      },
    ],
    data4: [
      {
        question: "Will my project stored in DesignXX?",
        answer:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      },
      {
        question: "What file types are available?",
        answer:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      },
    ],
  };
  return (
    <div className="px-10 py-20 flex flex-col gap-20 lg:gap-40">
      <div className="flex flex-col-reverse lg:flex-row items-center w-full xl:w-[90%] mx-auto">
        <div className="flex flex-col w-full lg:w-1/2 gap-8 text-[#414141]">
          <h1 className="font-bold text-3xl lg:text-6xl lg:leading-[4.5rem] text-center lg:text-left">
            <span className="font-normal">#1</span> Create your design brief
          </h1>
          <p className="text-center lg:text-left">
            Start by filling out a simple form detailing your design needs. You
            can create multiple projects to form a queue.
          </p>
          <div className="flex flex-col gap-8">
            {Data.data1.map((item, idx) => (
              <SingleQnA question={item.question} answer={item.answer} />
            ))}
          </div>
        </div>
        <div className="lg:ml-auto">
          <img src={HowItWork1} alt="" />
        </div>
      </div>
      <div className="flex flex-col-reverse lg:flex-row-reverse items-center w-full xl:w-[90%] mx-auto">
        <div className="flex flex-col w-full lg:w-1/2 gap-8 text-[#414141] lg:ml-auto">
          <h1 className="font-bold text-3xl lg:text-6xl lg:leading-[4.5rem] text-center lg:text-left">
            <span className="font-normal">#2</span> Assigns project to the best
            designer
          </h1>
          <p className="text-center lg:text-left">
            Never worry about hiring the wrong designer again. Our artificial
            intelligence matches every project you create with the most
            compatible designer - every time.
          </p>
          <div className="flex flex-col gap-8">
            {Data.data2.map((item, idx) => (
              <SingleQnA question={item.question} answer={item.answer} />
            ))}
          </div>
        </div>
        <div className="">
          <img src={HowItWork2} alt="" />
        </div>
      </div>
      <div className="flex flex-col-reverse lg:flex-row items-center w-full xl:w-[90%] mx-auto">
        <div className="flex flex-col w-full lg:w-1/2 gap-8 text-[#414141]">
          <h1 className="font-bold text-3xl lg:text-6xl lg:leading-[4.5rem] text-center lg:text-left">
            <span className="font-normal">#3</span> Simple & thoughtful revision
          </h1>
          <p className="text-center lg:text-left">
            Need to make some updates? Use our Point & Click tool to leave
            revisions directly on your design.
          </p>
          <div className="flex flex-col gap-8">
            {Data.data3.map((item, idx) => (
              <SingleQnA question={item.question} answer={item.answer} />
            ))}
          </div>
        </div>
        <div className="lg:ml-auto">
          <img src={HowItWork3} alt="" />
        </div>
      </div>
      <div className="flex flex-col-reverse lg:flex-row-reverse items-center w-full xl:w-[90%] mx-auto">
        <div className="flex flex-col w-full lg:w-1/2 gap-8 text-[#414141]">
          <h1 className="font-bold text-3xl lg:text-6xl lg:leading-[4.5rem] text-center lg:text-left">
            <span className="font-normal">#4</span> Download & begin your next
            project
          </h1>
          <p className="text-center lg:text-left">
            Happy with your design? Instantly download your high-res images
            (including source files) with one click. Meanwhile, we'll start the
            next project in your queue - the same day
          </p>
          <div className="flex flex-col gap-8">
            {Data.data4.map((item, idx) => (
              <SingleQnA question={item.question} answer={item.answer} />
            ))}
          </div>
        </div>
        <div className="lg:mr-auto">
          <img src={HowItWork4} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HowItWork;
