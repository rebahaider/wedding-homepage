import CustomerReview from "../CustomerReview/CustomerReview";
import DreamEvent from "../DreamEvent/DreamEvent";
import EventTool from "../EventTool/EventTool";
import Planning from "../Planning/Planning";
import Question from "../Question/Question";
import LatestNews from "./LatestNews/LatestNews";

const Home = () => {
    return (
        <div>
           
            <DreamEvent></DreamEvent>
            <EventTool></EventTool>
            <CustomerReview></CustomerReview>
            <Question></Question>
            <LatestNews></LatestNews>
            <Planning></Planning>
        </div>
    );
};

export default Home;