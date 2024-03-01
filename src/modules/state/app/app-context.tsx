

import { createContext, useState } from "react";
import { App } from "./interfaces/with-app";

const contextDefault = {
    darkTheme: false,
    setDarkTheme: () => { }
};

const AppContext = createContext<App>(contextDefault);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const AppProvider = ({ children }: any) => {
    const [darkTheme, setDarkTheme] = useState<boolean>(false);

    return (
        <AppContext.Provider value={{ darkTheme, setDarkTheme }}>
            {children}
        </AppContext.Provider>
    );
};

export { AppProvider, AppContext };