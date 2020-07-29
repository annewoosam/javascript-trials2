"use strict";


// 1. isHometown
// def is_hometown(town):
//     """Given a `town`, return `True` if `town` is 'San Francisco'.

//     Arguments:
//         town (str): A town

//     Returns:
//         bool: True if `town` is 'San Francisco'
//     """

//     return town == 'San Francisco'
// Define your function here
function isHometown (town) {
	return town === 'San Francisco';
}

// Our Test Cases for True and False:

// isHometown('San Francisco')
// isHometown('Oakland')

// 2. getFullName
// def get_full_name(first_name, last_name):
//   """Given `first_name` and `last_name`, return a full name.

//   Arguments:
//       first_name (str): A first name
//       last_name (str): A last name

//   Returns:
//       str: A full name
//   """

//   return f'{first_name} {last_name}'

// Define your function here
function getFullName (firstName, lastName){
	return `${firstName} ${lastName}`;
}

// Our Test Cases for concatenating:

// getFullName('Anne','Woo-Sam')
// getFullName('Fernanda','Diomede')

// 3. calculateTotal
// def calculate_total(base_price, state, tax=0.05):
//     """Return the total price of an item, figuring in state taxes and fees.

//     Arguments:
//         base_price (float): Base price of an item
//         state (str): Two-letter abbreviation of a U.S. state
//         tax (float): Tax rate. Defaults to 0.05

//     Returns:
//         float: The total price of an item
//     """

//     subtotal = base_price * (1 + tax)

//     fee = 0
//     if state == 'CA':
//         fee = 0.03 * subtotal
//     elif state == 'PA':
//         fee = 2
//     elif state == 'MA':
//         if base_price <= 100:
//             fee = 1
//         else:
//             fee = 3

//     return subtotal + fee
// Define your function here
