import * as React from 'react';
import Counter from './components/Counter';
import { FaCar, FaInfoCircle } from 'react-icons/fa';
import { GoDotFill } from 'react-icons/go';
import { IoFemale, IoHelp, IoMale } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

type SpeciesCardProps = {
  id: string;
  species: string;
  scientificName: string;
  imageUrl: string;
  counts: {
    males: number;
    females: number;
    undefined: number;
    roadKill: number;
  };
  onUpdate: (type: string, value: number) => void;
};

const SpeciesCard = (props: SpeciesCardProps): React.ReactNode => {
  const { id, species, scientificName, imageUrl, counts, onUpdate } = props;

  const navigate = useNavigate();

  const handleUpdate = (type: keyof typeof counts, value: number) => {
    onUpdate(type, value);
  };

  const total =
    counts.males + counts.females + counts.undefined + counts.roadKill;

  return (
    <div className="rounded-md overflow-hidden w-full bg-gray-100">
      <div
        className="relative h-48 group overflow-hidden cursor-pointer"
        onClick={() => navigate(`../species/${id}`)}
      >
        <img
          src={imageUrl}
          alt={species}
          className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-125"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent">
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <div className="flex items-center justify-between text-gray-200 hover:text-white">
              <div>
                <h2 className="text-xl font-semibold">{species}</h2>
                <div className="flex text-md italic flex flex-wrap">
                  <span>
                    {scientificName}
                    <GoDotFill
                      role="presentation"
                      size="6px"
                      className="mx-3 my-2 text-gray-400 inline-flex"
                    />
                  </span>
                  <span>{total} observations</span>
                </div>
              </div>
              <span
                className="p-1 rounded-full bg-white/20 hover:bg-white/30"
                title="Plus d'informations"
              >
                <FaInfoCircle className="w-4 h-4 text-white" />
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-3 mx-2">
        <ul role="list">
          <li className="py-2">
            <Counter
              label="Mâles"
              count={counts.males}
              icon={
                <IoMale className="inline-flex bg-natagora/10 text-natagora min-w-8 h-8 p-2 rounded-full" />
              }
              onChange={(value) => handleUpdate('males', value)}
            />
          </li>
          <li className="py-2">
            <Counter
              label="Femelles"
              count={counts.females}
              icon={
                <IoFemale className="inline-flex bg-natagora/10 text-natagora min-w-8 h-8 p-2 rounded-full" />
              }
              onChange={(value) => handleUpdate('females', value)}
            />
          </li>
          <li className="py-2">
            <Counter
              label="Indéterminés"
              count={counts.undefined}
              icon={
                <IoHelp className="inline-flex bg-natagora/10 text-natagora min-w-8 h-8 p-2 rounded-full" />
              }
              onChange={(value) => handleUpdate('undefined', value)}
            />
          </li>
          <li className="py-2">
            <Counter
              label="Écrasés"
              count={counts.roadKill}
              icon={
                <FaCar className="inline-flex bg-natagora/10 text-natagora min-w-8 h-8 p-2 rounded-full" />
              }
              onChange={(value) => handleUpdate('roadKill', value)}
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SpeciesCard;
