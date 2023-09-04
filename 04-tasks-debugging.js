// Task 1

<<<<<<< HEAD
function sumSliceArray(arr, first, second) {
    if (!Array.isArray(arr)) {
        throw new Error(`Input is not an array`);
    }

    if (isNaN(first) || isNaN(second)) {
        throw new Error(`Input contains non-numeric index`);
    }

    if (first >= arr.length || first < 0 || second >= arr.length || second < 0) {
        throw new Error("Index is out of range");
    }

    return arr[first] + arr[second];
}

try {
    let result = sumSliceArray([1, 2, 3, 4, 5, 6], "ggg", 5);
    console.log(`Sum: ${result}`);
} catch (error) {
    console.error(`Error: ${error.message}`);
}

// Task 2

function checkAge() {
    let name = prompt(`Enter your name:`);
    let age = +prompt(`Enter your age:`);
    let status = prompt(`Enter your status (admin, moderator, user):`);
    
    if (isNaN(age)) {
        throw new TypeError(`Age must be a number`);
    }
    
    if (!name || !age || !status) {
        throw new Error("Some field is empty! Please enter all fields");
    }
    
    if (age < 18 || age > 70) {
        throw new RangeError(`Age must be between 18 and 70`);
    }

    if (!(status === `admin` || status === `moderator` || status === `user`)) {
        throw new EvalError(`Invalid status entered`);
    }

    alert(`You have access to watch the movie.`);
}
try {
    checkAge();
} catch (error) {
    alert(`${error.name}: \n${error.message}`);
}


// Task 3

function calcRectangleArea(width, height) {
    return width * height;
}

try {
    const widthInput = +prompt(`Enter the width of the rectangle:`);
    const heightInput = +prompt(`Enter the height of the rectangle:`);

    if (isNaN(widthInput) || isNaN(heightInput)) {
        throw new Error(`Enter a value in numerical format`);
    }

    if (widthInput < 0 || heightInput < 0) {
        throw new Error(`Length and width cannot be negative numbers or zero`);
    }

    if (!widthInput || !heightInput) {
        throw new Error(`You didn't fill in all the fields`);
    }

    const area = calcRectangleArea(widthInput, heightInput);
    alert(`The area of the rectangle is: ${area}`);

} catch (error) {
    alert(`Error: ${error.message}`);
}


// Task 4

class MonthException extends Error {
    constructor(message) {
        super(message);
        this.name = "MonthException";
    }
}

function showMonthName(month) {
    let monthNames = [
        "January", "February", "March", "April",
        "May", "June", "July", "August",
        "September", "October", "November", "December"
    ];

    if (isNaN(month) || month < 1 || month > 12) {
        throw new MonthException("Incorrect month number");
    }

    return monthNames[month - 1];
}

try {
    let monthNumber = parseInt(prompt(`Enter the month number (1-12):`));
    let monthName = showMonthName(monthNumber);

    alert(`The month is: ${monthName}`);

} catch (error) {
    alert(`Error: ${error.message}`);
}


// Task 5

function showUser(id) {
    if (id < 0) {
      throw new Error(`ID must not be negative: ${id}`);
    }
    
    return { id: id };
}
  
function showUsers(ids) {
    const validUsers = [];
  
    for (const id of ids) {
      try {
        const user = showUser(id);
        validUsers.push(user);
      } catch (error) {
        console.error(`Error: ${error.message}`);
      }
    }
  
    return validUsers;
}

const userIds = [1, 2, -3, 4, -5]; 
const validUsers = showUsers(userIds);
console.log(validUsers);
  
=======
function sumSliceArray(arr, first, second) {
    if (!Array.isArray(arr)) {
        throw new Error(`Input is not an array`);
    }

    if (arr.length === 0) {
        throw new Error(`The array is empty`);
    }

    if (isNaN(first) || isNaN(second)) {
        throw new Error(`Input contains non-numeric index`);
    }

    if (first >= arr.length || first < 0 || second >= arr.length || second < 0) {
        throw new Error("Index is out of range");
    }

    return arr[first] + arr[second];
}

try {
    let result = sumSliceArray([1, 2, 3, 4, 5, 6], "kkk", 5);
    console.log(`Sum: ${result}`);

} catch (error) {
    console.error(`Error: ${error.message}`);
}

// Task 2

function checkAge() {
    let name = prompt(`Enter your name:`);
    let age = +prompt(`Enter your age:`);
    let status = prompt(`Enter your status (admin, moderator, user):`);
    
    if (isNaN(age)) {
        throw new TypeError(`Age must be a number`);
    }
    
    if (!name || !age || !status) {
        throw new Error("Some field is empty! Please enter all fields");
    }
    
    if (age < 18 || age > 70) {
        throw new RangeError(`Age must be between 18 and 70`);
    }

    if (!(status === `admin` || status === `moderator` || status === `user`)) {
        throw new EvalError(`Invalid status entered`);
    }

    alert(`You have access to watch the movie.`);
}
try {
    checkAge();
} catch (error) {
    alert(`${error.name}: \n${error.message}`);
}


// Task 3

function calcRectangleArea(width, height) {
    return width * height;
}

try {
    const widthInput = +prompt(`Enter the width of the rectangle:`);
    const heightInput = +prompt(`Enter the height of the rectangle:`);

    if (isNaN(widthInput) || isNaN(heightInput)) {
        throw new Error(`Enter a value in numerical format`);
    }

    if (widthInput < 0 || heightInput < 0) {
        throw new Error(`Length and width cannot be negative numbers`);
    }

    if (!widthInput || !heightInput) {
        throw new Error(`You didn't fill in all the fields`);
    }

    const area = calcRectangleArea(widthInput, heightInput);
    alert(`The area of the rectangle is: ${area}`);

} catch (error) {
    alert(`Error: ${error.message}`);
}


// Task 4

class MonthException extends Error {
    constructor(message) {
        super(message);
        this.name = "MonthException";
    }
}

function showMonthName(month) {
    let monthNames = [
        "January", "February", "March", "April",
        "May", "June", "July", "August",
        "September", "October", "November", "December"
    ];

    if (isNaN(month) || month < 1 || month > 12) {
        throw new MonthException("Incorrect month number");
    }

    return monthNames[month - 1];
}

try {
    let monthNumber = +prompt(`Enter the month number (1-12):`);
    let monthName = showMonthName(monthNumber);

    alert(`The month is: ${monthName}`);

} catch (error) {
    alert(`Error: ${error.message}`);
}



// Task 5

function showUser(id) {
    if (id < 0) {
      throw new Error(`ID must not be negative: ${id}`);
    }
    
    return { id: id };
}
  
function showUsers(ids) {
    const validUsers = [];
  
    for (const id of ids) {
      try {
        const user = showUser(id);
        validUsers.push(user);
      } catch (error) {
        console.error(`Error: ${error.message}`);
      }
    }
  
    return validUsers;
}

const userIds = [1, 2, -3, 4, -5]; 
const validUsers = showUsers(userIds);
console.log(validUsers);
  
>>>>>>> 57a505252ce61b7c4904f1fa4556d6d5b0e7e745