import * as React from 'react';
import { GoCopy, GoGear, GoPlusCircle } from 'react-icons/go';

type ObsHeaderProps = {
  onAction: (type: null | 'session' | 'weather' | 'copy' | 'settings') => void;
};

const HeaderAction = (props: ObsHeaderProps): React.ReactNode => {
  const { onAction } = props;

  return (
    <div className="flex basis-1/2 justify-end">
      <div className="space-x-2">
        <button
          type="submit"
          title="Copier vos données au format textuel"
          className="shadow-card w-10 h-10 sm:w-12 sm:h-12 mx-auto cursor-pointer select-none rounded-md bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-natagora/30"
          onClick={() => {
            onAction('copy');
          }}
        >
          <GoCopy
            role="presentation"
            size="24"
            title="Copier vos données au format textuel"
            className="text-gray-50 inline-flex"
          />
        </button>
        <button
          type="submit"
          title="Paramètres d'encodage"
          className="shadow-card w-10 h-10 sm:w-12 sm:h-12 mx-auto cursor-pointer select-none rounded-md bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-natagora/30"
          onClick={() => {
            onAction('settings');
          }}
        >
          <GoGear
            role="presentation"
            size="24"
            title="Paramètres d'encodage"
            className="text-gray-50 inline-flex"
          />
        </button>
        <button
          type="submit"
          title="Nouvelle session d'encodage"
          className="shadow-card w-10 h-10 sm:w-12 sm:h-12 mx-auto cursor-pointer select-none rounded-md bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-natagora/30"
          onClick={() => {
            onAction('session');
          }}
        >
          <GoPlusCircle
            role="presentation"
            size="24"
            title="Nouvelle session d'encodage"
            className="text-gray-50 inline-flex"
          />
        </button>
      </div>
    </div>
  );
};

export default HeaderAction;
