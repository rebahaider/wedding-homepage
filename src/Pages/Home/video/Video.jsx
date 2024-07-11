import { useRef } from "react";
import videoBg from "../../../assets/images/video/video-bg.png";
import playBtn from "../../../assets/images/video/play.png";

const Video = () => {
    const iframeRef = useRef(null);

    // const handlePlayVideo = () => {
    //     if (iframeRef.current) {
    //         // Assuming the videoSrc is a YouTube video
    //         iframeRef.current.src += "?autoplay=1";
    //     }
    // };
    return (
        <div>
            
            <div className="relative min-h-screen bg-center bg-no-repeat bg-cover" style={{ backgroundImage: `url(${videoBg})` }} >
                <figure className=" ">
                    <img className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer" src={playBtn} alt="" />
                </figure>
                {/* <iframe
                    ref={iframeRef}
                    width="560" height="315"
                    src="https://www.youtube.com/embed/bf2tFixliMA?si=wHsL2LzIaTq0xIJq"
                    title="YouTube video player"

                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen>

                </iframe> */}

            </div>
        </div>
    );
};

export default Video;