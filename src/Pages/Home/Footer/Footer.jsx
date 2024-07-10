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
        <div className="bg-[#0B0A0A] py-10 px-10 md:px-20 space-y-6">
            <footer className="footer text-[#CED7DE]">
                <nav>
                    <h6 className="text-white font-semibold text-sm uppercase">PLANNING & INSPIRATION</h6>
                    <Link className="link no-underline hover:text-[#B32134]">wedding ideas & etiquette</Link>
                    <Link className="link no-underline hover:text-[#B32134]">engagement</Link>
                    <Link className="link no-underline hover:text-[#B32134]">parties & events</Link>
                    <Link className="link no-underline hover:text-[#B32134]">wedding dresses</Link>
                    <Link className="link no-underline hover:text-[#B32134]">gifts</Link>
                    <Link className="link no-underline hover:text-[#B32134]">real Wedding photos</Link>
                    <Link className="link no-underline hover:text-[#B32134]">community</Link>
                </nav>
                <nav>
                    <h6 className="text-white font-semibold text-sm uppercase">Planning tools</h6>
                    <Link className="link no-underline hover:text-[#B32134]">wedding invitations</Link>
                    <Link className="link no-underline hover:text-[#B32134]">checklist</Link>
                    <Link className="link no-underline hover:text-[#B32134]">guest list</Link>
                    <Link className="link no-underline hover:text-[#B32134]">budget</Link>
                    <Link className="link no-underline hover:text-[#B32134]">seating chart</Link>
                    <Link className="link no-underline hover:text-[#B32134]">hotel Blocks</Link>
                    <Link className="link no-underline hover:text-[#B32134]">cost Guide</Link>
                </nav>
                <nav>
                    <h6 className="text-white font-semibold text-sm uppercase">Others</h6>
                    <Link className="link no-underline hover:text-[#B32134]">our story</Link>
                    <Link className="link no-underline hover:text-[#B32134]">refer a friend</Link>
                    <Link className="link no-underline hover:text-[#B32134]">reviews</Link>
                    <Link className="link no-underline hover:text-[#B32134]">careers</Link>
                    <Link className="link no-underline hover:text-[#B32134]">contact us</Link>
                    <Link className="link no-underline hover:text-[#B32134]">help</Link>
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
                <div className="md:flex justify-between items-center px-3 md:px-10">
                    <div className="">
                        <h2 className="text2xl font-bold uppercase">Are you a vendor?</h2>
                        <p>Sign up to reach more couples and book more events!</p>
                    </div>
                    <div >
                        <img className="mx-auto" src={mansImg} alt="" />
                    </div>
                    <div className="pt-5 pb-3 text-center">
                        <Link className="bg-[#B32134] text-white px-9 py-2 rounded-lg font-semibold">Start here</Link> <br></br>
                        <Link className="text-[#B32134] underline "><p className="mt-2">Visit vendor support</p></Link>
                    </div>
                </div>
            </div>


            <footer className="footer text-[#CED7DE]">
                <aside className="grid-flow-col items-center gap-8">
                    <Link className="hover:text-[#B32134]">Privacy policy</Link>
                    <Link className="hover:text-[#B32134]">Terms of use</Link>
                    <Link className="hover:text-[#B32134]">AI</Link>
                </aside>
                <nav className="md:place-self-center md:justify-self-end">
                    <div className="grid grid-flow-col gap-4 ml-7 md:mr-32">
                        <Link to="https://www.instagram.com/" target="_blank"><img src={instagramImg} alt="" /></Link>
                        <Link to="https://www.facebook.com/" target="_blank"><img src={facebookImg} alt="" /></Link>
                        <Link to="https://www.youtube.com/" target="_blank"><img src={socialImg} alt="" /></Link>
                        <Link to="https://telegram.org/" target="_blank"><img src={telegramImg} alt="" /></Link>
                        <Link to="https://x.com/?lang=en" target="_blank"><img src={twitterImg} alt="" /></Link>
                    </div>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;