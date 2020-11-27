import getCountOf from '../utils/getCountOf'
import { 
  HANDLE_USER,
  HANDLE_DAYS,
  HANDLE_PEOPLE,
  SET_ERROR_SHOWN
} from './constants';

export function user(state = {
  userName: null,
  dayCount: null,
  weekCount: 0,
  remainderDays: 0,
  peopleCount: null,
  coupleCount: 0,
  groupCount: 0,
  isTouristic: null,
  prefersShortTrip: null,
  travelsLess: null,
  travelsMore: null,
  travelsOnWeekends: null,
  prefersAfterTen: null
}, action) {
  switch(action.type) {
    case HANDLE_USER:
      return {
        ...state, 
        [action.propName]: action.propValue
      }
    case HANDLE_DAYS:
      return {
        ...state, 
        weekCount: getCountOf('week', state.dayCount),
        remainderDays: state.weekCount > 0 ? state.dayCount % 7 : 0
      }
    case HANDLE_PEOPLE:
      return {
        ...state, 
        groupCount: getCountOf('group', state.peopleCount),
        coupleCount: (state.peopleCount % 2) + Math.floor(state.peopleCount / 2)
      }
    default:
      return state;
  }
}

export function tree(state = {
  errorShown: false,
  questions: {
    prefersShortTrip: "Are you planning to use maximum 3 stops on S-Bahn and U-Bahn services, or maximum 6 stops on bus or tram services?",
    travelsLess: "Are you planning to travel less than 5 times?",
    travelsMore: "Are you planning to be flexible and travel more than 3 times?",
    travelsOnWeekends: "Do you plan to travel together only after 8pm Monday-Friday and all day on weekends?",
    prefersAfterTen: "Will you use public transport after 10am?"
  }
}, action) {
  switch(action.type) {
    case SET_ERROR_SHOWN:
      return {
        ...state, 
        errorShown: action.bool
      }
    default:
      return state;
  }
}