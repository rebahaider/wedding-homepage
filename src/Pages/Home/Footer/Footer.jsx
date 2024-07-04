import appleImg from "../../../assets/images/footer/apple.png";
import googlePlayImg from "../../../assets/images/footer/googleplay.png";
import twitterImg from "../../../assets/images/footer/twitter.png";
import telegramImg from "../../../assets/images/footer/telegram.png";
import facebookImg from "../../../assets/images/footer/facebook.png";
import instagramImg from "../../../assets/images/footer/instagram.png";
import socialImg from "../../../assets/images/footer/social.png";
const Footer = () => {
    return (
        <div>
            <footer className="footer bg-[#0B0A0A] text-[#CED7DE] p-10">
                <nav>
                    <h6 className="text-white font-semibold text-sm uppercase">PLANNING & INSPIRATION</h6>
                    <a className="link link-hover">wedding ideas & etiquette</a>
                    <a className="link link-hover">engagement</a>
                    <a className="link link-hover">parties & events</a>
                    <a className="link link-hover">wedding dresses</a>
                    <a className="link link-hover">gifts</a>
                    <a className="link link-hover">real Wedding photos</a>
                    <a className="link link-hover">community</a>
                </nav>
                <nav>
                    <h6 className="text-white font-semibold text-sm uppercase">Planning tools</h6>
                    <a className="link link-hover">wedding invitations</a>
                    <a className="link link-hover">checklist</a>
                    <a className="link link-hover">guest list</a>
                    <a className="link link-hover">budget</a>
                    <a className="link link-hover">Seating chart</a>
                    <a className="link link-hover">Hotel Blocks</a>
                    <a className="link link-hover">Cost Guide</a>
                </nav>
                <nav>
                    <h6 className="text-white font-semibold text-sm uppercase">Others</h6>
                    <a className="link link-hover">our story</a>
                    <a className="link link-hover">refer a friend</a>
                    <a className="link link-hover">reviews</a>
                    <a className="link link-hover">careers</a>
                    <a className="link link-hover">contact us</a>
                    <a className="link link-hover">help</a>
                </nav>
                <nav className="space-y-5">
                    <h6 className="text-white font-semibold text-sm uppercase">get the name of the app</h6>
                    <p className="w-56"><span className="text-white">Event planning in the palm of your hand with AI.</span> <span className="text-[#F2B7BF]">It’s all in the app.</span></p>
                    <div className="flex gap-3">
                        <img src={googlePlayImg} alt="" />
                        <img src={appleImg} alt="" />
                    </div>
                    <p className="uppercase text-[#F8DBDF]">Coming soon...</p>
                </nav>
            </footer>
            <footer className="footer bg-[#0B0A0A] text-[#CED7DE] p-10">
                <aside className="grid-flow-col items-center gap-8">

                    <p>Privacy policy</p>
                    <p>Terms of use</p>
                    <p>AI</p>

                </aside>
                <nav className="md:place-self-center md:justify-self-end">
                    <div className="grid grid-flow-col gap-4 mr-32">
                        <img src={instagramImg} alt="" />
                        <img src={facebookImg} alt="" />
                        <img src={socialImg} alt="" />
                        <img src={telegramImg} alt="" />
                        <img src={twitterImg} alt="" />
                    </div>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;