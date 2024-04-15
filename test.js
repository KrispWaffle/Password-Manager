let decryptedData; 
const website = document.getElementById("webInput").value;
const username = document.getElementById("userInput").value;
const password = document.getElementById("passInput").value;

var enterInfo = document.getElementById('enterInfo')
var addInfo = document.getElementById('addPass')
enterInfo.style.display = 'none'

addInfo.addEventListener('click', handler);


async function encryptData(data) {
    const encoder = new TextEncoder();
    const encodedData = encoder.encode(data);

    const key = await window.crypto.subtle.generateKey(
        { name: "AES-GCM", length: 256 },
        true,
        ["encrypt", "decrypt"]
    );

    const iv = window.crypto.getRandomValues(new Uint8Array(12));

    const encryptedData = await window.crypto.subtle.encrypt(
        { name: "AES-GCM", iv: iv },
        key,
        encodedData
    );

    return {
        encryptedData: encryptedData,
        iv: iv,
        key: key
    };
}

async function decryptData(encryptedData, iv, key) {
    const decryptedData = await window.crypto.subtle.decrypt(
        { name: "AES-GCM", iv: iv },
        key,
        encryptedData
    );

    const decoder = new TextDecoder();
    const decodedData = decoder.decode(decryptedData);

    return JSON.parse(decodedData); // Parse the decrypted JSON data
}

async function storeEncryptedData() {
  

    const encrypted = await encryptData(JSON.stringify({ website, username, password }));

    console.log("Encrypted data:", encrypted);


    decryptedData = await decryptData(encrypted.encryptedData, encrypted.iv, encrypted.key);

    console.log("Decrypted data:", decryptedData);


    console.log("Website:", decryptedData.website);
    
   
}

 function handler(){
    //const data =  storeEncryptedData();
    addInfo.style.display = 'none'
    enterInfo.style.display = 'grid'
    console.log('show')
}
document.getElementById("submit").addEventListener("click", () => {
 
   
 
        storeEncryptedData().then(() => {
            console.log(username)
            if(!website || !username || !password){
                console.log("fill in form")
                //alert('fill out the form ');
                //event.preventDefault()
            }else{
                addInfo.style.display = 'flex';
               // enterInfo.style.display = 'none'
                console.log('reshowed');
            }
            
        });
    
   
});

document.getElementById('cancel').addEventListener('click', ()=>{
    addInfo.style.display = 'flex';
    enterInfo.style.display = 'none'
})