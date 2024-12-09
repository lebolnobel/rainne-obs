import * as React from 'react';
import { NavLink } from 'react-router-dom';

const Home = (): React.ReactNode => {
  return (
    <div className="container px-10 py-6 mx-auto md:rounded-lg shadow-sm text-gray-800 bg-gray-50">
      <div className="mx-auto block" role="main">
        <h2 className="text-slate-500 uppercase">
          Application d'encodage pour l'opération de sauvetage
        </h2>

        <div className="flex pt-10">
          <figure className="flex-none md:w-36 relative" role="none">
            <img
              src="/assets/img/rainne/logo.svg"
              alt="Raînne"
              title="Raînne"
              className="absolute inset-0 w-full object-cover"
              loading="lazy"
            />
          </figure>
          <div className="flex-auto px-6">
            <div className="flex flex-wrap">
              <h3 className="flex-auto text-2xl font-medium text-slate-900 mb-2 uppercase">
                Bienvenue
              </h3>
              <div className="w-full flex-none text-base">
                Curabitur hendrerit libero a finibus posuere. In fringilla leo
                eget varius convallis. Donec orci tortor, vulputate quis ante
                non, dictum tempus massa. Duis convallis nisi purus, vel porta
                nisi tincidunt non. Proin consectetur, magna vel viverra
                suscipit, diam quam molestie dolor, vitae lacinia dolor massa in
                ex. Vestibulum laoreet ligula at nulla feugiat, a faucibus
                ligula congue. Mauris ullamcorper id metus sit amet iaculis.
                Cras ut pharetra urna, quis fringilla elit.
              </div>
            </div>

            <div className="mt-6">
              <div className="flex items-center">
                <div className="flex-auto">
                  <h3 className="flex-auto text-2xl font-medium text-slate-900 mb-2 uppercase">
                    Kesako ?
                  </h3>
                  <p>
                    Curabitur hendrerit libero a finibus posuere. In fringilla
                    leo eget varius convallis. Donec orci tortor, vulputate quis
                    ante non, dictum tempus massa. Duis convallis nisi purus,
                    vel porta nisi tincidunt non. Proin consectetur, magna vel
                    viverra suscipit, diam quam molestie dolor, vitae lacinia
                    dolor massa in ex. Vestibulum laoreet ligula at nulla
                    feugiat, a faucibus ligula congue. Mauris ullamcorper id
                    metus sit amet iaculis. Cras ut pharetra urna, quis
                    fringilla elit.
                  </p>
                </div>
              </div>
            </div>

            <div className="pb-6 mb-6 border-b border-slate-200"></div>

            <div className="flex space-x-4 text-base font-medium">
              <div className="flex-auto flex space-x-4">
                <NavLink
                  className="px-6 py-2 font-semibold rounded-md bg-natagora text-white hover:bg-natagora/90 hover:shadow inline-flex relative focus:outline-none focus:ring-2 focus:ring-natagora/40"
                  title="Encoder des observations"
                  to="/obs"
                >
                  Encoder vos observations !
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
