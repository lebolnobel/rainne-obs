import * as React from 'react';
import Counter from './components/Counter';
import { FaCar, FaInfoCircle } from 'react-icons/fa';
import { GoDotFill } from 'react-icons/go';
import { IoFemale, IoHelp, IoMale } from 'react-icons/io5';
import { NavLink, useNavigate } from 'react-router-dom';
import { CounterType, TYPE } from '../../../utils/species';

type SpeciesCardProps = {
  id: string;
  species: string;
  scientificName: string;
  imageUrl: string;
  counts: CounterType;
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
        onClick={() => navigate(`/species/${id}`)}
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
                <h3 className="text-xl font-semibold">{species}</h3>
                <div className="flex italic flex-wrap">
                  <span>
                    {scientificName}
                    <GoDotFill
                      role="presentation"
                      size="6"
                      className="mx-3 my-2 text-gray-400 inline-flex"
                    />
                  </span>
                  <span>
                    {total} observation{total > 1 ? 's' : ''}
                  </span>
                </div>
              </div>
              <NavLink
                to="/species/${id}"
                title="Plus d'informations"
                className="p-1 rounded-full bg-white/20 hover:bg-white/30 focus:outline-none focus:ring-2 focus:ring-natagora"
              >
                <FaInfoCircle
                  role="presentation"
                  className="w-4 h-4 text-white"
                />
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-3 mx-2 sm:mx-4">
        <ul>
          <li className="py-2">
            <Counter
              label={TYPE.males}
              count={counts.males}
              icon={
                <IoMale className="inline-flex bg-natagora/10 text-natagora min-w-8 h-8 p-2 rounded-full" />
              }
              onChange={(value) => handleUpdate('males', value)}
            />
          </li>
          <li className="py-2">
            <Counter
              label={TYPE.females}
              count={counts.females}
              icon={
                <IoFemale className="inline-flex bg-natagora/10 text-natagora min-w-8 h-8 p-2 rounded-full" />
              }
              onChange={(value) => handleUpdate('females', value)}
            />
          </li>
          <li className="py-2">
            <Counter
              label={TYPE.undefined}
              count={counts.undefined}
              icon={
                <IoHelp className="inline-flex bg-natagora/10 text-natagora min-w-8 h-8 p-2 rounded-full" />
              }
              onChange={(value) => handleUpdate('undefined', value)}
            />
          </li>
          <li className="py-2">
            <Counter
              label={TYPE.roadKill}
              count={counts.roadKill}
              icon={
                <FaCar
                  role="presentation"
                  className="inline-flex bg-natagora/10 text-natagora min-w-8 h-8 p-2 rounded-full"
                />
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
