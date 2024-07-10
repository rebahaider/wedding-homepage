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
                <img className="mx-auto pb-5" src={group} alt="" />
            </div>
            {/* slider */}
            <div className="lg:px-40">
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    {/* review row 1*/}
                    <div className="grid md:grid-cols-3 gap-6 mx-auto items-center justify-center pb-5">
                        <div className="px-6">
                            <div><img className="mx-auto" src={group1} alt="" /></div>
                            <div className="text-center px-7 pt-[19px] pb-[19px]">
                                <p>I really enjoyed using the Knot App and found it very useful right away. When I began planning, I didn't know where to start. Following the guidelines was super helpful and eased my mind when I felt
                                    overwhelmed.</p>
                                <p className="text-center">Charisma & Cole <br></br>

                                    RICHMOND, VA</p>
                            </div>
                            <div><img className="mx-auto" src={group2} alt="" /></div>
                        </div>
                        <div className="px-6">
                            <div><img className="mx-auto" src={group1} alt="" /></div>
                            <div className="text-center px-7 pt-[19px] pb-[19px]">
                                <p>I really enjoyed using the Knot App and found it very useful right away. When I began planning, I didn't know where to start. Following the guidelines was super helpful and eased my mind when I felt
                                    overwhelmed.</p>
                                <p className="text-center">Charisma & Cole <br></br>

                                    RICHMOND, VA</p>
                            </div>
                            <div><img className="mx-auto" src={group2} alt="" /></div>
                        </div>
                        <div className="px-6">
                            <div><img className="mx-auto" src={group1} alt="" /></div>
                            <div className="text-center px-7 pt-[19px] pb-[19px]">
                                <p>I really enjoyed using the Knot App and found it very useful right away. When I began planning, I didn't know where to start. Following the guidelines was super helpful and eased my mind when I felt
                                    overwhelmed.</p>
                                <p className="text-center">Charisma & Cole <br></br>

                                    RICHMOND, VA</p>
                            </div>
                            <div><img className="mx-auto" src={group2} alt="" /></div>
                        </div>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide4"><img src={arrow1} alt="" /></a>
                        <a href="#slide2"><img src={arrow2} alt="" /></a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    {/* review row 2*/}
                    <div className="grid md:grid-cols-3 gap-6 mx-auto items-center justify-center pb-5">
                        <div className="px-6">
                            <div><img className="mx-auto" src={group1} alt="" /></div>
                            <div className="text-center px-7 pt-[19px] pb-[19px]">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores et culpa laudantium perspiciatis voluptas laboriosam maxime molestiae doloribus, cumque quo, tenetur repudiandae dolorum ut autem consectetur nihil. Quod, fugiat commodi!</p>
                                <p className="text-center">Charisma & Cole <br></br>

                                    RICHMOND, VA</p>
                            </div>
                            <div><img className="mx-auto" src={group2} alt="" /></div>
                        </div>
                        <div className="px-6">
                            <div><img className="mx-auto" src={group1} alt="" /></div>
                            <div className="text-center px-7 pt-[19px] pb-[19px]">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores et culpa laudantium perspiciatis voluptas laboriosam maxime molestiae doloribus, cumque quo, tenetur repudiandae dolorum ut autem consectetur nihil. Quod, fugiat commodi!</p>
                                <p className="text-center">Charisma & Cole <br></br>

                                    RICHMOND, VA</p>
                            </div>
                            <div><img className="mx-auto" src={group2} alt="" /></div>
                        </div>
                        <div className="px-6">
                            <div><img className="mx-auto" src={group1} alt="" /></div>
                            <div className="text-center px-7 pt-[19px] pb-[19px]">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores et culpa laudantium perspiciatis voluptas laboriosam maxime molestiae doloribus, cumque quo, tenetur repudiandae dolorum ut autem consectetur nihil. Quod, fugiat commodi!</p>
                                <p className="text-center">Charisma & Cole <br></br>

                                    RICHMOND, VA</p>
                            </div>
                            <div><img className="mx-auto" src={group2} alt="" /></div>
                        </div>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1"><img src={arrow1} alt="" /></a>
                        <a href="#slide3"><img src={arrow2} alt="" /></a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    {/* review row 3*/}
                    <div className="grid md:grid-cols-3 gap-6 mx-auto items-center justify-center pb-5">
                        <div className="px-6">
                            <div><img className="mx-auto" src={group1} alt="" /></div>
                            <div className="text-center px-7 pt-[19px] pb-[19px]">
                                <p>I really enjoyed using the Knot App and found it very useful right away. When I began planning, I didn't know where to start. Following the guidelines was super helpful and eased my mind when I felt
                                    overwhelmed.</p>
                                <p className="text-center">Charisma & Cole <br></br>

                                    RICHMOND, VA</p>
                            </div>
                            <div><img className="mx-auto" src={group2} alt="" /></div>
                        </div>
                        <div className="px-6">
                            <div><img className="mx-auto" src={group1} alt="" /></div>
                            <div className="text-center px-7 pt-[19px] pb-[19px]">
                                <p>I really enjoyed using the Knot App and found it very useful right away. When I began planning, I didn't know where to start. Following the guidelines was super helpful and eased my mind when I felt
                                    overwhelmed.</p>
                                <p className="text-center">Charisma & Cole <br></br>

                                    RICHMOND, VA</p>
                            </div>
                            <div><img className="mx-auto" src={group2} alt="" /></div>
                        </div>
                        <div className="px-6">
                            <div><img className="mx-auto" src={group1} alt="" /></div>
                            <div className="text-center px-7 pt-[19px] pb-[19px]">
                                <p>I really enjoyed using the Knot App and found it very useful right away. When I began planning, I didn't know where to start. Following the guidelines was super helpful and eased my mind when I felt
                                    overwhelmed.</p>
                                <p className="text-center">Charisma & Cole <br></br>

                                    RICHMOND, VA</p>
                            </div>
                            <div><img className="mx-auto" src={group2} alt="" /></div>
                        </div>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2"><img src={arrow1} alt="" /></a>
                        <a href="#slide4"><img src={arrow2} alt="" /></a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    {/* review row 4*/}
                    <div className="grid md:grid-cols-3 gap-6 mx-auto items-center justify-center pb-5">
                        <div className="px-6">
                            <div><img className="mx-auto" src={group1} alt="" /></div>
                            <div className="text-center px-7 pt-[19px] pb-[19px]">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores et culpa laudantium perspiciatis voluptas laboriosam maxime molestiae doloribus, cumque quo, tenetur repudiandae dolorum ut autem consectetur nihil. Quod, fugiat commodi!</p>
                                <p className="text-center">Charisma & Cole <br></br>

                                    RICHMOND, VA</p>
                            </div>
                            <div><img className="mx-auto" src={group2} alt="" /></div>
                        </div>
                        <div className="px-6">
                            <div><img className="mx-auto" src={group1} alt="" /></div>
                            <div className="text-center px-7 pt-[19px] pb-[19px]">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores et culpa laudantium perspiciatis voluptas laboriosam maxime molestiae doloribus, cumque quo, tenetur repudiandae dolorum ut autem consectetur nihil. Quod, fugiat commodi!</p>
                                <p className="text-center">Charisma & Cole <br></br>

                                    RICHMOND, VA</p>
                            </div>
                            <div><img className="mx-auto" src={group2} alt="" /></div>
                        </div>
                        <div className="px-6">
                            <div><img className="mx-auto" src={group1} alt="" /></div>
                            <div className="text-center px-7 pt-[19px] pb-[19px]">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores et culpa laudantium perspiciatis voluptas laboriosam maxime molestiae doloribus, cumque quo, tenetur repudiandae dolorum ut autem consectetur nihil. Quod, fugiat commodi!</p>
                                <p className="text-center">Charisma & Cole <br></br>

                                    RICHMOND, VA</p>
                            </div>
                            <div><img className="mx-auto" src={group2} alt="" /></div>
                        </div>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide3"><img src={arrow1} alt="" /></a>
                        <a href="#slide1"><img src={arrow2} alt="" /></a>
                    </div>
                </div>
            </div>
            </div>
            {/* video section */}
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

