/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import * as React from 'react';
import useLocalStorage from '../../hooks/useLocalStorage';
import { NavLink } from 'react-router-dom';
import { ArchiveType, CounterType, species, TYPE } from '../../utils/species';
import { defaultArchives, MIGRATION } from '../../utils/constants';
import { fullReadableDate } from '../../utils/date';

const History = (): React.ReactNode => {
  const [archives, setArchives] = useLocalStorage<Array<ArchiveType>>(
    'archives',
    defaultArchives,
  );

  React.useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  const hasValues = (obj: CounterType) =>
    Object.values(obj).some((value) => value > 0);

  return (
    <div className="container px-10 py-6 mx-auto md:rounded-lg shadow-sm text-gray-800 bg-gray-50">
      <section className="mx-auto block">
        <h2 className="text-slate-500 uppercase">
          Application de comptage pour l'opération de sauvetage
        </h2>

        <div className="mt-10">
          <h3 className="text-2xl font-medium text-slate-900 mb-2 uppercase">
            Votre historique
          </h3>

          <div className="">
            Ces données sont sauvegardées localement sur votre appareil. Vous
            pouvez voir ci-dessous l'historique de vos données à des fins
            d'archives. N'oubliez pas d'encoder vos données sur la plateforme
            Observations.be.{' '}
            <NavLink
              to="/about"
              title="A propos de l'application"
              className="underline text-natagora font-medium decoration-natagora/50 hover:decoration-2 hover:text-natagora/80 transition duration-400 ease-in-out hover:decoration-inherit focus:outline-none focus:ring-2 focus:ring-natagora/40"
            >
              En savoir plus ?
            </NavLink>
          </div>

          <div className="w-full flex-none">
            <div className="flex flex-col justify-center divide-y divide-slate-200">
              <div className="w-full max-w-3xl mx-auto mt-4">
                {!!archives && archives.length !== 0 ? (
                  archives.map((archive: ArchiveType, index: number) => {
                    const data = Object.entries(archive.data).filter(
                      ([, directions]) =>
                        hasValues(directions.aller) ||
                        hasValues(directions.retour),
                    );
                    return (
                      <div
                        key={index}
                        className="relative pl-8 sm:pl-[9.5rem] py-2 group"
                      >
                        <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[8.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-natagora after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[8.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                          <div className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center mb-1 sm:mb-0 text-natagora">
                            {fullReadableDate(archive.date)}
                          </div>
                        </div>

                        {data.length === 0 ? (
                          <p className="text-sm text-slate-400 italic">
                            Aucune donnée
                          </p>
                        ) : (
                          data.map(([sp, values]) => {
                            return (
                              <div
                                key={sp}
                                className="bg-white shadow-sm rounded-xl border border-slate-200 pt-2 pb-4 px-4 mb-2"
                              >
                                <div className="mb-2">
                                  <h3 className="text-lg font-semibold">
                                    {species[sp].name}
                                  </h3>
                                  <div className="italic text-slate-500 text-sm">
                                    <span>{species[sp].scientificName}</span>
                                  </div>
                                </div>

                                <div className="grid gap-4 md:grid-cols-2">
                                  {[MIGRATION.ALLER, MIGRATION.RETOUR].map(
                                    (direction) => {
                                      const visibleEntries = Object.entries(
                                        values[direction],
                                      ).filter(([, v]) => v > 0);

                                      return (
                                        <div
                                          key={direction}
                                          className="bg-slate-50 rounded-lg p-4 border border-slate-200"
                                        >
                                          <h4 className="text-slate-400 mb-2 uppercase text-xs tracking-wide">
                                            {direction.toUpperCase()}
                                          </h4>

                                          {visibleEntries.length === 0 ? (
                                            <p className="text-sm text-slate-400 italic">
                                              Aucune donnée
                                            </p>
                                          ) : (
                                            <ul className="space-y-1 text-sm">
                                              {visibleEntries.map(
                                                ([key, value]) => {
                                                  const name: keyof typeof TYPE =
                                                    // @ts-expect-error - TS can't infer the type
                                                    TYPE[key];

                                                  return (
                                                    <li
                                                      key={key}
                                                      className="flex justify-between"
                                                    >
                                                      <span>{name}</span>
                                                      <span>{value}</span>
                                                    </li>
                                                  );
                                                },
                                              )}
                                            </ul>
                                          )}
                                        </div>
                                      );
                                    },
                                  )}
                                </div>
                              </div>
                            );
                          })
                        )}
                      </div>
                    );
                  })
                ) : (
                  <div className="mt-6 rounded-lg bg-slate-100 p-4 text-slate-700">
                    Aucun historique, commencez à ajouter des observations !
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="mx-auto text-center space-x-4 mt-6 text-base font-medium">
            <button
              className="px-6 py-2 font-semibold rounded-md bg-red-700 text-white hover:bg-red-600 hover:shadow inline-flex relative focus:outline-none focus:ring-2 focus:ring-red-400/40"
              title="Compter des observations"
              onClick={() => setArchives(/*defaultArchives*/ [])}
            >
              Réinitialiser votre historique
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default History;
