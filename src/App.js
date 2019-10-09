import React from 'react';
import logo from './logo.svg';
import './App.css';
import VigenereCipherMachine from './VigenereCipherMachine';

const plaintextTyping = e => {
  let plaintext = document.getElementById("plaintext");
  let ciphertext = document.getElementById("ciphertext");
  let keybox = document.getElementById("keybox");
  if (keybox.value === "") {
    ciphertext.value = "PLEASE INPUT A KEY....";
    return;
  }
  let vcm = new VigenereCipherMachine(keybox.value);
  ciphertext.value =
    plaintext.value === ""
      ? "CIPHERTEXT SHOULD APPEAR HERE...."
      : vcm.encrypt(plaintext.value);
};

/**
 * Plaintext input box
 */
const PlaintextBox = () => {
  return (
    <input
      id="plaintext"
      type="text"
      placeholder="Enter your plaintext here...."
      onKeyDown={plaintextTyping}
      onKeyUp={plaintextTyping}
    />
  );
};

const keyTyping = e => {
  let keybox = document.getElementById("keybox");
  keybox.value = keybox.value.toLowerCase();
};

/**
 * Key input box
 */
const KeyBox = () => {
  return (
    <input
      id="keybox"
      type="text"
      placeholder="Key..."
      onKeyDown={keyTyping}
      onKeyUp={keyTyping}
    />
  );
};

/**
 * Ciphertext Output
 */
const CiphertextOutput = () => {
  return <p id="ciphertext">CIPHERTEXT SHOULD APPEAR HERE....</p>;
};

/**
 * Viginere Cipher React HTML Form
 */
const ViginereCipherForm = props => {
  return (
    <form id="vigenere_cipher_form">
      <KeyBox />
      <PlaintextBox />
      <hr />
      <CiphertextOutput />
    </form>
  );
};

function App() {
  return (
    <div id="vigenere_container">
      <h1>VIGENERE CIPHER</h1>
      <hr />
      <ViginereCipherForm />
    </div>
  );
}

export default App;
