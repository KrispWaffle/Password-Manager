var enterInfo = document.getElementById('enterInfo');
var addInfo = document.getElementById('addPass');
enterInfo.style.display = 'none';

function createinfo(username, password, website) {
    const container = document.getElementById('middle');
    const newDiv = document.createElement('div');
    const text  = document.createElement('p')
    
    newDiv.style.color = "white";
    newDiv.style.backgroundColor = 'grey';
    newDiv.style.borderRadius = '10px';
    newDiv.style.margin = '20px';
    newDiv.style.display = 'grid'
    newDiv.style.width = 'autopx';
    newDiv.style.height = '150px';
    container.appendChild(newDiv);
    newDiv.appendChild(text)
    text.style.textAlign = 'center'
    text.style.padding = '29px'
    text.innerText = `Website: ${website}\nUsername: ${username}\nPassword: ${password}`; 
    
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
    const website = document.getElementById("webInput").value;
    const username = document.getElementById("userInput").value;
    const password = document.getElementById("passInput").value;

    const encryptedUsername = encrypt(username);
    const encryptedPassword = encrypt(password);
    const encryptedWebsite = encrypt(website);

    createinfo(username, password, website);
    addInfo.style.display = 'flex';
    enterInfo.style.display = 'none';

    console.log("Encrypted Username:", encryptedUsername);
    console.log("Encrypted Password:", encryptedPassword);
    console.log("Encrypted Website:", encryptedWebsite);
});

document.getElementById('cancel').addEventListener('click', () => {
    addInfo.style.display = 'flex';
    enterInfo.style.display = 'none';
});
