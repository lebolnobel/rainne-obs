import * as React from 'react';
import { NavLink } from 'react-router-dom';

const Home = (): React.ReactNode => {
  return (
    <div className="container px-10 py-6 mx-auto md:rounded-lg shadow-sm text-gray-800 bg-gray-50">
      <section className="mx-auto block">
        <h2 className="text-slate-500 uppercase">
          Application de comptage pour l'opération de sauvetage
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
            <figcaption className="sr-only">Raînne</figcaption>
          </figure>
          <div className="flex-auto px-6">
            <div className="flex flex-wrap">
              <h3 className="flex-auto text-2xl font-medium text-slate-900 mb-2 uppercase">
                Bienvenue
              </h3>
              <div className="w-full flex-none text-base">
                <p className="pb-2">
                  Aidez-vous lors du comptage sur le terrain ! Cette application
                  vous permet en quelques clics de garder le compte des
                  individus que vous avez croisé lors de vos soirées pluvieuses.
                  Une fois rentré·e au chaud, vous pourrez encoder les
                  observations de votre site dans le projet{' '}
                  <a
                    href="https://observations.be/projects/16/locations/?"
                    title="Projet sur Observations.be"
                    className="underline text-natagora font-medium decoration-natagora/50 hover:decoration-2 hover:text-natagora/80 transition duration-400 ease-in-out hover:decoration-inherit focus:outline-none focus:ring-2 focus:ring-natagora/40"
                  >
                    "Amphibiens sur la route"
                  </a>
                  , sur Observations.be. Merci d'utiliser le lien actif unique
                  de votre site, repris sur la{' '}
                  <a
                    href="https://www.natagora.be/sauvetage-des-batraciens"
                    title="Carte interactives de l'ensemble des sites de sauvetage de batraciens"
                    className="underline text-natagora font-medium decoration-natagora/50 hover:decoration-2 hover:text-natagora/80 transition duration-400 ease-in-out hover:decoration-inherit focus:outline-none focus:ring-2 focus:ring-natagora/40"
                  >
                    carte interactive des sauvetages.
                  </a>
                </p>
                <p className="pb-2">
                  Au début de chaque sortie, n'oubliez pas de démarrer une
                  nouvelle session lors d'un nouveau comptage. Cliquez sur le
                  "+" en haut à droite dans l'onglet "Compter".{' '}
                  <NavLink
                    to="/about"
                    title="A propos de l'application"
                    className="underline text-natagora font-medium decoration-natagora/50 hover:decoration-2 hover:text-natagora/80 transition duration-400 ease-in-out hover:decoration-inherit focus:outline-none focus:ring-2 focus:ring-natagora/40"
                  >
                    En savoir plus ?
                  </NavLink>
                </p>

                <p className="pb-2">
                  <em>
                    Cette application ne remplace en aucun cas l'encodage sur la
                    plateforme observations.be !
                  </em>
                </p>
              </div>
            </div>

            <div className="mt-6">
              <div className="flex items-center">
                <div className="flex-auto">
                  <h3 className="flex-auto text-2xl font-medium text-slate-900 mb-2 uppercase">
                    Kesako ?
                  </h3>
                  <p>
                    Cette application permet aux volontaires de comptabiliser
                    les batraciens rencontrés lors des sauvetages. Il s'agit
                    d'un bloc note numérique qui est toujours dans notre poche.
                  </p>
                </div>
              </div>
            </div>

            <div className="pb-6 mb-6 border-b border-slate-200"></div>

            <div className="flex space-x-4 text-base font-medium">
              <div className="flex-auto flex space-x-4">
                <NavLink
                  className="px-6 py-2 font-semibold rounded-md bg-natagora text-white hover:bg-natagora/90 hover:shadow inline-flex relative focus:outline-none focus:ring-2 focus:ring-natagora/40"
                  title="Compter des observations"
                  to="/obs"
                >
                  Compter vos observations !
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
