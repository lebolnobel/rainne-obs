export const SPECIES = Object.freeze({
  BUFO_BUFO: 'bufo-bufo',
  RANA_TEMPORARIA: 'rana-temporaria',
  // TODO
});

export type CounterType = {
  males: number;
  females: number;
  undefined: number;
  roadKill: number;
};

export type SpeciesCounterType = {
  [id: string]: {
    aller: CounterType;
    retour: CounterType;
  };
};

export type SpeciesType = {
  [id: string]: {
    name: string;
    scientificName: string;
    imageUrl: string;
  };
};

const defaultCounter: {
  aller: CounterType;
  retour: CounterType;
} = {
  aller: { males: 0, females: 0, undefined: 0, roadKill: 0 },
  retour: { males: 0, females: 0, undefined: 0, roadKill: 0 },
};

export const defaultSpeciesCounter: SpeciesCounterType = {
  [SPECIES.BUFO_BUFO]: { ...defaultCounter },
  [SPECIES.RANA_TEMPORARIA]: { ...defaultCounter },
  ['ichthyosaura-alpestris']: { ...defaultCounter },
  ['lissotriton-helveticus']: { ...defaultCounter },
  ['lissotriton-vulgaris']: { ...defaultCounter },
  ['triturus-cristatus']: { ...defaultCounter },
  ['pelophylax-lessonae']: { ...defaultCounter },
};

export const TYPE = {
  males: 'Mâles',
  females: 'Femelles',
  undefined: 'Indéterminés',
  roadKill: 'Écrasés',
};

export const species: SpeciesType = {
  [SPECIES.BUFO_BUFO]: {
    name: 'Crapaud commun',
    scientificName: 'Bufo bufo',
    imageUrl: '/assets/img/species/csm_Crapaud_commun_-_Simon_6afbc5f27a.jpg',
  },
  [SPECIES.RANA_TEMPORARIA]: {
    name: 'Grenouille rousse',
    scientificName: 'Rana temporaria',
    imageUrl:
      '/assets/img/species/csm_Grenouille_rousse_2_-_T._Kinet_60cd6b1692.jpg',
  },
  ['ichthyosaura-alpestris']: {
    name: 'Triton alpestre',
    scientificName: 'Ichthyosaura alpestris',
    imageUrl:
      '/assets/img/species/csm_Triton_alpestre._2_-_T._Kinet_dc0dd68bdc.jpg',
  },
  ['lissotriton-helveticus']: {
    name: 'Triton palmé',
    scientificName: 'Lissotriton helveticus',
    imageUrl:
      '/assets/img/species/csm_Triton_palme_3_-_T._Kinet_2324fbc039.jpg',
  },
  ['lissotriton-vulgaris']: {
    name: 'Triton ponctué',
    scientificName: 'Lissotriton vulgaris',
    imageUrl:
      '/assets/img/species/csm_Karl-Gillebert-triton-ponctue-4940_fc1af237b0.jpg',
  },
  ['triturus-cristatus']: {
    name: 'Triton crêté',
    scientificName: 'Triturus cristatus',
    imageUrl: '/assets/img/species/csm_Triton_crete_4_F._Gries_fe2d23cc21.jpg',
  },
  ['pelophylax-lessonae']: {
    name: 'Grenouille verte',
    scientificName: 'Pelophylax lessonae',
    imageUrl:
      '/assets/img/species/csm_Grenouille_v._esculenta_-_T._Kinet_dd5b903570.jpg',
  },
};
