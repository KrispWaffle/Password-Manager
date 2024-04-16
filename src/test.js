let decryptedData;

var enterInfo = document.getElementById('enterInfo');
var addInfo = document.getElementById('addPass');
enterInfo.style.display = 'none';

function theproc() {
    const website = document.getElementById("webInput").value;
    const username = document.getElementById("userInput").value;
    const password = document.getElementById("passInput").value;

    console.log(username);
    console.log(password);
    console.log(website);

    var encryptedp = CryptoJS.AES.encrypt(password, "secretkey123").toString();
    console.log("Encrypted Password:", encryptedp);
    var decryptedp = CryptoJS.AES.decrypt(encryptedp, "secretkey123").toString(CryptoJS.enc.Utf8);
    console.log("Decrypted Password:", decryptedp);

    var encryptedu = CryptoJS.AES.encrypt(username, "secretkey123").toString();
    console.log("Encrypted Username:", encryptedu);
    var decryptedu = CryptoJS.AES.decrypt(encryptedu, "secretkey123").toString(CryptoJS.enc.Utf8);
    console.log("Decrypted Username:", decryptedu);

    var encryptedw = CryptoJS.AES.encrypt(website, "secretkey123").toString();
    console.log("Encrypted Website:", encryptedw);
    var decryptedw = CryptoJS.AES.decrypt(encryptedw, "secretkey123").toString(CryptoJS.enc.Utf8);
    console.log("Decrypted Website:", decryptedw);
}

addInfo.addEventListener('click', handler);

function handler() {
    addInfo.style.display = 'none';
    enterInfo.style.display = 'grid';
    console.log('show');
}

document.getElementById("submit").addEventListener("click", () => {
    theproc();
});

document.getElementById('cancel').addEventListener('click', () => {
    addInfo.style.display = 'flex';
    enterInfo.style.display = 'none';
});
