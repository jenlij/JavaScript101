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