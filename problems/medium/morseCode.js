
const morseAlphabet = {
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  "a": ".-",
  "b": "-...",
  "c": "-.-.",
  "d": "-..",
  "e": ".",
  "f": "..-.",
  "g": "--.",
  "h": "....",
  "i": "..",
  "j": ".---",
  "k": "-.-",
  "l": ".-..",
  "m": "--",
  "n": "-.",
  "o": "---",
  "p": ".--.",
  "q": "--.-",
  "r": ".-.",
  "s": "...",
  "t": "-",
  "u": "..-",
  "v": "...-",
  "w": ".--",
  "x": "-..-",
  "y": "-.--",
  "z": "--..",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "!": "-.-.--",
  "-": "-....-",
  "/": "-..-.",
  "@": ".--.-.",
  "(": "-.--.",
  ")": "-.--.-"
}

// Write a program that automatically converts English text to Morse code and returns a string
// eg. quick -> --.- ..- .. -.-. -.-
// (a space should separate the mores letters in returned string, eg. ab -> .- -...  Notice the space!)

export const morseCode = (s) => {
  let sentenceToParse = s.toString().toLowerCase()
  let morseString = ''
  for (let i = 0; i < sentenceToParse.length; i++) {
    if (sentenceToParse[i] === ' ') {
      morseString += ' '
    } else {
      morseString += morseAlphabet[sentenceToParse[i]] + ' '
    }
  }
  return morseString.trim()
}

const tests = [
  [morseCode, ['abc'], '.- -... -.-.'],
  [morseCode, ['quick'], '--.- ..- .. -.-. -.-'],
  [morseCode, ['the quick brown fox'], '- .... .  --.- ..- .. -.-. -.-  -... .-. --- .-- -.  ..-. --- -..-'],
  [morseCode, ['svelte is better than react'], '... ...- . .-.. - .  .. ...  -... . - - . .-.  - .... .- -.  .-. . .- -.-. -'],
]

export default tests


