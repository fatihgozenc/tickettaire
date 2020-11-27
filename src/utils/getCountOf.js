export default function getCountOf(type, count){
  let divider;
  if(type === 'week') {
    divider = 7;
  } else if(type === 'group') {
    divider = 5;
  } else {
    throw new Error("You need to pass a correct type: 'week' or 'group'")
  }
  return count % divider === 0 
  ? count / divider 
  : Math.ceil(count / divider ) - 1
}
