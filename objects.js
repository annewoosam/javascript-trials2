"use strict";
// a reminder on what use strict means in our current environment
// testing at vagrant prompt using
// node --use-strict
// pasting of function
// pasting of call with argument to test passed
// using CTRL-D to go back to vagrant prompt step if errors
// keeping last useful functions in file till final solution
// comparing to solution guide for brevity even if working

// 1. countWords

// def count_words(phrase):
//     """Return a dictionary of each word and the no. of times they appear.

//     You can assume that `phrase` does not contain any punctuation and that
//     each word is separated with a space.

//     Arguments:
//         phrase (str): A string of space-separated words

//     Returns:
//         dict: {word: # of times word appears in `phrase`}
//     """

//     word_counts = {}

//     for word in phrase.split(' '):
//         if word in word_counts:
//             word_counts[word] += 1;
//         else:
//             word_counts[word] = 1;

//     return word_counts

function countWords(phrase) {

  const wordCounts = {};

  for (const word of phrase.split(' ')) {

    if (wordCounts[word]) {

      wordCounts[word] += 1;

    } else {

      wordCounts[word] = 1;

    }
  }

  return wordCounts;

};

// countWords('a rose is a rose') //a 2; is 1; rose 2
// countWords('hello there my friend') // 1 each
// countWords('blah blah blah') // blah 3

// 2. getMelonsAtPrice

// def print_melon_at_price(price):
//     """Return the list of melons that cost `price`.

//     Arguments:
//         price (float)

//     Returns:
//         list: List of melons that cost `price`
//         None: If there are no melons that cost `price`
//     """

//     melon_prices = {
//         2.50: ['Cantaloupe', 'Honeydew'],
//         2.95: ['Watermelon'],
//         3.25: ['Musk', 'Crenshaw'],
//         14.25: ['Christmas']
//     }

//     if price not in melon_prices:
//         return

//     return sorted(melon_prices[price])

function getMelonsAtPrice(price) {

  const melonPrices = {

    2.50: ['Cantaloupe', 'Honeydew'],

    2.95: ['Watermelon'],

    3.25: ['Musk', 'Crenshaw'],

    14.25: ['Christmas']

  };

  if (!melonPrices[price]) {

    return;

  }

  return melonPrices[price].sort();

};

// Our Test Cases:



// getMelonsAtPrice(2.50) // expect ['Cantaloupe', 'Honeydew']
// getMelonsAtPrice(2.95) // expect ['Watermelon']
// getMelonsAtPrice(3.25) // expect ['Musk', 'Crenshaw']
// getMelonsAtPrice(14.25)// expect ['Christmas']

