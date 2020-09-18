const SectionSettings = {
  sections: [
    {
      id: 'play',
      title: 'PLAY',
      titleStyle: 'vertical',
      theme: 'black',
      titlePosition: 'back',
      hasPagination: false
    },
    {
      id: 'study',
      title: 'STUDY',
      titleStyle: 'horizontal',
      theme: 'white',
      titlePosition: 'front',
      hasPagination: true,
      animReversable: true,
      background1Animation: {
        desktop: {
          x: -75,
          y: -317,
          rotation: 60,
          scale: 1,
          opacity: 0.5
        },
        mobile: {
          x: -138,
          y: 25,
          rotation: -30,
          scale: 0.54,
          opacity: 0.5
        }
      },
      background2Animation: {
        desktop: {
          x: -106,
          y: 422,
          rotation: -60,
          scale: 1,
          opacity: 0.5
        },
        mobile: {
          x: 195,
          y: 193,
          rotation: 30,
          scale: 0.54,
          opacity: 0.5
        }
      }
    },
    {
      id: 'think',
      title: 'THINK',
      titleStyle: 'horizontal',
      theme: 'white',
      titlePosition: 'front',
      hasPagination: true,
      animReversable: true,
      background1Animation: {
        desktop: {
          x: 190,
          y: -362,
          rotation: -90,
          scale: 1,
          opacity: 0.5
        },
        mobile: {
          x: -210,
          y: -60,
          rotation: 90,
          scale: 0.68,
          opacity: 0.5
        }
      },
      background2Animation: {
        desktop: {
          x: -134,
          y: 298,
          rotation: 90,
          scale: 0.54,
          opacity: 0.5
        },
        mobile: {
          x: -47,
          y: 185,
          rotation: 90,
          scale: 0.6,
          opacity: 0.5
        }
      }
    },
    {
      id: 'move',
      title: 'MOVE',
      titleStyle: 'horizontal',
      theme: 'white',
      titlePosition: 'front',
      hasPagination: true,
      animReversable: false,
      background1Animation: {
        desktop: {
          x: -497,
          y: 430,
          rotation: 0,
          scale: 1,
          opacity: 0.5
        },
        mobile: {
          x: -231,
          y: 212,
          rotation: 0,
          scale: 0.47,
          opacity: 0.5
        }
      },
      background2Animation: {
        desktop: {
          x: 492,
          y: -450,
          rotation: 180,
          scale: 0.88,
          opacity: 0.5
        },
        mobile: {
          x: 289,
          y: -339,
          rotation: 180,
          scale: 0.47,
          opacity: 0.5
        }
      },

      background1ExitAnimation: {
        desktop: {
          x: 462,
          y: -440,
          rotation: 0,
          scale: 1,
          opacity: 0.5
        },
        mobile: {
          x: 280,
          y: -345,
          rotation: 0,
          scale: 0.47,
          opacity: 0.5
        }
      },
      background2ExitAnimation: {
        desktop: {
          x: -334,
          y: 392,
          rotation: 180,
          scale: 0.88,
          opacity: 0.5
        },
        mobile: {
          x: -210,
          y: 185,
          rotation: 180,
          scale: 0.47,
          opacity: 0.5
        }
      }
    },
    {
      id: 'connect',
      title: 'CONNECT',
      titleStyle: 'horizontal',
      theme: 'white',
      titlePosition: 'front',
      hasPagination: true,
      animReversable: true,
      background1Animation: {
        desktop: {
          x: 42,
          y: -365,
          rotation: -30,
          scale: 0.54,
          opacity: 0.5
        },
        mobile: {
          x: -228,
          y: 25,
          rotation: 0,
          scale: 0.57,
          opacity: 0.5
        }
      },
      background2Animation: {
        desktop: {
          x: -50,
          y: 383,
          rotation: -30,
          scale: 0.54,
          opacity: 0.5
        },
        mobile: {
          x: 230,
          y: -60,
          rotation: 0,
          scale: 0.6,
          opacity: 0.5
        }
      }
    },
    {
      id: 'contact',
      title: 'CONTACT',
      titleStyle: 'horizontal',
      theme: 'white',
      titlePosition: 'back',
      hasPagination: false
    }
  ]
}

export default SectionSettings
