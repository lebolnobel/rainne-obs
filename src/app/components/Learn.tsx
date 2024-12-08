import * as React from 'react';

const Learn = (): React.ReactNode => {
  return (
    <div className="container px-10 py-6 mx-auto md:rounded-lg shadow-sm text-gray-800 bg-gray-50">
      <div className="mx-auto block" role="main">
        <h2 className="text-slate-500 uppercase">
          En apprendre plus sur l'opération et les batraciens
        </h2>

        <div className="flex pt-10">
          <div className="flex flex-wrap">
            <h3 className="flex-auto text-2xl font-medium text-slate-900 mb-2 uppercase">
              Apprendre
            </h3>
            <div className="w-full flex-none text-base">
              Curabitur hendrerit libero a finibus posuere. In fringilla leo
              eget varius convallis. Donec orci tortor, vulputate quis ante non,
              dictum tempus massa. Duis convallis nisi purus, vel porta nisi
              tincidunt non. Proin consectetur, magna vel viverra suscipit, diam
              quam molestie dolor, vitae lacinia dolor massa in ex. Vestibulum
              laoreet ligula at nulla feugiat, a faucibus ligula congue. Mauris
              ullamcorper id metus sit amet iaculis. Cras ut pharetra urna, quis
              fringilla elit.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Learn;
