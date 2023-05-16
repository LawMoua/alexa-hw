/**
 * Loop through an array of 5 random numbers (include negative numbers). Sort the numbers and print a new array. CANT USE THE SORT() OR FUNCTIONS
 */

// Input: [4, -3, 5, 7, 10]
// Expected Output: [-3, 4, 5, 7, 10]

let arr = [4, -3, 5, 7, 10];
let n = arr.length;

// bubble sort algorithm to sort the array in ascending order
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n - i - 1; j++) {
    if (arr[j] > arr[j + 1]) {
      // swap the elements
      let int1 = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = int1;
    }
  }
}

console.log(arr);
