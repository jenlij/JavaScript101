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

function tipAmountV2(bill, service) {
    var tip = 0;
    if (!service) {
        throw new Error('Value Error: please pass in string as service');
    }
    var serviceLevels = {
        'good': 0.2,
        'fair': 0.15,
        'bad': 0.1
    };
    if (service in serviceLevels) {
        tip = bill * serviceLevels[service];
    }
    return tip
}

console.log(tipAmountV2(100, 'good'));
console.log(tipAmountV2(100, 'fair'));
console.log(tipAmountV2(100, 'bad'));

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
function cipher(str, key) {
    var str = str.toLowerCase();
    var alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var new_letter = '';
    var new_str = '';
    for (var i = 0; i < str.length; i++) {
        if (alpha.indexOf(str.charAt(i)) > -1) {
            new_letter = alpha[(alpha.indexOf(str.charAt(i))+key) % 26];
        }
        
        else {
            new_letter = ' ';
        }
        new_str += new_letter;    
    }
    return new_str;
}

console.log(cipher('Genius without education is like silver in the mine', 15));

//caesar decipher
function decipher(str, key) {
    var str = str.toLowerCase();
    var alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var new_letter = '';
    var new_str = '';
    for (var i = 0; i < str.length; i++) {
        if (alpha.indexOf(str.charAt(i)) > -1) {
            new_letter = alpha[(alpha.indexOf(str.charAt(i))-key + 26) % 26];
        }
        else {
            new_letter = ' ';
        }
        new_str += new_letter;    
    }
    return new_str;
}
console.log(decipher('Vtcxjh lxiwdji tsjrpixdc xh axzt hxaktg xc iwt bxct', 15));

//leetspeak
function leetspeak(str) {
    var str = str.toUpperCase();
    var letters = ['A','E','G','I','O','S','T'];
    var leets = ['4','3','6','1','0','5','7'];
    var new_word = '';
    for (var i = 0; i < str.length; i++) {
        for (var j = 0; j < letters.length; j++) {
            if (letters.indexOf(str.charAt(i)) == -1) {
                new_word += str.charAt(i);
                break;
            }
            else if (str.charAt(i) == letters[j]) {
                new_word += leets[j];
            }
        }
            
    }
    return new_word;
}
console.log(leetspeak('Leet'));
console.log(leetspeak('Jennifer Li Johnson'));

function leetsV2(str) {
    var str = str.toUpperCase();
    var d = {
        'A': '4',
        'E': '3',
        'G': '6',
        'I': '1',
        'O': '0',
        'S': '5',
        'T': '7'
    };
    var new_word = '';
    for (var i = 0; i < str.length; i++) {
        if (str.charAt(i) in d) {
            new_word += d[str.charAt(i)];
        }
        else {
            new_word += str.charAt(i);
        }
    }
    return new_word;
}
console.log(leetsV2('Leet'));
console.log(leetsV2('Jennifer Li Johnson'));


//long long vowels
function longVowels(str) {
    var vowels = {
      'a': '1',
      'e': '2',
      'i': '3',
      'o': '4',
      'u': '5'
      };
    
    var str = str.toLowerCase();
    var new_word = '';
    for (var i = 0; i < str.length; i++) {
      if ((str[i] in vowels) && (i < str.length-1)) {
        if (str[i] == str[i+1]) {
            new_word += str[i].repeat(4);
        }
        else {
            new_word += str[i];
        }
      }
      else {
      new_word += str[i];
      }
    }
    return new_word;
}
console.log(longVowels('Good'));
console.log(longVowels('Cheese'));
console.log(longVowels('Man'));

//sum the nums
function sumNumbers(arr) {
    return arr.reduce(function(a, b) {return a + b;}, 0)
}
console.log(sumNumbers([1, 4, 8]));

function sumArr(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
console.log(sumArr([1,4,8]));

//just positives
function positives(arr) {
    var new_arr = [];
    for (var i = 0; i < arr.length; i++) { 
       if (arr[i] >= 0){
           new_arr.push(arr[i]);
       } 
    }
    return new_arr;
}
console.log(positives([1, -3, 5, -3, 0]))
console.log(positives([1, 2, 3]))
console.log(positives([-1, -2, -3]))

//matrix addition

//matrix multiplication

//rock paper scissors

//tic tac toe