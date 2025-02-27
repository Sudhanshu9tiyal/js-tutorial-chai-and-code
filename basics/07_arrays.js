let num = [1 , 2 , 3 ,4 ];
let num2 = [10 , 20 , 40  ,60]
total= num.concat(num2);
// console.log(num)
// console.log(total)

const shinigamis = ["Rukia " , "renji" , "ichigo kurosaki" , ]
const captains = ["Kenpachi Zaraki" , "hitsugaya" , "Byakuya"]
const fighters =    [...captains ,  ...shinigamis]
// console.log(fighters)

//  Array k andar array :
let arr1 = [1 ,2 ,3 ,4 ,5 , 6  ,[45 , 67 , 89] , 78 , [99 , 98 , 97 , 96 ,  [56 , 78 , 90 , 12 ]]];
another_array = arr1.flat(Infinity);
console.log(another_array)