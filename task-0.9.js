function printVowles(word) {
  let vowles = {
    a: 0,
    e: 0,
    i: 0,
    o: 0,
    u: 0,
  }; //keep binary status if vowel found or not.

  let vowlesFound = [];
  for (i = 0; i < word.length; i++) {
    let element = word[i].toLowerCase();
    if (vowles[element] == 0) {
      vowles[element]++;
      vowlesFound.push(element);
    }
  }
  console.log("Vowles : " + vowlesFound);
}

//example
printVowles("YungIiu");
