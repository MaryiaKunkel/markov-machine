/** Textual markov chain generator */


class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter(c => c !== "");
    this.makeChains();
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    // TODO
    this.chains = {};
    for (let i = 0; i < this.words.length; i++){
      let word = this.words[i];
      let nextWord = this.words[i + 1];

      if (!this.chains[word]) {
        this.chains[word] = [];
      }
      this.chains[word].push(nextWord)
      
    }
    return this.chains
  }



  /** return random text from chains */

  makeText(numWords = 100) {
    // TODO
    let result = [];
    let currentWord = this.words[0];

    for (let i = 0; i < numWords; i++){
      result.push(currentWord);
      let nextIndex = Math.floor(Math.random() * this.chains[currentWord].length);
      currentWord = this.chains[currentWord][nextIndex]
      
      if (currentWord === undefined) {
        break;
      }
    }
    return result.join(' ');
  }
}

// let mm = new MarkovMachine("the cat in the hat");
// const generatedText = mm.makeText();
// console.log('the result is: ', generatedText)

module.exports={MarkovMachine}