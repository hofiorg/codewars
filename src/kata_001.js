module.exports =
  function spinWords(words) {
    let word_array = words.split(" ");
    word_array = word_array.map(spinWord);
    return word_array.join(" ");
};

function spinWord(word) {
  if(word.length > 4) {
    return word.split("").reverse().join("");
  }
  return word;
}