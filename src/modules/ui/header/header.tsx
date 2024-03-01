import { ReactNode } from "react";
import { Typography, theme } from "antd";
import styles from "./styles/header.module.less";
import { CSSProperties } from "styled-components";

const { Title } = Typography;

interface Props {
    accent: ReactNode;
    text: ReactNode;
    style?: CSSProperties;
}

const Header = ({ accent, text, style }: Props) => {

    const { token: { colorPrimary } } = theme.useToken();

    return (
        <Title level={2} style={style} className={styles.header}>{accent} <span style={{ color: colorPrimary }}>{text}</span></Title>
    );
};

export default Header;