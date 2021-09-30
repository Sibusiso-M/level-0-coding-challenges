function commonLetters2(string1, string2) {
  let matchingLetters = [];
  for (let i = 0; i < string1.length; i++) {
    if (string2.indexOf(string1[1])) {
      matchingLetters.push(string1[i]);
    }
  }
  console.log("common letters: " + matchingLetters);
}

commonLetters2("string1", "stttring21");
