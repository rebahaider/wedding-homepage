import group from "../../../assets/images/latest-news/Group.png";
import group1 from "../../../assets/images/latest-news/Group1.png";
import group2 from "../../../assets/images/latest-news/Group2.png";
import arrow1 from "../../../assets/images/latest-news/arrow1.png";
import arrow2 from "../../../assets/images/latest-news/arrow2.png";



const CustomerReview = () => {


    return (
        <div className="bg-[#FFF7F8] container mx-auto">
            <div className=" pt-32">
                <h3 className="text-3xl font-bold text-center">See Our Customer Reviews</h3>
                <img className="mx-auto pb-5" src={group} alt="" />
            </div>
            {/* slider */}
            <div className="lg:px-40">
                <div className="carousel w-full">
                    <div id="slide1" className="carousel-item relative w-full">
                        {/* review row 1*/}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto items-center justify-center pb-5">
                            <div className="px-6">
                                <div><img className="mx-auto" src={group1} alt="" /></div>
                                <div className="text-center pt-4 pb-4">
                                    <p>I really enjoyed using the Knot App and found it very useful right away. When I began planning, I didn't know where to start. Following the guidelines was super helpful and eased my mind when I felt
                                        overwhelmed.</p>
                                    <p className="text-center">Charisma & Cole <br></br>

                                        RICHMOND, VA</p>
                                </div>
                                <div><img className="mx-auto" src={group2} alt="" /></div>
                            </div>
                            <div className="px-6">
                                <div><img className="mx-auto" src={group1} alt="" /></div>
                                <div className="text-center pt-4 pb-4">
                                    <p>I really enjoyed using the Knot App and found it very useful right away. When I began planning, I didn't know where to start. Following the guidelines was super helpful and eased my mind when I felt
                                        overwhelmed.</p>
                                    <p className="text-center">Charisma & Cole <br></br>

                                        RICHMOND, VA</p>
                                </div>
                                <div><img className="mx-auto" src={group2} alt="" /></div>
                            </div>
                            <div className="px-6">
                                <div><img className="mx-auto" src={group1} alt="" /></div>
                                <div className="text-center  pt-4 pb-4">
                                    <p>I really enjoyed using the Knot App and found it very useful right away. When I began planning, I didn't know where to start. Following the guidelines was super helpful and eased my mind when I felt
                                        overwhelmed.</p>
                                    <p className="text-center">Charisma & Cole <br></br>

                                        RICHMOND, VA</p>
                                </div>
                                <div><img className="mx-auto" src={group2} alt="" /></div>
                            </div>
                        </div>
                        <div className="absolute left-1 right-1 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide4"><img src={arrow1} alt="" /></a>
                            <a href="#slide2"><img src={arrow2} alt="" /></a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        {/* review row 2*/}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto items-center justify-center pb-5">
                            <div className="px-6">
                                <div><img className="mx-auto" src={group1} alt="" /></div>
                                <div className="text-center pt-4 pb-4">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores et culpa laudantium perspiciatis voluptas laboriosam maxime molestiae doloribus, cumque quo, tenetur repudiandae dolorum ut autem consectetur nihil. Quod, fugiat commodi!</p>
                                    <p className="text-center">Charisma & Cole <br></br>

                                        RICHMOND, VA</p>
                                </div>
                                <div><img className="mx-auto" src={group2} alt="" /></div>
                            </div>
                            <div className="px-6">
                                <div><img className="mx-auto" src={group1} alt="" /></div>
                                <div className="text-center pt-4 pb-4">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores et culpa laudantium perspiciatis voluptas laboriosam maxime molestiae doloribus, cumque quo, tenetur repudiandae dolorum ut autem consectetur nihil. Quod, fugiat commodi!</p>
                                    <p className="text-center">Charisma & Cole <br></br>

                                        RICHMOND, VA</p>
                                </div>
                                <div><img className="mx-auto" src={group2} alt="" /></div>
                            </div>
                            <div className="px-6">
                                <div><img className="mx-auto" src={group1} alt="" /></div>
                                <div className="text-center  pt-4 pb-4">
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
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto items-center justify-center pb-5">
                            <div className="px-6">
                                <div><img className="mx-auto" src={group1} alt="" /></div>
                                <div className="text-center  pt-4 pb-4">
                                    <p>I really enjoyed using the Knot App and found it very useful right away. When I began planning, I didn't know where to start. Following the guidelines was super helpful and eased my mind when I felt
                                        overwhelmed.</p>
                                    <p className="text-center">Charisma & Cole <br></br>

                                        RICHMOND, VA</p>
                                </div>
                                <div><img className="mx-auto" src={group2} alt="" /></div>
                            </div>
                            <div className="px-6">
                                <div><img className="mx-auto" src={group1} alt="" /></div>
                                <div className="text-center  pt-4 pb-4">
                                    <p>I really enjoyed using the Knot App and found it very useful right away. When I began planning, I didn't know where to start. Following the guidelines was super helpful and eased my mind when I felt
                                        overwhelmed.</p>
                                    <p className="text-center">Charisma & Cole <br></br>

                                        RICHMOND, VA</p>
                                </div>
                                <div><img className="mx-auto" src={group2} alt="" /></div>
                            </div>
                            <div className="px-6">
                                <div><img className="mx-auto" src={group1} alt="" /></div>
                                <div className="text-center  pt-4 pb-4">
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
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto items-center justify-center pb-5">
                            <div className="px-6">
                                <div><img className="mx-auto" src={group1} alt="" /></div>
                                <div className="text-center  pt-4 pb-4">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores et culpa laudantium perspiciatis voluptas laboriosam maxime molestiae doloribus, cumque quo, tenetur repudiandae dolorum ut autem consectetur nihil. Quod, fugiat commodi!</p>
                                    <p className="text-center">Charisma & Cole <br></br>

                                        RICHMOND, VA</p>
                                </div>
                                <div><img className="mx-auto" src={group2} alt="" /></div>
                            </div>
                            <div className="px-6">
                                <div><img className="mx-auto" src={group1} alt="" /></div>
                                <div className="text-center  pt-4 pb-4">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores et culpa laudantium perspiciatis voluptas laboriosam maxime molestiae doloribus, cumque quo, tenetur repudiandae dolorum ut autem consectetur nihil. Quod, fugiat commodi!</p>
                                    <p className="text-center">Charisma & Cole <br></br>

                                        RICHMOND, VA</p>
                                </div>
                                <div><img className="mx-auto" src={group2} alt="" /></div>
                            </div>
                            <div className="px-6">
                                <div><img className="mx-auto" src={group1} alt="" /></div>
                                <div className="text-center  pt-4 pb-4">
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


        </div>
    );
};

export default CustomerReview;

