import { lazy, Suspense } from 'react'
const PriceSummary = lazy(() =>
  import('shared_utils/PriceSummary')
);


 const item1 = {
  id: '9154251762013764736-1',
  category: 'HS_OFFER',
  productOffering: {
    id: '9154251762013764736',
    name: 'Apple TV 4K 32GB - One Time Purchase',
    displayName: 'Apple TV 4K 32GB',
    type: 'hsOffer',
    characteristics: []
  },
  quantity: 1,
  itemPrice: {
    oneTime: [],
    recurring: [
      {
        amount: 229,
        taxes: [],
        recurringPeriod: {
          every: 1,
          unit: 'MONTH'
        },
        recurringDuration: 1,
        alterations: []
      }
    ]
  },
  totalPrice: {
    oneTime: {
      amount: 0,
      discount: 0,
      subTotal: 0,
      taxes: [],
      total: 0,
      credit: 0
    },
    recurring: [
      {
        recurringPeriod: {
          every: 1,
          unit: 'MONTH'
        },
        recurringBreakdowns: [
          {
            start: 1,
            duration: 1,
            amount: 229,
            discount: 0,
            subTotal: 229,
            taxes: [],
            total: 229
          }
        ],
        recurringCreditBreakdowns: []
      }
    ]
  },
  items: [],
  action: 'ADD',
  provisioner: 'fifa',
  productOrder: {
    type: 'ACQUISITION'
  },
  promotions: [],
  tags: ['addon', 'apple-tv', 'shipping-required', 'tv', 'tvx'],
  system: {
    componentId: '',
    code: '',
    EPC: {},
    fifa: {},
    cartItemPositionId: '1',
    contentfulEntryId: '7vjYhjiqW6tKBvXnDGNWOL',
    restrictedActions: [],
    provisioningStatus: null,
    lastValidated: '2021-04-30T16:00:12.306Z'
  },
  content: {
    ref: 'Apple TV',
    name: 'Apple TV 4K 32GB',
    title: 'Get Apple TV with 32GB',
    image: {
      metadata: {
        tags: []
      },
      sys: {
        space: {
          sys: {
            type: 'Link',
            linkType: 'space',
            id: 'evnrpfa1vdk4'
          }
        },
        id: '3U9GuRMdqAZMc6ymlMOBia',
        type: 'Asset',
        createdAt: '2021-07-16T22:56:07.943Z',
        updatedAt: '2021-07-16T22:56:07.943Z',
        environment: {
          sys: {
            id: 'master',
            type: 'Link',
            linkType: 'environment'
          }
        },
        revision: 1,
        locale: 'en-CA'
      },
      fields: {
        title: 'Apple TV 4K 6th Gen',
        file: {
          url: '//images.ctfassets.net/evnrpfa1vdk4/3U9GuRMdqAZMc6ymlMOBia/62b398bf022f4d080989265646e8d99a/Apple_TV_4K_Siri_Remote_Pure_Front_Screen_USEN_2000px.jpg',
          details: {
            size: 135219,
            image: {
              width: 2000,
              height: 2000
            }
          },
          fileName: 'Apple_TV_4K_Siri_Remote_Pure_Front_Screen_USEN_2000px.jpg',
          contentType: 'image/jpeg'
        }
      }
    },
    imageGallery: {
      metadata: {
        tags: []
      },
      sys: {
        space: {
          sys: {
            type: 'Link',
            linkType: 'space',
            id: 'evnrpfa1vdk4'
          }
        },
        id: '649oYXV7FgnlBXGeiibX2Y',
        type: 'Entry',
        createdAt: '2019-09-05T21:52:25.986Z',
        updatedAt: '2019-09-05T21:52:25.986Z',
        environment: {
          sys: {
            id: 'master',
            type: 'Link',
            linkType: 'environment'
          }
        },
        revision: 1,
        contentType: {
          sys: {
            type: 'Link',
            linkType: 'contentType',
            id: 'contentBlockImageGallery'
          }
        },
        locale: 'en-CA'
      },
      fields: {
        entryTitle: 'Apple TV 32GB Image Gallery',
        contentType: 'contentBlockImageGallery',
        galleryType: 'Default',
        imageGalleryItem: [
          {
            metadata: {
              tags: []
            },
            sys: {
              space: {
                sys: {
                  type: 'Link',
                  linkType: 'space',
                  id: 'evnrpfa1vdk4'
                }
              },
              id: '2OdhTef8w1kiSCMhj3tkeA',
              type: 'Entry',
              createdAt: '2019-09-05T21:50:52.821Z',
              updatedAt: '2021-09-01T21:27:21.894Z',
              environment: {
                sys: {
                  id: 'master',
                  type: 'Link',
                  linkType: 'environment'
                }
              },
              revision: 2,
              contentType: {
                sys: {
                  type: 'Link',
                  linkType: 'contentType',
                  id: 'contentBlockImageGalleryItem'
                }
              },
              locale: 'en-CA'
            },
            fields: {
              imageTitle: 'Apple TV with 32GB Image Gallery Item',
              imageDescription: 'Image for Apple TV with 32GB',
              image: {
                metadata: {
                  tags: []
                },
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'space',
                      id: 'evnrpfa1vdk4'
                    }
                  },
                  id: '3U9GuRMdqAZMc6ymlMOBia',
                  type: 'Asset',
                  createdAt: '2021-07-16T22:56:07.943Z',
                  updatedAt: '2021-07-16T22:56:07.943Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'environment'
                    }
                  },
                  revision: 1,
                  locale: 'en-CA'
                },
                fields: {
                  title: 'Apple TV 4K 6th Gen',
                  file: {
                    url: '//images.ctfassets.net/evnrpfa1vdk4/3U9GuRMdqAZMc6ymlMOBia/62b398bf022f4d080989265646e8d99a/Apple_TV_4K_Siri_Remote_Pure_Front_Screen_USEN_2000px.jpg',
                    details: {
                      size: 135219,
                      image: {
                        width: 2000,
                        height: 2000
                      }
                    },
                    fileName: 'Apple_TV_4K_Siri_Remote_Pure_Front_Screen_USEN_2000px.jpg',
                    contentType: 'image/jpeg'
                  }
                }
              }
            }
          }
        ]
      }
    },
    description:
      'Apple TV 4K lets you watch movies and shows in amazing 4K HDR - and now it completes the picture with immersive sound from Dolby Atmos${LEGAL.apple-tv-pik-addons-dolby-atmos}. It streams your favourite sports, news and TV channels live. Has great content from apps like Netflix, CBC TV and Sportsnet${LEGAL.apple-tv-gwp-appstore-subscription}. And thanks to Siri, you can control it all with just your voice.',
    productDetailDescription:
      'Apple TV 4K lets you watch movies and shows in amazing 4K HDR - and now it completes the picture with immersive sound from Dolby Atmos${LEGAL.apple-tv-pik-addons-dolby-atmos}. It streams your favourite sports, news and TV channels live. Has great content from apps like Netflix, CBC TV and Sportsnet${LEGAL.apple-tv-gwp-appstore-subscription}. And thanks to Siri, you can control it all with just your voice.',
    checkoutDescription:
      '* 4K High Dynamic Range (Dolby Vision and HDR10) for stunning picture quality\n* A10X Fusion chip for ultra-fast graphics and performance\n* Voice search by asking the Siri Remote',
    excerpt: 'Enjoy movies and shows in amazing 4K HDR.',
    newContentBlocks: [
      {
        metadata: {
          tags: []
        },
        sys: {
          space: {
            sys: {
              type: 'Link',
              linkType: 'space',
              id: 'evnrpfa1vdk4'
            }
          },
          id: '7aZzJ43PExoXCZEAuR6WAG',
          type: 'Entry',
          createdAt: '2019-03-18T20:55:02.537Z',
          updatedAt: '2019-03-18T20:55:02.537Z',
          environment: {
            sys: {
              id: 'master',
              type: 'Link',
              linkType: 'environment'
            }
          },
          revision: 1,
          contentType: {
            sys: {
              type: 'Link',
              linkType: 'contentType',
              id: 'contentBlockRoot'
            }
          },
          locale: 'en-CA'
        },
        fields: {
          ref: 'Apple TV Pik Hardware Details',
          name: 'Details',
          isCollapsable: true,
          collapseByDefault: true,
          refName: 'appleTVPikHardwareDetails',
          block: {
            metadata: {
              tags: []
            },
            sys: {
              space: {
                sys: {
                  type: 'Link',
                  linkType: 'space',
                  id: 'evnrpfa1vdk4'
                }
              },
              id: '77JQMZK2O81Cy4PRd8G7A8',
              type: 'Entry',
              createdAt: '2019-03-18T20:55:09.004Z',
              updatedAt: '2019-03-18T20:55:09.004Z',
              environment: {
                sys: {
                  id: 'master',
                  type: 'Link',
                  linkType: 'environment'
                }
              },
              revision: 1,
              contentType: {
                sys: {
                  type: 'Link',
                  linkType: 'contentType',
                  id: 'contentBlockFeatureLists'
                }
              },
              locale: 'en-CA'
            },
            fields: {
              entryTitle: 'Apple TV Pik Hardware Details Block',
              contentType: 'contentBlockFeatureLists',
              featureList: [
                {
                  metadata: {
                    tags: []
                  },
                  sys: {
                    space: {
                      sys: {
                        type: 'Link',
                        linkType: 'space',
                        id: 'evnrpfa1vdk4'
                      }
                    },
                    id: 'xPbDRE9nkpboOYWt9i0BB',
                    type: 'Entry',
                    createdAt: '2019-03-18T20:55:14.091Z',
                    updatedAt: '2019-03-18T20:55:14.091Z',
                    environment: {
                      sys: {
                        id: 'master',
                        type: 'Link',
                        linkType: 'environment'
                      }
                    },
                    revision: 1,
                    contentType: {
                      sys: {
                        type: 'Link',
                        linkType: 'contentType',
                        id: 'contentBlockFeatureList'
                      }
                    },
                    locale: 'en-CA'
                  },
                  fields: {
                    entryTitle: 'Apple TV Pik Hardware Feature Lists Column1',
                    contentType: 'contentBlockFeatureList',
                    description: 'Details of Apple TV Pik Hardware Column1',
                    openByDefault: true,
                    displayAsDropdown: false,
                    listItemType: 'circle',
                    listItems: [
                      {
                        metadata: {
                          tags: []
                        },
                        sys: {
                          space: {
                            sys: {
                              type: 'Link',
                              linkType: 'space',
                              id: 'evnrpfa1vdk4'
                            }
                          },
                          id: '1OSMvh7YPwSCbNUhHwMVrI',
                          type: 'Entry',
                          createdAt: '2019-03-18T20:55:17.649Z',
                          updatedAt: '2019-03-18T20:55:17.649Z',
                          environment: {
                            sys: {
                              id: 'master',
                              type: 'Link',
                              linkType: 'environment'
                            }
                          },
                          revision: 1,
                          contentType: {
                            sys: {
                              type: 'Link',
                              linkType: 'contentType',
                              id: 'contentBlockFeatureListItem'
                            }
                          },
                          locale: 'en-CA'
                        },
                        fields: {
                          listItemTitle:
                            '4K High Dynamic Range (Dolby Vision and HDR10) for stunning picture quality',
                          displayTitle: false,
                          listItemDescription:
                            '4K High Dynamic Range (Dolby Vision and HDR10) for stunning picture quality',
                          listItemDescriptionNew:
                            '4K High Dynamic Range (Dolby Vision and HDR10) for stunning picture quality'
                        }
                      },
                      {
                        metadata: {
                          tags: []
                        },
                        sys: {
                          space: {
                            sys: {
                              type: 'Link',
                              linkType: 'space',
                              id: 'evnrpfa1vdk4'
                            }
                          },
                          id: 'CWaieOBDSi1xaXr0xVDOn',
                          type: 'Entry',
                          createdAt: '2019-03-18T20:55:21.625Z',
                          updatedAt: '2019-03-18T20:55:21.625Z',
                          environment: {
                            sys: {
                              id: 'master',
                              type: 'Link',
                              linkType: 'environment'
                            }
                          },
                          revision: 1,
                          contentType: {
                            sys: {
                              type: 'Link',
                              linkType: 'contentType',
                              id: 'contentBlockFeatureListItem'
                            }
                          },
                          locale: 'en-CA'
                        },
                        fields: {
                          listItemTitle: 'Dolby Atmos for three-dimensional, room-filling sound',
                          displayTitle: false,
                          listItemDescription:
                            'Dolby Atmos for three-dimensional, room-filling sound',
                          listItemDescriptionNew:
                            'Dolby Atmos for three-dimensional, room-filling sound${LEGAL.apple-tv-pik-addons-dolby-atmos}'
                        }
                      },
                      {
                        metadata: {
                          tags: []
                        },
                        sys: {
                          space: {
                            sys: {
                              type: 'Link',
                              linkType: 'space',
                              id: 'evnrpfa1vdk4'
                            }
                          },
                          id: '3fowHQmV5KEeLGGpQuki2I',
                          type: 'Entry',
                          createdAt: '2019-03-18T20:55:30.111Z',
                          updatedAt: '2019-03-18T20:55:30.111Z',
                          environment: {
                            sys: {
                              id: 'master',
                              type: 'Link',
                              linkType: 'environment'
                            }
                          },
                          revision: 1,
                          contentType: {
                            sys: {
                              type: 'Link',
                              linkType: 'contentType',
                              id: 'contentBlockFeatureListItem'
                            }
                          },
                          locale: 'en-CA'
                        },
                        fields: {
                          listItemTitle: 'A10X Fusion chip for ultra-fast graphics and performance',
                          displayTitle: false,
                          listItemDescription:
                            'A10X Fusion chip for ultra-fast graphics and performance',
                          listItemDescriptionNew:
                            'A10X Fusion chip for ultra-fast graphics and performance'
                        }
                      }
                    ]
                  }
                },
                {
                  metadata: {
                    tags: []
                  },
                  sys: {
                    space: {
                      sys: {
                        type: 'Link',
                        linkType: 'space',
                        id: 'evnrpfa1vdk4'
                      }
                    },
                    id: '3qBilkNsCcWzzKODQwzHHp',
                    type: 'Entry',
                    createdAt: '2019-03-18T21:06:50.537Z',
                    updatedAt: '2019-03-18T21:06:50.537Z',
                    environment: {
                      sys: {
                        id: 'master',
                        type: 'Link',
                        linkType: 'environment'
                      }
                    },
                    revision: 1,
                    contentType: {
                      sys: {
                        type: 'Link',
                        linkType: 'contentType',
                        id: 'contentBlockFeatureList'
                      }
                    },
                    locale: 'en-CA'
                  },
                  fields: {
                    entryTitle: 'Apple TV Pik Hardware Feature Lists Column2',
                    contentType: 'contentBlockFeatureList',
                    description: 'Apple TV Pik Hardware Feature Lists Column2',
                    openByDefault: true,
                    displayAsDropdown: false,
                    hasSpacing: false,
                    listItemType: 'circle',
                    listItems: [
                      {
                        metadata: {
                          tags: []
                        },
                        sys: {
                          space: {
                            sys: {
                              type: 'Link',
                              linkType: 'space',
                              id: 'evnrpfa1vdk4'
                            }
                          },
                          id: '5tDhqq31MG1ZwGXopXqhkR',
                          type: 'Entry',
                          createdAt: '2019-03-18T21:06:56.613Z',
                          updatedAt: '2019-03-18T21:06:56.613Z',
                          environment: {
                            sys: {
                              id: 'master',
                              type: 'Link',
                              linkType: 'environment'
                            }
                          },
                          revision: 1,
                          contentType: {
                            sys: {
                              type: 'Link',
                              linkType: 'contentType',
                              id: 'contentBlockFeatureListItem'
                            }
                          },
                          locale: 'en-CA'
                        },
                        fields: {
                          listItemTitle: 'Voice search by asking the Siri Remote',
                          displayTitle: false,
                          listItemDescription: 'Voice search by asking the Siri Remote',
                          listItemDescriptionNew: 'Voice search by asking the Siri Remote'
                        }
                      },
                      {
                        metadata: {
                          tags: []
                        },
                        sys: {
                          space: {
                            sys: {
                              type: 'Link',
                              linkType: 'space',
                              id: 'evnrpfa1vdk4'
                            }
                          },
                          id: '7L6JlN0qTbD4wLMAipDHcD',
                          type: 'Entry',
                          createdAt: '2019-03-18T21:07:01.741Z',
                          updatedAt: '2019-03-18T21:07:01.741Z',
                          environment: {
                            sys: {
                              id: 'master',
                              type: 'Link',
                              linkType: 'environment'
                            }
                          },
                          revision: 1,
                          contentType: {
                            sys: {
                              type: 'Link',
                              linkType: 'contentType',
                              id: 'contentBlockFeatureListItem'
                            }
                          },
                          locale: 'en-CA'
                        },
                        fields: {
                          listItemTitle:
                            'Use AirPlay to view photos and videos from your iPhone and iPad on your TV',
                          displayTitle: false,
                          listItemDescription:
                            'Use AirPlay to view photos and videos from your iPhone and iPad on your TV',
                          listItemDescriptionNew:
                            'Use AirPlay to view photos and videos from your iPhone and iPad on your TV${LEGAL.apple-tv-gwp-airplay-terms}'
                        }
                      },
                      {
                        metadata: {
                          tags: []
                        },
                        sys: {
                          space: {
                            sys: {
                              type: 'Link',
                              linkType: 'space',
                              id: 'evnrpfa1vdk4'
                            }
                          },
                          id: '5Ws5nhYXMasFkTkOP21r1b',
                          type: 'Entry',
                          createdAt: '2019-03-18T21:07:07.597Z',
                          updatedAt: '2019-03-18T21:07:07.597Z',
                          environment: {
                            sys: {
                              id: 'master',
                              type: 'Link',
                              linkType: 'environment'
                            }
                          },
                          revision: 1,
                          contentType: {
                            sys: {
                              type: 'Link',
                              linkType: 'contentType',
                              id: 'contentBlockFeatureListItem'
                            }
                          },
                          locale: 'en-CA'
                        },
                        fields: {
                          listItemTitle: 'App details in Apple TV Addons',
                          displayTitle: false,
                          listItemDescription: 'App details in Apple TV Addons',
                          listItemDescriptionNew:
                            'Netflix, CBC TV, Sportsnet, iTunes and thousands more apps in the App Store${LEGAL.apple-tv-gwp-appstore-subscription}'
                        }
                      }
                    ]
                  }
                }
              ]
            }
          }
        }
      },
      {
        metadata: {
          tags: []
        },
        sys: {
          space: {
            sys: {
              type: 'Link',
              linkType: 'space',
              id: 'evnrpfa1vdk4'
            }
          },
          id: 'RXy7kYlD9Et4xAJqs0K1V',
          type: 'Entry',
          createdAt: '2019-03-11T22:32:23.470Z',
          updatedAt: '2019-03-11T22:32:23.470Z',
          environment: {
            sys: {
              id: 'master',
              type: 'Link',
              linkType: 'environment'
            }
          },
          revision: 1,
          contentType: {
            sys: {
              type: 'Link',
              linkType: 'contentType',
              id: 'contentBlockRoot'
            }
          },
          locale: 'en-CA'
        },
        fields: {
          ref: 'Apple TV Pik Whats in the Box Details',
          name: 'What’s in the box',
          isCollapsable: true,
          collapseByDefault: true,
          block: {
            metadata: {
              tags: []
            },
            sys: {
              space: {
                sys: {
                  type: 'Link',
                  linkType: 'space',
                  id: 'evnrpfa1vdk4'
                }
              },
              id: '5uxNAmOZtiJiNPTcoj3Ofi',
              type: 'Entry',
              createdAt: '2019-03-11T22:31:39.363Z',
              updatedAt: '2019-03-11T22:31:39.363Z',
              environment: {
                sys: {
                  id: 'master',
                  type: 'Link',
                  linkType: 'environment'
                }
              },
              revision: 1,
              contentType: {
                sys: {
                  type: 'Link',
                  linkType: 'contentType',
                  id: 'contentBlockFeatureLists'
                }
              },
              locale: 'en-CA'
            },
            fields: {
              entryTitle: 'Apple TV Pik Whats in the Box Block',
              contentType: 'contentBlockFeatureLists',
              featureList: [
                {
                  metadata: {
                    tags: []
                  },
                  sys: {
                    space: {
                      sys: {
                        type: 'Link',
                        linkType: 'space',
                        id: 'evnrpfa1vdk4'
                      }
                    },
                    id: '3SixqTNKjffx4jOZotAw1s',
                    type: 'Entry',
                    createdAt: '2019-03-11T22:31:41.836Z',
                    updatedAt: '2019-03-11T22:31:41.836Z',
                    environment: {
                      sys: {
                        id: 'master',
                        type: 'Link',
                        linkType: 'environment'
                      }
                    },
                    revision: 1,
                    contentType: {
                      sys: {
                        type: 'Link',
                        linkType: 'contentType',
                        id: 'contentBlockFeatureList'
                      }
                    },
                    locale: 'en-CA'
                  },
                  fields: {
                    entryTitle: 'Apple TV Pik Whats in the box Column1',
                    contentType: 'contentBlockFeatureList',
                    description: 'Whats in the box of Apple TV Pik Hardware Column1',
                    openByDefault: true,
                    displayAsDropdown: false,
                    listItemType: 'circle',
                    listItems: [
                      {
                        metadata: {
                          tags: []
                        },
                        sys: {
                          space: {
                            sys: {
                              type: 'Link',
                              linkType: 'space',
                              id: 'evnrpfa1vdk4'
                            }
                          },
                          id: '7jW07VzwKNf1bHMXlDjRmb',
                          type: 'Entry',
                          createdAt: '2019-03-11T22:32:07.871Z',
                          updatedAt: '2019-03-11T22:32:07.871Z',
                          environment: {
                            sys: {
                              id: 'master',
                              type: 'Link',
                              linkType: 'environment'
                            }
                          },
                          revision: 1,
                          contentType: {
                            sys: {
                              type: 'Link',
                              linkType: 'contentType',
                              id: 'contentBlockFeatureListItem'
                            }
                          },
                          locale: 'en-CA'
                        },
                        fields: {
                          listItemTitle: 'Apple TV 4K',
                          displayTitle: false,
                          listItemDescription: 'Apple TV 4K',
                          listItemDescriptionNew: 'Apple TV 4K'
                        }
                      },
                      {
                        metadata: {
                          tags: []
                        },
                        sys: {
                          space: {
                            sys: {
                              type: 'Link',
                              linkType: 'space',
                              id: 'evnrpfa1vdk4'
                            }
                          },
                          id: '30Il9lCJRI2Sxo7wUDlG3T',
                          type: 'Entry',
                          createdAt: '2019-03-11T22:32:14.085Z',
                          updatedAt: '2019-03-11T22:32:14.085Z',
                          environment: {
                            sys: {
                              id: 'master',
                              type: 'Link',
                              linkType: 'environment'
                            }
                          },
                          revision: 1,
                          contentType: {
                            sys: {
                              type: 'Link',
                              linkType: 'contentType',
                              id: 'contentBlockFeatureListItem'
                            }
                          },
                          locale: 'en-CA'
                        },
                        fields: {
                          listItemTitle: 'Siri Remote',
                          displayTitle: false,
                          listItemDescription: 'Siri Remote',
                          listItemDescriptionNew: 'Siri Remote'
                        }
                      },
                      {
                        metadata: {
                          tags: []
                        },
                        sys: {
                          space: {
                            sys: {
                              type: 'Link',
                              linkType: 'space',
                              id: 'evnrpfa1vdk4'
                            }
                          },
                          id: '77qFr6Hk8pXKYnH9W7TpVu',
                          type: 'Entry',
                          createdAt: '2019-03-11T22:32:18.074Z',
                          updatedAt: '2019-03-11T22:32:18.074Z',
                          environment: {
                            sys: {
                              id: 'master',
                              type: 'Link',
                              linkType: 'environment'
                            }
                          },
                          revision: 1,
                          contentType: {
                            sys: {
                              type: 'Link',
                              linkType: 'contentType',
                              id: 'contentBlockFeatureListItem'
                            }
                          },
                          locale: 'en-CA'
                        },
                        fields: {
                          listItemTitle: 'Power cord',
                          displayTitle: false,
                          listItemDescription: 'Power cord',
                          listItemDescriptionNew: 'Power cord'
                        }
                      }
                    ]
                  }
                },
                {
                  metadata: {
                    tags: []
                  },
                  sys: {
                    space: {
                      sys: {
                        type: 'Link',
                        linkType: 'space',
                        id: 'evnrpfa1vdk4'
                      }
                    },
                    id: '6CxP0gaFvv302HQuARdp5d',
                    type: 'Entry',
                    createdAt: '2019-03-11T22:31:45.681Z',
                    updatedAt: '2019-03-11T22:31:45.681Z',
                    environment: {
                      sys: {
                        id: 'master',
                        type: 'Link',
                        linkType: 'environment'
                      }
                    },
                    revision: 1,
                    contentType: {
                      sys: {
                        type: 'Link',
                        linkType: 'contentType',
                        id: 'contentBlockFeatureList'
                      }
                    },
                    locale: 'en-CA'
                  },
                  fields: {
                    entryTitle: 'Apple TV Pik Whats in the box Column2',
                    contentType: 'contentBlockFeatureList',
                    description: 'Whats in the box of Apple TV Pik Hardware Column2',
                    openByDefault: true,
                    displayAsDropdown: false,
                    listItemType: 'circle',
                    listItems: [
                      {
                        metadata: {
                          tags: []
                        },
                        sys: {
                          space: {
                            sys: {
                              type: 'Link',
                              linkType: 'space',
                              id: 'evnrpfa1vdk4'
                            }
                          },
                          id: '5O0EmLWLs7VVVkLvYCO8ZU',
                          type: 'Entry',
                          createdAt: '2019-03-11T22:31:49.288Z',
                          updatedAt: '2019-03-11T22:31:49.288Z',
                          environment: {
                            sys: {
                              id: 'master',
                              type: 'Link',
                              linkType: 'environment'
                            }
                          },
                          revision: 1,
                          contentType: {
                            sys: {
                              type: 'Link',
                              linkType: 'contentType',
                              id: 'contentBlockFeatureListItem'
                            }
                          },
                          locale: 'en-CA'
                        },
                        fields: {
                          listItemTitle: 'Lightning to USB cable',
                          displayTitle: false,
                          listItemDescription: 'Lightning to USB cable',
                          listItemDescriptionNew: 'Lightning to USB cable'
                        }
                      },
                      {
                        metadata: {
                          tags: []
                        },
                        sys: {
                          space: {
                            sys: {
                              type: 'Link',
                              linkType: 'space',
                              id: 'evnrpfa1vdk4'
                            }
                          },
                          id: 'x3s0qwpRrGbtxtciDjwtS',
                          type: 'Entry',
                          createdAt: '2019-03-11T22:31:53.123Z',
                          updatedAt: '2019-03-11T22:31:53.123Z',
                          environment: {
                            sys: {
                              id: 'master',
                              type: 'Link',
                              linkType: 'environment'
                            }
                          },
                          revision: 1,
                          contentType: {
                            sys: {
                              type: 'Link',
                              linkType: 'contentType',
                              id: 'contentBlockFeatureListItem'
                            }
                          },
                          locale: 'en-CA'
                        },
                        fields: {
                          listItemTitle: 'Documentation',
                          displayTitle: false,
                          listItemDescription: 'Documentation',
                          listItemDescriptionNew: 'Documentation'
                        }
                      }
                    ]
                  }
                }
              ]
            }
          }
        }
      }
    ],
    metaTitle: 'Apple TV 4K with 32GB of Storage - Pik TV Add-ons',
    metaKeywords: 'apple tv 4k',
    metaDescription:
      'Watch your favourite content in stunning 4K and get access to thousands of TV apps, including TELUS Pik TV. Stream your favourite TV shows and On Demand movies on any screen, including through your Apple TV. Get Apple TV with Pik TV today!',
    cta: 'About this add-on',
    product: {
      metadata: {
        tags: []
      },
      sys: {
        space: {
          sys: {
            type: 'Link',
            linkType: 'space',
            id: 'evnrpfa1vdk4'
          }
        },
        id: '6qAJDmwPfDTuzcMlJkheJA',
        type: 'Entry',
        createdAt: '2019-02-19T23:09:09.688Z',
        updatedAt: '2019-03-18T21:13:48.795Z',
        environment: {
          sys: {
            id: 'master',
            type: 'Link',
            linkType: 'environment'
          }
        },
        revision: 3,
        contentType: {
          sys: {
            type: 'Link',
            linkType: 'contentType',
            id: 'tvOffer'
          }
        },
        locale: 'en-CA'
      },
      fields: {
        ref: 'appleTV',
        displayName: 'Apple TV 4k with 32GB',
        description:
          'Stream your favorite sports, news, and TV channels live with the Pik TV App on your Apple TV - all along with all your music, photos, games and apps.\n',
        checkoutDescription:
          '- 4K High Dynamic Range (Dolby Vision and HDR10) for stunning picture quality\n- A10X Fusion chip for ultra-fast graphics and performance\n- Voice search by asking the Siri Remote'
      }
    },
    weight: 10,
    upsellMessage: {
      metadata: {
        tags: []
      },
      sys: {
        space: {
          sys: {
            type: 'Link',
            linkType: 'space',
            id: 'evnrpfa1vdk4'
          }
        },
        id: '4YBH4WbH25USJchIicfJz4',
        type: 'Entry',
        createdAt: '2020-01-14T21:54:48.049Z',
        updatedAt: '2020-05-08T18:54:22.138Z',
        environment: {
          sys: {
            id: 'master',
            type: 'Link',
            linkType: 'environment'
          }
        },
        revision: 4,
        contentType: {
          sys: {
            type: 'Link',
            linkType: 'contentType',
            id: 'crossSellMessage'
          }
        },
        locale: 'en-CA'
      },
      fields: {
        price: '955',
        redirectCta: 'Learn more',
        image: {
          metadata: {
            tags: []
          },
          sys: {
            space: {
              sys: {
                type: 'Link',
                linkType: 'space',
                id: 'evnrpfa1vdk4'
              }
            },
            id: '2nP8l5429SEI69iAVBu4TB',
            type: 'Asset',
            createdAt: '2020-05-08T18:48:26.054Z',
            updatedAt: '2020-05-08T18:48:26.054Z',
            environment: {
              sys: {
                id: 'master',
                type: 'Link',
                linkType: 'environment'
              }
            },
            revision: 1,
            locale: 'en-CA'
          },
          fields: {
            title: 'Pik Rik Apple 1080',
            file: {
              url: '//images.ctfassets.net/evnrpfa1vdk4/2nP8l5429SEI69iAVBu4TB/1df0d583bf6f7bff95ad9154e1ad6572/Pik_Rik_Apple_1080.jpg',
              details: {
                size: 112868,
                image: {
                  width: 1080,
                  height: 611
                }
              },
              fileName: 'Pik_Rik_Apple_1080.jpg',
              contentType: 'image/jpeg'
            }
          }
        }
      }
    },
    pricingContent:
      'Apple TV 4K and Pik TV for only $20/month when you bundle with TELUS Internet for 2 years.',
    modalContent: [
      {
        metadata: {
          tags: []
        },
        sys: {
          space: {
            sys: {
              type: 'Link',
              linkType: 'space',
              id: 'evnrpfa1vdk4'
            }
          },
          id: '5XsHJkkpjPMoSNqBycmwB9',
          type: 'Entry',
          createdAt: '2020-04-16T17:12:00.289Z',
          updatedAt: '2020-04-16T17:12:00.289Z',
          environment: {
            sys: {
              id: 'master',
              type: 'Link',
              linkType: 'environment'
            }
          },
          revision: 1,
          contentType: {
            sys: {
              type: 'Link',
              linkType: 'contentType',
              id: 'contentBlockRichDescriptionWithImage'
            }
          },
          locale: 'en-CA'
        },
        fields: {
          entryTitle: 'Apple TV - Modal Rich Description',
          contentType: 'contentBlockRichDescriptionWithImage',
          orientation: 'Vertical',
          listItems: {
            metadata: {
              tags: []
            },
            sys: {
              space: {
                sys: {
                  type: 'Link',
                  linkType: 'space',
                  id: 'evnrpfa1vdk4'
                }
              },
              id: '4mwPv7VUrYicXaFxmbyMrc',
              type: 'Entry',
              createdAt: '2020-04-16T17:08:05.257Z',
              updatedAt: '2020-04-16T17:08:05.257Z',
              environment: {
                sys: {
                  id: 'master',
                  type: 'Link',
                  linkType: 'environment'
                }
              },
              revision: 1,
              contentType: {
                sys: {
                  type: 'Link',
                  linkType: 'contentType',
                  id: 'contentBlockRichDescriptionWithImageItem'
                }
              },
              locale: 'en-CA'
            },
            fields: {
              entryTitle: 'Apple TV - Modal Rich Description Item',
              richDescription: {
                nodeType: 'document',
                data: {},
                content: [
                  {
                    nodeType: 'paragraph',
                    content: [
                      {
                        nodeType: 'text',
                        value:
                          'Apple TV 4K lets you watch movies and shows in amazing 4K HDR - and now it completes the picture with immersive sound from Dolby Atmos. It streams your favourite sports, news and TV channels live. Has great content from apps like Netflix, CBC TV and Sportsnet. And thanks to Siri, you can control it all with just your voice.',
                        marks: [],
                        data: {}
                      }
                    ],
                    data: {}
                  }
                ]
              }
            }
          }
        }
      }
    ]
  }
}

 const item2 = {
  id: '9147904372813829170-2',
  category: 'HS_OFFER',
  productOffering: {
    id: '9147904372813829170',
    name: 'Shipment',
    type: 'hsOffer',
    characteristics: []
  },
  quantity: 1,
  itemPrice: {
    oneTime: [],
    recurring: [
      {
        amount: 0,
        taxes: [],
        recurringPeriod: {
          every: 1,
          unit: 'MONTH'
        },
        recurringDuration: 1,
        alterations: []
      }
    ]
  },
  totalPrice: {
    oneTime: {
      amount: 0,
      discount: 0,
      subTotal: 0,
      taxes: [],
      total: 0,
      credit: 0
    },
    recurring: [
      {
        recurringPeriod: {
          every: 1,
          unit: 'MONTH'
        },
        recurringBreakdowns: [
          {
            start: 1,
            duration: 0,
            amount: 0,
            discount: 0,
            subTotal: 0,
            taxes: [],
            total: 0
          }
        ],
        recurringCreditBreakdowns: []
      }
    ]
  },
  items: ['9147904372813829186-3'],
  action: 'ADD',
  provisioner: 'fifa',
  productOrder: {
    type: 'ACQUISITION'
  },
  promotions: [],
  tags: [],
  system: {
    componentId: '',
    code: '',
    EPC: {},
    fifa: {},
    cartItemPositionId: '2',
    restrictedActions: [],
    provisioningStatus: null,
    lastValidated: '2021-04-30T16:00:12.306Z'
  }
}

 const cart = {
  items: {
    '9154251762013764736-1': item1,
    '9147904372813829186-3': {
      id: '9147904372813829186-3',
      category: 'HS_OFFER',
      productOffering: {
        id: '9147904372813829186',
        name: 'Shipment Item',
        type: 'hsOffer',
        characteristics: [
          {
            name: '9158202167313452904',
            value: null,
            displayName: 'Activation Due Date'
          },
          {
            name: '9148018351513860871',
            value: '1',
            displayName: 'quantity'
          },
          {
            name: '9147912620013832894',
            value: '2392696',
            displayName: 'SKU'
          },
          {
            name: '9147912230013832699',
            value: 'cb4d8101-fe66-4e0f-a077-f645f96cfb47',
            displayName: 'Mapping Identifier'
          },
          {
            name: '9149416356413048270',
            value: '9154251762013764736',
            displayName: 'Shipped Offering ID'
          },
          {
            name: '9152978571713305832',
            value: null,
            displayName: 'Is BOM'
          },
          {
            name: '9156638654813346484',
            value: 'Yes',
            displayName: 'Hold for Credit Task Characteristic'
          },
          {
            name: '9158202391313452912',
            value: null,
            displayName: 'Schedule Type'
          },
          {
            name: '9158903368313499144',
            value: null,
            displayName: 'Cancellation Reason'
          },
          {
            name: '-9154606105713523509',
            value: null,
            displayName: null
          },
          {
            name: '-9154565965813636854',
            value: 'b8518e8e-bf54-4c53-a0d9-d0142e16c031',
            displayName: null
          },
          {
            name: '-9154549156813831521',
            value: '-3',
            displayName: null
          },
          {
            name: '-9154572910813809975',
            value: '9806a071-08f7-476a-8507-6b65263abe0f',
            displayName: null
          },
          {
            name: '-9142379360013118150',
            value: '9137216695113778231',
            displayName: null
          }
        ]
      },
      quantity: 1,
      itemPrice: {
        oneTime: [],
        recurring: [
          {
            amount: 0,
            taxes: [],
            recurringPeriod: {
              every: 1,
              unit: 'MONTH'
            },
            recurringDuration: 0,
            alterations: []
          }
        ]
      },
      totalPrice: {
        oneTime: {
          amount: 0,
          discount: 0,
          subTotal: 0,
          taxes: [],
          total: 0,
          credit: 0
        },
        recurring: [
          {
            recurringPeriod: {
              every: 1,
              unit: 'MONTH'
            },
            recurringBreakdowns: [
              {
                start: 1,
                duration: 0,
                amount: 0,
                discount: 0,
                subTotal: 0,
                taxes: [],
                total: 0
              }
            ],
            recurringCreditBreakdowns: []
          }
        ]
      },
      items: [],
      action: 'ADD',
      provisioner: 'fifa',
      productOrder: {
        type: 'ACQUISITION'
      },
      promotions: [],
      tags: [],
      system: {
        componentId: '',
        code: '',
        EPC: {},
        fifa: {},
        cartItemPositionId: '3',
        restrictedActions: [],
        provisioningStatus: null
      }
    },
    '9147904372813829170-2': item2
  },
  root: {
    language: 'en',
    province: 'BC',
    market: {
      type: 'PERSONAL'
    },
    customer: {
      hs: {
        type: 'R',
        subType: 'I'
      }
    },
    customerType: 'CONSUMER',
    provisioners: ['fifa'],
    eligibleFulfillmentMethods: ['ONLINE_SHIPMENT'],
    items: ['9154251762013764736-1', '9147904372813829170-2'],
    promotions: [],
    totalPrices: [
      {
        oneTime: {
          amount: 0,
          discount: 0,
          subTotal: 0,
          taxes: [],
          total: 0,
          credit: 0
        },
        recurring: [
          {
            recurringPeriod: {
              every: 1,
              unit: 'MONTH'
            },
            recurringBreakdowns: [
              {
                start: 1,
                duration: 1,
                amount: 229,
                discount: 0,
                subTotal: 229,
                taxes: [],
                total: 229
              },
              {
                start: 2,
                duration: 0,
                amount: 0,
                discount: 0,
                subTotal: 0,
                taxes: [],
                total: 0
              }
            ],
            recurringCreditBreakdowns: []
          }
        ],
        category: 'HS_TOTAL'
      },
      {
        oneTime: {
          amount: 0,
          discount: 0,
          subTotal: 0,
          taxes: [],
          total: 0,
          credit: 0
        },
        recurring: [
          {
            recurringPeriod: {
              every: 1,
              unit: 'MONTH'
            },
            recurringBreakdowns: [
              {
                start: 1,
                duration: 1,
                amount: 229,
                discount: 0,
                subTotal: 229,
                taxes: [],
                total: 229
              },
              {
                start: 2,
                duration: 0,
                amount: 0,
                discount: 0,
                subTotal: 0,
                taxes: [],
                total: 0
              }
            ],
            recurringCreditBreakdowns: []
          }
        ],
        category: 'TOTAL'
      }
    ],
    order: [
      {
        category: 'HS',
        system: {
          fifaInformation: {
            campaigns: [],
            commitments: [],
            shoppingCartId: '4775ac00-0a98-4e01-8576-d102a8687901',
            shoppingCartDelta: {
              itemDelta: []
            },
            version: '1'
          }
        },
        serviceAddress: {
          locationId: '3692511',
          fmsId: '005146259',
          streetNumber: '3301',
          unitNumber: '403',
          streetName: 'CENTENNIAL DR',
          city: 'VERNON',
          fullAddress: '403-3301 CENTENNIAL DR  VERNON BC',
          postalCode: 'V1T2T8',
          province: 'BC'
        },
        shippingAddresses: [
          {
            locationId: '3692511',
            fmsId: '005146259',
            streetNumber: '3301',
            unitNumber: '403',
            streetName: 'CENTENNIAL DR',
            city: 'VERNON',
            fullAddress: '403-3301 CENTENNIAL DR  VERNON BC',
            postalCode: 'V1T2T8',
            province: 'BC'
          }
        ]
      }
    ],
    validationErrors: [],
    messages: {
      hs: [],
      mobility: []
    },
    id: 'hs-fifa-appletv-addon',
    appEnv: 'local',
    cartType: 'HS'
  }
}
function App() {
  return (
      <Suspense fallback="loading">
        <PriceSummary
          cart={cart}
          isAuthenticated={false}
          featureFlags={{}}
        />
      </Suspense>
  );
}

export default App;
