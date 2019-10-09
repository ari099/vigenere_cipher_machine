/**
 * JavaScript version of the CipherMachine object
 */
class VigenereCipherMachine {
   constructor(keyphrase) {
      this.keyphrase = keyphrase;
      this.alphabet = "abcdefghijklmnopqrstuvwxyz";
   }

   /**
    * Reverse an array
    * @param elements 
    */
   reverse_array(elements) {
      let new_elements = [];
      for (let i = elements.length - 1; i >= 0; i--) {
         new_elements.push(elements[i]);
      }

      return new_elements
   }

   /**
    * Rotate a JavaScript array to the right
    * by "shift_amount"
    * @param elements
    * @param shift_amount
    * @returns shifted_elements
    */
   rotate_right(elements, shift_amount) {
      for(let i = 0; i < shift_amount; i++)
         elements.unshift(elements.pop());
      return elements;
   }

   /**
    * Rotate a JavaScript array to the left
    * by "shift_amount"
    * @param elements
    * @param shift_amount
    * @returns shifted_elements
    */
   rotate_left(elements, shift_amount) {
      elements = this.reverse_array(elements);
      elements = this.rotate_right(elements, shift_amount);
      elements = this.reverse_array(elements);
      return elements
   }

   /**
    * Determine if character is in capital letters
    * @param character 
    */
   isUpperCase(character) {
      if (character === character.toUpperCase())
         return true;
      else return false;
   }
   
   /**
    * Determine if character is in lowercase letters
    * @param character 
    */
   isLowerCase(character) {
      if (character === character.toLowerCase())
         return true;
      else return false;
   }

   /**
    * Generate the key for encryption
    * @param plaintext
    * @param length 
    */
   generate_key(plaintext) {
      let newKey = "";
      let ksIndex = 0;
      let counter = 0;

      for (let i = 0; i < plaintext.length; i++) {
         if (this.alphabet.includes(plaintext[i].toLowerCase()))
            newKey += this.keyphrase[ksIndex];
         else {
            newKey += plaintext[i];
            continue;
         }

         if (ksIndex < this.keyphrase.length - 1) ksIndex++;
         else ksIndex = 0;
      }

      return newKey;
   }

   /**
    * Encrypt plaintext with Vigenere cipher
    * @param plaintext 
    * @returns ciphertext
    */
   encrypt(plaintext) {
      let ciphertext = ""; // Ciphertext container....
      let newKey = this.generate_key(plaintext).toLowerCase();
      for (let i = 0; i < plaintext.length; i++) {
         let isCapital = this.isUpperCase(plaintext[i]);

         // Does the alphabet have the current character....
         if (this.alphabet.includes(plaintext[i].toLowerCase())) {
            // complete this part....
            let shiftAmount = this.alphabet.indexOf(newKey[i]);
            let char_index = this.alphabet.indexOf(plaintext[i].toLowerCase());
            this.alphabet = this.rotate_left(this.alphabet, shiftAmount);
            ciphertext += isCapital ? this.alphabet[char_index].toUpperCase() : this.alphabet[char_index];
            this.alphabet = this.rotate_right(this.alphabet, shiftAmount);
         } else ciphertext += plaintext[i]; // Just add the non-alphabetic character to the ciphertext container
      }

      // Return the ciphertext
      return ciphertext;
   }
}

export default VigenereCipherMachine;