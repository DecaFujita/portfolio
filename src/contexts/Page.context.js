import { useState, createContext, useEffect } from 'react';

const PageContext = createContext();

const PageProvider = props => {
    const [ isOpen, setIsOpen ] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);


    // Conditional rendering according to screen width
    // ex.: if width < 700, navbar menu => sandwich menu
    useEffect(() => {
        const handleResizeWindow = () => setWidth(window.innerWidth);
        // subscribe to window resize event "onComponentDidMount"
        window.addEventListener("resize", handleResizeWindow);
        return () => {
        // unsubscribe "onComponentDestroy"
        window.removeEventListener("resize", handleResizeWindow);
        };
    }, []);

    return (
        <PageContext.Provider value={{isOpen, setIsOpen, width}}>
            {props.children}
        </PageContext.Provider>
    )
}

export { PageContext, PageProvider }