//given a name, says hello to the name
function hello(name) {
  console.log("Hello, " + name + "!");
}
hello("Mustache");

//print "Hello, world!", otherwise it behaves the same as previously.
function hello2(name) {
    if (!name) {
        name = "world";
    }
    return hello(name);
}
hello2();
hello2("me");

//madlibs
function madLib(name, subject) {
    return name + "\'s favorite subject in school is " + subject + ".";
}
console.log(madLib('Sally', 'CS'));

//tip calculator
function tipAmount(bill, service) {
//     good -> 20%
// fair -> 15%
// bad -> 10%
    if (service == 'good') {
        return bill * 0.2;
    }
    else if (service == 'fair') {
        return bill * 0.15;
    }
    else {
        return bill * 0.1;
    }
}
console.log(tipAmount(100, 'good'));
console.log(tipAmount(100, 'fair'));
console.log(tipAmount(100, 'bad'));

//tip calculator 2
function totalAmount(bill, service) {
    return bill + tipAmount(bill, service);
}

console.log(totalAmount(100, 'good'));
console.log(totalAmount(100, 'fair'));
console.log(totalAmount(100, 'bad'));

function splitAmount(bill, service, people) {
    return totalAmount(bill, service) / people;
}

console.log(splitAmount(100, 'good', 5));

console.log(splitAmount(40, 'fair', 2));


//102 exercises
function printNumbers(start, end) {
    for (var i = start; i <= end; i++) {
        console.log(i + "\n");
    }    
}

printNumbers(1, 10);

function printNumbers2(start, end) {
    var i = start;
    while (i <= end) {
        console.log(i + "\n");
        i++;
    }
}
printNumbers2(1, 10);

//print square
function printSquare(size) {
    for (var i = 0; i < size; i++) {
        console.log('*'.repeat(size));
    }
}
printSquare(5);
console.log('_'.repeat(20));

//print box
function printBox(width, height) {
    var section = width - 1;
    var space = ' ';
    if ((height > 2) && (width >=2)) {
        var str = new Array(section).join(space);
        console.log('*'.repeat(width));
        for (var i = 0; i < (height - 2); i++) {
            console.log('*'+ str +"*")
        }
        console.log('*'.repeat(width));
    }
    else if (height == 2) {
        console.log('*'.repeat(width));
        console.log('*'.repeat(width));
    }
    else if (height == 1) {
        console.log('*'.repeat(width));
    }
    else if ((height > 2) && (width == 1)) {
        for (var i = 0; i < height; i++) {
            console.log('*');
        }
    }
    else {
        console.log('no box');
    }
}
 
printBox(6, 4);
console.log('_'.repeat(20));
printBox(4, 2);
console.log('_'.repeat(20));
printBox(3, 1);
console.log('_'.repeat(20));
printBox(1, 3);
console.log('_'.repeat(20));
printBox(0,0);
console.log('_'.repeat(20));


//print banner
function printBanner(str) {
    console.log('*'.repeat(str.length + 4));
    console.log('* ' + str + ' *');
    console.log('*'.repeat(str.length + 4));
}

printBanner('Welcome to DigitalCrafts');


//factor a number
function factorMe(number) {
    var i = 1;
    var factors = new Array();
    while (i <= number) {
        if (number % i == 0) {
            factors.push(i);
        }
        i++;
    }
    console.log(factors);
}
factorMe(120);     

//caesar cipher

//caesar cipher 2

//leetspeak

//long long vowels

//sum the nums

//just positives

//matrix addition

//matrix multiplication

//rock paper scissors

//tic tac toe