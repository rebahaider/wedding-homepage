import news1 from "../../../../assets/images/latest-news/news1.png";
import news2 from "../../../../assets/images/latest-news/news2.png";
import news3 from "../../../../assets/images/latest-news/news3.png";
import news4 from "../../../../assets/images/latest-news/news4.png";
import group from "../../../../assets/images/latest-news/Group.png";
import { Link } from "react-router-dom";
const LatestNews = () => {
    return (
        <div className="container mx-auto">
            <div className="mt-20 space-y-4">
                <h3 className="text-3xl font-bold text-center">Latest News</h3>
                <img className="mx-auto" src={group} alt="" />
            </div>
            <div className="grid md:grid-cols-2 gap-4 px-10 md:px-40 mt-12 mb-28">
                {/* news 1 */}
                <div className="card md:card-side bg-[#FAFAFA] border border-[#F8DBDF] rounded-3xl space-x-4">
                    <figure className="md:w-2/5">
                        <img className="h-full rounded-3xl"
                            src={news1} alt="Album" />
                    </figure>
                    <div className="md:w-3/5 px-2 flex items-center">
                        <div className="">
                            <h2 className="card-title pt-4 pb-4">New Trends in Wedding Decor</h2>
                            <p>Discover how couples are incorporating eco-friendly elements into their wedding decor, from recycled materials to locally</p>
                            <div className="card-actions pt-6 pb-12">
                                <Link className="text-[#B32134] font-bold border border-[#B32134]
                            px-4 py-2 rounded-lg text-[14px]">Read More</Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* news 2 */}
                <div className="card md:card-side bg-[#FAFAFA] border border-[#F8DBDF] rounded-3xl space-x-4">
                    <figure className="md:w-2/5">
                        <img className="h-full rounded-3xl"
                            src={news2} alt="Album" />
                    </figure>
                    <div className="md:w-3/5 px-2 flex items-center">
                        <div className="">
                            <h2 className="card-title pt-4 pb-4">New Trends in Wedding Decor</h2>
                            <p>Discover how couples are incorporating eco-friendly elements into their wedding decor, from recycled materials to locally</p>
                            <div className="card-actions pt-6 pb-12">
                                <Link className="text-[#B32134] font-bold border border-[#B32134]
                            px-4 py-2 rounded-lg text-[14px]">Read More</Link>
                            </div>
                        </div>
                    </div>
                </div>
                {/* news 3 */}
                <div className="card md:card-side bg-[#FAFAFA] border border-[#F8DBDF] rounded-3xl space-x-4">
                    <figure className="md:w-2/5">
                        <img className="h-full rounded-3xl"
                            src={news3} alt="Album" />
                    </figure>
                    <div className="md:w-3/5 px-2 flex items-center">
                        <div className="">
                            <h2 className="card-title pt-4 pb-4">New Trends in Wedding Decor</h2>
                            <p>Discover how couples are incorporating eco-friendly elements into their wedding decor, from recycled materials to locally</p>
                            <div className="card-actions pt-6 pb-12">
                                <Link className="text-[#B32134] font-bold border border-[#B32134]
                            px-4 py-2 rounded-lg text-[14px]">Read More</Link>
                            </div>
                        </div>
                    </div>
                </div>
                {/* news 4 */}
                <div className="card md:card-side bg-[#FAFAFA] border border-[#F8DBDF] rounded-3xl space-x-4">
                    <figure className="md:w-2/5">
                        <img className="h-full w-full rounded-3xl"
                            src={news4} alt="Album" />
                    </figure>
                    <div className="md:w-3/5 px-2 flex items-center">
                        <div className="">
                            <h2 className="card-title pt-4 pb-4">New Trends in Wedding Decor</h2>
                            <p>Discover how couples are incorporating eco-friendly elements into their wedding decor, from recycled materials to locally</p>
                            <div className="card-actions pt-6 pb-12">
                                <Link className="text-[#B32134] font-bold border border-[#B32134]
                            px-4 py-2 rounded-lg text-[14px]">Read More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LatestNews;