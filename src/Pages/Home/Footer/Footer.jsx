import appleImg from "../../../assets/images/footer/apple.png";
import googlePlayImg from "../../../assets/images/footer/googleplay.png";
import twitterImg from "../../../assets/images/footer/twitter.png";
import telegramImg from "../../../assets/images/footer/telegram.png";
import facebookImg from "../../../assets/images/footer/facebook.png";
import instagramImg from "../../../assets/images/footer/instagram.png";
import socialImg from "../../../assets/images/footer/social.png";
import mansImg from "../../../assets/images/footer/man.png";
import footerBg from "../../../assets/images/footer/footer-bg.png";
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <div className="bg-[#0B0A0A] py-10 px-20 space-y-6">
            <footer className="footer text-[#CED7DE]">
                <nav>
                    <h6 className="text-white font-semibold text-sm uppercase">PLANNING & INSPIRATION</h6>
                    <a className="link no-underline hover:text-[#B32134]">wedding ideas & etiquette</a>
                    <a className="link no-underline hover:text-[#B32134]">engagement</a>
                    <a className="link no-underline hover:text-[#B32134]">parties & events</a>
                    <a className="link no-underline hover:text-[#B32134]">wedding dresses</a>
                    <a className="link no-underline hover:text-[#B32134]">gifts</a>
                    <a className="link no-underline hover:text-[#B32134]">real Wedding photos</a>
                    <a className="link no-underline hover:text-[#B32134]">community</a>
                </nav>
                <nav>
                    <h6 className="text-white font-semibold text-sm uppercase">Planning tools</h6>
                    <a className="link no-underline hover:text-[#B32134]">wedding invitations</a>
                    <a className="link no-underline hover:text-[#B32134]">checklist</a>
                    <a className="link no-underline hover:text-[#B32134]">guest list</a>
                    <a className="link no-underline hover:text-[#B32134]">budget</a>
                    <a className="link no-underline hover:text-[#B32134]">Seating chart</a>
                    <a className="link no-underline hover:text-[#B32134]">Hotel Blocks</a>
                    <a className="link no-underline hover:text-[#B32134]">Cost Guide</a>
                </nav>
                <nav>
                    <h6 className="text-white font-semibold text-sm uppercase">Others</h6>
                    <a className="link no-underline hover:text-[#B32134]">our story</a>
                    <a className="link no-underline hover:text-[#B32134]">refer a friend</a>
                    <a className="link no-underline hover:text-[#B32134]">reviews</a>
                    <a className="link no-underline hover:text-[#B32134]">careers</a>
                    <a className="link no-underline hover:text-[#B32134]">contact us</a>
                    <a className="link no-underline hover:text-[#B32134]">help</a>
                </nav>
                <nav className="space-y-5">
                    <h6 className="text-white font-semibold text-sm uppercase">get the name of the app</h6>
                    <p className="w-56"><span className="text-white">Event planning in the palm of your hand with AI.</span> <span className="text-[#F2B7BF]">It’s all in the app.</span></p>
                    <div className="flex gap-3">
                        <Link><img src={googlePlayImg} alt="" /></Link>
                        <Link> <img src={appleImg} alt="" /></Link>
                    </div>
                    <p className="uppercase text-[#F8DBDF]">Coming soon...</p>
                </nav>
            </footer>
            <div className="bg-no-repeat bg-cover bg-center rounded-lg pt-4" style={{ backgroundImage: `url(${footerBg})` }}>
                <div className="md:flex justify-evenly items-center">
                    <div className="">
                        <h2 className="text2xl font-bold uppercase">Are you a vendor?</h2>
                        <p>Sign up to reach more couples and book more events!</p>
                    </div>
                    <div >
                        <img className="" src={mansImg} alt="" />
                    </div>
                    <div className="sm:mt-6">
                        <Link className="bg-[#B32134] text-white px-6 py-2 rounded-lg font-semibold">Start here</Link> <br></br>
                        <Link className="text-[#B32134] underline "><p className="mt-2">Visit vendor support</p></Link>
                    </div>
                </div>
            </div>


            <footer className="footer text-[#CED7DE]">
                <aside className="grid-flow-col items-center gap-8">
                    <p>Privacy policy</p>
                    <p>Terms of use</p>
                    <p>AI</p>
                </aside>
                <nav className="md:place-self-center md:justify-self-end">
                    <div className="grid grid-flow-col gap-4 mr-32">
                        <button><img src={instagramImg} alt="" /></button>
                        <button><img src={facebookImg} alt="" /></button>
                        <button><img src={socialImg} alt="" /></button>
                        <button><img src={telegramImg} alt="" /></button>
                        <button><img src={twitterImg} alt="" /></button>
                    </div>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;