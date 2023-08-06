import { CarouselWithContent } from "../CarouselWithContent/CarouselWithContent";
import Contact from "../Contact/Contact";
import Team from "../Team/Team";

const Home = () => {
    return (
        <div>
            {/* <Banner></Banner> */}
            <CarouselWithContent/>
            <Team></Team>
            <Contact></Contact>
        </div>
    );
};

export default Home;