import React from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';

const MainLayout = ({ children }) => {
    return (
        <div>
            <div className="flex flex-col justify-between md:h-screen md:overflow-hidden">
                <Header />
                <main className='flex flex-1 px-[20px] md:px-[150px] overflow-x-hidden custom-scrollbar'>
                    {children}
                </main>
                <Footer />
            </div>
        </div>
    );
};

export default MainLayout;
