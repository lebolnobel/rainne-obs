import * as React from 'react';
import Modal from './Modal';
import useClipboard from '../../../../hooks/useClipboard';
import { GoCheck, GoCopy } from 'react-icons/go';
import { readableDate } from '../../../../utils/date';
import { MIGRATION, Weather } from '../../../../utils/constants';
import { species, TYPE } from '../../../../utils/species';
import type { SpeciesCounterType } from '../../../../utils/species';
import type { MigrationType, WeatherType } from '../../../../utils/constants';

type ModalClipboardProps = {
  counters: SpeciesCounterType;
  weather: WeatherType;

  totalAller: number;
  totalRetour: number;

  onClose: () => void;
};

const ModalClipboard = (props: ModalClipboardProps): React.ReactNode => {
  const { counters, weather, totalAller, totalRetour, onClose } = props;

  const divRef = React.useRef(null);
  const { copied, copyToClipboard } = useClipboard();

  const selectText = () => {
    if (divRef.current) {
      const range = document.createRange();
      range.selectNodeContents(divRef.current);

      const selection = window.getSelection();
      selection?.removeAllRanges();
      selection?.addRange(range);
    }
  };

  const computeData = (migrationType: MigrationType) => {
    return Object.entries(counters)
      .filter(([, value]) => {
        const migrationData = value?.[migrationType];
        return (
          migrationData &&
          Object.values(migrationData).reduce((acc, value) => acc + value, 0) >
            0
        );
      })
      .map(([migration, value]) => {
        const speciesName = species[migration]?.name;
        const migrationData = value[migrationType];

        const details = Object.entries(migrationData)
          .filter(([, count]) => count > 0)
          // @ts-expect-error - TS can't infer the type
          .map(([type, count]) => `${TYPE[type]} (${count})`)
          .join(', ');

        return details ? `\n* ${speciesName} : ${details}` : '';
      })
      .join('');
  };

  const contentToCopy = `Date : ${readableDate(weather.date)}\nTotal : ${totalAller + totalRetour}\nMétéo : ${weather.temperature}°c, ${Weather[weather.rain].name}, ${Weather[weather.wind].name}\n${(totalAller > 0 && `Aller : ${computeData(MIGRATION.ALLER)}\n`) || ''}${(totalRetour > 0 && `Retour : ${computeData(MIGRATION.RETOUR)}`) || ''}`;

  return (
    <Modal
      isOpen={true}
      type={'info'}
      onClose={onClose}
      header={
        <>
          <div className="text-2xl pr-4">
            <GoCopy role="presentation" size="24" />
          </div>
          <div>
            <h3 className="flex-auto text-2xl mr-10 font-medium text-slate-900 uppercase">
              Copier vos données
            </h3>
          </div>
        </>
      }
    >
      <div className="mb-8 md:mb-0">
        <p className="text-gray-500 basis-3/4">
          Ci-dessous, vous trouverez un résumé de vos données. Vous pouvez les
          copier et les coller ailleurs (par exemple un groupe WhatsApp avec
          d'autres volontaires).
        </p>

        <div ref={divRef} className="mt-8 mb-4 ml-8 mr-8 center">
          <div className="relative">
            <div
              ref={divRef}
              className="col-span-6 bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              onClick={selectText}
              dangerouslySetInnerHTML={{
                __html: contentToCopy.replace(/\n/g, '<br />'),
              }}
            />
            <button
              className="absolute end-2 top-6 -translate-y-1/2 text-gray-500 hover:bg-gray-100 rounded-lg p-2 inline-flex items-center justify-center"
              onClick={() => {
                copyToClipboard(contentToCopy).catch((error) =>
                  console.error(error),
                );
              }}
            >
              {copied ? (
                <GoCheck role="presentation" size="16" />
              ) : (
                <GoCopy role="presentation" size="16" />
              )}
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ModalClipboard;
