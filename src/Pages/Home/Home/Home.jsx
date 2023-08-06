import { CarouselWithContent } from "../CarouselWithContent/CarouselWithContent";
import Consultancy from "../Consultancy/Consultancy";
import Contact from "../Contact/Contact";
import Services from "../Services/Services";
import Team from "../Team/Team";

const Home = () => {
    return (
        <div>
            <CarouselWithContent/>
            <Consultancy></Consultancy>
            <Services></Services>
            <Team></Team>
            <Contact></Contact>
        </div>
    );
};

export default Home;