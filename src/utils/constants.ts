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

export type MigrationType = 'aller' | 'retour';
export type WindType = keyof typeof Wind;
export type RainType = keyof typeof Rain;

export type WeatherType = {
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

export const defaultWeather = {
  rain: 'damp',
  wind: 'no-wind',
  temperature: 10,
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
