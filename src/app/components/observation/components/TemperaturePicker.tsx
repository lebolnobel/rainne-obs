import * as React from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { MAX_TEMP, MIN_TEMP } from '../../../../utils/constants';

type TemperaturePickerProps = {
  temperature: number;
  onChange: (value: number) => void;
};

const TemperaturePicker = (props: TemperaturePickerProps): React.ReactNode => {
  const { temperature, onChange } = props;

  const handleTemperatureChange = (value: number) => {
    const newTemp = Math.min(Math.max(value, MIN_TEMP), MAX_TEMP);
    onChange(newTemp);
  };

  const adjustTemperature = (increment: number) => () => {
    handleTemperatureChange(temperature + increment);
  };

  return (
    <div className="md:py-4 py-2 md:space-y-8 space-y-4">
      <div className="w-full flex items-center justify-between gap-4">
        <button
          onClick={adjustTemperature(-1)}
          className="w-12 h-12 flex items-center justify-center rounded-full mx-1 p-1 rounded-full bg-natagora/20 text-white active:bg-natagora/60 transition-colors focus:outline-none focus:ring-2 focus:ring-natagora/30"
        >
          <FaMinus
            size={24}
            className="min-w-8 h-8 p-2 rounded-full bg-natagora/80 hover:bg-natagora/60"
          />
        </button>
        <div className="text-2xl mb-1">{temperature}°c</div>
        <button
          onClick={adjustTemperature(1)}
          className="w-12 h-12 flex items-center justify-center rounded-full mx-1 p-1 rounded-full bg-natagora/20 text-white active:bg-natagora/60 transition-colors focus:outline-none focus:ring-2 focus:ring-natagora/30"
        >
          <FaPlus
            size={24}
            className="min-w-8 h-8 p-2 rounded-full bg-natagora/80 hover:bg-natagora/60"
          />
        </button>
      </div>

      <div>
        <input
          type="range"
          value={temperature}
          onChange={(e) => handleTemperatureChange(parseInt(e.target.value))}
          min={`${MIN_TEMP}`}
          max={`${MAX_TEMP}`}
          className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-natagora focus:outline-none focus:ring-2 focus:ring-natagora/30"
          style={{
            background: `linear-gradient(to right, #a2b21cbb ${((temperature + 10) / 35) * 100}%, #e5e7eb ${((temperature + 10) / 35) * 100}%)`,
          }}
        />
        <div className="flex justify-between mt-2 text-sm text-gray-500">
          <span>{MIN_TEMP}°c</span>
          <span>{MAX_TEMP}°c</span>
        </div>
      </div>
    </div>
  );
};

export default TemperaturePicker;
