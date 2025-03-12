import * as React from 'react';
import { GoCheck, GoChevronDown } from 'react-icons/go';

const ModalSettings = (): React.ReactNode => {
  return (
    <section className="container px-10 py-6 mx-auto md:rounded-lg shadow-sm text-gray-800 bg-gray-50">
      <div className="mx-auto block">
        <h2 className="text-slate-500 uppercase">
          Ressources utiles pour l'opération de sauvetage
        </h2>
      </div>

      <div className="flex pt-10">
        <div className="flex flex-wrap">
          <h3 className="flex-auto text-2xl text-slate-900 mb-2 uppercase">
            Paramètres
          </h3>
          <div className="w-full flex-none text-base">
            <form>
              <div className="space-y-12">
                <div className="border-b border-gray-900/10 pb-12">
                  <h2 className="text-gray-900">VOTRE SITE</h2>
                  <p className="mt-1 text-gray-600">
                    Détails afin de pouvoir identifier votre site.
                  </p>

                  <div className="mt-10 grid grid-cols-3 gap-x-6 gap-y-8">
                    <div className="col-span-3 sm:col-span-2">
                      <label
                        htmlFor="username"
                        className="block font-semibold text-gray-900"
                      >
                        Site
                      </label>
                      <div className="mt-2">
                        <div className="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                          <div className="shrink-0 select-none text-base text-gray-500">
                            SB
                          </div>
                          <input
                            id="username"
                            name="username"
                            type="text"
                            placeholder="043"
                            className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0"
                          />
                        </div>
                      </div>
                      <p className="mt-1 text-sm text-gray-600">
                        Identifiant de votre site, ajoutez les chiffres. Vous
                        pouvez retrouver l'information sur la carte dynamique
                        sur{' '}
                        <a
                          href="https://www.natagora.be/sauvetage-des-batraciens"
                          title="batraciens.be"
                          className="underline text-natagora decoration-natagora/50 hover:decoration-2 hover:text-natagora/80 transition duration-400 ease-in-out hover:decoration-inherit focus:outline-none focus:ring-2 focus:ring-natagora/40"
                        >
                          batraciens.be
                        </a>
                      </p>
                    </div>

                    <div className="col-span-3 sm:col-span-2">
                      <label
                        htmlFor="dispositif"
                        className="block font-semibold text-gray-900"
                      >
                        Dispositif de sauvetage
                      </label>
                      <div className="mt-2 grid grid-cols-1">
                        <select
                          id="dispositif"
                          name="dispositif"
                          className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                        >
                          <option>Sauvetage manuel</option>
                          <option>Barrière avec trous de capture</option>
                          <option>Barrière sans trous de capture</option>
                        </select>
                        <GoChevronDown
                          aria-hidden="true"
                          className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pb-12">
                  <h2 className="text-gray-900">GESTION DES DONNÉES</h2>
                  <p className="mt-1 text-gray-600">
                    La manière dont vos observations seront gérées.
                  </p>

                  <div className="mt-10 space-y-10">
                    <fieldset>
                      <legend className=" font-semibold text-gray-900">
                        Sauvegarde des données
                      </legend>
                      <p className="text-sm text-gray-600">
                        Sauvegarder les données sur le cloud ou sur votre
                        appareil, en local ?
                      </p>
                      <div className="mt-6 space-y-6">
                        <div className="flex gap-3">
                          <div className="flex h-6 shrink-0 items-center">
                            <div className="group grid size-4 grid-cols-1">
                              <input
                                id="upload-data"
                                name="upload-data"
                                type="checkbox"
                                aria-describedby="cloud"
                                className="col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-white checked:border-natagora/50 checked:bg-natagora/90 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-natagora/50 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                              />
                              <GoCheck className="text-white font-bold opacity-0 group-has-[:checked]:opacity-100 pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25" />
                            </div>
                          </div>
                          <div className="">
                            <label
                              htmlFor="upload-data"
                              className="text-gray-900"
                            >
                              Sauvegarder en ligne
                            </label>
                            <p id="cloud" className="text-sm text-gray-600">
                              Les données seront également sauvegardées en en
                              ligne.
                            </p>
                          </div>
                        </div>
                      </div>
                    </fieldset>

                    <fieldset>
                      <legend className="font-semibold text-gray-900">
                        Gestion des données
                      </legend>
                      <p className="text-sm text-gray-600">
                        Sous quel format les donneés seront téléchargeables ?
                      </p>
                      <div className="mt-6 space-y-6">
                        <div className="flex items-center gap-x-3">
                          <input
                            defaultChecked
                            id="csv"
                            name="data-structure"
                            type="radio"
                            className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-natagora/50 checked:bg-natagora/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-natagora/50 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden"
                          />
                          <label htmlFor="csv" className="block text-gray-900">
                            .csv
                          </label>
                        </div>
                        <div className="flex items-center gap-x-3">
                          <input
                            id="xls"
                            name="data-structure"
                            type="radio"
                            className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-natagora/50 checked:bg-natagora/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-natagora/50 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden"
                          />
                          <label htmlFor="xls" className="block text-gray-900">
                            .xlsx
                          </label>
                        </div>
                      </div>
                    </fieldset>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-end gap-x-4">
                <button
                  className="px-6 py-2 font-semibold rounded-md bg-natagora text-white hover:bg-natagora/90 hover:shadow inline-flex relative focus:outline-none focus:ring-2 focus:ring-natagora/40"
                  type="submit"
                  role="button"
                  onClick={() => alert('...')}
                >
                  Valider
                </button>
                <button
                  className="py-2 px-6 font-semibold rounded-md border border-slate-200 hover:bg-slate-100 hover:shadow inline-flex relative focus:outline-none focus:ring-2 focus:ring-natagora/40"
                  type="button"
                  role="button"
                  onClick={() => alert('...')}
                >
                  Annuler
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModalSettings;
