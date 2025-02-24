import * as React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';

const RainneApp = (): React.ReactNode => {
  return (
    <>
      <Nav />

      <main className="text-base font-anek flex flex-col items-center">
        <div className="md:py-6 w-full md:w-3/4 lg:w-3/5 xl:2/4 max-w-screen-md">
          <div
            id="content"
            className="container mx-auto md:rounded-lg overflow-hidden md:shadow-sm text-gray-800 bg-gray-50"
          >
            <Outlet />
          </div>

          <Footer />
        </div>
      </main>
    </>
  );
};

export default RainneApp;
