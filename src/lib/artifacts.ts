export type Image = {
  file: string
  time: number
}

export type Mirror = {
  type: number
  params: [number, number]

  position?: {
    x?: number
    y?: number
    z?: number
  }

  rotation?: {
    x?: number
    y?: number
    z?: number
  }
}

export type Config = {
  slug: string
  file?: string
  glb?: boolean
  sky?: string
  audio?: string

  ply?: {
    file?: string
    size?: number
    sizeAttenuation?: boolean
  }

  cam?: {
    x?: number
    y?: number
    z?: number
    maxPolar?: number
    minPolar?: number
  }

  lookAt?: {
    x?: number
    y?: number
    z?: number
  }

  pos?: {
    x?: number
    y?: number
    z?: number
  }

  orbit?: {
    min?: number
    max?: number
  }

  distance?: number

  mirrors?: Mirror[]

  animations?: {
    autoplay?: boolean
  }

  clip?: boolean
  video?: boolean | string
  videoDir?: string

  type?: number

  oscFile?: string
  shadowPlane?: boolean

  record3d?: {
    parentName?: string
    useBone?: boolean

    filterSize?: string
    /* minimum distance of pixels in video that should be visible. */
    minDepth?: string
    /* maximum depth of pixels in video that should be visible. */
    maxDepth?: string
    /* in meters. Smaller values = more aggressive filtering */
    depthThresholdFilter?: string
    /* scale of the artefact overall */
    scale?: string
    /* the ptSize of single "pixels" of the artifact */
    ptSize?: string
    /* defines the depth offset, multiplies depth texture hue */
    depthHueMultiplier?: string
    /* positive values move all pixels towards the camera */
    zOffset?: string

    hueRedReducer?: string

    pixelDepth?: string
    depthScale?: string
    sizeAttenuation?: string

    permanentSeconds?: number[]

    images?: Image[]

    hideModelsOnVideoEnded?: string[]
    loopVideo?: boolean
  }

  videoBoundAnimation?: boolean
  frustumCulled?: boolean
}

export type Artifact = {
  title: string
  date: string
  lat: number
  lng: number
  config?: Config
}

export type Years = {
  2021: Artifact[]
  2022: Artifact[]
  2023: Artifact[]
  2024: Artifact[]
}

const floorMirror: Mirror = {
  type: 1,
  params: [2.2, 1.3],
  position: {
    // x: 1,
    z: 0,
    y: 2.0,
    x: -8,
  },
  rotation: {
    x: 0,
    y: 90,
  },
}

const wallMirror: Mirror = {
  type: 2,
  params: [0.5, 32],
  position: {
    // x: 1,
    z: 0,
    y: 0.01,
  },
  rotation: {
    x: 270,
  },
}

const camSettings = {
  cam: {
    y: 1.7,
  },

  lookAt: {
    y: 1.7,
  },
}

export const artifacts: Artifact[] = [
  {
    title: 'NADELFABRIK 1, Chemnitz',
    date: '2021-03-22',
    lat: 50.8155,
    lng: 12.9132,

    config: {
      slug: 'leerraumnadelfabrik1',
      // file: 'rs/ibug',
      glb: false,
      sky: 'vienna/white',
      // sky: 'vienna/semmelweisklinik-fog',

      video: true,

      cam: {
        ...camSettings,
        y: 1,
        z: 2,
        maxPolar: 180,
      },

      lookAt: {
        y: 1,
      },

      record3d: {
        zOffset: '1.0',
      },

      pos: {
        y: 1,
      },

      orbit: {
        min: 0,
      },

      distance: -1,
      // record3d: true,

      mirrors: [floorMirror],
    },
  },

  {
    title: 'NADELFABRIK 2, Chemnitz',
    date: '2021-03-22',
    lat: 50.8155,
    lng: 12.9132,

    config: {
      slug: 'rs_ibug',
      // file: 'rs/ibug',
      glb: false,
      sky: 'vienna/white',
      // sky: 'vienna/semmelweisklinik-fog',

      ply: {
        file: 'rs/ibug.ply',
        size: 0.01,
        sizeAttenuation: true,
      },

      ...camSettings,

      distance: -1,
      // record3d: true,

      mirrors: [floorMirror],
    },
  },

  {
    title: 'DREIMÄDERLHAUS, Vienna',
    date: '2021-08-03',
    lat: 48.2181,
    lng: 16.3333,

    config: {
      slug: 'rs_sandkasten',
      file: 'rs/sandkasten',
      sky: 'vienna/white',
      // sky: 'vienna/semmelweisklinik-fog',
      distance: -1,
      // record3d: true,
      mirrors: [floorMirror],
      animations: {
        autoplay: false,
      },

      ply: {
        file: 'rs/sandkasten',
        size: 0.01,
        sizeAttenuation: true,
      },

      ...camSettings,

      clip: true,
      video: true,
    },
  },

  {
    title: 'MESSEHALLE, Basel',
    date: '2021-08-27',
    lat: 47.5651,
    lng: 7.6011,

    config: {
      slug: 'rs_messehalle',
      sky: 'vienna/white',
      // sky: 'vienna/semmelweisklinik-fog',
      distance: -1,
      file: 'rs/messehalle',
      // audio: 'rmessehalle',
      mirrors: [floorMirror],
      video: true,
      clip: true,

      ...camSettings,

      ply: {
        file: 'rs/messehalle.ply',
        size: 0.01,
        sizeAttenuation: true,
      },
    },
  },
  {
    title: 'LANDESTELLE 1, Basel',
    date: '2021-08-27',
    lat: 47.5779,
    lng: 7.5858,

    config: {
      slug: 'rs_landestelle1',
      file: 'rs/landestelle1',
      sky: 'vienna/white',
      // sky: 'vienna/semmelweisklinik-fog',
      distance: -1,
      clip: true,
      audio: 'rlandestelle1',

      ...camSettings,

      ply: {
        file: 'rs/landestelle1',
        size: 0.01,
        sizeAttenuation: true,
      },

      mirrors: [floorMirror],

      // record3d: true,
      video: true,
    },
  },
  {
    title: 'LANDESTELLE 2, Basel',
    date: '2021-08-27',
    lat: 47.5779,
    lng: 7.5858,

    config: {
      slug: 'rs_landestelle2',
      file: 'rs/landestelle2',
      sky: 'vienna/white',
      // sky: 'vienna/semmelweisklinik-fog',
      distance: -1,
      clip: true,

      ...camSettings,

      ply: {
        file: 'rs/landestelle2',
        size: 0.01,
        sizeAttenuation: true,
      },
      audio: 'rlandestelle1',
      video: true,
      // record3d: true,
      mirrors: [floorMirror],
    },
  },

  /*
   * 2022
   */
  // {
  //   title: 'BUNKER, Dresden',
  //   date: '2022-03-07',
  //   lat: 51.1135,
  //   lng: 13.7531,
  // },
  {
    title: 'BASIS Vinschgau, Schlanders',
    date: '2022-07-25',
    lat: 46.6281,
    lng: 10.7655,

    config: {
      slug: 'rs_schlanders_basis',
      sky: 'vienna/white',
      // sky: 'vienna/semmelweisklinik-fog',

      file: 'rs/schlanders_basis',

      // hideModelsOnVideoEnded: ['face', 'mirror'],

      ...camSettings,

      distance: -1,
      record3d: {
        parentName: 'parent',
        useBone: true,

        filterSize: '0',
        minDepth: '0.5',
        maxDepth: '5.0',
        depthThresholdFilter: '2.5',
        scale: '3.0',
        ptSize: '1',
        zOffset: '0.0',

        pixelDepth: '3.2',
        depthScale: '1',
        sizeAttenuation: '2.0',

        permanentSeconds: [2, 7, 9, 12, 18, 22, 26, 32],

        loopVideo: false,
        hideModelsOnVideoEnded: ['face', 'mirror'],
      },

      videoBoundAnimation: true,
      frustumCulled: false,
      video: true,
      mirrors: [wallMirror],
    },
  },
  {
    title: 'CASERMA DRUSO, Schlanders',
    date: '2022-07-25',
    lat: 46.6277,
    lng: 10.7673,

    config: {
      slug: 'rs_schlanders_caserma',
      sky: 'vienna/white',
      file: 'rs/schlanders_caserma',

      distance: -1,

      ...camSettings,

      frustumCulled: false,
      video: true,
      record3d: {
        parentName: 'parent',
        useBone: true,

        filterSize: '0',
        minDepth: '0.5',
        maxDepth: '5.0',
        depthThresholdFilter: '2.5',
        scale: '3.0',
        ptSize: '1',
        zOffset: '0.0',

        pixelDepth: '3.2',
        depthScale: '1',
        sizeAttenuation: '2.0',

        permanentSeconds: [2, 7, 12, 20, 24, 26],

        loopVideo: false,
        hideModelsOnVideoEnded: ['face', 'videotarget'],
      },

      mirrors: [wallMirror],
    },
  },
  {
    title: 'SEMMELWEISKLINIK, Vienna',
    date: '2022-09-06',
    lat: 48.2362,
    lng: 16.3205,

    config: {
      slug: 'rs_semmelweis',
      clip: true,
      sky: 'vienna/white',
      // sky: 'vienna/semmelweisklinik-fog',

      distance: -1,
      ply: {
        file: 'rs/semmelweis',
        size: 0.01,
        sizeAttenuation: true,
      },
      glb: false,
      audio: 'rsemmelweisklinik',

      ...camSettings,

      mirrors: [floorMirror],
    },
  },
  {
    title: 'SCHMIEDE 1, Hallein',
    date: '2022-09-17',
    lat: 47.6847,
    lng: 13.0931,

    config: {
      slug: 'rs_schmiede_pc',
      sky: 'vienna/white',
      // sky: 'vienna/semmelweisklinik-fog',
      clip: true,
      distance: -1,
      audio: 'rschmiede2022',
      ply: {
        file: 'rs/schmiede_pc',
        size: 0.01,
        sizeAttenuation: true,
      },

      glb: false,

      ...camSettings,

      mirrors: [floorMirror],
    },
  },
  {
    title: 'SCHMIEDE 2, Hallein',
    date: '2022-09-17',
    lat: 47.6847,
    lng: 13.0931,

    config: {
      slug: 'rs_schmiede_moving',
      frustumCulled: false,
      sky: 'vienna/white',
      // sky: 'vienna/semmelweisklinik-fog',
      distance: -1,
      file: 'rs/schmiede_moving',
      video: true,

      ...camSettings,

      record3d: {
        parentName: 'parent',
        useBone: true,
        filterSize: '0',
        /* minimum distance of pixels in video that should be visible. */
        minDepth: '0.5',
        /* maximum depth of pixels in video that should be visible. */
        maxDepth: '5.0',
        /* in meters. Smaller values = more aggressive filtering */
        depthThresholdFilter: '2.5',
        /* scale of the artefact overall */
        scale: '3.0',
        /* the ptSize of single "pixels" of the artifact */
        ptSize: '1',
        /* defines the depth offset, multiplies depth texture hue */
        //depthHueMultiplier: '3.0',
        /* positive values move all pixels towards the camera */
        zOffset: '0.0',

        pixelDepth: '3.2',
        depthScale: '1',
        sizeAttenuation: '2.0',

        // hueRedReducer: '1.1',
        permanentSeconds: [2, 4, 8, 9, 18],
      },

      mirrors: [wallMirror],
    },
  },

  /*
   * 2023
   */
  // {
  //   title: 'Justizpalast',
  //   date: '2023-08-31',
  //   lat: 48.2066,
  //   lng: 16.3566,

  //   config: {
  //     slug: 'rs_justizpalast',
  //     frustumCulled: false,
  //     sky: 'vienna/white',
  //     // sky: 'lindabrunn/theothervillage',
  //     distance: -1,
  //     file: 'rs/justizpalast',

  //     ...camSettings,

  //     video: true,

  //     record3d: {
  //       parentName: 'parent',
  //       useBone: true,

  //       loopVideo: false,
  //       hideModelsOnVideoEnded: ['face', 'mirror', 'videotarget'],

  //       filterSize: '0',
  //       /* minimum distance of pixels in video that should be visible. */
  //       minDepth: '0.5',
  //       /* maximum depth of pixels in video that should be visible. */
  //       maxDepth: '5.0',
  //       /* in meters. Smaller values = more aggressive filtering */
  //       depthThresholdFilter: '2.5',
  //       /* scale of the artefact overall */
  //       scale: '8.0',
  //       /* the ptSize of single "pixels" of the artifact */
  //       ptSize: '1',
  //       /* defines the depth offset, multiplies depth texture hue */
  //       //depthHueMultiplier: '3.0',
  //       /* positive values move all pixels towards the camera */
  //       zOffset: '0.0',

  //       pixelDepth: '3.2',
  //       depthScale: '1',
  //       sizeAttenuation: '2.0',

  //       permanentSeconds: [2, 3, 9, 15, 18, 19],
  //     },

  //     mirrors: [wallMirror],
  //   },
  // },

  {
    title: 'Symposion Lindabrunn 1',
    date: '2023-07-15',
    lat: 47.9132,
    lng: 16.1597,

    config: {
      slug: 'rinside',
      frustumCulled: false,
      sky: 'vienna/white',
      // sky: 'lindabrunn/theothervillage',
      distance: -1,
      file: 'rinside',

      ...camSettings,

      video: true,

      record3d: {
        parentName: 'parent',
        useBone: true,

        filterSize: '0',
        /* minimum distance of pixels in video that should be visible. */
        minDepth: '0.5',
        /* maximum depth of pixels in video that should be visible. */
        maxDepth: '5.0',
        /* in meters. Smaller values = more aggressive filtering */
        depthThresholdFilter: '2.5',
        /* scale of the artefact overall */
        scale: '3.0',
        /* the ptSize of single "pixels" of the artifact */
        ptSize: '1',
        /* defines the depth offset, multiplies depth texture hue */
        //depthHueMultiplier: '3.0',
        /* positive values move all pixels towards the camera */
        zOffset: '0.0',

        pixelDepth: '3.2',
        depthScale: '1',
        sizeAttenuation: '2.0',

        permanentSeconds: [2, 3, 9, 15, 18, 19],

        loopVideo: false,
        hideModelsOnVideoEnded: ['face', 'mirror', 'mirror23'],
      },

      mirrors: [wallMirror],
    },
  },
  {
    title: 'Symposion Lindabrunn 2',
    date: '2023-07-15',
    lat: 47.9132,
    lng: 16.1597,

    config: {
      slug: 'rs_lindabrunn_2',
      frustumCulled: false,
      sky: 'lindabrunn/rs_lindabrunn_2',
      distance: -1,
      glb: false,
      audio: 'rs_lindabrunn_2',

      ...camSettings,

      ply: {
        file: 'rs/lindabrunn_2',
        size: 0.01,
        sizeAttenuation: true,
      },

      // mirrors: [floorMirror],
    },
  },

  {
    date: '2024-05-10',
    lat: 48.2016,
    lng: 16.3466,
    title: 'Medienwerkstatt Wien 1',

    config: {
      sky: 'vienna/white',
      file: 'rs/avatar-no-animation',
      type: 28,
      slug: 'medienwerkstattwien1',

      // "showVideoTime": true,
      frustumCulled: false,
      audio: 'rs_medienwerkstatt',
      mirrors: [
        {
          type: 2,
          params: [0.3, 32],
          position: {
            z: 0,
            y: 0.01,
          },
          rotation: {
            x: 270,
          },
        },
      ],
      record3d: {
        parentName: 'parent',
        useBone: true,
        loopVideo: false,
        hideModelsOnVideoEnded: ['glass', 'mirror', 'body', 'bottom'],
        filterSize: '0',
        minDepth: '0.1',
        maxDepth: '5.0',
        depthThresholdFilter: '2.5',
        scale: '1.5',
        ptSize: '1.2',
        zOffset: '0.0',
        pixelDepth: '2.0',
        depthScale: '1',
        sizeAttenuation: '3.0',
        hueRedReducer: '0.0',
        permanentSeconds: [2.5, 6, 9.1],
      },
      oscFile: 'https://static.artificialmuseum.com/rs/2024/medienwerkstattwien1.txt',
      video: true,
      videoDir: 'rs/medienwerkstatt2024',
      cam: {
        y: 1.7,
      },
      lookAt: {
        y: 1.7,
      },
      shadowPlane: false,
    },
  },
  {
    title: 'Medienwerkstatt Wien 2',

    date: '2024-05-10',
    lat: 48.2016,
    lng: 16.3466,

    config: {
      sky: 'vienna/white',
      file: 'rs/avatar-no-animation',
      type: 28,
      // "showVideoTime": true,
      frustumCulled: false,
      audio: 'rs_medienwerkstatt',
      mirrors: [
        {
          type: 2,
          params: [0.3, 32],
          position: {
            z: 0,
            y: 0.01,
          },
          rotation: {
            x: 270,
          },
        },
      ],
      record3d: {
        parentName: 'parent',
        useBone: true,
        loopVideo: false,
        hideModelsOnVideoEnded: ['glass', 'mirror', 'body', 'bottom'],
        filterSize: '0',
        minDepth: '0.1',
        maxDepth: '5.0',
        depthThresholdFilter: '2.5',
        scale: '1.5',
        ptSize: '1.2',
        zOffset: '0.0',
        pixelDepth: '2.0',
        depthScale: '1',
        sizeAttenuation: '3.0',
        hueRedReducer: '0.0',
        permanentSeconds: [2.3, 4.8, 6.4, 10, 12],
      },
      slug: 'medienwerkstattwien2',

      oscFile: 'https://static.artificialmuseum.com/rs/2024/medienwerkstattwien2.txt',
      video: true,
      videoDir: 'rs/medienwerkstatt2024',

      cam: {
        y: 1.7,
      },
      lookAt: {
        y: 1.7,
      },
      shadowPlane: false,
    },
  },
  {
    title: 'Medienwerkstatt Wien 3',

    date: '2024-05-10',
    lat: 48.2016,
    lng: 16.3466,
    config: {
      sky: 'vienna/white',
      file: 'rs/avatar-no-animation',
      type: 28,
      // "showVideoTime": true,
      frustumCulled: false,
      audio: 'https://live.artificialmuseum.com/data/medienwerkstatt.mp4',
      mirrors: [
        {
          type: 2,
          params: [0.3, 32],
          position: {
            z: 0,
            y: 0.01,
          },
          rotation: {
            x: 270,
          },
        },
      ],
      record3d: {
        parentName: 'parent',
        useBone: true,
        loopVideo: false,
        hideModelsOnVideoEnded: ['glass', 'mirror', 'body', 'bottom'],
        filterSize: '0',
        minDepth: '0.1',
        maxDepth: '5.0',
        depthThresholdFilter: '2.5',
        scale: '1.5',
        ptSize: '1.2',
        zOffset: '0.0',
        pixelDepth: '2.0',
        depthScale: '1',
        sizeAttenuation: '3.0',
        hueRedReducer: '0.0',
        permanentSeconds: [1.6, 3, 4.6, 6],
      },
      slug: 'medienwerkstattwien3',

      oscFile: 'https://static.artificialmuseum.com/rs/2024/medienwerkstattwien3.txt',
      video: true,
      videoDir: 'rs/medienwerkstatt2024',

      cam: {
        y: 1.7,
      },
      lookAt: {
        y: 1.7,
      },
      shadowPlane: false,
    },
  },
  {
    title: 'Medienwerkstatt Wien 4',
    date: '2024-05-10',
    lat: 48.2016,
    lng: 16.3466,
    config: {
      slug: 'medienwerkstattwien4',
      sky: 'vienna/white',

      file: 'rs/avatar-no-animation',
      type: 28,
      // "showVideoTime": true,
      frustumCulled: false,
      audio: 'https://live.artificialmuseum.com/data/medienwerkstatt.mp4',
      mirrors: [
        {
          type: 2,
          params: [0.3, 32],
          position: {
            z: 0,
            y: 0.01,
          },
          rotation: {
            x: 270,
          },
        },
      ],
      record3d: {
        parentName: 'parent',
        useBone: true,
        loopVideo: false,
        hideModelsOnVideoEnded: ['glass', 'mirror', 'body', 'bottom'],
        filterSize: '0',
        minDepth: '0.1',
        maxDepth: '5.0',
        depthThresholdFilter: '2.5',
        scale: '1.5',
        ptSize: '1.2',
        zOffset: '0.0',
        pixelDepth: '2.0',
        depthScale: '1',
        sizeAttenuation: '3.0',
        hueRedReducer: '0.0',
        permanentSeconds: [0.9, 4, 7.4],
      },
      oscFile: 'https://static.artificialmuseum.com/rs/2024/medienwerkstattwien4.txt',
      video: true,
      videoDir: 'rs/medienwerkstatt2024',

      cam: {
        y: 1.7,
      },
      lookAt: {
        y: 1.7,
      },
      shadowPlane: false,
    },
  },
  {
    title: 'Medienwerkstatt Wien 5',
    date: '2024-05-10',
    lat: 48.2016,
    lng: 16.3466,
    config: {
      sky: 'vienna/white',

      file: 'rs/avatar-no-animation',
      type: 28,
      // "showVideoTime": true,
      frustumCulled: false,
      audio: 'https://live.artificialmuseum.com/data/medienwerkstatt.mp4',
      mirrors: [
        {
          type: 2,
          params: [0.3, 32],
          position: {
            z: 0,
            y: 0.01,
          },
          rotation: {
            x: 270,
          },
        },
      ],
      record3d: {
        parentName: 'parent',
        useBone: true,
        loopVideo: false,
        hideModelsOnVideoEnded: ['glass', 'mirror', 'body', 'bottom'],
        filterSize: '0',
        minDepth: '0.1',
        maxDepth: '5.0',
        depthThresholdFilter: '2.5',
        scale: '1.5',
        ptSize: '1.2',
        zOffset: '0.0',
        pixelDepth: '2.0',
        depthScale: '1',
        sizeAttenuation: '3.0',
        hueRedReducer: '0.0',
        permanentSeconds: [2.7, 6.5, 10],
      },
      slug: 'medienwerkstattwien5',
      oscFile: 'https://static.artificialmuseum.com/rs/2024/medienwerkstattwien5.txt',
      video: true,
      videoDir: 'rs/medienwerkstatt2024',

      cam: {
        y: 1.7,
      },
      lookAt: {
        y: 1.7,
      },
      shadowPlane: false,
    },
  },
]

export const years: Years = {
  2024: artifacts.filter(a => a.date.startsWith('2024')),
  2023: artifacts.filter(a => a.date.startsWith('2023')),
  2022: artifacts.filter(a => a.date.startsWith('2022')),
  2021: artifacts.filter(a => a.date.startsWith('2021')),
}
