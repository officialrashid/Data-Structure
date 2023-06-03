// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question('Enter the word: ', function(input) {
 
//   rl.close();
// });

function replaceAlphabets(input) {
    let output = '';
    for (let i = 0; i < input.length; i++) {
      let charCode = input.charCodeAt(i);
      if (charCode >= 65 && charCode <= 90 ) {
        charCode = (charCode + 2 - 65) % 26 + 65;

      } else if (charCode >= 97 && charCode <= 122) {

       
 charCode = (charCode + 2 - 97) % 26 + 97;
      }
      output += String.fromCharCode(charCode);
    }
    return output;
  }
  
   let input  = 'abc';
  console.log(replaceAlphabets(input));
  






// function reverseString(str){
//     let output = '';
//     for (let i = str.length - 1; i >= 0; i--) {
//       output += str[i];
//     }
//     return output;
//   }
  
//   let input = "hello Muhammed Rashi";
//   console.log(reverseString(input)); // "olleh"
  