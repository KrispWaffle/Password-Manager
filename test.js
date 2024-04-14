let decryptedData; // Variable to store the decrypted data

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
    const website = document.getElementById("webInput").value;
    const username = document.getElementById("userInput").value;
    const password = document.getElementById("passInput").value;

    const encrypted = await encryptData(JSON.stringify({ website, username, password }));

    // For demonstration, log the encrypted data
    console.log("Encrypted data:", encrypted);

    // Decrypt the encrypted data
    decryptedData = await decryptData(encrypted.encryptedData, encrypted.iv, encrypted.key);

    console.log("Decrypted data:", decryptedData);

    // Access a specific value from the decrypted data
    console.log("Website:", decryptedData.website);

    return decryptedData.password;
}

document.getElementById("submit").addEventListener("click", storeEncryptedData);


const body = document.body;

const testP  = document.createElement('p')

testP.textContent = storeEncryptedData()


body.appendChild(testP);
