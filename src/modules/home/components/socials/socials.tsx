import { FloatButton } from "antd";
import { ImGithub } from "react-icons/im";
import Icon from "@ant-design/icons";
import { IoLogoLinkedin } from "react-icons/io5";

const Socials = () => (
    <FloatButton.Group style={{ right: 24 }}>
        <FloatButton type="primary" href="https://github.com/ByrnesByrnes" target="_blank" icon={<Icon component={ImGithub} />} aria-label="github" />
        <FloatButton type="primary" href="https://www.linkedin.com/in/myron-byrnes" target="_blank" icon={<Icon component={IoLogoLinkedin} />} aria-label="github" />
    </FloatButton.Group>
);

export default Socials;