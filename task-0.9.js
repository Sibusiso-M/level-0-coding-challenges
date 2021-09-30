function printVowels2(word) {
  let vowels = ["a", "e", "i", "o", "u"];
  let vowelsFound = [];

  for (let i = 0; i < vowels.length; i++) {
    if (word.toLowerCase().indexOf(vowels[i]) > -1) {
      vowelsFound.push(vowels[i]);
    }
  }
  console.log("Vowels: " + vowelsFound);
}

printVowels2("YungIiu");
printVowels2("Umuzi");
