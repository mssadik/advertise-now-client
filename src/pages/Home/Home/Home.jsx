import Advertisers from "../Advertisers/Advertisers";
import Banner from "../Banner/Banner";
import NewsLetter from "../NewsLetter/NewsLetter";
import Team from "../Team/Team";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Advertisers></Advertisers>
            <Team></Team>
            <NewsLetter></NewsLetter>
        </div>
    );
};

export default Home;