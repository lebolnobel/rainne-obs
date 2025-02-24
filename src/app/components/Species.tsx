import * as React from 'react';
import ErrorPage from './ErrorPage';
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router';
import { species } from '../../utils/species';
import { GoArrowLeft } from 'react-icons/go';

const Species = (): React.ReactNode => {
  const { species: currentSpecies } = useParams();

  React.useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [currentSpecies]);

  if (
    !currentSpecies ||
    !Object.prototype.hasOwnProperty.call(species, currentSpecies)
  )
    return <ErrorPage />;

  const sp = species[currentSpecies];

  return (
    <div className="container px-10 py-6 mx-auto md:rounded-lg shadow-sm text-gray-800 bg-gray-50">
      <section className="mx-auto block">
        <h2 className="text-slate-500 uppercase">Nos espèces de batraciens</h2>

        <p>En cours de construction</p>

        <div className="flex pt-10">
          <div className="flex-auto">
            <div className="rounded-md overflow-hidden w-full bg-gray-100">
              <div className="relative h-48 group overflow-hidden">
                <img
                  src={sp.imageUrl}
                  alt={sp.name}
                  className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-125"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="flex items-center justify-between text-gray-200 hover:text-white">
                      <div>
                        <h3 className="text-xl font-semibold">{sp.name}</h3>
                        <div className="flex italic flex flex-wrap">
                          <span>{sp.scientificName}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full flex-none">
              <div className="flex flex-col justify-center divide-y divide-slate-200 py-10">
                <div className="w-full max-w-3xl mx-auto">
                  <div className="-my-6">
                    <div className="relative py-6">
                      <div className="flex flex-col">
                        <div className="text-xl">Généralités</div>
                      </div>
                      <div className="text-slate-500">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer blandit tristique auctor. Quisque egestas metus
                        ut eleifend tincidunt. Nulla ut diam eget neque
                        pellentesque pharetra vel quis nisl. Quisque tempus,
                        nunc eget sollicitudin congue, orci est mattis enim, vel
                        luctus metus magna eu nisl.
                      </div>
                    </div>

                    <div className="relative pl-8 sm:pl-32 py-6 group">
                      <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-natagora after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                        <div className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center mb-1 sm:mb-0 text-natagora">
                          Généralités
                        </div>
                      </div>
                      <div className="text-slate-500">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer blandit tristique auctor. Quisque egestas metus
                        ut eleifend tincidunt. Nulla ut diam eget neque
                        pellentesque pharetra vel quis nisl. Quisque tempus,
                        nunc eget sollicitudin congue, orci est mattis enim, vel
                        luctus metus magna eu nisl.
                      </div>
                    </div>

                    <div className="relative pl-8 sm:pl-32 py-6 group">
                      <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-natagora after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                        <div className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center mb-1 sm:mb-0 text-natagora">
                          Généralités{' '}
                        </div>
                      </div>
                      <div className="text-slate-500">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer blandit tristique auctor. Quisque egestas metus
                        ut eleifend tincidunt. Nulla ut diam eget neque
                        pellentesque pharetra vel quis nisl. Quisque tempus,
                        nunc eget sollicitudin congue, orci est mattis enim, vel
                        luctus metus magna eu nisl.
                      </div>
                    </div>

                    <div className="relative pl-8 sm:pl-32 py-6 group">
                      <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-natagora after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                        <div className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center mb-1 sm:mb-0 text-natagora">
                          Généralités{' '}
                        </div>
                      </div>
                      <div className="text-slate-500">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer blandit tristique auctor. Quisque egestas metus
                        ut eleifend tincidunt. Nulla ut diam eget neque
                        pellentesque pharetra vel quis nisl. Quisque tempus,
                        nunc eget sollicitudin congue, orci est mattis enim, vel
                        luctus metus magna eu nisl.
                      </div>
                    </div>

                    <div className="relative pl-8 sm:pl-32 py-6 group">
                      <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-natagora after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                        <div className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center mb-1 sm:mb-0 text-natagora">
                          Généralités{' '}
                        </div>
                      </div>
                      <div className="text-slate-500">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer blandit tristique auctor. Quisque egestas metus
                        ut eleifend tincidunt. Nulla ut diam eget neque
                        pellentesque pharetra vel quis nisl. Quisque tempus,
                        nunc eget sollicitudin congue, orci est mattis enim, vel
                        luctus metus magna eu nisl.
                      </div>
                    </div>

                    <div className="relative pl-8 sm:pl-32 py-6 group">
                      <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-natagora after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                        <div className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center mb-1 sm:mb-0 text-natagora">
                          Généralités{' '}
                        </div>
                      </div>
                      <div className="text-slate-500">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer blandit tristique auctor. Quisque egestas metus
                        ut eleifend tincidunt. Nulla ut diam eget neque
                        pellentesque pharetra vel quis nisl. Quisque tempus,
                        nunc eget sollicitudin congue, orci est mattis enim, vel
                        luctus metus magna eu nisl.
                      </div>
                    </div>

                    <div className="relative pl-8 sm:pl-32 py-6 group">
                      <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-natagora after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                        <div className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center mb-1 sm:mb-0 text-natagora">
                          Généralités{' '}
                        </div>
                      </div>
                      <div className="text-slate-500">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer blandit tristique auctor. Quisque egestas metus
                        ut eleifend tincidunt. Nulla ut diam eget neque
                        pellentesque pharetra vel quis nisl. Quisque tempus,
                        nunc eget sollicitudin congue, orci est mattis enim, vel
                        luctus metus magna eu nisl.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mx-auto text-center space-x-4 mt-6 text-base font-medium">
              <NavLink
                to="/obs"
                title="Revenir à mes observations"
                className="px-6 py-2 inline-flex font-semibold rounded-md border border-slate-200 hover:bg-slate-100 hover:shadow focus:outline-none focus:ring-2 focus:ring-natagora/40"
              >
                <GoArrowLeft role="presentation" size="24" className="mr-2" />
                Revenir à mes observations
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Species;
