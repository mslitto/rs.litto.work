export const artifacts = [
  {
    title: 'DREIMÄDERLHAUS, Vienna',
    date: '2021-08-03',
    lat: 48.2181,
    lng: 16.3333,
    config: {
      slug: 'rs_sandkasten',
      file: 'rs/sandkasten',
      sky: 'vienna/semmelweisklinik-fog',

      distance: -1,
      // record3d: true,
      mirrors: [
        {
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
        },
      ],

      animations: {
        autoplay: false,
      },

      ply: {
        file: 'rs/sandkasten',
        size: 0.01,
        sizeAttenuation: true,
      },

      clip: true,
      video: true,
    },
  },

  {
    title: 'iBug, Chemnitz',
    date: '2021-22-03',
    lat: 50.8155,
    lng: 12.9132,
    config: {
      slug: 'rs_ibug',
      // file: 'rs/ibug',
      glb: false,
      sky: 'vienna/semmelweisklinik-fog',

      ply: {
        file: 'rs/ibug.ply',
        size: 0.015,
        sizeAttenuation: true,
      },

      distance: -1,
      // record3d: true,

      mirrors: [
        {
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
        },
      ],
    },
  },

  {
    title: 'MESSEHALLE, Basel',
    date: '2021-08-27',
    lat: 47.5651,
    lng: 7.6011,
    config: {
      slug: 'rs_messehalle',
      sky: 'vienna/semmelweisklinik-fog',
      distance: -1,
      file: 'rs/messehalle',
      // audio: 'rmessehalle',
      mirrors: [
        {
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
        },
      ],
      video: true,
      clip: true,
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
      sky: 'vienna/semmelweisklinik-fog',
      distance: -1,
      clip: true,
      audio: 'rlandestelle1',
      ply: {
        file: 'rs/landestelle1',
        size: 0.01,
        sizeAttenuation: true,
      },

      mirrors: [
        {
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
        },
      ],

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
      sky: 'vienna/semmelweisklinik-fog',
      distance: -1,
      clip: true,
      ply: {
        file: 'rs/landestelle2',
        size: 0.01,
        sizeAttenuation: true,
      },
      audio: 'rlandestelle1',
      video: true,
      // record3d: true,
      mirrors: [
        {
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
        },
      ],
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
    title: 'BASIS, Schlanders',
    date: '2022-07-25',
    lat: 46.6281,
    lng: 10.7655,
    config: {
      slug: 'rs_schlanders_basis',
      sky: 'vienna/semmelweisklinik-fog',

      file: 'rs/schlanders_basis',

      // hideModelsOnVideoEnded: ['face', 'mirror'],

      distance: -1,
      record3d: {
        parentName: 'parent',
        useBone: true,

        filterSize: '1',
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
        sizeAttenuation: '4.0',

        //hueRedReducer: '1.1',

        permanentSeconds: [2, 7, 9, 12, 18, 22, 26, 32],
      },
      videoBoundAnimation: true,
      frustumCulled: false,
      video: true,
      mirrors: [
        {
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
        },
      ],
    },
  },
  {
    title: 'CASERMA, Schlanders',
    date: '2022-07-25',
    lat: 46.6277,
    lng: 10.7673,
    config: {
      slug: 'rs_schlanders_caserma',
      sky: 'vienna/semmelweisklinik-fog',
      file: 'rs/schlanders_caserma',

      distance: -1,

      frustumCulled: false,
      video: true,
      record3d: {
        parentName: 'parent',
        useBone: true,

        filterSize: '1',
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
        sizeAttenuation: '4.0',

        //hueRedReducer: '1.1',

        permanentSeconds: [2, 7, 12, 20, 24, 26],
      },
      mirrors: [
        {
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
        },
      ],
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
      sky: 'vienna/semmelweisklinik-fog',

      distance: -1,
      ply: {
        file: 'rs/semmelweis',
        size: 0.01,
        sizeAttenuation: true,
      },
      glb: false,
      audio: 'rsemmelweisklinik',

      mirrors: [
        {
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
        },
      ],
    },
  },
  {
    title: 'SCHMIEDE 1, Hallein',
    date: '2022-09-17',
    lat: 47.6847,
    lng: 13.0931,
    config: {
      slug: 'rs_schmiede_pc',
      sky: 'vienna/semmelweisklinik-fog',
      clip: true,
      distance: -1,
      audio: 'rschmiede2022',
      ply: {
        file: 'rs/schmiede_pc',
        size: 0.02,
        sizeAttenuation: true,
      },
      glb: false,

      mirrors: [
        {
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
        },
      ],
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
      sky: 'vienna/semmelweisklinik-fog',
      distance: -1,
      file: 'rs/schmiede_moving',
      video: true,

      record3d: {
        parentName: 'parent',
        useBone: true,
        filterSize: '1',
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
        sizeAttenuation: '3.0',

        //hueRedReducer: '1.1',

        //hueRedReducer: '1.1',

        parentName: 'parent',
        permanentSeconds: [2, 4, 8, 9.5, 18.5],
      },

      mirrors: [
        {
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
        },
      ],
    },
  },

  /*
   * 2023
   */
  {
    title: 'Symposion Lindabrunn',
    date: '2023-07-15',
    lat: 47.91325,
    lng: 16.15975,
    config: {
      slug: 'rinside',
      frustumCulled: false,
      sky: 'lindabrunn/theothervillage',
      distance: -1,
      file: 'rinside',

      frustumCulled: false,

      video: true,

      record3d: {
        parentName: 'parent',
        useBone: true,

        filterSize: '1',
        /* minimum distance of pixels in video that should be visible. */
        minDepth: '0.2',
        /* maximum depth of pixels in video that should be visible. */
        maxDepth: '5.0',
        /* in meters. Smaller values = more aggressive filtering */
        depthThresholdFilter: '2.5',
        /* scale of the artefact overall */
        scale: '3.5',
        /* the ptSize of single "pixels" of the artifact */
        ptSize: '1',
        /* defines the depth offset, multiplies depth texture hue */
        //depthHueMultiplier: '3.0',
        /* positive values move all pixels towards the camera */
        zOffset: '0.0',

        pixelDepth: '3.2',
        depthScale: '1',
        sizeAttenuation: '2.0',

        //hueRedReducer: '1.1',

        // permanentSeconds: [2, 3, 9, 15, 18, 19],
        images: [
          {
            file: 'reterritorializedspaces/inside/screenshot-1.jpg',
            time: 2,
          },
          {
            file: 'reterritorializedspaces/inside/screenshot-2.jpg',
            time: 3,
          },
          {
            file: 'reterritorializedspaces/inside/screenshot-3.jpg',
            time: 9,
          },
          {
            file: 'reterritorializedspaces/inside/screenshot-4.jpg',
            time: 15,
          },
          {
            file: 'reterritorializedspaces/inside/screenshot-5.jpg',
            time: 18,
          },
          {
            file: 'reterritorializedspaces/inside/screenshot-6.jpg',
            time: 19,
          },
        ],
      },

      mirrors: [
        {
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
        },
      ],
    },
  },
  // {
  //   title: 'AA Collection, Vienna',
  //   date: '2023-06-21, 19:00',
  //   lat: 48.1884,
  //   lng: 16.3306,
  // },
  // {
  //   title: 'VZA 7, Vienna',
  //   date: '2023-06-27, 11:30',
  //   lat: 48.2084,
  //   lng: 16.3843,
  // },
  // {
  //   title: 'MuseumsQuartier Raum D, Vienna',
  //   date: '2023-06-28, 19:00',
  //   lat: 48.2042,
  //   lng: 16.3582,
  // },
  // {
  //   title: 'MEDIENWERKSTATT, Vienna',
  //   date: '2023-06-30, 19:30',
  //   lat: 48.2016,
  //   lng: 16.3491,
  // },
]
