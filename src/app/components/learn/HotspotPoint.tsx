import * as React from 'react';
import type { HotspotPointType } from '../../../utils/learn';
import { GoEye, GoEyeClosed } from 'react-icons/go';

type HotspotPointProps = {
  children: React.ReactNode;

  // Array of hotspots to display on the image
  hotspots?: Array<HotspotPointType>;

  // Behavior when a hotspot is clicked
  onHotspotClick?: (hotspot: HotspotPointType) => void;
};

const HotspotPoint = (props: HotspotPointProps): React.ReactNode => {
  const { hotspots, onHotspotClick, children } = props;

  const [hoveredId, setHoveredId] = React.useState<number | null>(null);
  const [display, setDisplay] = React.useState<boolean>(true);

  const toggleDisplay = () => {
    setDisplay((prev) => !prev);
  };

  const enableHotspot = display && !!hotspots;

  return (
    <>
      <div className="relative inline-block w-full">
        {enableHotspot && (
          <button
            className="absolute z-10 right-4 top-4 shadow-card w-10 h-10 mx-auto cursor-pointer select-none rounded-md bg-gray-50 bg-opacity-25 hover:bg-opacity-40 focus:outline-none focus:ring-2 focus:ring-natagora/80"
            onClick={toggleDisplay}
          >
            {display ? (
              <GoEyeClosed
                role="presentation"
                size="24"
                title="Cacher les aides à l'identification"
                className="text-gray-50 inline-flex"
              />
            ) : (
              <GoEye
                role="presentation"
                size="24"
                title="Afficher les aides à l'identification"
                className="text-gray-50 inline-flex"
              />
            )}
          </button>
        )}

        {children}

        {enableHotspot &&
          hotspots?.map((hotspot, id) => {
            const idHostspot = hotspot.title.replace(/[^a-zA-Z ]/g, '');

            return (
              <div
                key={idHostspot}
                className="absolute"
                style={{
                  left: `${hotspot.x}%`,
                  top: `${hotspot.y}%`,
                  transform: 'translate(-50%, -50%)',
                }}
              >
                <button
                  className="w-8 h-8 rounded-full bg-gray-200 backdrop-blur border-2 border-gray-600 shadow-lg hover:bg-natagora hover:scale-110 transition-all duration-200 flex items-center justify-center hover:ring-2 hover:ring-natagora focus:ring-natagora/80"
                  onMouseEnter={() => setHoveredId(id)}
                  onMouseLeave={() => setHoveredId(null)}
                  onClick={() => onHotspotClick?.(hotspot)}
                  aria-label={`hotspot.${idHostspot}`}
                >
                  <div className="w-2 h-2 rounded-full bg-gray-600" />
                </button>
              </div>
            );
          })}
      </div>

      {enableHotspot && (
        <div className="text-base -mt-2 h-32 rounded-b-lg bg-slate-100 p-4 text-slate-700 shadow-sm">
          <p>
            {hoveredId !== null && !!hotspots?.[hoveredId] ? (
              <div className="space-y-2 p-2">
                <h3 className="font-semibold text-gray-900 uppercase">
                  {hotspots[hoveredId].title}
                </h3>
                <p className="text-gray-600">
                  {hotspots[hoveredId].description}
                </p>
              </div>
            ) : (
              <div className="space-y-2 p-2">
                <h3 className="font-semibold text-gray-900 uppercase">
                  Aide à la l'identification
                </h3>
                <p className="text-gray-600">
                  Cliquez sur les aides ci-dessus pour afficher les critères
                  d'identification
                </p>
              </div>
            )}
          </p>
        </div>
      )}
    </>
  );
};

export default HotspotPoint;
