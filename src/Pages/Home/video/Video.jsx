import { useRef, useState } from "react";
import videoBg from "../../../assets/images/video/video-bg.png";
import playBtn from "../../../assets/images/video/play.png";

const Video = () => {
    const iframeRef = useRef(null);
    const [showModal, setShowModal] = useState(false);

    const handlePlayVideo = () => {
        setShowModal(true);
        if (iframeRef.current) {
            iframeRef.current.src += "?autoplay=1";
        }
    };
    const closeModal = () => {
        setShowModal(false);
        if (iframeRef.current) {
            iframeRef.current.src = "https://www.youtube.com/embed/bf2tFixliMA?si=wHsL2LzIaTq0xIJq";
        }

    };
    return (
        <div>

            <div className="relative min-h-screen bg-center bg-cover max-w-full" style={{ backgroundImage: `url(${videoBg})` }} >
                <figure className=" ">
                    <img className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer" src={playBtn} alt="Play Button" onClick={handlePlayVideo} />
                </figure>
            </div>
            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
                    <div className="relative w-full max-w-3xl p-4 rounded-lg shadow-lg">
                        <button className="absolute top-2 right-2 text-2xl font-bold text-white"
                            onClick={closeModal}>
                            &times;
                        </button>
                        <iframe ref={iframeRef} width="560" height="315" src="https://www.youtube.com/embed/bf2tFixliMA?si=wHsL2LzIaTq0xIJq"
                            title="YouTube video player"
                            allow="autoplay; encrypted-media; picture-in-picture"
                            allowFullScreen>
                        </iframe>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Video;