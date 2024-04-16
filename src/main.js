var enterInfo = document.getElementById('enterInfo')
var submit = document.getElementById('submit')
const webInput = document.getElementById("webInput");
const userInput = document.getElementById("userInput");
const passInput = document.getElementById("passInput");

var password = "jgon"
var encrypted = CryptoJS.AES.encrypt(password, "secretkey123").toString();
console.log("Encrypted:", encrypted);

// Decryption
var decrypted = CryptoJS.AES.decrypt(encrypted, "secretkey123").toString(CryptoJS.enc.Utf8);
console.log("Decrypted:", decrypted);