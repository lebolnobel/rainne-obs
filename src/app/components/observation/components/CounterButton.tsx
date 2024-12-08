import * as React from 'react';

type CounterButtonType = {
  onClick: () => void;
  children: React.ReactNode;
};

const CounterButton = (props: CounterButtonType): React.ReactNode => {
  const { onClick, children } = props;

  return (
    <button
      onClick={onClick}
      className="hover:bg-gray-100 rounded px-4 py-3 transition-colors text-xl"
    >
      {children}
    </button>
  );
};

export default CounterButton;
