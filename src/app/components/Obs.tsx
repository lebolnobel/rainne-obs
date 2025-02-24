import * as React from 'react';
import ObsHeader from './observation/Header';
import SpeciesCard from './observation/SpeciesCard';
import useLocalStorage from '../../hooks/useLocalStorage';
import { species, defaultSpeciesCounter } from '../../utils/species';
import { defaultWeather, MIGRATION } from '../../utils/constants';
import type { SpeciesCounterType } from '../../utils/species';
import type { MigrationType, WeatherType } from '../../utils/constants';

const Obs = (): React.ReactNode => {
  const [counters, setCounters] = useLocalStorage<SpeciesCounterType>(
    'counters',
    defaultSpeciesCounter,
  );
  const [weather, setWeather] = useLocalStorage<WeatherType>(
    'weather',
    defaultWeather,
  );
  const [migration, setMigration] = React.useState<MigrationType>(
    MIGRATION.ALLER,
  );

  React.useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  const handleUpdate = (speciesId: string, type: string, value: number) => {
    setCounters({
      ...counters,
      [speciesId]: {
        ...counters[speciesId],
        [migration]: {
          ...counters[speciesId][migration],
          [type]: value,
        },
      },
    });
  };

  return (
    <>
      <ObsHeader
        counters={counters}
        weather={weather}
        migration={migration}
        setMigration={setMigration}
        setCounters={setCounters}
        setWeather={setWeather}
      />

      <section className="mx-auto block px-10 py-6 md:rounded-lg shadow-sm">
        <div className="w-full mx-auto grid grid-cols-1 xl:grid-cols-2 gap-6 space-y-6 sm:space-y-0">
          {Object.keys(species).map((s) => (
            <SpeciesCard
              key={s}
              id={s}
              species={species[s].name}
              scientificName={species[s].scientificName}
              imageUrl={species[s].imageUrl}
              counts={counters[s][migration]}
              onUpdate={(type, value) => handleUpdate(s, type, value)}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Obs;
