import Creators from "../Sections/Creators";
import Hero from "../Sections/Hero";
import Introduction from "../Sections/Introduction";
import Videos from "../Sections/Videos";
import WorkWithMe from "../Sections/WorkWithMe";
const Home = () => {
    return (
        <>
            <Hero />
            <Introduction />
            <Videos />
            <Creators />
            <WorkWithMe />
        </>
    );
};

export default Home;