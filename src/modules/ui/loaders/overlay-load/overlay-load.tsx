import { theme } from "antd";
import styles from "./styles/overlay-load.module.less";

const OverlayLoad = () => {
    const { token: { colorPrimary, colorBgContainer } } = theme.useToken();

    return (
        <div className={styles.container}>
            <div style={{ background: colorBgContainer }} className={styles.layer}></div>
            <div style={{ background: colorPrimary }} className={styles.layer}></div>
        </div>
    );
};

export default OverlayLoad;