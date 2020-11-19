import React, { useRef, useContext } from 'react';

//Components
import Header from '../components/header';
import Footer from '../components/footer';
import MainWrap from '../components/mainWrap';

//Context
import AppProvider from '../context/App.provider';

const Layout = ({ children }) => {

    const curtine = useRef(null);

    return (
        <AppProvider>
            <MainWrap>
                <Header
                    curtine={curtine}
                />
                {children}
                <Footer
                    curtine={curtine}
                />
            </MainWrap>
        </AppProvider>
    );
}

export default Layout;