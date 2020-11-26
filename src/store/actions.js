import { 
  HANDLE_USER,
  HANDLE_DAYS,
  HANDLE_PEOPLE
} from './constants'

export function handleUser(propName, propValue) {
  return {type: HANDLE_USER, propName, propValue}
}
export function handleDays() {
  return {type: HANDLE_DAYS}
}
export function handlePeople() {
  return {type: HANDLE_PEOPLE}
}