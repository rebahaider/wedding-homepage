import Planning from "../Planning/Planning";
import Question from "../Question/Question";
import LatestNews from "./LatestNews/LatestNews";

const Home = () => {
    return (
        <div>
            <Question></Question>
            <LatestNews></LatestNews>
            <Planning></Planning>
        </div>
    );
};

export default Home;