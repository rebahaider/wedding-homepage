import frame from "../../../assets/images/question/frame.png";
import group from "../../../assets/images/latest-news/Group.png";
import group1 from "../../../assets/images/latest-news/Group1.png";
import group2 from "../../../assets/images/latest-news/Group2.png";
import arrow1 from "../../../assets/images/latest-news/arrow1.png";
import arrow2 from "../../../assets/images/latest-news/arrow2.png";
import { useRef } from "react";


const CustomerReview = () => {

    const iframeRef = useRef(null);

    const handlePlayVideo = () => {
        if (iframeRef.current) {
            // Assuming the videoSrc is a YouTube video
            iframeRef.current.src += "?autoplay=1";
        }
    };
    return (
        <div className="bg-[#FFF7F8]">
            <div className=" pt-32">
                <h3 className="text-3xl font-bold text-center">See Our Customer Reviews</h3>
                <img className="mx-auto" src={group} alt="" />
            </div>
            {/* slider */}
            <div>
                <div className="carousel">
                    <div id="slide1" className="carousel-item relative w-full">
                        <div className="grid md:grid-cols-3 gap-40 md:p-10 mx-auto">
                            <div className="md:w-[300px]">
                                <div>
                                    <img src={group1} />
                                </div>
                                <div className="text-center">
                                    <p>I really enjoyed using the Knot App and found it very useful right away. When I began planning, I didn't know where to start. Following the guidelines was super helpful and eased my mind when I felt
                                        overwhelmed.</p>
                                    <p className="text-center">Charisma & Cole <br></br>

                                        RICHMOND, VA</p>
                                </div>
                                <div>
                                    <img src={group2} alt="" />
                                </div>
                            </div>
                            <div className="md:w-[300px]">
                                <div>
                                    <img src={group1} />
                                </div>
                                <div className="text-center">
                                    <p>I really enjoyed using the Knot App and found it very useful right away. When I began planning, I didn't know where to start. Following the guidelines was super helpful and eased my mind when I felt
                                        overwhelmed.</p>
                                    <p className="text-center">Charisma & Cole <br></br>

                                        RICHMOND, VA</p>
                                </div>
                                <div>
                                    <img src={group2} alt="" />
                                </div>
                            </div>
                            <div className="md:w-[300px]">
                                <div>
                                    <img src={group1} />
                                </div>
                                <div className="text-center">
                                    <p>I really enjoyed using the Knot App and found it very useful right away. When I began planning, I didn't know where to start. Following the guidelines was super helpful and eased my mind when I felt
                                        overwhelmed.</p>
                                    <p className="text-center">Charisma & Cole <br></br>

                                        RICHMOND, VA</p>
                                </div>
                                <div>
                                    <img src={group2} alt="" />
                                </div>
                            </div>
                        </div>

                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide1" className=""><img src={arrow1} alt="" /></a>
                            <a href="#slide2" className=""><img src={arrow2} alt="" /></a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <div className="grid md:grid-cols-3 gap-40 p-10 mx-auto">
                            <div className="w-[300px]">
                                <div>
                                    <img src={group1} />
                                </div>
                                <div className="text-center">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores et culpa laudantium perspiciatis voluptas laboriosam maxime molestiae doloribus, cumque quo, tenetur repudiandae dolorum ut autem consectetur nihil. Quod, fugiat commodi!</p>
                                    <p className="text-center">Charisma & Cole <br></br>

                                        RICHMOND, VA</p>
                                </div>
                                <div>
                                    <img src={group2} alt="" />
                                </div>
                            </div>
                            <div className="w-[300px]">
                                <div>
                                    <img src={group1} />
                                </div>
                                <div className="text-center">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores et culpa laudantium perspiciatis voluptas laboriosam maxime molestiae doloribus, cumque quo, tenetur repudiandae dolorum ut autem consectetur nihil. Quod, fugiat commodi!</p>
                                    <p className="text-center">Charisma & Cole <br></br>

                                        RICHMOND, VA</p>
                                </div>
                                <div>
                                    <img src={group2} alt="" />
                                </div>
                            </div>
                            <div className="w-[300px]">
                                <div>
                                    <img src={group1} />
                                </div>
                                <div className="text-center">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores et culpa laudantium perspiciatis voluptas laboriosam maxime molestiae doloribus, cumque quo, tenetur repudiandae dolorum ut autem consectetur nihil. Quod, fugiat commodi!</p>
                                    <p className="text-center">Charisma & Cole <br></br>

                                        RICHMOND, VA</p>
                                </div>
                                <div>
                                    <img src={group2} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide2" className=""><img src={arrow1} alt="" /></a>
                            <a href="#slide1" className=""><img src={arrow2} alt="" /></a>
                        </div>
                    </div>

                </div>
                <div className="flex justify-center items-center pb-20">
                    <button className="bg-[#B32134] text-white font-bold rounded-lg py-4 px-6 ">Signup for free</button>
                </div>
            </div>

            <div className="relative min-h-screen md:h-[583px] bg-no-repeat bg-cover" style={{ backgroundImage: `url(${frame})` }} onClick={handlePlayVideo}>
                <iframe
                ref={iframeRef}
                width="560" height="315" 
                src="https://www.youtube.com/embed/bf2tFixliMA?si=wHsL2LzIaTq0xIJq" 
                title="YouTube video player" 
                
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  
                allowfullscreen>

                </iframe>

            </div>

        </div>
    );
};

export default CustomerReview;

