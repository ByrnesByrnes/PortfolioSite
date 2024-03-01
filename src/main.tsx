import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ConfigProvider, App as AntApp, theme as antTheme } from "antd";
import { AppProvider, AppContext } from "modules/state/app/app-context";
import { theme } from "app/styles/theme";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<AppProvider>
			<AppContext.Consumer>
				{({ darkTheme }) =>
					<ConfigProvider theme={{
						...theme, algorithm: darkTheme ?
							antTheme.darkAlgorithm :
							antTheme.defaultAlgorithm
					}}>
						<AntApp>
							<App />
						</AntApp>
					</ConfigProvider>
				}
			</AppContext.Consumer>
		</AppProvider>
	</React.StrictMode>,
);
