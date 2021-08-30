
//Data
let testData = [1, 2, 1990, 85, 24, "Vasya", "colya@example.com", "Rafshan", "ashan@example.com", true, false];
let testData2 = [1, 2, 1990, 85, 24, 5, 7, 8.1];
let testData3 = [{ "name": "Vasya", "email": "vasya@example.com", "age": 20, "skills": { "php": 0, "js": -1, "madness": 10, "rage": 10 } }, { "name": "Dima", "email": "dima@example.com", "age": 34, "skills": { "php": 5, "js": 7, "madness": 3, "rage": 2 } }, { "name": "Colya", "email": "colya@example.com", "age": 46, "skills": { "php": 8, "js": -2, "madness": 1, "rage": 4 } }, { "name": "Misha", "email": "misha@example.com", "age": 16, "skills": { "php": 6, "js": 6, "madness": 5, "rage": 2 } }, { "name": "Ashan", "email": "ashan@example.com", "age": 99, "skills": { "php": 0, "js": 10, "madness": 10, "rage": 1 } }, { "name": "Rafshan", "email": "rafshan@example.com", "age": 11, "skills": { "php": 0, "js": 0, "madness": 0, "rage": 10 } }];
let testData4 = [{ "name": "Vasya", "email": "vasya@example.com", "age": 20 }, { "name": "Dima", "email": "dima@example.com", "age": 34 }, { "name": "Colya", "email": "colya@example.com", "age": 46 }, { "name": "Misha", "email": "misha@example.com", "age": 16 }, { "name": "Ashan", "email": "ashan@example.com", "age": 99 }, { "name": "Rafshan", "email": "rafshan@example.com", "age": 11 }, 1, 2, 1990, 85, 24, "Vasya", "colya@example.com", "Rafshan", "ashan@example.com", true, false, [[[[1, 2, 1990, 85, 24, "Vasya", "colya@example.com", "Rafshan", "ashan@example.com", true, false, [{ "name": "Rafshan", "email": "rafshan@example.com", "age": 11 }]]]]]];



//task 7
function array_find(arr: Array<any>, search: string|RegExp): string[]|null {
  for (let val of arr) {
    if (typeof val === 'string'){  
    let result = val.match(RegExp(search));
    if(result !== null) {
      return [result[0]];
     }
  }
}
  return null;
}
// let result = array_find(testData, '/^raf.*/i')
// let result0 = array_find(testData, "Rafshan") // ["Rafshan"]
// console.log(result);



//task 8
function array_skip_until(arr: Array<any>, value: any): any[] {
  let index = arr.indexOf(value);
  if (index === -1) return [];
  else arr.splice(0, index);
  return arr;
}
//let result1 = array_skip_until(testData, 2); // [2, 1990, 85, 24, "Vasya", "colya@example.com", "Rafshan", "ashan@example.com", true, false]
//let result2 = array_skip_until(testData, "Rafshan"); // ["Rafshan", "ashan@example.com", true, false]
//let result3 = array_skip_until(testData, "asd"); // []


//task 9
// function array_normalize(arr: Array<any>, shema: string|Object[,transform: bool = false]): any[] {
//     return []
// Не разобрался с задачей и с условием.
// }
// let result4 = array_normalize(testData4, 'string') // ['Vasya', 'colya@example.com', 'Rafshan', 'ashan@example.com']
// let result5 = array_normalize(testData4, 'string', true) // ['1', '2', '1990', '85', '24', 'Vasya', 'colya@example.com', 'Rafshan', 'ashan@example.com']
// let result6 = array_normalize(testData4, {age: 'float'}) // []
// let result7 = array_normalize(testData4, {age: 'float'}, true) // [{age: 20}, {age: 34}, {age: 46}, {age: 16}, {age: 99}, {age: 11}]



//task 10
function array_unique(arr: Array<any>): any[] {
  let array = [...new Set(arr)];
     return array
}
//let result8 = array_unique(testData.concat(testData2)) // [1, 2, 1990, 85, 24, 5, 7, 8.1, "Vasya", "colya@example.com", "Rafshan", "ashan@example.com", true, false]



//task 11
function array_pluck(arr: Array<any>, path: string): any[] {
  return arr.map((el) => path.split('.').reduce((r, val) => r[val], el))
}
//let result9 = array_pluck(testData3, 'name') // ["Vasya", "Dima", "Colya", "Misha", "Ashan", "Rafshan"]
//let result10 = array_pluck(testData3, 'skills.php') // [0, 5, 8, 6, 0, 0]
//console.log(result10);



//task 12
function array_combine(keys: Array<any>, values: Array<any>): Object {
  let obj: any = {};
  for (let i = 0; i < keys.length; i++) {
    if ((keys[i] === undefined) || (values[i] === undefined)) break;
    obj[keys[i]] = values[i];
  }
  return obj;
}
// let result11 = array_combine(testData, testData2) // {1: 1, 2: 2, 1990: 1990, 85: 85, 24: 24, "Vasya": 5, "colya@example.com": 7, "Rafshan": 8.1, "ashan@example.com": undefined}
// console.log(result11);

