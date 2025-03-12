import * as React from 'react';

const Learn = (): React.ReactNode => {
  return (
    <div className="container px-10 py-6 mx-auto md:rounded-lg shadow-sm text-gray-800 bg-gray-50">
      <section className="mx-auto text-base">
        <h2 className="text-slate-500 uppercase">
          À propos de l'application d'encodage
        </h2>

        <div className="pt-10">
          <h3 className="text-2xl font-medium text-slate-900 mb-2 uppercase">
            À propos
          </h3>
          <div className="">
            Cette application est à destination des bénévoles lors des
            opérations de sauvetage des batraciens, une initiative de Natagora.
            Cette application permet de facilement faire le compte des
            batraciens présents sur le site. Les compteurs sont stockés
            localement, sur le smartphone. Une fois la session terminée, les
            données peuvent être reportée sur le site Observations.be.
            {/* Par ailleurs, cette application est accessible
              également hors ligne pour une utilisation efficace qu'importe les
              circonstances. */}
          </div>
        </div>

        <div className="pt-10">
          <h3 className="text-2xl font-medium text-slate-900 mb-2 uppercase">
            Kesako ?
          </h3>
          <div className="">
            <p className="pb-2">
              Cette application remplace le bloc note traditionnel qui prend
              l'eau et qu'on sali. On a toujours notre téléphone sur soi alors
              pourquoi ne pas l'utiliser ? Cette application permet de tenir le
              compte du nombre d'individus rencontrés lors des sauvetages de
              batraciens. L'application permet également de se remémorer les
              critères d'identification des différentes espèces qu'on est
              susceptible de rencontrer.
            </p>

            <p className="pb-2">
              Pour installer l'application sur votre smartphone, il vous suffit
              d'ouvrir les paramètres de votre navigateur. Une bouton
              "Installer" ou "Ajouter à l'écran d'accueil" devrait apparaître.
              Cliquez dessus et suivez les instructions. Vous pouvez également
              mettre le lien de ce site dans vos favoris de votre navigateur.
            </p>

            <p className="pb-2">
              Cette application a été créée par{' '}
              <a
                href="https://lionellebon.be"
                title="Lionel Lebon"
                className="underline text-natagora font-medium decoration-natagora/50 hover:decoration-2 hover:text-natagora/80 transition duration-400 ease-in-out hover:decoration-inherit focus:outline-none focus:ring-2 focus:ring-natagora/40"
              >
                Lionel Lebon
              </a>{' '}
              dans le cadre des sauvetages de batraciens organisé par{' '}
              <a
                href="https://www.natagora.be/sauvetage-des-batraciens"
                title="Opération de sauvetage des batraciens"
                className="underline text-natagora font-medium decoration-natagora/50 hover:decoration-2 hover:text-natagora/80 transition duration-400 ease-in-out hover:decoration-inherit focus:outline-none focus:ring-2 focus:ring-natagora/40"
              >
                Natagora
              </a>
              . Son code source est disponible sur{' '}
              <a
                href="https://github.com/lebolnobel/rainne-obs"
                title="Github, rainne-obs"
                className="underline text-natagora font-medium decoration-natagora/50 hover:decoration-2 hover:text-natagora/80 transition duration-400 ease-in-out hover:decoration-inherit focus:outline-none focus:ring-2 focus:ring-natagora/40"
              >
                GitHub
              </a>
              .
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row space-y-8 sm:space-y-0 mt-8">
          <figure className="text-center mx-auto px-8 w-48" role="none">
            <a
              href="https://rainne.natagora.be"
              title="Rainne, Natagora"
              className="text-natagora font-medium decoration-natagora/50 hover:decoration-2 hover:text-natagora/80 transition duration-400 ease-in-out hover:decoration-inherit focus:outline-none focus:ring-2 focus:ring-natagora/40"
            >
              <img
                src="./assets/img/rainne/logo.svg"
                alt="Logo Rainne, Natagora"
                title="Rainne, Natagora"
                loading="lazy"
              />
              <figcaption className="mt-2 text-sm text-center text-gray-500">
                Rainne, Pôle herpétologique
              </figcaption>
            </a>
          </figure>

          <figure className="text-center mx-auto px-8 w-48" role="none">
            <a
              href="https://www.natagora.be"
              title="Natagora, ASBL"
              className="text-natagora font-medium decoration-natagora/50 hover:decoration-2 hover:text-natagora/80 transition duration-400 ease-in-out hover:decoration-inherit focus:outline-none focus:ring-2 focus:ring-natagora/40"
            >
              <img
                src="./assets/img/natagora/logo.png"
                alt="Logo Natagora, ASBL"
                title="Natagora, ASBL"
                loading="lazy"
              />
              <figcaption className="mt-2 text-sm text-center text-gray-500">
                Natagora, ASBL{' '}
              </figcaption>
            </a>
          </figure>
        </div>
      </section>
    </div>
  );
};

export default Learn;
