import React from 'react';

//Components
import Header from '../components/header';
import Footer from '../components/footer';
import MainWrap from '../components/mainWrap';

//Context
import AppProvider from '../context/App.provider';

const Layout = ({ children }) => {
    return (
        <AppProvider>
            <MainWrap>
                <Header />
                {children}
                <Footer />
            </MainWrap>
        </AppProvider>
    );
}

export default Layout;