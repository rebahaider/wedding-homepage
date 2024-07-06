
import { Link } from "react-router-dom";
import coverImg from "../../../assets/images/Home/cover.png";
import cover2Img from "../../../assets/images/Home/cover2.png";
import vectorImg from "../../../assets/images/Home/Vector.png";
import mailImg from "../../../assets/images/Home/mail.png";
import list from "../../../assets/images/Home/list.png";
import search from "../../../assets/images/Home/search.png";
import vendor from "../../../assets/images/Home/vendor.png";
import calender from "../../../assets/images/Home/calendar.png";
import location from "../../../assets/images/Home/location.png";
import dolar from "../../../assets/images/Home/dolar.png";
import aiCover from "../../../assets/images/Home/aiCover.png";
import notificationImg from "../../../assets/images/Home/notification (1).png";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {

    // const navLinks = <>
    //     <li><Link>Vendors</Link></li>
    //     <li><Link>Features</Link></li>
    //     <li><Link>About AI</Link></li>
    // </>
    return (
        <div className="bg-[#FFF7F8]">
            <div className="bg-no-repeat bg-cover min-h-screen rounded-b-full" style={{ backgroundImage: `url(${coverImg})` }}>

                <div className="navbar bg-white rounded-full absolute top-10 md:left-32 md:w-[1105px]">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                {/* {navLinks} */}


                            </ul>
                        </div>
                        <Link><img className="pl-6" src={vectorImg} alt="" /></Link>
                    </div>
                    <div className="navbar-center hidden lg:flex gap-6">
                        {/* vendor */}
                        <div className="dropdown dropdown-hover ">
                            <div tabIndex={0} role="button" className=" m-1  hover:text-[#8C1823]">Vendors</div>
                            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                                <li><a>Item 1</a></li>
                                <li><a>Item 2</a></li>
                            </ul>
                        </div>
                        {/* fatures */}
                        <div className="dropdown dropdown-hover">
                            <div tabIndex={0} role="button" className=" m-1 hover:text-[#8C1823]">Features</div>
                            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                                <li><a>Item 1</a></li>
                                <li><a>Item 2</a></li>
                            </ul>
                        </div>
                        {/* about ai */}
                        <div className="dropdown dropdown-hover">
                            <div tabIndex={0} role="button" className=" m-1 hover:text-[#8C1823]">About AI</div>
                            <ul tabIndex={0} className="dropdown-content menu bg-no-repeat bg-cover rounded-box z-[1]" style={{ backgroundImage: `url(${aiCover})`}}>
                                <div className="w-[1000px]">
                                    <div className=" text-center">
                                        <div className="max-w-md">
                                            <h1 className="text-5xl font-bold">Hello there</h1>
                                            <p className="py-6">
                                                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                                                quasi. In deleniti eaque aut repudiandae et a id nisi.
                                            </p>
                                            <button className="btn btn-primary">Get Started</button>
                                        </div>
                                    </div>
                                </div>
                            </ul>
                        </div>
                    </div>


                    <div className="navbar-end mr-8 gap-8">
                        <div className="indicator">
                            <span className="indicator-item badge p-1 bg-[#F2B7BF]">999</span>
                            <button><img src={mailImg} alt="" /></button>
                        </div>
                        <div className="indicator">
                            <span className="indicator-item badge p-1 bg-[#F2B7BF]">999</span>
                            <button><img src={notificationImg} alt="" /></button>
                        </div>
                        <Link className="text-[#B32134] border border-[#B32134]
                            px-[26px] py-[10px] rounded-[32px] text-[14px]">Signup</Link>
                    </div>
                </div>
                <div className="pt-32">
                    <div className="bg-no-repeat md:bg-contain bg-center min-h-screen text-center pt-4 p-3 md:pt-32" style={{ backgroundImage: `url(${cover2Img})` }}>
                        <div className="space-y-10 pb-4">
                            <h1 className="md:text-5xl font-bold">Create Your Dream Event with <br /> <span className="text-[#B32134]">AI-Powered</span> Precision</h1>
                            <p className="md:px-64">Welcome to the Future of Wedding Planning! Let our advanced AI technology tailor-make your perfect day. Say goodbye to stress and hello to seamless organization. Explore our curated selection of top-tier vendors, personalized recommendations, and innovative planning tools</p>
                        </div>
                        <div className="space-y-[25px] md:px-64">
                            <div className="grid md:grid-cols-3 gap-4">
                                <label className="input input-bordered bg-[#FFF7F8] border-[#991C2C] flex items-center gap-2">
                                    <img src={list} alt="" />
                                    <input type="text" className="grow" placeholder="Event topics" />
                                    <button><IoIosArrowDown /></button>
                                </label>
                                <label className="input input-bordered bg-[#FFF7F8] border-[#991C2C] flex items-center gap-2">
                                    <img src={vendor} alt="" />
                                    <input type="text" className="grow" placeholder="Vendor categories" />
                                    <button><IoIosArrowDown /></button>
                                </label>
                                <label className="input input-bordered bg-[#FFF7F8] border-[#991C2C] flex items-center gap-2">
                                    <img src={dolar} alt="" />
                                    <input type="text" className="grow" placeholder="Budget" />
                                    <button><IoIosArrowDown /></button>
                                </label>
                            </div>
                            <div className="grid md:grid-cols-2 gap-4">
                                <label className="input input-bordered bg-[#FFF7F8] border-[#991C2C] flex items-center gap-2">
                                    <input type="text" className="grow" placeholder="Location" />
                                    <button><img src={location} alt="" /></button>
                                </label>
                                <label className="input input-bordered bg-[#FFF7F8] border-[#991C2C] flex items-center gap-2">
                                    <input type="text" className="grow" placeholder="Choose your date" />
                                    <button>
                                        <img src={calender} alt="" />
                                    </button>
                                </label>
                            </div>
                        </div>
                        <div className=" md:px-64 pt-8">
                            <label className="input input-bordered bg-[#B32134] text-white border-[#991C2C] flex justify-center items-center gap-2">
                                <button className="font-semibold text-[16px]">Create your team</button>
                                <img src={search} alt="" />
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;