## Problem Description & Solve Instruction

These problem form [Edatbit.com](https://www.edabit.com). I solved these problem on my apporch and compare with other programmers.

### Problem 01: Sum of Multiplication

Given a number, return the total sum of that number multiplied by every number between 1 and 10.  
Problem Link [Sum of Multiplication](https://edabit.com/challenge/W8R9CPBThreBBXYLS)

### Solve Instruction (Pseudocode)

    Step 01: Create a function called multiSum with declar two variable num and range
    Step 02: Check the num variabel if the number is negative return -1
    Step 03: Check the range, if the range is 1 multiplication with num and return
    Step 04: return the num * range + call the function with num and range-1
    Step 05: End Program

### Problem 02: Travelling Salesman Problem

Problem Link in Edatbit.com [Travelling Salesman Problem](https://edabit.com/challenge/r453y7c3vBQz4Rrbn)

### Solve Instruction

See the salesmanPath.js file

### Problem 03: Sum of the Items in an Array

Create a function that takes an array and returns the sum of all items in the array.  
Problem Link [Sum of the Items in an Array](https://edabit.com/challenge/27Toh4rACcmRvRLrb)

We can solve it by many way but i used recursion

For see sloved code: [sumOfArray.js](https://github.com/arman-pro/ds-algorithm/blob/main/Edabit/Recursion/Eassy/sumOfArray.js)

```
sumArray([1, [2, [1]], 3]) ➞ 7
// 1 + 2 + 1 + 3 = 7

N:B: All element of array are positive integer

```

### Solve Instruction (Pseudocode & Algorithm)

    Step 01: Create function sumArray with @var {Array} arr & @var {int} total
    Step 02: Check if arr length is 0 return total
    Step 03: Check if arr[0] value is a number
    Step 04:    then the number addition with total
    Step 05:    then call sumArray and slice first value from array and pass new total value as arg
    Step 06: Check if arr[0] not number | else
    Step 07: Call sumArray func and pass arg with spread first array and pass total
    Step 08: End Program

```
    function mySum(Array arr, int total)
        if arr.length === 0 then return
        if arr[0] is number
            total += arr[0]
            // remove first element of the array
            return mySum(arr.slice(1), total)
        else
            var arr = [];
            arr.push(...arr[0], arr.slice(1)); // exclude all value and push new array
           return mySum(arr, total)
```

### Problem 04: The Collatz Conjecture

Problem link [The Collatz Conjecture](https://edabit.com/challenge/PyLwHawLofXKZWw4i)
same too #Problem 03
See and compare

### Problem 05: Flaten an Array

Giver a nested array. Merge all value a single array and return
Solve This problem using Recursion

```
Example
flat([1,2,3,[4,5,[6,7,8], 9],10]) // output [1,2,3,4,5,6,7,8,9,10]
flat([]) // output []
```

### Solve Instruction and Pseudocode

    ```
    @var {Array}
    @return {Array}

    function flat(arr)
        // declar a Array variable
        var newArr = [];
        if arr length equal to 0
            then return Array @var newArr
        for every item
            if item is Array
                then call flat function with array item, destructur and push into @var newArr
            if item is not Array
                then push into @var newArr

        return @var newArr;
    ```

For see solved code [Flat Array](https://github.com/arman-pro/ds-algorithm/tree/main/Edabit/Recursion/Eassy/flat.js)

### Problem 05: Total Count of Numbers in a MultiDimensional Or Nested Array

Create a function that takes a multidimensional array and return the total count of numbers in that array.  
Problem link [Total Count of Numbers in a MultiDimensional Array](https://edabit.com/challenge/6dC7GRf5SsbsNvYdk)

Example

```
countNumber([["", 17.2, 5, "edabit"]]) ➞ 2
// 17.2 and 5.

countNumber([[[[[2, 14]]], 2, 3, 4]]) ➞ 5
// 2, 14, 2, 3 and 4.

countNumber([["balkot"]]) ➞ 0
```

### Solve Instruction and Pseudocode

    ```
    @var {Array}
    @return {int}

    function countNumber(arr)
        // declar a int variable
        var count = 0;
        if arr length equal to 0
            then return Int @var count
        for every item of @param arg
            if item is Array
                then call flat function with array item
                and increment count by return val
            if item is int
                then increment count 1 time

        return @var count;
    ```

For see solved code [Total Count of Numbers...](https://github.com/arman-pro/ds-algorithm/tree/main/Edabit/Recursion/Eassy/countNumber.js)

### Problem 06: Find the Largest Even Number

Write a function that finds the largest number in an array nums that is also even. If there is no even number, return -1.  
Problem link [Find the Largest Even Number](https://edabit.com/challenge/DX898Gd3L6QXAWMSf)  
Example

```
largestEven([3, 7, 2, 1, 7, 9, 10, 13]) ➞ 10
largestEven([1, 3, 5, 7]) ➞ -1
largestEven([0, 19, 18973623]) ➞ 0
```

### Solve Instruction

For see solved code [Total Count of Numbers...](https://github.com/arman-pro/ds-algorithm/tree/main/Edabit/Recursion/Eassy/largestEvenNumber.js)

### Problem 07: Is the Input Factorial of an Integer?

Create a function to check if a given integer is a factorial of integer or not. The return value should be a boolean.  
Problem Link [Is the Input Factorial of an Integer](https://edabit.com/challenge/cAHN6sDdk8dSCoS2r)

isFactorial(2) ➞ true
// 2 = 2 \* 1 = 2!

isFactorial(27) ➞ false

isFactorial(24) ➞ true
// 24 = 4 _ 3 _ 2 \* 1 = 4!

### Solve Instruction

For see solved code [Total Count of Numbers...](https://github.com/arman-pro/ds-algorithm/tree/main/Edabit/Recursion/Eassy/isFactorial.js)
