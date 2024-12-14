import * as React from 'react';
import { GoNumber, GoX } from 'react-icons/go';

type ModalType = {
  isOpen: boolean;
  onChange: () => void;
  onClose: () => void;
};

const Modal = (props: ModalType): React.ReactNode => {
  const { isOpen, onChange, onClose } = props;

  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (isOpen) {
        if (event.key === 'Escape') {
          event.preventDefault();
          onClose();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      tabIndex={-1}
      className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
    >
      <div className="relative p-4 w-full max-w-md max-h-full">
        <div className="relative bg-white rounded-lg shadow">
          <button
            type="button"
            className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
            data-modal-hide="popup-modal"
            onClick={onClose}
          >
            <GoX role="presentation" size="24" className="inline-flex" />
            <span className="sr-only">Fermer la popup</span>
          </button>
          <div className="p-4 md:p-5 text-center">
            <GoNumber
              role="presentation"
              size="36"
              className="inline-flex mb-6"
            />
            <h3 className="mb-5 text-lg font-normal text-gray-500">
              Vous allez perdre vos données d'encodage, elles n'ont pas été
              synchronisées. Voulez-vous continuer ?
            </h3>
            <button
              data-modal-hide="popup-modal"
              type="button"
              className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
              onClick={() => {
                onChange();
                onClose();
              }}
            >
              Oui, démarrer une nouvelle session
            </button>
            <button
              data-modal-hide="popup-modal"
              type="button"
              className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"
              onClick={onClose}
            >
              Annuler
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
