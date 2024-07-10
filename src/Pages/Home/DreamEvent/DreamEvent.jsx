import img1 from "../../../assets/images/Home/img1.png";
import img2 from "../../../assets/images/Home/img2.png";
import img3 from "../../../assets/images/Home/img3.png";
import img4 from "../../../assets/images/Home/img4.png";
import img5 from "../../../assets/images/Home/img5.png";
import img6 from "../../../assets/images/Home/img6.png";
import img7 from "../../../assets/images/Home/img7.png";
import group from "../../../assets/images/latest-news/Group.png";
import { FaArrowRightLong } from "react-icons/fa6";


const DreamEvent = () => {
    return (
        <div className="bg-[#FFF7F8] pb-20">
            <div className="pt-20 space-y-4">
                <h3 className="text-3xl font-bold text-center">Your Dream Team for the Event </h3>
                <img className="mx-auto" src={group} alt="" />
            </div>
            <div className="grid md:grid-cols-4 gap-6 lg:px-40 mt-10">
                <div className="card card-compact bg-base-100 shadow-xl rounded-t-[32px]">
                    <figure>
                        <img className="w-full" src={img1} alt="picture" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title text-[#323F49] font-semibold text-2xl">Beauty Salon</h2>
                        <p className="text-[14px]">123 Vendor found</p>
                        <div className="card-actions">
                            <button className="text-[#B32134] font-semibold border border-[#B32134]
                            px-8 py-4 w-full rounded-lg text-[14px]">Get query</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact bg-base-100 shadow-xl rounded-t-[32px]">
                    <figure>
                        <img className="w-full" src={img2} alt="picture" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title text-[#323F49] font-semibold text-2xl">Bridal Salon</h2>
                        <p className="text-[14px]">153 Vendor found</p>
                        <div className="card-actions">
                            <button className="text-[#B32134] font-semibold border border-[#B32134]
                            px-8 py-4 w-full rounded-lg text-[14px]">Get query</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact bg-base-100 shadow-xl rounded-t-[32px]">
                    <figure>
                        <img className="w-full" src={img3} alt="picture" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title text-[#323F49] font-semibold  text-2xl">Caterers</h2>
                        <p className="text-[14px]">123 Vendor found</p>
                        <div className="card-actions">
                            <button className="text-[#B32134] font-semibold border border-[#B32134]
                            px-8 py-4 w-full rounded-lg text-[14px]">Get query</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact bg-base-100 shadow-xl rounded-t-[32px]">
                    <figure>
                        <img className="w-full" src={img4} alt="picture" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title text-[#323F49] font-semibold  text-2xl">Florists</h2>
                        <p className="text-[14px]">123 Vendor found</p>
                        <div className="card-actions">
                            <button className="text-[#B32134] font-semibold border border-[#B32134]
                            px-8 py-4 w-full rounded-lg text-[14px]">Get query</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact bg-base-100 shadow-xl rounded-t-[32px]">
                    <figure>
                        <img className="w-full" src={img5} alt="picture" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title text-[#323F49] font-semibold  text-2xl">Videographers</h2>
                        <p className="text-[14px]">123 Vendor found</p>
                        <div className="card-actions">
                            <button className="text-[#B32134] font-semibold border border-[#B32134]
                            px-8 py-4 w-full rounded-lg text-[14px]">Get query</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact bg-base-100 shadow-xl rounded-t-[32px]">
                    <figure>
                        <img className="w-full" src={img6} alt="picture" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title text-[#323F49] font-semibold  text-2xl">Rentals</h2>
                        <p className="text-[14px]">123 Vendor found</p>
                        <div className="card-actions">
                            <button className="text-[#B32134] font-semibold border border-[#B32134]
                            px-8 py-4 w-full rounded-lg text-[14px]">Get query</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact bg-base-100 shadow-xl rounded-t-[32px]">
                    <figure>
                        <img className="w-full" src={img7} alt="picture" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title text-[#323F49] font-semibold text-2xl">Venues</h2>
                        <p className="text-[14px]">123 Vendor found</p>
                        <div className="card-actions">
                            <button className="text-[#B32134] font-semibold border border-[#B32134]
                            px-8 py-4 w-full rounded-lg text-[14px]">Get query</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact bg-base-100 shadow-xl rounded-t-[32px] flex justify-center items-center">
                    <div className="text-center">
                        <h3 className="font-semibold text-[14px]">See all vendors</h3>
                        <button>
                            <FaArrowRightLong />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DreamEvent;