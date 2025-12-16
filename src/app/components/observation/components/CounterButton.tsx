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
      className="hover:bg-gray-100 rounded p-3 transition-colors text-xl focus:outline-none focus:ring-2 focus:ring-natagora/30"
    >
      {children}
    </button>
  );
};

export default CounterButton;
