import { CarouselWithContent } from "../CarouselWithContent/CarouselWithContent";
import Contact from "../Contact/Contact";
import Services from "../Services/Services";
import Team from "../Team/Team";

const Home = () => {
    return (
        <div>
            {/* <Banner></Banner> */}
            <CarouselWithContent/>
            <Services></Services>
            <Team></Team>
            <Contact></Contact>
        </div>
    );
};

export default Home;