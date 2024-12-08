import * as React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';

const RainneApp = (): React.ReactNode => {
  return (
    <>
      <Nav />

      <section className="font-anek flex flex-col items-center">
        <div className="md:py-6 w-full md:w-3/4 lg:w-3/5 xl:2/4 max-w-screen-md">
          <div
            className="container mx-auto md:rounded-lg overflow-hidden md:shadow-sm text-gray-800 bg-gray-50"
            role="main"
            id="content"
          >
            <Outlet />
          </div>

          <Footer />
        </div>
      </section>
    </>
  );
};

export default RainneApp;
