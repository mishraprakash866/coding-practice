const vowels = ["a", "e", "i", "o", "u"];

const word = "Hello World";

function returnOutput() {
  let parseWord = word.split("");
  let output = {};
  for (let i = 0; i < parseWord.length; i++) {
    if (vowels?.includes(parseWord[i])) {
      output[parseWord[i]] = output[parseWord[i]]
        ? output[parseWord[i]] + 1
        : 1;
    }
  }

  return output;
}

returnOutput();
