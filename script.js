'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

// display movement
const displayMovements = function (movements) {
  // removing the preset html elements
  containerMovements.innerHTML = ''

  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
     // use a template literal to add html elements
    const html = `
    <div class="movements__row">
    <div class="movements__type
     movements__type--${type}">${i + 1} ${type} </div>
    <div class="movements__value">${mov}</div>
    </div>
    
    `;

    // Adding the html to the DOM
    // afterbegin inserts a new child at the begining of its parent element container
    containerMovements.insertAdjacentHTML('afterbegin', html)
    
  })
}

displayMovements(account1.movements)
console.log(containerMovements.innerHTML);
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// CODING CHALLENGE #1
const dogsJulia = [3, 5, 2, 12, 7];
const dogsKate = [4, 1, 15, 8, 3];

// shallow copy of dogsJulia

// adult = >= 3yrs, puppy < 3
const checkDogs = (dogsJulia, dogsKate) => {
  const juliaCopy = dogsJulia.slice(1, -2);

  const bothAges = [...juliaCopy, ...dogsKate]

  bothAges.forEach(function (age, i) {
    const str = age >= 3 ? 'adult' : 'puppy'
    if (age >= 3) {
      console.log(`Dog number ${i + 1} is an ${str}, and is ${age} years old`);
    } else {
      console.log(`Dog number ${i + 1} is an ${str}`);
    }
  })
  
  console.log(juliaCopy);
  console.log(bothAges);
}

checkDogs(dogsJulia, dogsKate)



// DATA TRANSFORMATIONS: MAP, FILTER, REDUCE.

/* 
Map creates a new array based on the original array: It maps the values of 
the original array to a new array


Filter is used to filter for elements in the original array which satisfies a certain condition


*/



////`/////////////////////////////////////////////
