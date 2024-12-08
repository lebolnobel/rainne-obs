import * as React from 'react';
import { GoArrowRight } from 'react-icons/go';

const NOS_AMPHIBIENS_URL = 'https://www.natagora.be/download/39253';

const Resources = (): React.ReactNode => {
  const downloadMemo = () => {
    window.open(NOS_AMPHIBIENS_URL);
  };

  return (
    <div className="container px-10 py-6 mx-auto md:rounded-lg shadow-sm text-gray-800 bg-gray-50">
      <div className="mx-auto block" role="main">
        <h2 className="text-slate-500 uppercase">
          Ressources utiles pour l'opération de sauvetage
        </h2>

        <div className="flex pt-10">
          <div className="flex-auto">
            <div className="flex items-center">
              <div className="flex-auto">
                <div className="grid max-w-screen-xl mx-auto sm:gap-8 sm:grid-cols-12">
                  <div className="mr-auto sm:col-span-9">
                    <h3 className="flex-auto text-2xl font-medium text-slate-900 mb-2 uppercase">
                      Nos amphibiens
                    </h3>
                    <p className="font-light">
                      Curabitur hendrerit libero a finibus posuere. In fringilla
                      leo eget varius convallis. Donec orci tortor, vulputate
                      quis ante non, dictum tempus massa. Duis convallis nisi
                      purus, vel porta nisi tincidunt non. Proin consectetur,
                      magna vel viverra suscipit, diam quam molestie dolor,
                      vitae lacinia dolor massa in ex. Vestibulum laoreet ligula
                      at nulla feugiat, a faucibus ligula congue. Mauris
                      ullamcorper id metus sit amet iaculis. Cras ut pharetra
                      urna, quis fringilla elit.
                    </p>

                    <div className="space-x-4 mt-6 text-base font-medium">
                      <div className="flex-auto flex space-x-4">
                        <button
                          type="button"
                          role="button"
                          onClick={downloadMemo}
                          aria-label="download"
                          className="px-6 py-2 inline-flex font-semibold rounded-md border border-slate-200 hover:bg-slate-100 hover:shadow focus:outline-none focus:ring-2 focus:ring-natagora/40"
                        >
                          Nos amphibiens
                          <GoArrowRight
                            role="presentation"
                            size="24"
                            className="ml-2"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                  <figure
                    className="hidden sm:block sm:col-span-3 flex text-center mx-auto w-full"
                    role="none"
                  >
                    <img
                      src="./assets/img/resources/amphibiens.jpg"
                      alt="Nos amphibiens"
                      title="Nos amphibiens"
                      loading="lazy"
                    />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex pt-10">
          <div className="flex-auto">
            <div className="flex items-center">
              <div className="flex-auto">
                <div className="grid max-w-screen-xl mx-auto sm:gap-8 sm:grid-cols-12">
                  <div className="mr-auto sm:col-span-9">
                    <h3 className="flex-auto text-2xl font-medium text-slate-900 mb-2 uppercase">
                      batraciens.be,
                      <br />
                      Opération sauvetage des batraciens
                    </h3>
                    <p className="font-light">
                      Curabitur hendrerit libero a finibus posuere. In fringilla
                      leo eget varius convallis. Donec orci tortor, vulputate
                      quis ante non, dictum tempus massa. Duis convallis nisi
                      purus, vel porta nisi tincidunt non. Proin consectetur,
                      magna vel viverra suscipit, diam quam molestie dolor,
                      vitae lacinia dolor massa in ex. Vestibulum laoreet ligula
                      at nulla feugiat, a faucibus ligula congue. Mauris
                      ullamcorper id metus sit amet iaculis. Cras ut pharetra
                      urna, quis fringilla elit.
                    </p>

                    <div className="space-x-4 mt-6 text-base font-medium">
                      <div className="flex-auto flex space-x-4">
                        <a
                          role="button"
                          href="https://www.natagora.be/sauvetage-des-batraciens"
                          title="batraciens.be"
                          className="px-6 py-2 inline-flex font-semibold rounded-md border border-slate-200 hover:bg-slate-100 hover:shadow focus:outline-none focus:ring-2 focus:ring-natagora/40"
                        >
                          batraciens.be
                          <GoArrowRight
                            role="presentation"
                            size="24"
                            className="ml-2"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                  <figure
                    className="hidden sm:block sm:col-span-3 flex text-center mx-auto w-full"
                    role="none"
                  >
                    <img
                      src="./assets/img/resources/batraciens.be.png"
                      alt="batraciens.be"
                      title="batraciens.be"
                      loading="lazy"
                    />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;
