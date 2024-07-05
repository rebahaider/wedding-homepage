import CustomerReview from "../CustomerReview/CustomerReview";
import Planning from "../Planning/Planning";
import Question from "../Question/Question";
import LatestNews from "./LatestNews/LatestNews";

const Home = () => {
    return (
        <div>
            <CustomerReview></CustomerReview>
            <Question></Question>
            <LatestNews></LatestNews>
            <Planning></Planning>
        </div>
    );
};

export default Home;