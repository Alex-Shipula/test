
//Data
let testData = [1, 2, 1990, 85, 24, "Vasya", "colya@example.com", "Rafshan", "ashan@example.com", true, false];
let testData2 = [1, 2, 1990, 85, 24, 5, 7, 8.1];
let testData3 = [{ "name": "Vasya", "email": "vasya@example.com", "age": 20, "skills": { "php": 0, "js": -1, "madness": 10, "rage": 10 } }, { "name": "Dima", "email": "dima@example.com", "age": 34, "skills": { "php": 5, "js": 7, "madness": 3, "rage": 2 } }, { "name": "Colya", "email": "colya@example.com", "age": 46, "skills": { "php": 8, "js": -2, "madness": 1, "rage": 4 } }, { "name": "Misha", "email": "misha@example.com", "age": 16, "skills": { "php": 6, "js": 6, "madness": 5, "rage": 2 } }, { "name": "Ashan", "email": "ashan@example.com", "age": 99, "skills": { "php": 0, "js": 10, "madness": 10, "rage": 1 } }, { "name": "Rafshan", "email": "rafshan@example.com", "age": 11, "skills": { "php": 0, "js": 0, "madness": 0, "rage": 10 } }];
let testData4 = [{ "name": "Vasya", "email": "vasya@example.com", "age": 20 }, { "name": "Dima", "email": "dima@example.com", "age": 34 }, { "name": "Colya", "email": "colya@example.com", "age": 46 }, { "name": "Misha", "email": "misha@example.com", "age": 16 }, { "name": "Ashan", "email": "ashan@example.com", "age": 99 }, { "name": "Rafshan", "email": "rafshan@example.com", "age": 11 }, 1, 2, 1990, 85, 24, "Vasya", "colya@example.com", "Rafshan", "ashan@example.com", true, false, [[[[1, 2, 1990, 85, 24, "Vasya", "colya@example.com", "Rafshan", "ashan@example.com", true, false, [{ "name": "Rafshan", "email": "rafshan@example.com", "age": 11 }]]]]]];


// task 1
const cloneDeep = (obj) => {
    let clone = JSON.parse(JSON.stringify(obj));
    return clone;
}



//task 2
let arrays = [[1, 2, 3], [4, 5], [6], [[3, [[[[[[7]]]]]]]]];
const getArr = array => array.reduce((a, b) => a.concat(Array.isArray(b) ? getArr(b) : b), []);
let arrFin = getArr(arrays);



//task 3
function MultiplicatorUnitFailure() { }
function primitiveMultiply(a, b) {
    if (Math.random() < 0.5)
        return a * b;
    else
        throw new MultiplicatorUnitFailure();
}
function reliableMultiply(a, b) {
    try {
        let count = primitiveMultiply(a, b);
        return count;
    } catch {
        return reliableMultiply(a, b);
    }

}
//console.log(reliableMultiply(8, 8));



//task 4
Array.prototype.append = function (el) {
    for (let i = this.length; i > 0; i--) {
        this[i] = this[i - 1];
    }
    this[0] = el;
}
let arr = [1, 8, 3];
arr.append(6);



//task 5
let array = ['Solnce', 'vishlo', 'iz', 'za', 'tuchi'];
function recuseLog(arr) {
    if (arr.length > 0) {
        console.log(arr.shift());
        recuseLog(array);
    }
}
//recuseLog(array);



//task 6
function parallel(input, callback) {
    return callback(input.map(([fn, args = []]) => fn.apply(null, args)));
  }
  
  var a = function (one, two) {
    return one + two;
  };
  var b = function () {
    return false;
  };
  parallel([[a, [1, 2]], [b]], function (results) {
    console.log(results); // [3, false]
  });
  