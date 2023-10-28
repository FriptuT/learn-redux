// ---UPDATING ARRAYS---
export const numbers: number[] = [1,2,3];

//adding
export const index: number = numbers.indexOf(2);
export const added: number[] = [
  ...numbers.slice(0,index),
  4,
  ...numbers.slice(index,numbers.length)
]
// console.log(added);

//removing el 2
export const removed = numbers.filter(number => number !== 2);
// console.log(removed);

//Updating
export const updatedArr = numbers.map(number => number === 2 ? 20 : number);