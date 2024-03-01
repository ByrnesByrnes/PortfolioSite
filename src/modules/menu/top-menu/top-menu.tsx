import { Flex, Layout, Menu, Switch, Typography, theme } from "antd";
import { menuItems } from "./data";
import { WithApp, withApp } from "modules/state";
import { TbLetterB, TbLetterM } from "react-icons/tb";
import Icon from "@ant-design/icons";


const { Header } = Layout;
const { Text } = Typography;

interface Props extends WithApp { }

const TopMenu = ({ themeContext }: Props) => {
    const { darkTheme, setDarkTheme } = themeContext;
    const { token: { colorBgElevated } } = theme.useToken();

    return (
        <Header
            style={{
                background: colorBgElevated,
                position: "sticky",
                top: 0,
                zIndex: 1000,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"
            }}>
            <Flex gap={0}>
                <TbLetterM style={{ fontSize: "1.5rem" }} />
                <TbLetterB style={{ fontSize: "1.5rem" }} />
            </Flex>
            <Flex align="center" gap={8}>
                <Switch checked={darkTheme} onChange={() => setDarkTheme(!darkTheme)} /> <Text>Theme</Text>
                {/* <Menu mode="horizontal" items={menuItems} style={{  borderBottom: "unset", background: "transparent" }} /> */}
            </Flex>
        </Header>
    );
};

export default withApp(TopMenu);