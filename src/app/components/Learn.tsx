import * as React from 'react';
import { GoArrowRight } from 'react-icons/go';

const NOS_AMPHIBIENS_URL = 'https://www.natagora.be/download/39253';

const Learn = (): React.ReactNode => {
  const downloadMemo = () => {
    window.open(NOS_AMPHIBIENS_URL);
  };

  return (
    <div className="container px-10 py-6 mx-auto md:rounded-lg shadow-sm text-gray-800 bg-gray-50">
      <section className="mx-auto block">
        <h2 className="text-slate-500 uppercase">
          En apprendre plus sur l'opération et les batraciens
        </h2>

        <div className="flex pt-10">
          <div className="flex flex-wrap">
            <h3 className="flex-auto text-2xl font-medium text-slate-900 mb-2 uppercase">
              BSAL
            </h3>
            <p className="font-light pb-2">
              Il s'agit d'un "est un champignon pathogène qui affecte
              essentiellement les salamandres et les tritons [...]. Ce
              champignon provoque la chytridiomycose, une maladie mortelle
              [...]. Parmi les espèces présentes en Belgique, la salamandre
              tachetée est extrêmement sensible à ce champignon et meurt
              rapidement après avoir été infectée. Le triton alpestre et le
              triton ponctué sont modérément sensibles au pathogène tandis que
              le triton palmé semble insensible." (Natagora).
            </p>

            <p>
              Vous avez trouvé une salamandre morte ? Prenez des photos et
              envoyer un mail à{' '}
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
        </div>

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
                      Natagora a publié un memo pour vous aider à identifier les
                      amphibiens de Wallonie. Attention cependant que les
                      critères sont différents en période de migration. Il n'en
                      reste pas moins utile.
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
                    <figcaption className="sr-only">Nos amphibiens</figcaption>
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
                    <p className="font-light pb-2">
                      Il s'agit du site de l'opération menée par Natagora. On y
                      retrouve l'ensemble des informations pour tous les
                      publics, de l'organisateur, au bénévole, mais également
                      par le public qui se sent concerné par l'action. Vous
                      pouvez également y trouver la liste de l'ensemble des
                      sites de sauvetage des batraciens en Wallonie.
                    </p>
                    <p className="font-light">
                      Pour les organisateurs, vous trouverez également un lien
                      direct vers le projet Observations.be où encoder vos
                      résultats.
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
                    <figcaption className="sr-only">Nos amphibiens</figcaption>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Learn;
