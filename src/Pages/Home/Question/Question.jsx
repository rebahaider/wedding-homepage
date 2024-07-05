import group from "../../../assets/images/latest-news/Group.png";
import activeArrow from "../../../assets/images/question/active-arrow.png";
import arrow from "../../../assets/images/question/arrow.png";
const Question = () => {
    return (

        <div className="bg-[#FFF7F8] space-y-8">
            <div className=" pt-32">
                <h3 className="text-3xl font-bold text-center">Frequently Asked Questions</h3>
                <img className="mx-auto" src={group} alt="" />
            </div>
            <div className="grid md:grid-cols-2 gap-8 mx-8">
                {/* Accordion part */}
                <div className="bg-white border border-[#F8DBDF] rounded-3xl p-4">
                    <div className="collapse">
                        <input type="radio" name="my-accordion-2" defaultChecked />
                        <div className="collapse-title text-xl font-medium bg-[#FFF7F8] rounded-xl flex items-center gap-6">
                            <h3 className="text-lg font-medium">How does your AI vendor team creation feature work?</h3>
                            <img src={activeArrow} alt="" />
                        </div>
                    </div>
                    <div className="collapse text-xl font-medium items-center gap-6">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium rounded-xl flex">
                            <h3 className="text-lg font-medium">Can I customize the vendor recommendations provided by the AI?</h3>
                            <img src={arrow} alt="" />
                        </div>
                    </div>
                    <div className="collapse items-center gap-6">
                        <input type="radio" name="my-accordion-2"  />
                        <div className="collapse-title text-xl font-medium rounded-xl flex">
                            <h3 className="text-lg font-medium">Are the vendors recommended by your AI platform vetted and reliable?</h3>
                            <img src={arrow} alt="" />
                        </div>
                    </div>
                    <div className="collapse items-center gap-6">
                        <input type="radio" name="my-accordion-2"  />
                        <div className="collapse-title text-xl font-medium rounded-xl flex">
                            <h3 className="text-lg font-medium">Is there a cost associated with using your AI vendor team creation feature?</h3>
                            <img src={arrow} alt="" />
                        </div>
                    </div>
                    <div className="collapse items-center gap-6">
                        <input type="radio" name="my-accordion-2"  />
                        <div className="collapse-title text-xl font-medium rounded-xl flex">
                            <h3 className="text-lg font-medium">What if I have specific requirements or preferences that are not covered by the AI recommendations?</h3>
                            <img src={arrow} alt="" />
                        </div>
                    </div>
                </div>
                {/* paragraph part */}
                <div className="bg-[#F8DBDF] rounded-3xl">
                    <p className="px-[50px] p-8 md:pt-[60px] text-xl font-normal">Our AI vendor team creation feature utilizes advanced algorithms to analyze your budget and location preferences. It then generates personalized recommendations for caterers, photographers, florists, DJs, and venues that meet your criteria.</p>
                </div>
            </div>
        </div>
    );
};

export default Question;