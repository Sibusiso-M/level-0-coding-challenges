function commonLetters(string1, string2) {
    var matchingLetters = [];
    for (var i = 0; i < string1.length; i++) {
        for (var j = 0; j < string2.length; j++) {
            if (string1[i] == string2[j]) {
                if (matchingLetters.indexOf(string1[i]) == -1) {
                    matchingLetters.push(string1[i]);
                }
            }
        }
    }
    console.log("Common letters : " + matchingLetters);
}
commonLetters("string1", "stttring21");