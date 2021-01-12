'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `here is your delecious pasta with ${ing1} , ${ing2} and ${ing3}`
    );
  },
};

/*   Spread Operator  */
const arr = [7, 8, 9];
const goodNewArr = [5, 6, ...arr];
console.log(goodNewArr);

const newMenu = [...restaurant.mainMenu, 'Dosa'];
console.log(newMenu);

//copy array
const mainMenuCopy = [...restaurant.mainMenu];

//Join 2 or more arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

const str = 'nilesh';
const letters = [...str, ' ', 'S.'];
console.log(letters);

//real world example
// const ingredients = [
//   prompt('ingredient 1?'),
//   prompt('ingredient 2?'),
//   prompt('ingredient 3?'),
// ];

// restaurant.orderPasta(...ingredients);

//objects
const newRestaurant = { ...restaurant, founder: 'Nil' };
console.log(newRestaurant.founder);
