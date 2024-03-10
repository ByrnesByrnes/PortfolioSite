import { Flex, Layout, Switch,theme, Grid } from "antd";
import { WithApp, withApp } from "modules/state";
import { TbLetterB, TbLetterM } from "react-icons/tb";

const { Header } = Layout;
const { useBreakpoint } = Grid;

interface Props extends WithApp { }

const TopMenu = ({ themeContext }: Props) => {
    const { darkTheme, setDarkTheme } = themeContext;
    const { token: { colorBgElevated } } = theme.useToken();

    const { xs } = useBreakpoint();

    return (
        <Header
            style={{
                background: colorBgElevated,
                position: "fixed",
                top: 0,
                zIndex: 1000,
                display: "flex",
                alignItems: "center",
                width: "100%",
                justifyContent: "space-between",
                boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
                paddingInline: xs ? 8 : 40
            }}>
            <Flex gap={0}>
                <TbLetterM style={{ fontSize: "1.5rem" }} />
                <TbLetterB style={{ fontSize: "1.5rem" }} />
            </Flex>
            <Flex align="center" gap={8}>
                <Switch checked={darkTheme} onChange={() => setDarkTheme(!darkTheme)} />
            </Flex>
        </Header>
    );
};

export default withApp(TopMenu);