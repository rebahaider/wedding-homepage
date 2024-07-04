
import { Link } from "react-router-dom";
import coverImg from "../../../assets/images/Home/cover.png";
import vectorImg from "../../../assets/images/Home/Vector.png";
import mailImg from "../../../assets/images/Home/mail.png";
import notificationImg from "../../../assets/images/Home/notification (1).png";

const Navbar = () => {

    const navLinks = <>
        <li><Link>Vendors</Link></li>
        <li><Link>Features</Link></li>
        <li><Link>About AI</Link></li>
    </>
    return (
        <div className="">
            <img className="rounded-b-full relative" src={coverImg} alt="" />
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
                            {navLinks}
                        </ul>
                    </div>
                    <img className="pl-6" src={vectorImg} alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end mr-8 gap-4">
                    <div className="flex gap-6">
                        <div className="flex">
                            <img src={mailImg} alt="" />
                            <span className="absolute right-[175px] top-4"><sup className="bg-[#F2B7BF] p-1 rounded-xl ">999</sup></span>
                        </div>
                        <div className="flex">
                            <img src={notificationImg} alt="" />
                            <span className="absolute right-[127px] top-4"><sup className="bg-[#F2B7BF] p-1 rounded-xl ">999</sup></span>
                        </div>
                    </div>
                    <button className="btn btn-outline btn-error rounded-full">Sign Up</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;