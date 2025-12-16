import * as React from 'react';
import { GoArrowRight } from 'react-icons/go';
import { species } from '../../utils/species';
import { useNavigate } from 'react-router-dom';

const NOS_AMPHIBIENS_URL = 'https://www.natagora.be/download/39253';

const Learn = (): React.ReactNode => {
  const navigate = useNavigate();

  return (
    <div className="container px-10 py-6 mx-auto md:rounded-lg shadow-sm text-gray-800 bg-gray-50">
      <section className="mx-auto block">
        <h2 className="text-slate-500 uppercase">
          En apprendre plus sur l'opération et les batraciens
        </h2>

        <div className="mt-10 flex flex-wrap">
          <h3 className="flex-auto text-2xl font-medium text-slate-900 uppercase">
            En apprendre plus
          </h3>

          <div className="w-full flex-none">
            <p className="py-2">
              Entrainez-vous à identifier les batraciens que vous êtes
              susceptibles de rencontrer lors des migrations printanières.
            </p>
          </div>

          <div className="flex w-full mt-4 mx-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 space-y-4 sm:space-y-0">
            {Object.keys(species).map((sp, index) => (
              <div
                key={index}
                tabIndex={0}
                onClick={() => navigate(`/species/${sp}`)}
                className="max-w-full border border-gray-200 rounded-lg hover:shadow hover:bg-slate-100 cursor-pointer focus:outline-none focus:ring-2 focus:ring-natagora/40"
              >
                <div className="relative h-48 md:h-36 rounded-lg group overflow-hidden">
                  <img
                    src={
                      species[sp]?.imageUrl ||
                      './assets/img/resources/placeholder.jpg'
                    }
                    alt={species[sp].name}
                    title={species[sp].name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-125"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <div className="flex items-center justify-between text-gray-200">
                        <div>
                          <h3 className="text-lg italic">{species[sp].name}</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-10 grid max-w-screen-xl mx-auto sm:gap-8 sm:grid-cols-12">
          <div className="mr-auto sm:col-span-9">
            <h3 className="flex-auto text-2xl font-medium text-slate-900 mb-2 uppercase">
              Nos amphibiens
            </h3>

            <p className="font-light pb-2">
              Natagora a publié un memo pour vous aider à identifier les
              amphibiens de Wallonie. Ce document reprend l'ensemble des
              critères d'identification, il est à noter que certains critères
              sont différents en période de migration. Il n'en reste pas moins
              utile, qu'importe le moment de l'année.
            </p>
            <p className="font-light">
              Les critères d'identification présentés dans ce mémo ont été
              repris dans cette application. Vous pourrez les retrouver sur les
              fiches de chaque espèce.
            </p>

            <div className="space-x-4 mt-6 text-base font-medium">
              <div className="flex-auto flex space-x-4">
                <a
                  href={NOS_AMPHIBIENS_URL}
                  title="batraciens.be"
                  className="px-6 py-2 inline-flex font-semibold rounded-md border border-slate-200 hover:bg-slate-100 hover:shadow focus:outline-none focus:ring-2 focus:ring-natagora/40"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Nos amphibiens
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
              src="./assets/img/resources/amphibiens.jpg"
              alt="Nos amphibiens"
              title="Nos amphibiens"
              loading="lazy"
            />
            <figcaption className="sr-only">Nos amphibiens</figcaption>
          </figure>
        </div>

        <div className="pt-10 grid max-w-screen-xl mx-auto sm:gap-8 sm:grid-cols-12">
          <div className="mr-auto sm:col-span-9">
            <h3 className="flex-auto text-2xl font-medium text-slate-900 mb-2 uppercase">
              batraciens.be,
              <br />
              Opération sauvetage des batraciens
            </h3>
            <p className="font-light pb-2">
              Il s'agit du site de l'opération menée par Natagora. On y retrouve
              l'ensemble des informations pour tous les publics, de
              l'organisateur, au bénévole, mais également par le public qui se
              sent concerné par l'action. Vous pouvez également y trouver la
              liste de l'ensemble des sites de sauvetage des batraciens en
              Wallonie.
            </p>
            <p className="font-light">
              Pour les organisateurs, vous trouverez également un lien direct
              vers le projet Observations.be où encoder vos résultats.
            </p>

            <div className="space-x-4 mt-6 text-base font-medium">
              <div className="flex-auto flex space-x-4">
                <a
                  href="https://www.natagora.be/sauvetage-des-batraciens"
                  title="batraciens.be"
                  className="px-6 py-2 inline-flex font-semibold rounded-md border border-slate-200 hover:bg-slate-100 hover:shadow focus:outline-none focus:ring-2 focus:ring-natagora/40"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  batraciens.be{' '}
                  <span className="sr-only">
                    (ouvre dans une nouvelle fenêtre)
                  </span>
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
            <figcaption className="sr-only">Nos amphibiens</figcaption>
          </figure>
        </div>

        <div className="mt-10 flex flex-wrap mb-10 rounded-lg bg-red-100 bg-opacity-25 p-4 text-slate-700">
          <h3 className="flex-auto text-2xl font-medium text-slate-900 mb-2 uppercase">
            BSAL !
          </h3>
          <p className="font-light pb-2">
            Il s'agit d'un "est un champignon pathogène qui affecte
            essentiellement les salamandres et les tritons [...]. Ce champignon
            provoque la chytridiomycose, une maladie mortelle [...]. Parmi les
            espèces présentes en Belgique, la salamandre tachetée est
            extrêmement sensible à ce champignon et meurt rapidement après avoir
            été infectée. Le triton alpestre et le triton ponctué sont
            modérément sensibles au pathogène tandis que le triton palmé semble
            insensible." (Natagora).
          </p>

          <p>
            Vous avez trouvé une salamandre morte ? Prenez des photos et envoyer
            un mail à{' '}
            <a
              href="mailto:salamandre@natagora.be"
              title="Contactez Natagora"
              className="underline text-natagora font-medium decoration-natagora/50 hover:decoration-2 hover:text-natagora/80 transition duration-400 ease-in-out hover:decoration-inherit focus:outline-none focus:ring-2 focus:ring-natagora/40"
            >
              salamandre@natagora.be
            </a>
            .
          </p>
        </div>
      </section>
    </div>
  );
};

export default Learn;
