import festive from "../../../assets/images/Home/festive.png";
import timer from "../../../assets/images/Home/timer.png";
import moneyBag from "../../../assets/images/Home/moneyBag.png";
import supplier from "../../../assets/images/Home/supplier.png";
import target from "../../../assets/images/Home/target.png";
const EventTool = () => {
    return (
        <div className="bg-[#FFF7F8] ">
            <div className="relative min-h-screen md:h-[1000px] bg-no-repeat bg-cover max-w-full" style={{ backgroundImage: `url(${festive})` }}>
                <div className=" lg:px-40">
                <div className="absolute -bottom-24 border-2 border-white rounded-3xl bg-gradient-to-t from-[#FFF3F1] to-[#FFFFFF]  py-10 pl-16 pr-20">
                    <h1 className="font-bold text-2xl">Introducing Our Powerful <span className="text-[#B32134]">AI Event Management Tool</span></h1>
                    <p className="font-medium text-[16px]">At the heart of our approach lies our powerful AI event management tool – a game-changer in the world of event planning. <br /> Designed to streamline the planning process and enhance efficiency, our AI tool utilizes advanced algorithms and machine <br /> learning to optimize every aspect of your event.</p>
                </div>
                </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6 mt-32 lg:px-40">
                <div className="border-2 border-white rounded-3xl bg-gradient-to-t from-[#FFF3F1] to-[#FFFFFF] py-10 px-6 ">
                    <img src={target} alt="" />
                    <h1 className="font-bold text-[16px]">Personalized Recommendations</h1>
                    <p className="text-[16px]">Our AI tool analyzes your preferences, budget, and requirements to provide personalized recommendations for venues, vendors, and more.</p>
                </div>
                <div className="border-2 border-white rounded-3xl bg-gradient-to-t from-[#FFF3F1] to-[#FFFFFF] space-y-4 py-10 px-6">
                    <img src={moneyBag} alt="" />
                    <h1 className="text-[16px] font-bold">Smart Budgeting</h1>
                    <p className="text-[16px]">Say goodbye to budgeting woes with our AI tool, which helps you allocate funds effectively and track expenses in real-time.</p>
                </div>
                <div className="border-2 border-white rounded-3xl bg-gradient-to-t from-[#FFF3F1] to-[#FFFFFF] space-y-4 py-10 px-6">
                    <img src={supplier} alt="" />
                    <h1 className="font-bold text-[16px]">Seamless Coordination</h1>
                    <p className="text-[16px]">From scheduling appointments to sending reminders, our AI tool ensures seamless coordination between all stakeholders involved in your event.</p>
                </div>
                <div className="border-2 border-white rounded-3xl bg-gradient-to-t from-[#FFF3F1] to-[#FFFFFF] space-y-4 py-10 px-6">
                    <img src={timer} alt="" />
                    <h1 className="font-bold text-[16px]">Real-Time Insights</h1>
                    <p className="font-medium text-[16px]">Gain valuable insights into attendee engagement, feedback, and preferences, allowing you to make data-driven decisions and optimize your event in real-time.</p>
                </div>
            </div>
            <div className="flex justify-center items-center mt-10">
                <button className="bg-[#B32134] text-white font-bold rounded-lg py-4 px-11">Signup for free</button>
            </div>
        </div>
    );
};

export default EventTool;