function commonLetters(string1, string2) {
  let matchingLetters = [];
  for (let i = 0; i < string1.length; i++) {
    if (string2.indexOf(string1[i]) !== -1) {
      matchingLetters.push(string1[i]);
      console.log(i);
    }
  }
  console.log("common letters: " + matchingLetters);
}

commonLetters("string1", "stttring21");
commonLetters("house", "computers");
