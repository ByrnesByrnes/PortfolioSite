import Hero from "./components/hero";
import { default as Projects } from "./projects/projects";
import { Socials } from "./components";
import { OverlayLoad } from "modules/ui";
const Home = () => {
    return (
        <>
            <OverlayLoad />
            <Hero />
            <Projects />
            {/* <Contact /> */}


            <Socials />
        </>
    );
};
export default Home;