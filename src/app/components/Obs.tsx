import * as React from 'react';
import Header from './observation/Header';
import SpeciesCard from './observation/SpeciesCard';
import useLocalStorage from '../../hooks/useLocalStorage';
import { species, defaultSpeciesCounter } from '../../utils/species';
import { MIGRATION } from '../../utils/constants';
import type { SpeciesCounterType } from '../../utils/species';
import type { MigrationType } from '../../utils/constants';

const Obs = (): React.ReactNode => {
  const [counters, setCounters] = useLocalStorage<SpeciesCounterType>(
    'counters',
    defaultSpeciesCounter,
  );
  const [migration, setMigration] = React.useState<MigrationType>(
    MIGRATION.ALLER,
  );

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
    <div className="mt-0">
      <Header
        counters={counters}
        migration={migration}
        setMigration={setMigration}
        setCounters={setCounters}
      />

      <div className="mx-auto block px-10 py-6 md:rounded-lg shadow-sm">
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
      </div>
    </div>
  );
};

export default Obs;
