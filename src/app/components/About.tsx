import * as React from 'react';
import { NavLink } from 'react-router-dom';

const Learn = (): React.ReactNode => {
  return (
    <div className="container px-10 py-6 mx-auto md:rounded-lg shadow-sm text-gray-800 bg-gray-50">
      <section className="mx-auto text-base">
        <h2 className="text-slate-500 uppercase">
          À propos de l'application de comptage
        </h2>

        <div className="pt-10">
          <h3 className="text-2xl font-medium text-slate-900 mb-2 uppercase">
            À propos
          </h3>
          <div className="">
            Cette application est à destination des volontaires lors des
            opérations de sauvetage des batraciens, une initiative de Natagora.
            Cette application permet de facilement faire le compte des
            batraciens présents sur le site. Les compteurs sont stockés
            localement, sur le smartphone. Une fois la session terminée, les
            données devront être reportées sur le site Observations.be. En
            effet, pour l'heure, la plateforme Observations.be ne permet pas de
            connexion directe par une application tierce.
          </div>
        </div>

        <div className="pt-10">
          <h3 className="text-2xl font-medium text-slate-900 mb-2 uppercase">
            Une application de comptage ?
          </h3>
          <div className="">
            <p className="pb-2">
              Cette application remplace le bloc note traditionnel qui prend
              l'eau et qu'on salit. On a toujours notre téléphone sur soi alors
              pourquoi ne pas l'utiliser ? Cette application permet de tenir le
              compte du nombre d'individus rencontrés lors des sauvetages de
              batraciens. L'application permet également de se remémorer les
              critères d'identification des différentes espèces qu'on est
              susceptible de rencontrer.
            </p>

            <p className="pb-2">
              Les données sont sauvegardées sur votre téléphone directement
              (localstorage). Une fois rentré·e au chaud, vous pourrez encoder
              les observations de votre site dans le projet{' '}
              <a
                href="https://observations.be/projects/16/locations/?"
                title="Projet sur Observations.be"
                className="underline text-natagora font-medium decoration-natagora/50 hover:decoration-2 hover:text-natagora/80 transition duration-400 ease-in-out hover:decoration-inherit focus:outline-none focus:ring-2 focus:ring-natagora/40"
              >
                "Amphibiens sur la route"
              </a>
              , sur Observations.be. Gardez à l'esprit que{' '}
              <strong>
                lorsque vous démarrez une nouvelle session, les données seront
                supprimées
              </strong>{' '}
              (elles restent disponibles dans l'
              <NavLink
                to="/history"
                title="Votre historique"
                className="underline text-natagora font-medium decoration-natagora/50 hover:decoration-2 hover:text-natagora/80 transition duration-400 ease-in-out hover:decoration-inherit focus:outline-none focus:ring-2 focus:ring-natagora/40"
              >
                historique
              </NavLink>
              ). Assurez-vous de les avoir encodées ou copiées en utilisant le
              bouton prévu à cet effet. Les données resteront disponibles tant
              qu'une nouvelle session n'a pas été démarrée.
            </p>

            <p className="pb-2">
              Pour installer l'application sur votre smartphone, il vous suffit
              d'ouvrir les paramètres de votre navigateur. Un bouton "Installer"
              ou "Ajouter à l'écran d'accueil" devrait apparaître. Cliquez
              dessus et suivez les instructions. Vous pouvez également mettre le
              lien de ce site dans vos favoris de votre navigateur.
            </p>
          </div>
        </div>

        <div className="pt-10">
          <h3 className="text-2xl font-medium text-slate-900 mb-2 uppercase">
            Remerciements
          </h3>
          <div className="">
            <p className="pb-2">
              Un tout grand merci également à l'ensemble des photographes qui
              ont bien voulu se prêter aux jeux et proposer leurs photos pour
              l'application : Adrien Goffin, Aurélie Robise, F. Gries, Karl
              Gillebert, Lionel Lebon, Simon Aucremanne et Thierry Kinet.
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
              . Le code source est disponible sur{' '}
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
                Natagora, ASBL
              </figcaption>
            </a>
          </figure>
        </div>
      </section>
    </div>
  );
};

export default Learn;
