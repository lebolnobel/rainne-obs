import * as React from 'react';
import Switcher from './components/Switcher';
import Modal from './components/Modal';
import { GoCalendar, GoNumber, GoPlusCircle } from 'react-icons/go';
import { TbTemperatureCelsius } from 'react-icons/tb';
import { TiWeatherShower } from 'react-icons/ti';
import TemperaturePicker from './components/TemperaturePicker';
import WeatherPicker from './components/WeatherPicker';
import ModalClipboard from './components/ModalClipboard';
import HeaderAction from './components/Action';
import { currentDate } from '../../../utils/date';
import { defaultSpeciesCounter } from '../../../utils/species';
import {
  MIGRATION,
  defaultWeather,
  Rain,
  Weather,
  Wind,
} from '../../../utils/constants';
import type { SpeciesCounterType } from '../../../utils/species';
import type {
  MigrationType,
  SettingsType,
  WeatherType,
} from '../../../utils/constants';

type ObsHeaderProps = {
  counters: SpeciesCounterType;
  weather: WeatherType;
  migration: MigrationType;
  settings: SettingsType;
  setMigration: (key: MigrationType) => void;
  setCounters: (value: SpeciesCounterType) => void;
  setWeather: (value: WeatherType) => void;
};

const ObsHeader = (props: ObsHeaderProps): React.ReactNode => {
  const {
    counters,
    weather,
    migration,
    settings,
    setMigration,
    setCounters,
    setWeather,
  } = props;

  const [modal, setModal] = React.useState<
    null | 'session' | 'weather' | 'copy'
  >(null);

  function totalCounter(
    counters: SpeciesCounterType,
    migration: MigrationType,
  ): number {
    return Object.values(counters).reduce((total, species) => {
      return (
        total +
        Object.values(species[migration]).reduce((acc, value) => acc + value, 0)
      );
    }, 0);
  }

  function handleWeatherChange<T>(key: string, value: T) {
    setWeather({
      ...weather,
      [key]: value,
    });
  }

  function onClose() {
    setModal(null);
  }

  const totalAller: number = totalCounter(counters, MIGRATION.ALLER);
  const totalRetour: number = totalCounter(counters, MIGRATION.RETOUR);
  const total: number = totalAller + totalRetour;

  const actions = [
    {
      icon: Weather[weather.wind].icon,
      label: 'Vent',
      value: Weather[weather.wind].name,
      action: () => setModal('weather'),
    },
    {
      icon: Weather[weather.rain].icon,
      label: 'Météo',
      value: Weather[weather.rain].name,
      action: () => setModal('weather'),
    },
    {
      icon: TbTemperatureCelsius,
      label: 'Temp.',
      value: weather.temperature,
      action: () => setModal('weather'),
    },
    {
      icon: GoCalendar,
      label: 'Date',
      value: currentDate(),
      action: () => {
        alert('Vous ne pouvez pas encore changer la date');
      },
    },
  ];

  return (
    <div
      className={`mt-0 relative p-6 mb-8 ${migration === MIGRATION.ALLER ? 'bg-gradient-to-r from-slate-500 via-gray-500 to-slate-700' : 'bg-gradient-to-r from-gray-700 via-slate-500 to-slate-600'}`}
    >
      <div className="max-w-screen-sm mx-auto">
        <div className="absolute -right-1 -top-2 text-gray-400 z-0 text-7xl opacity-25">
          {settings.siteId}
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
          <HeaderAction onAction={setModal} />
        </div>

        <div className="flex justify-between">
          {actions.map((action) => (
            <button
              key={action.label}
              className="flex flex-col text-center items-center gap-2 w-1/5 transition-transform rounded-xl cursor-pointer hover:scale-110 focus:outline-none focus:ring-2 focus:ring-natagora/30"
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
            </button>
          ))}
        </div>

        <div className="mt-8">
          <Switcher
            migration={migration}
            totalAller={totalAller}
            totalRetour={totalRetour}
            setMigration={setMigration}
          />
        </div>
      </div>

      <div className="relative">
        {modal === 'session' && (
          <Modal
            isOpen={true}
            type="confirm"
            onChange={() => {
              setCounters(defaultSpeciesCounter);
              setWeather(defaultWeather);
            }}
            onClose={onClose}
            header={
              <>
                <div className="text-2xl pr-4">
                  <GoPlusCircle role="presentation" size="24" />
                </div>
                <div>
                  <h3 className="flex-auto text-2xl mr-10 font-medium text-slate-900 uppercase">
                    Démarrer une nouvelle session ?
                  </h3>
                </div>
              </>
            }
            action={'Oui, une nouvelle session'}
          >
            <div className="flex">
              <GoNumber
                role="presentation"
                size="64"
                className="inline-flex mb-6 basis-1/4"
              />
              <p className="text-gray-500 basis-3/4">
                Vous allez perdre vos données d'encodage, elles n'ont pas été
                synchronisées. Voulez-vous continuer ? Une nouvelle session
                débutera selon vos paramètres.
              </p>
            </div>
          </Modal>
        )}

        {modal === 'copy' && (
          <ModalClipboard
            counters={counters}
            weather={weather}
            totalAller={totalAller}
            totalRetour={totalRetour}
            onClose={onClose}
          />
        )}

        {modal === 'weather' && (
          <Modal
            isOpen={true}
            onChange={() => setCounters(defaultSpeciesCounter)}
            onClose={onClose}
            header={
              <>
                <div className="text-2xl pr-4">
                  <TiWeatherShower role="presentation" size="24" />
                </div>
                <div>
                  <h3 className="flex-auto text-2xl mr-10 font-medium text-slate-900 uppercase">
                    Météo
                  </h3>
                </div>
              </>
            }
          >
            <div className="px-2">
              <h4 className="text-lg font-medium text-slate-900 uppercase">
                Température
              </h4>

              <TemperaturePicker
                temperature={weather.temperature}
                onChange={(value) => handleWeatherChange('temperature', value)}
              />

              <h4 className="text-lg font-medium text-slate-900 uppercase">
                Type de précipitations
              </h4>

              <WeatherPicker
                value={weather.rain as string}
                onChange={(value) => handleWeatherChange('rain', value)}
                opts={Object.keys(Rain)}
              />

              <h4 className="text-lg font-medium text-slate-900 uppercase">
                Vent
              </h4>

              <WeatherPicker
                value={weather.wind as string}
                onChange={(value) => handleWeatherChange('wind', value)}
                opts={Object.keys(Wind)}
              />
            </div>
          </Modal>
        )}
      </div>
    </div>
  );
};

export default ObsHeader;
