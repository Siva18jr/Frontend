const array = [1, 55, 66, 88, 3]

//MAP
const mapValue = array.map((i) => i * 3)

console.log(mapValue); // [3, 165, 198, 264, 9]



//FILTER
const filterValue = array.filter((i) => i > 50)

console.log(filterValue);  // [55, 66, 88]



//FIND
const findValue = array.find((el) => el > 50)

console.log(findValue); // 55



//FIND INDEX
const findIndex = array.findIndex((i) => i > 50)

console.log(findIndex);  // 1

//REDUCE
const initialValue = 0;
const reduceArray = array.reduce((accumulator, currentValue) => accumulator + currentValue)

console.log(reduceArray);