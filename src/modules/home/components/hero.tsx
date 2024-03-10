import { Button, Flex, Typography, theme } from "antd";
import styles from "./styles/hero.module.less";
import HeroImage from "./imgs/hero-image";
import { CoffeeMug } from "modules/ui";

const { Title, Text } = Typography;

const Hero = () => {

    const { token: { colorPrimary } } = theme.useToken();

    return (
        <div className={styles.feature}>
            <div className={styles.group}>
                <Flex vertical gap={8}>
                    <Flex vertical gap={0}>
                        <Title level={1} className={styles.title} style={{ marginBottom: 0 }}><span style={{ color: colorPrimary }}>Myron</span> Byrnes</Title>
                        <Title level={2} className={styles.subtitle} style={{ marginBlock: 0 }}>Front End Developer</Title>
                    </Flex>
                    <Text strong>I Love solving problems. Let me help solve yours!</Text>
                </Flex>
            </div>

            <div className={styles.imageContainer}>
                <HeroImage className={styles.image} />
                <div className={styles.mug}>
                    <CoffeeMug />
                </div>
            </div>

            {/* <div>
                scroll
            // </div> */}
        </div>
    );
};
export default Hero;