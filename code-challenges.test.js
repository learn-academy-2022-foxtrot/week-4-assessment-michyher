// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

const { array } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided. 
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

// const colors1 = ["purple", "blue", "green", "yellow", "pink"]
// // // Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
// const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]


// ----PSEUDOCODE-----
    // input 1: colors1
    // output 1: ["yellow", "blue", "pink", "green"] (<--may change)
    // input 2: colors2
    // output 2: ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"] (<--may change)
    // Create a function namedan reorgizedArray that takes in an array, removes the first item from the array and shuffles the remaining content.
    // One parameter: input
describe("reorgizedArray", () => {
    it("takes in an array, removes the first item from the array and shuffles the remaining content.", () => {
        let input1 = colors1
        let input2 = colors2
        let result1 = ["yellow", "blue", "pink", "green"]
        let result2 = ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]
        expect(reorgizedArray(colors1)).toEqual(result1)
        expect(reorgizedArray(colors2)).toEqual(result2)
    })
  })
// GOOD FAIL! YAY!

// b) Create the function that makes the test pass.
// ----PSEUDOCODE-----
    // Using .shift, I was able to remove the first first item in the array. I also wasn't sure what the syntax was in order to also change the order. I wanted to use .sort(), which would sort them in alphabetical order. So i ended up adding it outside of the function. I know that this might not be best practice but it was the only way I knew how to create the result I wanted. After turning in this assessment, I'll try to look for a more efficient method. 

const reorgizedArray = (input) => {
    return (input.shift())
}
console.log(reorgizedArray(colors1))
console.log(reorgizedArray(colors2))
console.log(colors1.sort())
console.log(colors2.sort())

// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the net total of votes.

// a) Create a test with expect statements for each of the variables provided.

// const votes1 = {upVotes: 13, downVotes: 2}
// // Expected output: 11
// const votes2 = {upVotes: 2, downVotes: 33}
// Expected output: -31

// ----PSEUDOCODE-----
    // input 1: votes1
    // output 1: 11
    // input 2: votes2
    // output 2: -31
    // Create a function named totalVotes that takes in an object that contains up votes and down votes and returns the net total of votes.
    // Two parameters: votes

describe("totalVotes", () => {
    it("takes in an object that contains up votes and down votes and returns the net total of votes.", () => {
        let votes1 = {upVotes: 13, downVotes: 2}
        let votes2 = {upVotes: 2, downVotes: 33}
        let result1 = 11
        let result2 = -31
        expect(totalVotes(votes1)).toEqual(result1)
        expect(totalVotes(votes2)).toEqual(result2)

    })
  })
  // GOOD FAIL! YAY! 

// b) Create the function that makes the test pass.
// ----PSEUDOCODE-----
    // I needed to let my variables exist first.
    // I was able to access the items in each array using dot notation.
    // And I subtracted the upvotes and downvotes.

        let votes1 = {upVotes: 13, downVotes: 2}
        let votes2 = {upVotes: 2, downVotes: 33}

  const totalVotes = (votes) => {
    return(votes.upVotes - votes.downVotes)
  }
 console.log(totalVotes(votes1)) 
  console.log(totalVotes(votes2))


// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

const dataArray1 = ["array", "object", "number", "string", "Boolean"]
const dataArray2 = ["string", "null", "Boolean", "string", "undefined"]
// Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]

// ----PSEUDOCODE-----
    // input 1: dataArray1, dataArray2
    // output 1: ["array", "object", "number", "string", "Boolean", "null", "undefined"]
    // Create a function named bothArrays that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.
    // Two parameters: array1, array2

describe("bothArrays", () => {
    it("takes in two arrays as arguments and returns one array with no duplicate values", () => {
        let array1 = ["array", "object", "number", "string", "Boolean"] + ["string", "null", "Boolean", "string", "undefined"]
        let array2 = ["string", "null", "Boolean", "string", "undefined"]
        result = ["array", "object", "number", "string", "Boolean", "null", "undefined"]
      expect(bothArrays(array1, array2)).toEqual(result)
    })
  })
  // GOOD FAIL! YAY! 

// b) Create the function that makes the test pass.
// ----PSEUDOCODE-----
    // Knowing that I need to go through each index of the array, I knew I had to use a for loop.
    // I also needed to use a conditional method in order to make sure that the words don't repeat when I push the arrays together. 

const bothArrays = (array1, array2) => {
    for(i=0; i<array2.length; i++) {
        if(array1.indexOf(array2[i]) === -1) {
            array1.push(array2[i]);
        }
    }
    return array1
}
console.log(bothArrays(dataArray1,dataArray2))