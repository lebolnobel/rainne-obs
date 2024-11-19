import * as React from 'react';
import { Outlet } from 'react-router-dom';

const RainneApp = (): React.ReactNode => {
  return (
    <>
      <section className="font-anek flex flex-col items-center">
        <div className="md:py-6 w-full md:w-3/4 lg:w-3/5 xl:2/4 max-w-screen-md">
          <div className="container px-10 py-6 mx-auto md:rounded-lg shadow-sm text-gray-800 bg-gray-50">
            <div id="content">
              <Outlet />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RainneApp;
