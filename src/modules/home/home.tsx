import Hero from "./components/hero";
import Contact from "./contact/contact";
import { default as Projects } from "./projects/projects";
import { Socials } from "./components";
import { OverlayLoad } from "modules/ui";
const Home = () => {
    return (
        <div>
            <OverlayLoad />
            <Hero />
            <Projects />
            {/* <Contact /> */}


            <Socials />
        </div>
    );
};
export default Home;