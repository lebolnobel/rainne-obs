import { IconType } from 'react-icons';
import {
  TiWeatherCloudy,
  TiWeatherDownpour,
  TiWeatherNight,
  TiWeatherShower,
  TiWeatherStormy,
  TiWeatherSunny,
  TiWeatherWindy,
  TiWeatherWindyCloudy,
} from 'react-icons/ti';
import {
  ArchiveType,
  CounterType,
  SPECIES,
  SpeciesCounterType,
} from './species';

export type SettingsType = {
  // Identification du site, sur le projet observations.be
  siteId: string | null;

  // Type de barrage
  siteType: 'manual' | 'barrage_trou' | 'barrage';
};

export type MigrationType = 'aller' | 'retour';
export type WindType = keyof typeof Wind;
export type RainType = keyof typeof Rain;

export type WeatherType = {
  date?: Date;
  rain: RainType;
  wind: WindType;
  temperature: number;
};

type WeatherObjType = {
  [key: string]: {
    icon: IconType;
    name: string;
  };
};

export const MIGRATION = Object.freeze({
  ALLER: 'aller',
  RETOUR: 'retour',
});

export const MIN_TEMP = -10;
export const MAX_TEMP = 25;

export const defaultArchives: Array<ArchiveType> = [];

const defaultCounter: {
  aller: CounterType;
  retour: CounterType;
} = {
  aller: { males: 0, females: 0, undefined: 0, roadKill: 0 },
  retour: { males: 0, females: 0, undefined: 0, roadKill: 0 },
};

export const defaultSpeciesCounter: SpeciesCounterType = {
  [SPECIES.BUFO_BUFO]: { ...defaultCounter },
  [SPECIES.RANA_TEMPORARIA]: { ...defaultCounter },
  [SPECIES.ICHTHYOSAURA_ALPESTRIS]: { ...defaultCounter },
  [SPECIES.LISSOTRITON_HELVETICUS]: { ...defaultCounter },
  [SPECIES.LISSOTRITON_VULGARIS]: { ...defaultCounter },
  [SPECIES.TRITURUS_CRISTATUS]: { ...defaultCounter },
  [SPECIES.PELOPHYLAX_LESSONAE]: { ...defaultCounter },
  [SPECIES.SALAMANDRA_SALAMANDRA]: { ...defaultCounter },
};

export const defaultWeather: WeatherType = {
  date: undefined,
  rain: 'damp',
  wind: 'no-wind',
  temperature: 10,
};

export const defaultSettings: SettingsType = {
  siteId: null,
  siteType: 'manual',
};

export const Rain: WeatherObjType = {
  damp: {
    name: 'Humide',
    icon: TiWeatherCloudy,
  },
  rain: {
    name: 'Pluie',
    icon: TiWeatherDownpour,
  },
  'intermittent-rain': {
    name: 'Pluie intermittente',
    icon: TiWeatherShower,
  },
  'clear-nigh': {
    name: 'Sec',
    icon: TiWeatherSunny,
  },
};

export const Wind: WeatherObjType = {
  'no-wind': {
    name: 'Pas de vent',
    icon: TiWeatherNight,
  },
  'light-wind': {
    name: 'Vent léger',
    icon: TiWeatherWindy,
  },
  'strong-wind': {
    name: 'Vent fort',
    icon: TiWeatherWindyCloudy,
  },
  storm: {
    name: 'Tempête',
    icon: TiWeatherStormy,
  },
};

export const Weather = { ...Rain, ...Wind };
