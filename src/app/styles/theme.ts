import { ThemeConfig } from "antd";

// Funny color scheme

// const primary = "#FFA351"; // Pastel Orange
// const secondary = "#FFA351"; // Pastel Orange
// const third = "#FFA351"; // Pastel Orange

export const theme: ThemeConfig = {
    token: {
        fontFamily: "Titillium Web, sans-serif",
        fontSize: 18,
    },
    components: {
        Typography: {
            titleMarginBottom: 0,
            titleMarginTop: 0,
            fontWeightStrong: 700
        },
        Button: {
            borderRadius: 8,
            borderRadiusLG: 8,
            fontWeight: 500
        },
        Layout: {
            headerBg: "#FFF",
        },
        Modal: {
            fontSizeHeading5: 24,
        },
        Divider: {
            colorSplit: "#B2AC88",
            marginLG: 16,
        },
        Tree: {
            colorBgContainer: "none",
            titleHeight: 28,
            fontSize: 16,
        },
        Card: {
            borderRadiusLG: 8,
            boxShadowTertiary:
                "rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px",
        },
    },
};

// Generic Gradient
// #B2AC88
// #899B7C
// #658876
// #497370
// #375E67
// #2F4858
