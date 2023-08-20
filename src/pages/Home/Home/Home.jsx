import Advertisers from "../Advertisers/Advertisers";
import Banner from "../Banner/Banner";
import NewsLetter from "../NewsLetter/NewsLetter";
import Team from "../Team/Team";
import Feedback from "../Feedback/Feedback";
import Advertisement from "../Advertisement/Advertisement";
import Services from "../Services/Services";
import Contact from "../Contact/Contact";
import FaqQuestion from "../FaqQuestion/FaqQuestion";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Advertisers></Advertisers>
            <Advertisement></Advertisement>
            <Team></Team>
            <NewsLetter></NewsLetter>
            <Contact></Contact>
            <FaqQuestion></FaqQuestion>
            <Feedback></Feedback>
        </div>
    );
};

export default Home;