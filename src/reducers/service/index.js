import { SET_SERVICES, SET_SERVICE, SET_SUB_SERVICES, SET_SUB_SERVICE, SET_SERVICE_CATEGORIES } from '../../utils/constants/action_types';
import { FullCleaningIcon, PartialCleaningIcon, CleaningAfterRepairIcon } from '../../assets/icons';
import { HomeCleaningIcon, DryCleaningIcon, HouseWarmingIcon, GardenCleaningIcon, OfficeCleaningIcon, WindowCleaningIcon } from '../../assets/icons';
const initialState = {
  services: [
    {
      title: 'Home Cleaning',
      image: HomeCleaningIcon,
    },
    {
      title: 'Dry Cleaning',
      image: DryCleaningIcon,
    },
    {
      title: 'House\n Warming/Moving',
      image: HouseWarmingIcon,
    },
    {
      title: 'Garden\n Cleaning/Work',
      image: GardenCleaningIcon,
    },
    {
      title: 'Office Cleaning',
      image: OfficeCleaningIcon,
    },
    {
      title: 'Window Cleaning',
      image: WindowCleaningIcon,
    },
  ],
  subServices: [
    {
      title: 'Full Cleaning',
      text: 'Full Cleaning is the process of removing unwanted substances,such as dirt,infectious agents,and other impurities,from an object or environment. Cleaning occurs in many different contexts,and uses many different methods. Several occupations are devoted to cleaning.',
      icon: FullCleaningIcon,
    },
    {
      title: 'Partial Cleaning',
      text: 'Partial Cleaning is the process of removing unwanted substances,such as dirt,infectious agents, and other impurities, from an object or environment.',
      icon: PartialCleaningIcon,
    },
    {
      title: 'Cleaning after Repairing',
      text: 'test3 lorem ipsum test3 lorem ipsum test3 lorem ipsum test3 lorem ipsum test3 lorem ipsum test3 lorem ipsum',
      icon: CleaningAfterRepairIcon,
    },
  ],
  serviceCategoies: {
    service: 'fullCleaning', // naxnakan, karoxa poxvi id-ov
    subServices: [// es zibil keyn petqa poxvi
      {
        key: 'windowCleaning',
        text: 'Window Cleaning',
        checked: true,
        children: [
          {
            key: 'asd',
            text: 'asdasd',
            checked: true,
          },
          {
            key: 'asd',
            text: 'dsadsa',
            checked: true,
          },
        ],
      },
      {
        key: 'dishesCleaning',
        text: 'Dishes Cleaning',
        checked: true,
        children: null,
      },
      {
        key: 'floorCleaning',
        text: 'Floor Cleaning',
        checked: true,
        children: null,
      },
      {
        key: 'dustCleaning',
        text: 'Dusting',
        checked: true,
        children: null,
      },
    ],
  },
  chosenService: '',
  chosenSubService: '',
  subServiceCategories: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_SERVICES:
      return {
        ...state,
        services: action.payload,
      };
    case SET_SERVICE:
      return {
        ...state,
        chosenService: action.payload,
      };
    case SET_SUB_SERVICES:
      return {
        ...state,
        subServices: action.payload,
      };
    case SET_SUB_SERVICE:
      return {
        ...state,
        chosenSubService: action.payload,
      };
    case SET_SERVICE_CATEGORIES:
      console.log(action.payload, 'SET_SERVICE_CATEGORIES');
      return {
        ...state,
        serviceCategoies: action.payload,
      };
    default:
      return state;
  }
};
