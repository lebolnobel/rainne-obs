import * as React from 'react';
import { GoArrowLeft, GoArrowRight } from 'react-icons/go';
import { MIGRATION } from '../../../../utils/constants';
import type { MigrationType } from '../../../../utils/constants';

type SwitcherType = {
  migration: MigrationType;
  setMigration: (key: MigrationType) => void;
};

const Switcher = (props: SwitcherType): React.ReactNode => {
  const { migration, setMigration } = props;
  return (
    <>
      <label className="shadow-card relative w-64 mx-auto flex cursor-pointer select-none items-center justify-center rounded-md bg-gray-600 p-1">
        <input
          type="checkbox"
          className="sr-only"
          checked={migration === MIGRATION.ALLER}
          onChange={() =>
            setMigration(
              migration === MIGRATION.ALLER
                ? MIGRATION.RETOUR
                : MIGRATION.ALLER,
            )
          }
        />
        <span
          className={`text-center w-full rounded py-2 px-[18px] mr-2 text-sm font-medium transition-all ${
            migration === MIGRATION.ALLER
              ? 'text-white bg-natagora/80'
              : 'text-gray-400 hover:bg-gray-50/10'
          }`}
        >
          Aller
          <GoArrowRight
            role="presentation"
            size="18px"
            className="ml-[6px] inline-flex"
            title="Migration aller"
          />
        </span>
        <span
          className={`text-center w-full rounded py-2 px-[18px] text-sm font-medium ${
            migration === 'retour'
              ? 'text-white bg-natagora/80'
              : 'text-gray-400 hover:bg-gray-50/10'
          }`}
        >
          <GoArrowLeft
            role="presentation"
            size="18px"
            className="mr-[6px] inline-flex"
            title="Migration retour"
          />
          Retour
        </span>
      </label>
    </>
  );
};

export default Switcher;
