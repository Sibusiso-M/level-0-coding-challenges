function commonLetters(string1, string2) {
    var matchingLetters = [];
    for (var i = 0; i < string1.length; i++) { //loop through string1
        for (var j = 0; j < string2.length; j++) { //loop through string2 with string1 as commparison
            if (string1[i] == string2[j]) {
                if (matchingLetters.indexOf(string1[i]) == -1) { //check if matching letter/character in array matchingLetters
                    matchingLetters.push(string1[i]);
                }
            }
        }
    }
    return "Common letters : " + matchingLetters;
}
console.log(commonLetters("string1", "stttring21"));