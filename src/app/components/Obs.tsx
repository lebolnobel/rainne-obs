import * as React from 'react';
import Header from './observation/Header';
import SpeciesCard from './observation/SpeciesCard';
import { species } from '../../utils/species';
import { MIGRATION } from '../../utils/constants';
import type { Species } from '../../utils/species';
import type { MigrationType } from '../../utils/constants';

const Obs = (): React.ReactNode => {
  const [amphibiens, setSpecies] = React.useState<Species[]>(species);
  const [migration, setMigration] = React.useState<MigrationType>(
    MIGRATION.ALLER,
  );

  const handleUpdate = (speciesId: string, type: string, value: number) => {
    setSpecies((prev) =>
      prev.map((s) => {
        if (s.id === speciesId) {
          return {
            ...s,
            counts: {
              ...s.counts,
              [migration]: {
                ...s.counts[migration],
                [type]: Math.max(0, value), // Prevent negative values
              },
            },
          };
        }
        return s;
      }),
    );
  };

  return (
    <div className="mt-0">
      <Header
        species={amphibiens}
        migration={migration}
        setMigration={setMigration}
      />

      <div className="mx-auto block px-10 py-6 md:rounded-lg shadow-sm">
        <div className="w-full mx-auto grid grid-cols-1 xl:grid-cols-2 gap-6 space-y-6 sm:space-y-0">
          {amphibiens.map((s) => (
            <SpeciesCard
              key={s.id}
              id={s.id}
              species={s.name}
              scientificName={s.scientificName}
              imageUrl={s.imageUrl}
              counts={s.counts[migration]}
              onUpdate={(type, value) => handleUpdate(s.id, type, value)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Obs;
