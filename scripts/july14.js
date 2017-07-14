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
    console.log(result);
}
top2Letters('abbbccddddeee'); //dbeca