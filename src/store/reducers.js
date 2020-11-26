import getCountOf from '../utils/getCountOf'
import { 
  HANDLE_USER,
  HANDLE_DAYS,
  HANDLE_PEOPLE
} from './constants';

export function user(state = {
  userName: "",
  dayCount: 1,
  weekCount: 0,
  remainderDays: 0,
  peopleCount: 1,
  coupleCount: 0,
  groupCount: 0,
  isTouristic: 0
}, action) {
  switch(action.type) {
    case HANDLE_USER:
      return {
        ...state, 
        [action.propName]: action.propName === 'userName' 
        ? action.propValue
        : parseInt(action.propValue)
      }
    case HANDLE_DAYS:
      return {
        ...state, 
        weekCount: getCountOf('week', state.dayCount),
        remainderDays: state.dayCount % 7
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