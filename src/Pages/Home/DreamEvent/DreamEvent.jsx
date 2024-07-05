import img1 from "../../../assets/images/Home/img1.png";
import img2 from "../../../assets/images/Home/img2.png";
import img3 from "../../../assets/images/Home/img3.png";
import img4 from "../../../assets/images/Home/img4.png";
import img5 from "../../../assets/images/Home/img5.png";
import img6 from "../../../assets/images/Home/img6.png";
import img7 from "../../../assets/images/Home/img7.png";
import { FaArrowRightLong } from "react-icons/fa6";


const DreamEvent = () => {
    return (
        <div className="bg-[#FFF7F8] pb-20">
            <div className="grid md:grid-cols-4 gap-x-6 gap-y-8 max-w-7xl mx-auto mt-10">
                <div className="card card-compact bg-base-100 shadow-xl">
                    <figure>
                        <img src={img1} alt="picture" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title text-[#323F49] font-semibold  text-2xl">Beauty Salon</h2>
                        <p className="text-[14px]">123 Vendor found</p>
                        <div className="card-actions">
                            <button className="text-[#B32134] font-semibold border border-[#B32134]
                            px-8 py-4 w-[200px] rounded-lg text-[14px]">Get query</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact bg-base-100 shadow-xl">
                    <figure>
                        <img src={img2} alt="picture" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title text-[#323F49] font-semibold  text-2xl">Beauty Salon</h2>
                        <p className="text-[14px]">123 Vendor found</p>
                        <div className="card-actions">
                            <button className="text-[#B32134] font-semibold border border-[#B32134]
                            px-8 py-4 w-[200px] rounded-lg text-[14px]">Get query</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact bg-base-100 shadow-xl">
                    <figure>
                        <img src={img3} alt="picture" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title text-[#323F49] font-semibold  text-2xl">Beauty Salon</h2>
                        <p className="text-[14px]">123 Vendor found</p>
                        <div className="card-actions">
                            <button className="text-[#B32134] font-semibold border border-[#B32134]
                            px-8 py-4 w-[200px] rounded-lg text-[14px]">Get query</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact bg-base-100 shadow-xl">
                    <figure>
                        <img src={img4} alt="picture" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title text-[#323F49] font-semibold  text-2xl">Beauty Salon</h2>
                        <p className="text-[14px]">123 Vendor found</p>
                        <div className="card-actions">
                            <button className="text-[#B32134] font-semibold border border-[#B32134]
                            px-8 py-4 w-[200px] rounded-lg text-[14px]">Get query</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact bg-base-100 shadow-xl">
                    <figure>
                        <img src={img5} alt="picture" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title text-[#323F49] font-semibold  text-2xl">Beauty Salon</h2>
                        <p className="text-[14px]">123 Vendor found</p>
                        <div className="card-actions">
                            <button className="text-[#B32134] font-semibold border border-[#B32134]
                            px-8 py-4 w-[200px] rounded-lg text-[14px]">Get query</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact bg-base-100 shadow-xl">
                    <figure>
                        <img src={img6} alt="picture" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title text-[#323F49] font-semibold  text-2xl">Beauty Salon</h2>
                        <p className="text-[14px]">123 Vendor found</p>
                        <div className="card-actions">
                            <button className="text-[#B32134] font-semibold border border-[#B32134]
                            px-8 py-4 w-[200px] rounded-lg text-[14px]">Get query</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact bg-base-100 shadow-xl">
                    <figure>
                        <img src={img7} alt="picture" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title text-[#323F49] font-semibold  text-2xl">Beauty Salon</h2>
                        <p className="text-[14px]">123 Vendor found</p>
                        <div className="card-actions">
                            <button className="text-[#B32134] font-semibold border border-[#B32134]
                            px-8 py-4 w-[200px] rounded-lg text-[14px]">Get query</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact bg-base-100 shadow-xl flex justify-center items-center">
                    <div className="text-center">
                        <h3 className="font-semibold text-[14px]">see all vendors</h3>
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