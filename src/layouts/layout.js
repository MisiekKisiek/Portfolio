import React, { useRef, cloneElement, Children } from 'react';

//Components
import Header from '../components/header';
import Footer from '../components/footer';
import MainWrap from '../components/mainWrap';

//Context
import AppProvider from '../context/App.provider';

const Layout = (props) => {

    const curtine = useRef(null);

    const myprops = { curtine: curtine };

    const renderNewChildren = () => {
        const newChildren = Children.map(props.children, child =>
            // cloneElement(child, { curtine: curtine, dupa: "dupa" })
            console.log(child)
        );
        return newChildren;
    }

    return (
        <AppProvider>
            <MainWrap>
                <Header
                    curtine={curtine}
                />
                {props.children}
                <Footer
                    curtine={curtine}
                />
            </MainWrap>
        </AppProvider>
    );
}

export default Layout;