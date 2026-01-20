import * as React from 'react';
import { GoX } from 'react-icons/go';

type ModalType = {
  isOpen: boolean;
  onClose: () => void;

  // Type of modal (footer section)
  type?: 'confirm' | 'info';

  // Title of the header
  header: React.ReactNode;
  // Content of the modal
  children: React.ReactNode;
};

const Modal = (props: ModalType): React.ReactNode => {
  const { isOpen, type, onClose, header, children } = props;

  const ref = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const handleBackdropClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event?.target as Node)) {
        onClose();
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        onClose();
      }
    };

    isOpen && window.addEventListener('keydown', handleKeyDown);
    isOpen && document.addEventListener('mousedown', handleBackdropClick);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleBackdropClick);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 z-40 text-base">
      <div className="fixed inset-0 flex items-center justify-center z-50 sm:mx-4">
        <div
          ref={ref}
          role="dialog"
          className="items-center justify-center shadow-lg sm:max-w-xl w-full"
        >
          <div className="w-full mx-auto overflow-hidden transition-all duration-350 transform bg-white divide-y divide-gray-100 shadow-2xl fixed bottom-0 sm:relative rounded-t-xl sm:rounded-xl max-h-[90vh] sm:max-h-full">
            <button
              type="button"
              autoFocus={type === 'confirm'}
              role="close"
              aria-label="close"
              onClick={onClose}
              className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center focus:outline-none focus:ring-2 focus:ring-natagora/40"
            >
              <GoX role="presentation" size="24" />
              <span className="sr-only">Fermer la popup</span>
            </button>

            <div className="p-4">
              <div className="flex flex-row items-center text-left">
                {header}
              </div>
            </div>

            <div className="p-4 overflow-y-auto">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
