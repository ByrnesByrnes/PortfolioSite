interface App {
    darkTheme: boolean;
    setDarkTheme: (value: boolean) => void;
}

interface WithApp {
    themeContext: App;
}

export type { WithApp, App };
