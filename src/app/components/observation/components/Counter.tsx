import * as React from 'react';
import CounterButton from './CounterButton';
import { FaMinus, FaPlus } from 'react-icons/fa';

type CounterType = {
  label: string;
  count: number;
  icon: React.ReactNode;
  onChange: (value: number) => void;
};

const Counter = (props: CounterType): React.ReactNode => {
  const { label, count, icon, onChange } = props;
  const [isEditing, setIsEditing] = React.useState(false);
  const [inputValue, setInputValue] = React.useState(count.toString());

  const handleBlur = () => {
    const newValue = Math.max(0, parseInt(inputValue) || 0);

    onChange(newValue);

    setIsEditing(false);
    setInputValue(newValue.toString());
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleBlur();
    } else if (e.key === 'Escape') {
      setIsEditing(false);
      setInputValue(count.toString());
    }
  };

  return (
    <div className="flex items-center gap-2">
      <span className="mx-1 p-1 rounded-full bg-natagora/20 hover:bg-natagora/30">
        {icon}
      </span>
      <span className="flex grow text-sm truncate">{label}</span>

      <div className="flex items-center gap-2">
        <CounterButton onClick={() => onChange(count - 1)}>
          <FaMinus role="presentation" className="text-natagora" />
        </CounterButton>

        {isEditing ? (
          <input
            type="number"
            value={inputValue}
            onFocus={(e) => e.target.select()}
            onChange={(e) => setInputValue(e.target.value)}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
            className="w-10 h-12 text-center font-medium bg-gray-100 border rounded focus:outline-none focus:ring-2 focus:ring-natagora/30"
            min="0"
            autoFocus
          />
        ) : (
          <button
            onClick={() => {
              setIsEditing(true);
              setInputValue(count.toString());
            }}
            className="w-10 h-12 text-center font-medium hover:bg-gray-100 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-natagora/30"
          >
            {count}
          </button>
        )}
        <CounterButton onClick={() => onChange(count + 1)}>
          <FaPlus role="presentation" className="text-natagora" />
        </CounterButton>
      </div>
    </div>
  );
};

export default Counter;
