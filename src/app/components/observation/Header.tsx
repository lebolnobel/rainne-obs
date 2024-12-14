import * as React from 'react';
import Switcher from './components/Switcher';
import {
  GoArrowLeft,
  GoArrowRight,
  GoCalendar,
  GoDownload,
  GoPlusCircle,
  GoSync,
} from 'react-icons/go';
import { TbTemperatureCelsius } from 'react-icons/tb';
import {
  TiWeatherShower,
  // TiWeatherCloudy,
  // TiWeatherCloudy,
  // TiWeatherNight,
  // TiWeatherWindyCloudy,
  // TiWeatherStormy,
} from 'react-icons/ti';
import { currentDate } from '../../../utils/date';
import { MIGRATION } from '../../../utils/constants';
import type { Species } from '../../../utils/species';
import type { MigrationType } from '../../../utils/constants';

type HeaderProps = {
  species: Species[];
  migration: MigrationType;
  setMigration: (key: MigrationType) => void;
};

const Header = (props: HeaderProps): React.ReactNode => {
  const { species, migration, setMigration } = props;

  const total = species.reduce((acc, animal) => {
    const countsSum = Object.values(animal.counts).reduce(
      (subTotal, subObject) => {
        return (
          subTotal +
          Object.values(subObject).reduce((sum, value) => sum + value, 0)
        );
      },
      0,
    );

    return acc + countsSum;
  }, 0);

  const totalAller = species.reduce(
    (acc, s) =>
      acc +
      Object.values(s.counts[MIGRATION.ALLER]).reduce(
        (sum, count) => sum + count,
        0,
      ),
    0,
  );

  const totalRetour = species.reduce(
    (acc, s) =>
      acc +
      Object.values(s.counts[MIGRATION.RETOUR]).reduce(
        (sum, count) => sum + count,
        0,
      ),
    0,
  );

  const actions = [
    {
      icon: GoArrowRight,
      label: 'Aller',
      value: totalAller,
      action: () => setMigration(MIGRATION.ALLER),
    },
    {
      icon: GoArrowLeft,
      label: 'Retour',
      value: totalRetour,
      action: () => setMigration(MIGRATION.RETOUR),
    },
    {
      icon: TiWeatherShower,
      label: 'Météo',
      value: 'Pluie',
      action: () => alert('meteo'),
    },
    {
      icon: TbTemperatureCelsius,
      label: 'T°',
      value: 7,
      action: () => alert('temp'),
    },
    {
      icon: GoCalendar,
      label: 'Date',
      value: currentDate(),
      action: () => alert('date'),
    },
  ];

  return (
    <div
      className={`relative p-6 mb-8 ${migration === MIGRATION.ALLER ? 'bg-gradient-to-r from-slate-500 via-gray-500 to-slate-700' : 'bg-gradient-to-r from-gray-700 via-slate-500 to-slate-600'}`}
    >
      <div className="max-w-screen-sm mx-auto">
        <div className="absolute -right-1 -top-2 text-gray-400 z-0 text-7xl opacity-25">
          SB-043
        </div>
        <h3 className="text-slate-200 uppercase my-2">
          Sauvetage des batraciens
        </h3>
        <div className="flex place-content-between mb-6">
          <div className="basis-1/2 truncate text-gray-400">
            <span className="text-sm font-normal uppercase">
              Nombre total d'observations
            </span>
            <div className="text-5xl font-semibold -mt-2 text-gray-50">
              {total}
            </div>
          </div>
          <div className="flex basis-1/2 justify-end">
            <div className="space-x-2 sm:space-x-4">
              <button
                type="submit"
                title="Nouvelle session d'encodage"
                className="shadow-card w-10 h-10 sm:w-12 sm:h-12 mx-auto cursor-pointer select-none rounded-md bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-natagora/30"
              >
                <GoPlusCircle
                  role="presentation"
                  size="24"
                  title="Nouvelle session d'encodage"
                  className="text-gray-50 inline-flex"
                  onClick={() => {
                    alert('New');
                  }}
                />
              </button>
              <button
                type="submit"
                title="Synchroniser vos données"
                className="shadow-card w-10 h-10 sm:w-12 sm:h-12 mx-auto cursor-pointer select-none rounded-md bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-natagora/30"
              >
                <GoSync
                  role="presentation"
                  size="24"
                  title="Synchroniser vos données"
                  className="text-gray-50 inline-flex"
                  onClick={() => {
                    alert('Sync');
                  }}
                />
              </button>
              <button
                type="submit"
                title="Téléchager vos données"
                className="shadow-card w-10 h-10 sm:w-12 sm:h-12 mx-auto cursor-pointer select-none rounded-md bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-natagora/30"
              >
                <GoDownload
                  role="presentation"
                  size="24"
                  title="Téléchager vos données"
                  className="text-gray-50 inline-flex"
                  onClick={() => {
                    alert('Download');
                  }}
                />
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          {actions.map((action) => (
            <div
              key={action.label}
              className="flex flex-col text-center items-center gap-2 w-1/5 transition-all cursor-pointer hover:scale-110 hover:opacity-90"
              onClick={action.action}
            >
              <div className="bg-natagora/60 p-3 rounded-full text-white p-1 rounded-full">
                <action.icon className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg text-gray-200">{action.value}</span>
                <span className="text-xs text-gray-400 -mt-1">
                  {action.label}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <Switcher migration={migration} setMigration={setMigration} />
        </div>
      </div>
    </div>
  );
};

export default Header;
