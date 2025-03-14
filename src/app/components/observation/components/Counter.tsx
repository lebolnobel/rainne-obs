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

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === 'Space') {
      handleBlur();
    } else if (event.key === 'Escape') {
      setIsEditing(false);
      setInputValue(count.toString());
    }
  };

  const handleChange = () => {
    setIsEditing(true);
    setInputValue(count.toString());
  };

  const handleMore = () => onChange(count + 1);
  const handleLess = () => onChange(Math.max(0, count - 1));

  return (
    <div className="flex items-center gap-2">
      <span className="mx-1 p-1 rounded-full bg-natagora/20">{icon}</span>
      <span className="flex grow text-sm truncate">{label}</span>

      <div className="flex items-center gap-2">
        <CounterButton onClick={handleLess}>
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
            onClick={handleChange}
            className="w-10 h-12 text-center font-medium hover:bg-gray-100 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-natagora/30"
          >
            {count}
          </button>
        )}
        <CounterButton onClick={handleMore}>
          <FaPlus role="presentation" className="text-natagora" />
        </CounterButton>
      </div>
    </div>
  );
};

export default Counter;
