var enterInfo = document.getElementById('enterInfo');
var addInfo = document.getElementById('addPass');

var middle = document.getElementById('middle');
middle.style.height = window.innerHeight + 'px';
middle.style.overflowY = 'auto'; 
var counter = 1;
var userS = JSON.parse(localStorage.getItem('userS')) || [];
enterInfo.style.display = 'none'; 

function createinfo(user) {
    const newDiv = document.createElement('div');
    const text = document.createElement('p');

    newDiv.style.color = "white";
    newDiv.style.backgroundColor = 'grey';
    newDiv.style.borderRadius = '10px';
    newDiv.style.margin = '20px';
    newDiv.style.width = 'autopx';
    newDiv.style.height = '150px';
    middle.appendChild(newDiv); 

    newDiv.appendChild(text);
    text.style.textAlign = 'center';
    text.style.padding = '29px';
    text.innerText = `Website: ${user.web}\nUsername: ${user.name}\nPassword: ${user.pass}`;

}

function encrypt(data) {
    return CryptoJS.AES.encrypt(data, "secretkey123").toString();
}

function decrypt(encryptedData) {
    return CryptoJS.AES.decrypt(encryptedData, "secretkey123").toString(CryptoJS.enc.Utf8);
}

addInfo.addEventListener('click', handler);

function handler() {
    addInfo.style.display = 'none';
    enterInfo.style.display = 'grid';
    console.log('show');
}
document.getElementById("submit").addEventListener("click", () => {
    var website = document.getElementById("webInput").value;
    var username = document.getElementById("userInput").value;
    var password = document.getElementById("passInput").value;

    let encryptedUsername = encrypt(username);
    let encryptedPassword = encrypt(password);
    let encryptedWebsite = encrypt(website);

    userS.push({ id: counter++, name: encryptedUsername, pass: encryptedPassword, web: encryptedWebsite });
    localStorage.setItem('userS', JSON.stringify(userS));

    createinfo({ web: website, name: username, pass: password });

    addInfo.style.display = 'flex';
    enterInfo.style.display = 'none';

   
    document.getElementById("webInput").value = "";
    document.getElementById("userInput").value = "";
    document.getElementById("passInput").value = "";
});

document.getElementById('cancel').addEventListener('click', () => {
    addInfo.style.display = 'flex';
    enterInfo.style.display = 'none';
});

userS.forEach((user) => {
    createinfo({ web: decrypt(user.web), name: decrypt(user.name), pass: decrypt(user.pass) });
});