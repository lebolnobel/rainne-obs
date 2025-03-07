import * as React from 'react';
import { Weather } from '../../../../utils/constants';

type WeatherPickerProps<T extends string> = {
  opts: T[];
  value: T;
  onChange: (value: T) => void;
};

const WeatherPicker = <T extends string>(
  props: WeatherPickerProps<T>,
): React.ReactNode => {
  const { opts, value, onChange } = props;

  return (
    <div className="flex items-center justify-center py-4">
      <div className="grid grid-cols-4 gap-2 w-full h-24">
        {opts.map((type) => {
          const Icon = Weather[type].icon;
          const label = Weather[type].name;

          return (
            <button
              key={type}
              onClick={() => onChange(type)}
              className={`p-4 rounded-lg transition-all duration-300 flex flex-col items-center focus:outline-none focus:ring-2 focus:ring-natagora/40 ${value === type ? 'bg-natagora/80 text-white shadow-lg scale-105' : 'hover:bg-natagora/10'}`}
            >
              <Icon role="presentation" size={24} />
              <span className="text-sm break-words">{label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default WeatherPicker;
