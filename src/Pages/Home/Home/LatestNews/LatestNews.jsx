import news1 from "../../../../assets/images/latest-news/news1.png";
import news2 from "../../../../assets/images/latest-news/news2.png";
import news3 from "../../../../assets/images/latest-news/news3.png";
import news4 from "../../../../assets/images/latest-news/news4.png";
import group from "../../../../assets/images/latest-news/Group.png";
import { Link } from "react-router-dom";
const LatestNews = () => {
    return (
        <div>
            <div className="mt-20 space-y-4">
                <h3 className="text-3xl font-bold text-center">Latest News</h3>
                <img className="mx-auto" src={group} alt="" />
            </div>
            <div className="grid md:grid-cols-2 gap-4 md:px-40">
                {/* news 1 */}
                <div className="card lg:card-side bg-base-100 shadow-xl">
                    <figure className="">
                        <img className=""
                            src={news1} alt="Album" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">New Trends in Wedding Decor</h2>
                        <p>Discover how couples are incorporating eco-friendly elements into their wedding decor, from recycled materials to locally</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Listen</button>
                        </div>
                    </div>
                </div>
                {/* <div className="md:flex flex-1 bg-[#FAFAFA] border border-[#F8DBDF] rounded-3xl">
                    <figure className="w-full">
                        <img className="rounded-lg w-full h-full"
                            src={news1} alt="picture" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title pt-12 pb-4">New Trends in Wedding Decor</h2>
                        <p>Discover how couples are incorporating eco-friendly elements into their wedding decor, from recycled materials to locally</p>
                        <div className="card-actions pt-6 pb-12">
                            <Link className="text-[#B32134] font-bold border border-[#B32134]
                            px-4 py-2 rounded-lg text-[14px]">Read More</Link>
                        </div>
                    </div>
                </div> */}
                {/* news 2 */}
                {/* <div className="md:flex bg-[#FAFAFA] border border-[#F8DBDF] rounded-3xl">
                    <figure className="w-full">
                        <img className="rounded-lg w-full h-full"
                            src={news2} alt="picture" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title pt-12 pb-4">New Trends in Wedding Decor</h2>
                        <p>Discover how couples are incorporating eco-friendly elements into their wedding decor, from recycled materials to locally</p>
                        <div className="card-actions pt-6 pb-12">
                            <Link className="text-[#B32134] font-bold border border-[#B32134]
                            px-4 py-2 rounded-lg text-[14px]">Read More</Link>
                        </div>
                    </div>
                </div> */}
                {/* news 3 */}
                {/* <div className="md:flex bg-[#FAFAFA] border border-[#F8DBDF] rounded-3xl">
                    <figure className="w-full">
                        <img className="rounded-lg w-full h-full"
                            src={news3} alt="picture" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title pt-12 pb-4">New Trends in Wedding Decor</h2>
                        <p>Discover how couples are incorporating eco-friendly elements into their wedding decor, from recycled materials to locally</p>
                        <div className="card-actions pt-6 pb-12">
                            <Link className="text-[#B32134] font-bold border border-[#B32134]
                            px-4 py-2 rounded-lg text-[14px]">Read More</Link>
                        </div>
                    </div>
                </div> */}
                {/* news 4 */}
                {/* <div className="md:flex bg-base-100 border border-[#F8DBDF] rounded-3xl">
                    <figure className="w-full">
                        <img className="rounded-lg w-full h-full"
                            src={news4} alt="picture" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title pt-12 pb-4">New Trends in Wedding Decor</h2>
                        <p>Discover how couples are incorporating eco-friendly elements into their wedding decor, from recycled materials to locally</p>
                        <div className="card-actions pt-6 pb-12">
                            <Link className="text-[#B32134] font-bold border border-[#B32134]
                            px-4 py-2 rounded-lg text-[14px]">Read More</Link>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default LatestNews;