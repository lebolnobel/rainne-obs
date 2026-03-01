import * as React from 'react';
import type { HotspotPointType } from './learn';

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
  name: string;
  scientificName: string;
  imageUrl: string;
  imageDetailUrl: string;

  // Full description of the species
  generalities: React.ReactNode;
  identification: React.ReactNode;
  place: React.ReactNode;
  behavior: React.ReactNode;
  currentStatus: React.ReactNode;

  // Hotspot points for identification help
  hotspots?: Array<HotspotPointType>;
};

export type ArchiveType = {
  date: Date;
  data: SpeciesCounterType;
};

export const SPECIES = Object.freeze({
  BUFO_BUFO: 'bufo-bufo',
  RANA_TEMPORARIA: 'rana-temporaria',
  ICHTHYOSAURA_ALPESTRIS: 'ichthyosaura-alpestris',
  LISSOTRITON_HELVETICUS: 'lissotriton-helveticus',
  LISSOTRITON_VULGARIS: 'lissotriton-vulgaris',
  TRITURUS_CRISTATUS: 'triturus-cristatus',
  PELOPHYLAX_LESSONAE: 'pelophylax-lessonae',
  SALAMANDRA_SALAMANDRA: 'salamandra-salamandra',
});

export const TYPE = Object.freeze({
  males: 'Mâles',
  females: 'Femelles',
  undefined: 'Indéterminés',
  roadKill: 'Écrasés',
});

// TODO create pages instead of raw data
export const species: { [key: string]: SpeciesType } = {
  [SPECIES.BUFO_BUFO]: {
    name: 'Crapaud commun',
    scientificName: 'Bufo bufo',
    imageUrl: '/assets/img/species/csm_Crapaud_commun_-_Simon_6afbc5f27a.jpg',
    imageDetailUrl:
      '/assets/img/species/details/crapaud-commun-male-femelle.jpg',
    generalities: (
      <>
        <p className="mb-3">
          Le Crapaud commun est grand et plutôt massif. Sa peau est pustuleuse
          et de couleur généralement gris beige, tirant sur le brun, le vert ou
          le jaune. Ses yeux sont rouge-orange cuivré, et présentent une pupille
          horizontale. Deux larges glandes parotoïdes sont visibles à l’arrière
          de ceux-ci.
        </p>

        <p>
          D’une taille allant de 11 cm à 15 cm, les femelles sont généralement
          plus grandes que les mâles, mesurant 8 à 10 cm. Les mâles possèdent
          des sacs vocaux internes. Les œufs sont pondus en deux rubans
          gélatineux parallèles, longs de 1 à 3 m. Chaque ponte peut comporter
          en moyenne 5000 à 7000 œufs. Les têtards sont petits et très noirs, et
          leur queue se termine en demi-cercle.
        </p>
      </>
    ),
    identification: (
      <>
        <ul className="list-decimal ml-4">
          <li>Peau pustuleuse/verruqueuse</li>
          <li>Pupille horizontale</li>
          <li>Iris rouge-orange cuivré</li>
          <li>
            Glandes parotoïdes (glande qui secrète des toxines) proéminentes
          </li>
          <li>
            Le mâle aura une callosité nuptiale (entre le pouce et l'index,
            aspect noirâtre)
          </li>
          <li>Museau court et arrondi</li>
        </ul>
      </>
    ),
    place: (
      <p>
        On le retrouve dans divers milieux terrestres, du moment qu’il peut y
        trouver des abris. Pour la reproduction, il recherche des points d’eau
        permanents et profonds.
      </p>
    ),
    behavior: (
      <p>
        Surtout crépusculaire et nocturne, les crapauds communs migrent parfois
        sur plusieurs kilomètres pour se rejoindre en grand nombre.
      </p>
    ),
    currentStatus: (
      <p>
        Largement répandu, le crapaud commun subit pourtant chaque année des
        pertes considérables sur les routes lors de ses migrations.
      </p>
    ),
    hotspots: [
      {
        x: 72,
        y: 35,
        title: 'Yeux',
        description: 'Pupille horizontale & iris rouge-orange cuivré',
      },
      {
        x: 40,
        y: 55,
        title: 'Peau',
        description: 'Peau pustuleuse/verruqueuse',
      },
      {
        x: 58,
        y: 30,
        title: 'Glande',
        description: 'Glandes parotoïdes proéminentes',
      },
    ],
  },

  [SPECIES.RANA_TEMPORARIA]: {
    name: 'Grenouille rousse',
    scientificName: 'Rana temporaria',
    imageUrl:
      '/assets/img/species/csm_Grenouille_rousse_2_-_T._Kinet_60cd6b1692.jpg',
    imageDetailUrl: '/assets/img/species/details/grenouille-rousse.jpg',
    generalities: (
      <>
        <p className="mb-3">
          Assez massive, elle possède un museau arrondi et des pattes robustes.
          Sa peau présente quelques verrues (mais est relativement lisse), et
          est brun grisâtre à roux voire rouge brique, vert ou jaunâtre, avec
          des marques sombres. Le ventre est clair et parfois tacheté. Une large
          tache sombre incluant les tympans est visible à l’arrière des yeux, et
          se prolonge parfois jusqu’au museau. Leur pupille est horizontale et
          l’iris est doré.{' '}
        </p>
        <p>
          Les adultes mesurent de 6 à 10 cm de long. Les mâles, généralement
          plus gris, sont un peu plus petits que les femelles et possèdent des
          sacs vocaux internes. Les oeufs, pondus en amas flottant, sont noirs
          au-dessus et blancs en dessous, et mesurent 2 ou 3 mm de diamètre. Les
          têtards, mesurant environ 4,5 cm, sont brun foncé à noir et ont une
          crête le long du corps.
        </p>
      </>
    ),
    identification: (
      <>
        <ul className="list-decimal ml-4">
          <li>Iris doré</li>
          <li>Museau court et tronqué</li>
          <li>Dos souvent brun, mais grande diversité de couleur !</li>
          <li>Tache temporale (derrière l'œil) bien marquée</li>
          <li>Peau lisse (peau de poulet)</li>
        </ul>
      </>
    ),
    place: (
      <p>
        La grenouille rousse se rencontre dans une grande variété de milieux
        (forêts, jardins, champs, tourbières…). Elle se reproduit dans des eaux
        peu profondes.
      </p>
    ),
    behavior: (
      <p>
        La grenouille rousse est terrestre et nocturne. Elle est plus active par
        temps pluvieux. La reproduction a lieu à la sortie de l'hiver. Les
        chants sont peu sonores car les mâles chantent sous l'eau.
      </p>
    ),
    currentStatus: (
      <p>
        Très abondante, elle n’est pas menacée mais est une victime importante
        du trafic routier.
      </p>
    ),
    hotspots: [
      {
        x: 60,
        y: 20,
        title: 'Yeux',
        description: 'Iris doré',
      },
      {
        x: 55,
        y: 35,
        title: 'Tache temporale',
        description: "Tache temporale (derrière l'œil) bien marquée",
      },
      {
        x: 35,
        y: 65,
        title: 'Peau',
        description: 'Peau lisse (peau de poulet)',
      },
    ],
  },

  [SPECIES.ICHTHYOSAURA_ALPESTRIS]: {
    name: 'Triton alpestre',
    scientificName: 'Ichthyosaura alpestris',
    imageUrl:
      '/assets/img/species/csm_Triton_alpestre._2_-_T._Kinet_dc0dd68bdc.jpg',
    imageDetailUrl: '/assets/img/species/details/triton-alpestre-male.jpg',
    generalities: (
      <>
        <p className="mb-3">
          Le ventre du Triton alpestre est uniformément orange clair à rouge
          vif. La gorge comprend parfois de petites taches noires. Le mâle a
          généralement une crête dorsale jaunâtre et tachetée de noir, une ligne
          bleu vif et de nombreux points noirs en bas des flancs, et son dos est
          bleuté. En dehors de la saison des amours, le Triton alpestre est
          généralement brunâtre, noirâtre, verdâtre ou grisâtre et prend un
          aspect marbré, peu importe le sexe.
        </p>
        <p>
          Le mâle est plus petit que la femelle : mesurant 7 à 10 cm. La femelle
          mesure de 8 à 12 cm. Les œufs sont petits (pas plus de 1,5 cm de
          diamètre), transparents et pondus individuellement sur des feuilles de
          plantes aquatiques immergées.
        </p>
      </>
    ),
    identification: (
      <>
        <ul className="list-decimal ml-4">
          <li>Taille jusqu'à 10 cm</li>
          <li>Gorge orange vif, uniforme</li>
          <li>Ventre orange vif, uniforme, sans taches</li>
          <li>
            Dos et flancs bleu chez le mâle, bleu-vert marbré chez la femelle
          </li>
          <li>Chez le mâle, il y a un motif pyjama léopard sur les flancs</li>
          <li>Le mâle a une mini crête claire</li>
        </ul>
      </>
    ),
    place: (
      <p>
        Le triton alpestre s’observe dans la plupart des points d’eau stagnants.
        Son habitat terrestre varie des forêts de feuillus et de conifères aux
        bocages, prairies et jardins.
      </p>
    ),
    behavior: (
      <p>
        Les parades nuptiales des mâles débutent dès la fin de l'hiver, parfois
        alors que la mare est toujours gelée en surface.
      </p>
    ),
    currentStatus: (
      <p>Ce triton est le plus abondant en Wallonie et à Bruxelles.</p>
    ),
    hotspots: [
      {
        x: 45,
        y: 45,
        title: 'Ventre',
        description: 'Ventre orange vif, uniforme, sans taches',
      },
      {
        x: 20,
        y: 40,
        title: 'Gorge',
        description: 'Gorge orange vif, uniforme',
      },
      {
        x: 30,
        y: 60,
        title: 'Sexe',
        description:
          "Il s'agit d'un mâle, motif pyjama léopard sur les flancs et aspect bleu",
      },
    ],
  },

  [SPECIES.LISSOTRITON_HELVETICUS]: {
    name: 'Triton palmé',
    scientificName: 'Lissotriton helveticus',
    imageUrl:
      '/assets/img/species/csm_Triton_palme_3_-_T._Kinet_2324fbc039.jpg',
    imageDetailUrl: '/assets/img/species/details/triton-palme.jpg',
    generalities: (
      <p>
        Mesurant à peine 5 à 9 cm de long, le Triton palmé est le plus petit des
        tritons de Belgique. Son ventre est uniformément blanchâtre à jaunâtre,
        parfois avec des taches noires, et son dos est jaunâtre à brun-olive. Sa
        gorge est la plupart du temps unie, jaunâtre ou rosée. Le mâle est
        généralement plus petit que la femelle. Durant la période de
        reproduction, il possède une crête dorsale basse et jaunâtre à brunâtre,
        sa queue se termine en un long filament, et ses orteils sont entièrement
        palmés. La femelle en revanche ne possède pas de crête ni de palmure aux
        orteils, et son cloaque est étroit et strié (globuleux et lisse pour le
        mâle). Les œufs sont petits (environ 1 mm à le ponte) et emballés
        isolément dans la végétation aquatique. Les larves sont beige clair et
        mesurent 8 mm à l’éclosion. Leur queue est effilée et pointue, et non
        terminée par un filament.
      </p>
    ),
    identification: (
      <>
        <ul className="list-decimal ml-4">
          <li>Taille jusqu'à 9 cm</li>
          <li>
            Tubercule blanchâtre au niveau de la base des pattes (il peut
            arriver qu'il n'y en ait qu'un)
          </li>
          <li>Un filament/mucron orne l’extrémité de sa queue</li>
          <li>
            Gorge de couleur chair rosée translucide, presque toujours sans
            tache
          </li>
          <li>
            Ventre jaune pâle, tacheté ou non ; peut avoir une ligne orange
          </li>
          <li>Ses pattes postérieures sont munies de palmures noires</li>
        </ul>
      </>
    ),
    place: (
      <p>
        On le rencontre dans tous types d’eaux stagnantes, de préférence de
        faible étendue. En phase terrestre, il affectionne particulièrement les
        milieux forestiers
      </p>
    ),
    behavior: (
      <p>
        Les femelles de tritons pondent leurs œufs un par un en les emballant
        dans la végétation aquatique pour les protéger des prédateurs
      </p>
    ),
    currentStatus: <p>C’est une espèce relativement commune en Wallonie.</p>,
    hotspots: [
      {
        x: 45,
        y: 45,
        title: 'Ventre',
        description:
          'Ventre jaune pâle, tacheté ou non ; peut avoir une ligne orange',
      },
      {
        x: 15,
        y: 45,
        title: 'Gorge',
        description:
          'Gorge de couleur chair rosée translucide, presque toujours sans tache',
      },
    ],
  },

  [SPECIES.LISSOTRITON_VULGARIS]: {
    name: 'Triton ponctué',
    scientificName: 'Lissotriton vulgaris',
    imageUrl:
      '/assets/img/species/csm_Karl-Gillebert-triton-ponctue-4940_fc1af237b0.jpg',
    imageDetailUrl: '/assets/img/species/details/triton-ponctue-male.jpg',
    generalities: (
      <p>
        Le Triton ponctué mesure généralement entre 7 et 10 cm. Son ventre est
        blanchâtre, jaunâtre ou orangé, avec des taches noires circulaires
        également visibles sur la gorge à l’aspect souvent sale. En période de
        reproduction, le mâle présente une crête dorsale haute ondulée jaunâtre
        à brunâtre. Le bas de la queue est bleu-orange, et les orteils sont
        frangés de replis de peaux. Le mâle comprend des taches généralement
        plus grandes que celles de la femelle, et sa face ventrale est plus
        vive. La femelle n’a ni crête, ni de franges aux orteils, et le bas de
        sa queue est orangé et non nuancée de bleu. Elle comprend un cloaque
        étroit et strié, alors qu’il est globuleux et lisse chez le mâle. Les
        œufs sont petits et pondus dans la végétation aquatique. Les larves sont
        jaunâtres à brunâtres.
      </p>
    ),
    identification: (
      <>
        <ul className="list-decimal ml-4">
          <li>Taille jusqu'à 10 cm</li>
          <li>Dos et flancs brunâtres, parsemés de taches noires</li>
          <li>
            Gorge de couleur blanc jaunâtre, avec de petites taches sombres. La
            femelle peut ne pas en avoir
          </li>
          <li>
            Le mâle peut avoir le ventre ponctué avec de grosses taches, avec
            une ligne orange.
          </li>
          <li>
            Ne possède jamais de tubercule blanchâtre à la base des pattes
          </li>
        </ul>
      </>
    ),
    place: (
      <p>
        On le retrouve dans la plupart des points d’eau stagnante,
        principalement les mares et étangs. Il abonde dans les milieux ouverts
        agricoles.
      </p>
    ),
    behavior: (
      <p>
        Animal nocturne en phase terrestre, il est également diurne durant la
        phase aquatique, comme nos autres tritons.
      </p>
    ),
    currentStatus: (
      <p>
        En déclin modéré, le triton ponctué reste bien répandu en Wallonie et à
        Bruxelles.
      </p>
    ),
    hotspots: [
      {
        x: 55,
        y: 45,
        title: 'Ventre',
        description:
          'Le mâle peut avoir le ventre ponctué avec de grosses taches, avec une ligne orange.',
      },
      {
        x: 35,
        y: 25,
        title: 'Gorge',
        description:
          'Gorge de couleur blanc jaunâtre, avec de petites taches sombres. La femelle peut ne pas en avoir',
      },
    ],
  },

  [SPECIES.TRITURUS_CRISTATUS]: {
    name: 'Triton crêté',
    scientificName: 'Triturus cristatus',
    imageUrl: '/assets/img/species/csm_Triton_crete_4_F._Gries_fe2d23cc21.jpg',
    imageDetailUrl: '/assets/img/species/details/triton-crete-male.jpg',
    generalities: (
      <p>
        Le Triton crêté est le plus grand des tritons de nos régions. Il est
        plus rare et localisé que les 3 autres espèces. Les mâles mesurent 10 à
        15 cm de long, et les femelles 11 à 18 cm. Sa peau présente de
        nombreuses petites verrues. En période de reproduction, le mâle prend
        une couleur brune parsemée de taches noires sur ses flancs et son dos,
        et une haute crête dentelée et interrompue au niveau du bassin se dresse
        dorsalement. De petites taches blanches et noires sont également
        visibles sur la gorge, les flancs, la tête et parfois les pattes. Son
        ventre est jaune-orangé avec de grosses taches noires. Sa queue présente
        une bande latérale nacrée ou argentée. La femelle est plus terne, le
        dessous de sa queue est orangé, son cloaque est fin et strié (globuleux
        chez le mâle), et elle ne possède pas de crête dorsale. Les larves (6-9
        cm de long) sont plus grandes que celles des autres espèces de tritons.
        Elles possèdent également une crête, de pattes grêles, et leur queue se
        termine en pointe prolongée par un filament. Les œufs sont ovales,
        verdâtres, et plus grands (2 mm à la ponte) que ceux des autres espèces
        de tritons.
      </p>
    ),
    identification: (
      <>
        <ul className="list-decimal ml-4">
          <li>Le plus grand de nos tritons (il atteint 18 cm)</li>
          <li>Dos sombre</li>
          <li>Ventre jaune/orangé maculé de taches noires</li>
          <li>
            En livrée nuptiale, le mâle développe une haute crête dorsale
            dentelée, interrompue au niveau de l’insertion de la queue
          </li>
          <li>Les flancs sont parsemés d'une ponctuation blanchâtre</li>
        </ul>
      </>
    ),
    place: (
      <p>
        Il est exigeant et recherche des points d’eau profonds, ensoleillés,
        riches en plantes aquatiques et sans poissons. Il est caractéristique
        des campagnes et paysages ouverts.
      </p>
    ),
    behavior: (
      <p>
        En période de reproduction, les mâles défendent de petits territoires où
        ils tentent de séduire les femelles.
      </p>
    ),
    currentStatus: (
      <p>
        Cette espèce est en forte régression, et a déjà disparu de Bruxelles.
        C’est le plus rare de nos tritons.
      </p>
    ),
    hotspots: [
      {
        x: 50,
        y: 50,
        title: 'Ventre',
        description: 'Ventre jaune/orangé maculé de taches noires',
      },
    ],
  },

  [SPECIES.PELOPHYLAX_LESSONAE]: {
    name: 'Grenouille verte',
    scientificName: 'Pelophylax lessonae',
    imageUrl:
      '/assets/img/species/csm_Grenouille_v._esculenta_-_T._Kinet_dd5b903570.jpg',
    imageDetailUrl: '/assets/img/species/details/grenouille-verte.jpg',
    generalities: (
      <p>
        Sur le terrain, il est a priori impossible de distinguer avec certitude
        nos deux grenouilles vertes indigènes. En effet, notre grenouille verte
        "esculenta" est en réalité un hybride entre Pelophylax lessonae et
        Pelophylax ridibundus. C'est pourquoi, certains individus présenteront
        beaucoup de ressemblance avec notre petite grenouille verte indigène (P.
        lessonae), tandis que d'autres s'approcheront davantage de la grenouille
        rieuse (P. ridibundus), une espèce exotique invsive chez nous. Pour plus
        d'informations sur ce sujet complexe, cliquez ici.
      </p>
    ),
    identification: (
      <>
        <ul className="list-decimal ml-4">
          <li>Dos souvent vert... mais il existe des exceptions !</li>
          <li>Ligne dorsale</li>
          <li>Plis dorso-latéraux protubérants</li>
          <li>Tache temporale (derrière l'œil) absente ou peu marquée</li>
          <li>Yeux proéminents (comme un téléscope, en dehors de l'eau)</li>
        </ul>
      </>
    ),
    place: (
      <p>
        On la retrouve dans tous types de points d’eau, naturels ou artificiels,
        de préférence en présence de végétation.
      </p>
    ),
    behavior: (
      <p>
        La grenouille verte est active jour et nuit et évolue la plupart de son
        temps dans l'eau. La reproduction a lieu en mai-juin. À cette période se
        font entendre les chants des mâles, à la mijournée ou en début de nuit,
        par temps chaud.
      </p>
    ),
    currentStatus: (
      <p>
        Jadis répandue dans tout le pays, la Grenouille verte est maintenant en
        déclin, en particulier au nord du Sillon Sambre-et-Meuse
      </p>
    ),
    hotspots: [
      {
        x: 60,
        y: 20,
        title: 'Peau',
        description: 'Ligne dorsale (pas toujours marquée)',
      },
      {
        x: 50,
        y: 45,
        title: 'Peau',
        description: 'Plis dorso-latéraux',
      },
    ],
  },

  [SPECIES.SALAMANDRA_SALAMANDRA]: {
    name: 'Salamandre terrestre',
    scientificName: 'Salamandra salamandra',
    imageUrl:
      '/assets/img/species/csm_Salamandre_tachetee_3_-_T._Kinet_9e77ab5de5.jpg',
    imageDetailUrl: '/assets/img/species/details/salamandre-terrestre.jpg',
    generalities: (
      <>
        <p className="mb-3">
          La Salamandre tachetée est facilement reconnaissable et impossible à
          confondre avec une autre espèce d’amphibiens. D’un aspect général
          boudiné, elle mesure en moyenne 15 à 20 cm et présente un dos noir
          avec deux bandes parallèles de taches jaunes ou orangées plutôt
          allongées et irrégulières. Son ventre est plus clair, gris foncé à
          bleuâtre, et sa queue est cylindrique. Sa peau est entièrement
          luisante. Elle possède également derrière les yeux deux glandes
          parotoïdes formant des bourrelets jaunes.
        </p>

        <p>
          Ovovivipare, la salamandre ne pond pas d’œufs, mais bien directement
          des larves. Elle va garder les œufs dans son utérus jusqu’à ce qu’ils
          éclosent. Les larves se reconnaissent par la présence de taches
          claires à la base des pattes, face supérieure, et leur coloration gris
          marbré. Elles mesurent 20-30 mm à la naissance, et 55-66 mm vers la
          métamorphose.
        </p>
      </>
    ),
    identification: (
      <>
        <ul className="list-decimal ml-4">
          <li>De couleur noire avec des taches jaunes, inconfondable !</li>
          <li>Chaque individu possède un motif de coloration unique</li>
        </ul>
      </>
    ),
    place: (
      <p>
        Elle évolue généralement en milieu forestier. Elle se reproduit dans les
        ruisseaux et les petites mares.
      </p>
    ),
    behavior: (
      <p>
        La salamandre est un animal terrestre (excepté pour la ponte), discret
        et nocturne. Elle est ovovipare et donne donc naissance directement à
        des larves.
      </p>
    ),
    currentStatus: (
      <p>
        Relativement abondante dans les régions vallonnées au paysage boisé,
        plus rare ailleurs
      </p>
    ),
    hotspots: [
      {
        x: 72,
        y: 35,
        title: 'Yeux',
        description: 'Pupille noire',
      },
      {
        x: 40,
        y: 55,
        title: 'Peau',
        description: 'De couleur noire avec des taches jaunes, inconfondable !',
      },
    ],
  },
};
