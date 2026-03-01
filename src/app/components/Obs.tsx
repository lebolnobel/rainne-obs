import * as React from 'react';
import ObsHeader from './observation/Header';
import SpeciesCard from './observation/SpeciesCard';
import useLocalStorage from '../../hooks/useLocalStorage';
import { NavLink } from 'react-router-dom';
import { species } from '../../utils/species';
import {
  defaultArchives,
  defaultSettings,
  defaultSpeciesCounter,
  defaultWeather,
  MIGRATION,
} from '../../utils/constants';
import type { ArchiveType, SpeciesCounterType } from '../../utils/species';
import type {
  MigrationType,
  SettingsType,
  WeatherType,
} from '../../utils/constants';

const Obs = (): React.ReactNode => {
  const [counters, setCounters] = useLocalStorage<SpeciesCounterType>(
    'counters',
    defaultSpeciesCounter,
  );
  const [weather, setWeather] = useLocalStorage<WeatherType>(
    'weather',
    defaultWeather,
  );
  const [settings, setSettings] = useLocalStorage<SettingsType>(
    'settings',
    defaultSettings,
  );
  const [archives, setArchives] = useLocalStorage<Array<ArchiveType>>(
    'archives',
    defaultArchives,
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

  const resetCounters = (value: SpeciesCounterType) => {
    // Push in Archives
    setArchives([
      {
        date: weather.date || new Date(),
        data: { ...counters },
      },
      ...archives.slice(0, 99), // Get only the 100 last elements (memory)
    ]);

    // Reset counters
    setCounters(value);
  };

  return (
    <>
      <ObsHeader
        counters={counters}
        weather={weather}
        migration={migration}
        settings={settings}
        setMigration={setMigration}
        setCounters={resetCounters}
        setWeather={setWeather}
        setSettings={setSettings}
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

        <div className="text-sm my-10 rounded-lg bg-slate-100 p-4 text-slate-700">
          <p>
            Ces données sont sauvegardées localement sur votre appareil. Vous
            pouvez également{' '}
            <NavLink
              to="/history"
              title="Rainne, Natagora"
              className="text-natagora decoration-natagora/50 hover:decoration-2 hover:text-natagora/80 transition duration-400 ease-in-out hover:decoration-inherit focus:outline-none focus:ring-2 focus:ring-natagora/40"
            >
              voir votre historique
            </NavLink>
            .
          </p>
        </div>
      </section>
    </>
  );
};

export default Obs;
