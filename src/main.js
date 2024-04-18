let decryptedData;

var enterInfo = document.getElementById('enterInfo');
var addInfo = document.getElementById('addPass');
enterInfo.style.display = 'none';
function createinfo(a){
    const container = document.getElementById('middle'); // Get the container element
    const newDiv = document.createElement('div')
    newDiv.innerText = a; 
    newDiv.style.color = "White"; 
    newDiv.style.backgroundColor = 'grey'
    newDiv.style.borderRadius = '10px'
    newDiv.style.margin = '20px'
    newDiv.style.textAlign = 'center'
    newDiv.style.alignSelf = 'center'
    newDiv.style.width = '200px'
    newDiv.style.height = '150px'
    container.appendChild(newDiv); 
    console.log('created div and appended to container');
}

function theproc(username, password, website) {
   /* const website = document.getElementById("webInput").value;
    const username = document.getElementById("userInput").value;
    const password = document.getElementById("passInput").value;
    */

    

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
    return "Username: " + username +" password: "+ password + 
    "Wesbite: "+ website;
    
}

addInfo.addEventListener('click', handler);

function handler() {
    addInfo.style.display = 'none';
    enterInfo.style.display = 'grid';
    console.log('show');
}

document.getElementById("submit").addEventListener("click", () => {
    const website = document.getElementById("webInput").value;
    const username = document.getElementById("userInput").value;
    const password = document.getElementById("passInput").value;
    theproc(username, password, website);
    console.log(theproc(username, password, website))
    createinfo(theproc(username, password, website));
    addInfo.style.display = 'flex';
    enterInfo.style.display = 'none';
});

document.getElementById('cancel').addEventListener('click', () => {
    addInfo.style.display = 'flex';
    enterInfo.style.display = 'none';
});
