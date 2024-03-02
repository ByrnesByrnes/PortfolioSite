import { Layout } from "antd";
import { Home, } from "modules/home";
import { TopMenu } from "modules/menu";
import "antd/dist/reset.css";
import "./app/styles/app.less";

const { Content } = Layout;

const App = () => {
	return (
		<Layout>
			<TopMenu />
			<Content style={{ width: 1400, maxWidth: "100%", margin: "auto", paddingInline: 24, paddingBottom: 48 }}>
				<Home />
			</Content>
		</Layout >
	);
};

export default App;
