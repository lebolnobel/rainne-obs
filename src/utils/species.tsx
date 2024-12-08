export type Species = {
  id: string;
  name: string;
  scientificName: string;
  imageUrl: string;
  counts: {
    aller: {
      males: number;
      females: number;
      undefined: number;
      roadKill: number;
    };
    retour: {
      males: number;
      females: number;
      undefined: number;
      roadKill: number;
    };
  };
};

export const species: Species[] = [
  {
    id: 'bufo-bufo',
    name: 'Crapaud commun',
    scientificName: 'Bufo bufo',
    imageUrl: '/assets/img/species/csm_Crapaud_commun_-_Simon_6afbc5f27a.jpg',
    counts: {
      aller: { males: 0, females: 0, undefined: 0, roadKill: 0 },
      retour: { males: 0, females: 0, undefined: 0, roadKill: 0 },
    },
  },
  {
    id: 'rana-temporaria',
    name: 'Grenouille rousse',
    scientificName: 'Rana temporaria',
    imageUrl:
      '/assets/img/species/csm_Grenouille_rousse_2_-_T._Kinet_60cd6b1692.jpg',
    counts: {
      aller: { males: 0, females: 0, undefined: 0, roadKill: 0 },
      retour: { males: 0, females: 0, undefined: 0, roadKill: 0 },
    },
  },
  {
    id: 'ichthyosaura-alpestris',
    name: 'Triton alpestre',
    scientificName: 'Ichthyosaura alpestris',
    imageUrl:
      '/assets/img/species/csm_Triton_alpestre._2_-_T._Kinet_dc0dd68bdc.jpg',
    counts: {
      aller: { males: 0, females: 0, undefined: 0, roadKill: 0 },
      retour: { males: 0, females: 0, undefined: 0, roadKill: 0 },
    },
  },
  {
    id: 'lissotriton-helveticus',
    name: 'Triton palmé',
    scientificName: 'Lissotriton helveticus',
    imageUrl:
      '/assets/img/species/csm_Triton_palme_3_-_T._Kinet_2324fbc039.jpg',
    counts: {
      aller: { males: 0, females: 0, undefined: 0, roadKill: 0 },
      retour: { males: 0, females: 0, undefined: 0, roadKill: 0 },
    },
  },
  {
    id: 'lissotriton-vulgaris',
    name: 'Triton ponctué',
    scientificName: 'Lissotriton vulgaris',
    imageUrl:
      '/assets/img/species/csm_Karl-Gillebert-triton-ponctue-4940_fc1af237b0.jpg',
    counts: {
      aller: { males: 0, females: 0, undefined: 0, roadKill: 0 },
      retour: { males: 0, females: 0, undefined: 0, roadKill: 0 },
    },
  },
  {
    id: 'triturus-cristatus',
    name: 'Triton crêté',
    scientificName: 'Triturus cristatus',
    imageUrl: '/assets/img/species/csm_Triton_crete_4_F._Gries_fe2d23cc21.jpg',
    counts: {
      aller: { males: 0, females: 0, undefined: 0, roadKill: 0 },
      retour: { males: 0, females: 0, undefined: 0, roadKill: 0 },
    },
  },
  {
    id: 'pelophylax-lessonae',
    name: 'Grenouille verte',
    scientificName: 'Pelophylax lessonae',
    imageUrl:
      '/assets/img/species/csm_Grenouille_v._esculenta_-_T._Kinet_dd5b903570.jpg',
    counts: {
      aller: { males: 0, females: 0, undefined: 0, roadKill: 0 },
      retour: { males: 0, females: 0, undefined: 0, roadKill: 0 },
    },
  },
];
