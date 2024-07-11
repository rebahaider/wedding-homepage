
import { Link, NavLink } from "react-router-dom";
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
import rightArrow from "../../../assets/images/Home/rightArrow.png";
import notificationImg from "../../../assets/images/Home/notification (1).png";
// fretures icons
import icon1 from "../../../assets/images/Home/featuresIcons/icon1.png";
import icon2 from "../../../assets/images/Home/featuresIcons/icon2.png";
import icon3 from "../../../assets/images/Home/featuresIcons/icon3.png";
import icon4 from "../../../assets/images/Home/featuresIcons/icon4.png";
import icon5 from "../../../assets/images/Home/featuresIcons/icon5.png";
import icon6 from "../../../assets/images/Home/featuresIcons/icon6.png";
import icon7 from "../../../assets/images/Home/featuresIcons/icon7.png";
import icon8 from "../../../assets/images/Home/featuresIcons/icon8.png";

const Navbar = () => {

    // const navLinks = <>
    //     <li><Link>Vendors</Link></li>
    //     <li><Link>Features</Link></li>
    //     <li><Link>About AI</Link></li>
    // </>
    return (
        <div className="bg-[#FFF7F8]">
            <div className="bg-no-repeat bg-cover min-h-screen rounded-b-full" style={{ backgroundImage: `url(${coverImg})` }}>
                {/* navbar */}
                <div className="container mx-auto navbar bg-white rounded-full absolute top-10 md:left-32 md:w-[1105px]">
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
                        <NavLink>
                            <div className="dropdown dropdown-hover ">
                                <div tabIndex={0} role="button" className=" m-1  hover:text-[#8C1823]">Vendors</div>
                                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                                    <li><a>Item 1</a></li>
                                    <li><a>Item 2</a></li>
                                </ul>
                            </div>
                        </NavLink>
                        {/* fatures */}
                        <NavLink>
                            <div className="dropdown dropdown-hover">
                                <div tabIndex={0} role="button" className=" m-1 hover:text-[#8C1823]">Features</div>
                                <ul tabIndex={0} className="dropdown-content h-[290px] menu bg-base-100 rounded-box z-[1] p-2 shadow">
                                    <div className="w-[1000px]">
                                        <div className=" ">
                                            <div className="space-y-3 pl-10 pb-20">
                                                <h1 className="text-2xl font-semibold">Features</h1>
                                                <div className="grid grid-cols-3 gap-10">
                                                    <Link>
                                                        <div className="flex gap-3">
                                                            <img src={icon1} alt="" />
                                                            <p>Budget management tools</p>
                                                        </div>
                                                    </Link>
                                                    <Link>
                                                        <div className="flex gap-3">
                                                            <img src={icon2} alt="" />
                                                            <p>Outfit recommendations</p>
                                                        </div>
                                                    </Link>
                                                    <Link>
                                                        <div className="flex gap-3">
                                                            <img src={icon3} alt="" />
                                                            <p>User Registration and Profiles</p>

                                                        </div>
                                                    </Link>
                                                    <Link>
                                                        <div className="flex gap-3">
                                                            <img src={icon4} alt="" />
                                                            <p>Guest list management</p>
                                                        </div>
                                                    </Link>
                                                    <Link>
                                                        <div className="flex gap-3">
                                                            <img src={icon5} alt="" />
                                                            <p>Ticketing and Reservations</p>
                                                        </div>
                                                    </Link>
                                                    <Link>
                                                        <div className="flex gap-3">
                                                            <img src={icon6} alt="" />
                                                            <p>Event Listings and Calendars</p>

                                                        </div>
                                                    </Link>
                                                    <Link>
                                                        <div className="flex gap-3">
                                                            <img src={icon7} alt="" />
                                                            <p>Email Notifications and Reminders</p>
                                                        </div>
                                                    </Link>
                                                    <Link>
                                                        <div className="flex gap-3">
                                                            <img src={icon8} alt="" />
                                                            <p>Payment Integration</p>
                                                        </div>
                                                    </Link>
                                                    <Link><div className="flex gap-4">
                                                        <p className="text-[#B32134] font-bold">See All</p>
                                                        <img src={rightArrow} alt="" />
                                                    </div>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </ul>
                            </div>
                        </NavLink>
                        {/* about ai */}
                        <NavLink>
                            <div className="dropdown dropdown-hover">
                                <div tabIndex={0} role="button" className=" m-1 hover:text-[#8C1823]">About AI</div>
                                <ul tabIndex={0} className="dropdown-content h-[290px] menu bg-no-repeat bg-cover rounded-box z-[1]" style={{ backgroundImage: `url(${aiCover})` }}>
                                    <div className="w-[1000px]">
                                        <div className="hero ">
                                            <div className="space-y-3 pl-10 pb-20">
                                                <h1 className="text-2xl font-semibold">Introducing Event Management AI</h1>
                                                <p className="">
                                                    Revolutionizing Your Event Experience
                                                </p>
                                                <p className="pr-64">
                                                    Experience the future of event planning with our cutting-edge AI technology. Our AI-driven platform enhances every aspect of your event, from personalized recommendations and seamless logistics to real-time analytics and interactive attendee engagement.
                                                </p>
                                                <Link>
                                                    <div className="flex gap-4 pt-3">
                                                        <p className="text-[#B32134] font-bold">Learn More</p>
                                                        <img src={rightArrow} alt="" />
                                                    </div></Link>
                                            </div>
                                        </div>
                                    </div>
                                </ul>
                            </div>
                        </NavLink>
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
                        <Link className="text-[#B32134] hover:bg-[#FFF7F8] border border-[#B32134]
                            px-12 py-2 rounded-[32px] text-[14px]">Signup</Link>
                    </div>
                </div>
                <div className="container mx-auto pt-32">
                    <div className="bg-no-repeat md:bg-contain bg-center min-h-screen text-center pt-4 p-3 md:pt-32" style={{ backgroundImage: `url(${cover2Img})` }}>
                        <div className="space-y-10 pb-4">
                            <h1 className="md:text-5xl font-bold">Create Your Dream Event with <br /> <span className="text-[#B32134]">AI-Powered</span> Precision</h1>
                            <p className="md:px-60">Welcome to the Future of Wedding Planning! Let our advanced AI technology tailor-make your perfect day. Say goodbye to stress and hello to seamless organization. Explore our curated selection of top-tier vendors, personalized recommendations, and innovative planning tools.</p>
                        </div>
                        <div className="space-y-[25px] md:px-64">
                            <div className="grid md:grid-cols-3 gap-4">
                                <div className=" relative flex items-center">
                                    <select className="select select-bordered w-full max-w-xs bg-[#FFF7F8] border-[#991C2C] pl-10">
                                        <option disabled selected>Event Topics</option>
                                        <option>Beauty Salon</option>
                                        <option>Bridal Salon</option>
                                        <option>Caterers</option>
                                    </select>
                                    <img className="absolute left-2 top-3" src={list} alt="" />
                                    </div>
                                <div className=" relative flex items-center">
                                    <select className="select select-bordered w-full max-w-xs bg-[#FFF7F8] border-[#991C2C] pl-10">
                                        <option disabled selected>Vendor Categories</option>
                                        <option>Beauty Salon</option>
                                        <option>Bridal Salon</option>
                                        <option>Caterers</option>
                                    </select>
                                    <img className="absolute left-2 top-3" src={vendor} alt="" />
                                    </div>
                                <div className=" relative flex items-center">
                                    <select className="select select-bordered w-full max-w-xs bg-[#FFF7F8] border-[#991C2C] pl-10">
                                        <option disabled selected>Budget</option>
                                        <option>Beauty Salon</option>
                                        <option>Bridal Salon</option>
                                        <option>Caterers</option>
                                    </select>
                                    <img className="absolute left-2 top-3" src={dolar} alt="" />
                                    </div>
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