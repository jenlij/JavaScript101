// Objects as Dictionary Exercises 
//Exercise 1
var phonebookDict = {
  Alice: '703-493-1834',
  Bob: '857-384-1234',
  Elizabeth: '484-584-2923'
};

function printEntry(dict, name) {
    console.log(name + ': ' + returnEntry(dict, name));
}

function addEntry(dict, name, number) {
    dict[name] = number;
    return dict;
}

function deleteEntry(dict, name) {
    dict[name] = '';
    return dict;
}

function changeEntry(dict, name, newNumber) {
    dict[name] = newNumber;
    return dict;
}

function returnEntry(dict, name) {
    return dict[name];
}

// Write code to do the following:
// 1.Print Elizabeth's phone number.
printEntry(phonebookDict, 'Elizabeth');

// 2.Add a entry to the dictionary: Kareem's number is 938-489-1234.
addEntry(phonebookDict, 'Kareem', '938-489-1234');

// 3.Delete Alice's phone entry.
deleteEntry(phonebookDict, 'Alice');

// 4.Change Bob's phone number to '968-345-2345'.
changeEntry(phonebookDict, 'Bob', '968-345-2345');

// 5.Given this code var personName = 'Elizabeth';, use the variable personName to access the dictionary entry.
var personName = 'Elizabeth';
printEntry(phonebookDict, personName);

// 6.Use a for...in loop to print all the phone entries.
for (name in phonebookDict) {
    printEntry(phonebookDict, name);
}


//Letter Histogram
function letterHistogram(str) {
    var hist = {};
    for (var i = 0; i < str.length; i++) {
        if (str[i] in hist) {
            hist[str[i]] += 1;
        }
        else {
            hist[str[i]] = 1;
        }
    }
    return hist;
}
console.log(letterHistogram('abbbccddddeee'));

//Word Histogram
function wordHistogram(str) {
    var hist = {};
    var divvy = str.split(' ');
    for (var i = 0; i < divvy.length; i++) {
        if (divvy[i] in hist) {
            hist[divvy[i]] += 1;
        }
        else {
            hist[divvy[i]] = 1;
        }
    }
    return hist;
}
console.log(wordHistogram('to be or not to be'));

//Top 2 letters
function top2Letters(str) {
    var letterHist = letterHistogram(str);
    var result = Object.keys(letterHist).sort(function(a, b) {
        return letterHist[b] - letterHist[a];
    });
    console.log('first place: ' + result[0] + '\nsecond place: ' + result[1]);
}
top2Letters('abbbccddddeee'); //dbeca


//FUNCTION EXCERCISES
//positive numbers
function positiveNums(arr) {
    return arr.filter(
        function(a) {
            return a >= 0;
        }
    );
}
console.log(positiveNums([0, 1, -1, 2, -2, 3, 4, -5]));

//re-usable function maker version
function isPositive(num) {
    return num > 0;
}
function isNegative(num) {
    return num < 0;
}

function makeFilter(fn) {
    return function(numArr) {
        return numArr.filter(fn);
    }
}
var positive = makeFilter(isPositive);
console.log(positive([1,-1,2,3,-5]));

var negative = makeFilter(isNegative);
console.log(negative([-1,-2,-3,4,5,6]));

//even numbers
//common version
function evens(arr) {
    return arr.filter(
        function(a) {
            return a % 2 == 0;
        }
    );
}

console.log(evens([0,1,2,3,4,5,6,6,7]));

//modular version
var arr = [0,1,2,3,4,5,6,6,7];
function isEven(num) {
    return num % 2 == 0;
}
function filterMe(arr, fn) {
    return arr.filter(fn);
}
console.log(filterMe(arr, isEven));

var even = makeFilter(isEven);
console.log(evens(arr));

//Square the numbers
function squareMe(num) {
    return num * num;
}   
function mapMe(arr, fn) {
    return arr.map(fn);
}
var arr2sq = [1,2,3,4,5];
console.log(mapMe(arr2sq,squareMe));

//Cities 1
var cities = [
  { name: 'Los Angeles', temperature: 60.0},
  { name: 'Atlanta', temperature: 52.0 },
  { name: 'Detroit', temperature: 48.0 },
  { name: 'New York', temperature: 80.0 }
];

function getTemp(city) {
    return city.temperature;
}

function isCoolerThan70(city) {
    return getTemp(city) < 70;
}

function citiesCoolerThan70(arr, fn) {
    return arr.filter(fn);
}

console.log(citiesCoolerThan70(cities, isCoolerThan70));

// var allCities = cities.filter(function(city){
//     return city.temperature < 70;
// });

// var allCities = cities.map(city => city.name);

//console.log(allCities);

//cities 2
function get(prop) {
    return function(obj) {
        return obj[prop];
    }
}

function cityNames(cityArray) {
    return cityArray.map(get('name'));
}
console.log(cityNames(cities));

function coolCities(cityArray) {
    return cityArray.filter(isCoolerThan70);
}

function coolCityNames(cityArray) {
    return cityNames(coolCities(cityArray));
}
console.log(coolCityNames(cities));

//good job
var people = [
  'Dom',
  'Lyn',
  'Kirk',
  'Autumn',
  'Trista',
  'Jesslyn',
  'Kevin',
  'John',
  'Eli',
  'Juan',
  'Robert',
  'Keyur',
  'Jason',
  'Che',
  'Ben'
];

function addCongrats (peep) {
    return 'Good Job, ' + peep + '!';
}

function addLineBreak (peep) {
    return peep + '\n';
}

function printMe (peepArray) {
    return peepArray
            .map(addCongrats)
            .map(addLineBreak);
}

//V2
function congratsPeeps(peepArray) {
    return peepArray.map(function(peep) {
        return 'Good Job, ' + peep + '!';
    });
}

function formatPeeps(peepArray) {
    return peepArray.map(function (peep) {
        return peep + '\n';
    });
}

//3 times
function call3Times(fun) {
    fun();
    fun();
    fun();
}
function hello2(name){
    console.log('hello ' + name);
}

function hello() {
    console.log('hello world');
}

call3Times(hello);

//n times
function callNTimes(num, fn, name) {
    for (var i = 0; i < num; i++) {
        fn(name);
    }
}
console.log(callNTimes(5, hello2, 'Bob'));

//product
function calcProduct(total, currentElem) {
    return total * currentElem;
}

function product(numArr) {
    return numArr.reduce(calcProduct, 1); //starting value is optional here
}

console.log(product([1,2,3,4,5,6]));

