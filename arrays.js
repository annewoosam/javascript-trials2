"use strict";


// 1. printIndices
// def print_indices(items):
//     """Print each item in the list, followed by its index.

//     The output should look like this:
//         apple 0
//         berry 1
//         cherry 2

//     Arguments:
//         items (list)

//     Returns:
//         None
//     """

//     for i in range(len(items)):
//         print(f'{items[i]} {i}')

// comments not # but //
// compared to Python iteration does not require set at 0 and increment by 1
// use parentheses, const, i for index, in, curly brace
// print statement needs to have f string replaced with template literals which is the character
// below the ESC upper right of keyboard ` (backtick) in place of quotation mark
// $ in place of f but before every variable we want to plug in
// curly braces then our expression in closed curly braces
// close is aligned with for
// close aligned with function

function printIndices(items) {

  for (const i in items) {
    console.log(`${items[i]} ${i}`);
  }
 }

// This is our test call: printIndices(['apple','berry','cherry'])

// 2. everyOtherItem
// def every_other_item(items):
//     """Print a list of every other item in `items`

//     Start with index 0.

//     Arguments:
//         items (list)
//     """

//     result = []

//     for i in range(len(items)):
//         if i % 2 == 0:
//             result.append(items[i])

//     print(result)
// for JavaScript we do not have to use length(len); we can simply use for in loop
// Raise hands to understand why using resultItems versus Result

function everyOtherItem(items) {
 const result = [];

  for (const i in items) {
  	if (i % 2 === 0) {
  		result.push(items[i]);
  	}
  }
  console.log(result);
 }
// This is our test call: everyOtherItem(['apple','berry','cherry'])
// we expect apple and cherry to return

// 3. smallestNItems
// Python
// def smallest_n_items(items, n):
//     """Print a list of the `n` smallest integers in `items`.

//     Order the integers in descending order.

//     You can assume that `n` will be less than the length of the list.

//     Arguments:
//         items (list[int]): A list of integers
//         n (int): Desired length for the resulting list
//     """

//     sorted_items = sorted(items)
//     sorted_n_items = sorted_items[:n]
//     sorted_n_items.reverse()

//     print(sorted_n_items)

function smallestNItems(items, n) {
  const nums = [1, 30, 4, 21, 100000];
  nums.sort((a, b) => a - b);
}

function smallestNItems(items, n) {
  const nums = items;
  const numsSorted=nums.sort((a, b) => a - b);
  const numsSlice=numsSorted.slice(0,n);
  const numsReversed=numsSlice.reverse();
  console.log(numsReversed)
}
// These are our test calls:

// smallestNItems([1, 30, 4, 21, 100000],2)
// expectation 4,1
// smallestNItems([1, 30, 4, 21, 100000],3)
// expectation 21,4,1