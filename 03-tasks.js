// Task 1
function createArray (start, end) {
    let array = [];
    
    for (let i = start; i <= end; i++) {
        array.push(i);
    }
    
    return array;
}
console.log(createArray(2, 9)); // [2,3,4,5,6,7,8,9]


// Task 2

function repetitionNumbers(a, b) {
    const result = [];

    for (let i = a; i <= b; i++) {
        for (let j = 1; j <= i - a + 1; j++) {
            result.push(i);
        }
    }
    return result;
}
console.log(repetitionNumbers(1, 5));


// Task 3
function randArray(k) {
    let result = [];
    for (let i = 1; i <= k; i++) {
        result.push(Math.floor(Math.random() * 500));
    }
    return result;
}
console.log(randArray(5));


//Task 4

function compact(initialArray) {
    let resultArray = [];
    for (let i = 0; i < initialArray.length; i++) {
        if (!resultArray.includes(initialArray[i])) {
            resultArray.push(initialArray[i]);
        }
    }
    return resultArray;
}
console.log(compact([1, 2, 1, 3, 4]));


// Task 5

let arr = [5, "Limit", 12, "a", "3", 99, 2, [2, 4, 3, "33", "a", "text"], "strong", "broun"];
let arrNew = generalType(arr);

function generalType(arr) {
    let arrayString = [];
    let arrayNumber = [];
    
    for (let i = 0; i < arr.length; i++) {
        if (!Array.isArray(arr[i])) {
            if (typeof arr[i] === "number") {
                arrayNumber.push(arr[i]);
            } else {
                arrayString.push(arr[i]);
            } 
        } else {
            let innerArrayString = [];
            let innerArrayNumber = [];
            for (let j = 0; j < arr[i].length; j++) {
                if (typeof arr[i][j] === "number") {
                    innerArrayNumber.push(arr[i][j]);
                } else {
                    innerArrayString.push(arr[i][j]);
                }
            }
            arrayNumber = arrayNumber.concat(innerArrayNumber);
            arrayString = arrayString.concat(innerArrayString);
        }
    }
    return [arrayNumber, arrayString];
}
console.log(JSON.stringify(arrNew));


// Task 6

function calc(a, b, op) {
    if (op === 1) {
        return a - b;
    } else if (op === 2) {
        return a * b;
    } else if (op === 3) {
        return a / b;
    } else {
        return a + b;
    }
}
console.log(calc(10, 2, 1)); 


// Task 7

function findUnique(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                return false;
            } 
        }
    }
    return true;        
}
let myArr = [1, 2, 3, 5, 3];
const warning = findUnique(myArr);
console.log(warning);


// Extra Task
function create(secretPassword) {
    return function(inputPassword) {
        return inputPassword === secretPassword;
    };
}
const tom = create("pass_for_Tom");

console.log(tom("pass_for_Tom")); // true 
console.log(tom("pass_for_tom")); // false
