import VideoJS from "../VideoJS";
import video from "../assets/video.mp4";
import iconClose from "../assets/onClose.png";
import { useNavigate } from "react-router-dom";

const VideoDemo = () => {
  const navigate = useNavigate();
  const Demo = () => {
    navigate("/Demo");
  };
  const videoJsOptions = {
    autoplay: false,
    controls: true,
    sources: [
      {
        src: video,
        type: "video/mp4",
      },
    ],
  };

  return (
    <div className="flex flex-col justify-items-end">
      <div className="flex flex-row justify-center lg:justify-end px-32 pt-10">
        <button onClick={Demo}>
          <img src={iconClose} alt="" />
        </button>
      </div>
      <div className="px-20 py-10 flex justify-center">
        <VideoJS options={videoJsOptions} />
      </div>
    </div>
  );
};

export default VideoDemo;
