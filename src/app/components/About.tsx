import * as React from 'react';

const Learn = (): React.ReactNode => {
  return (
    <div className="container px-10 py-6 mx-auto md:rounded-lg shadow-sm text-gray-800 bg-gray-50">
      <section className="mx-auto block">
        <h2 className="text-slate-500 uppercase">
          À propos de l'application d'encodage
        </h2>

        <div className="flex pt-10">
          <div className="flex flex-wrap">
            <h3 className="flex-auto text-2xl font-medium text-slate-900 mb-2 uppercase">
              À propos
            </h3>
            <div className="w-full flex-none text-base">
              Cette application est à destination des bénévoles des sites de
              sauvetage des batraciens. Une initiative de Natagora. Cette
              application permet de facilement faire le compte des batraciens
              présents sur le site. Les compteurs sont stockés localement, sur
              le smartphone. Une fois la session terminée, les données peuvent
              être reportée sur le site Observations.be.
              {/* Par ailleurs, cette application est accessible
              également hors ligne pour une utilisation efficace qu'importe les
              circonstances. */}
            </div>
          </div>
        </div>

        <div className="flex pt-10">
          <div className="flex flex-wrap">
            <h3 className="flex-auto text-2xl font-medium text-slate-900 mb-2 uppercase">
              Comment installer l'app sur son smartphone ?
            </h3>
            <div className="w-full flex-none text-base">
              <p className="pb-2">
                Pour installer l'application sur votre smartphone, il vous
                suffit d'ouvrir les paramètres de votre navigateur. Une bouton
                "Installer" ou "Ajouter à l'écran d'accueil" devrait apparaître.
                Cliquez dessus et suivez les instructions.
              </p>
              <p>
                Une autre solution est de garder le lien de ce site dans vos
                favoris de votre navigateur.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Learn;
