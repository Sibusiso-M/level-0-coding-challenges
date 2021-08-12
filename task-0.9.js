function printVowles(word) {
    var vowles = {
        'a': 0,
        'e': 0,
        'i': 0,
        'o': 0,
        'u': 0
    }; //keep binary status if vowel found or not.

    const vowlesFound = [];
    for (i = 0; i < word.length; i++) {
        var element = word[i].toLowerCase();
        if (vowles[element] == 0) {
            vowles[element]++;
            vowlesFound.push(element);
        }
    }
    return vowlesFound;
}

//example
console.log("Vowles : " + printVowles("YungIiu"));