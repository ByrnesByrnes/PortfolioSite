import { AppContext } from "./app-context";

/**
 * A public higher-order component to access the imperative API
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const withApp = (Component: any) => {
    const displayName = `withApp(${Component || Component.name})`;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const C = (props: any) => {
        const { wrappedComponentRef, ...remainingProps } = props;

        return (
            <AppContext.Consumer>
                {context => {
                    return (
                        <Component
                            {...remainingProps}
                            themeContext={context}
                            ref={wrappedComponentRef}
                        />
                    );
                }}
            </AppContext.Consumer>
        );
    };

    C.displayName = displayName;
    C.WrappedComponent = Component;

    return C;
};

export { withApp };