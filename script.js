document.getElementById("cipherSelect").addEventListener("change", function() {
    var selectedValue = this.value;
    if (selectedValue) {
        showPage(selectedValue);
    }
});

function showPage(pageId) {
    var pages = document.querySelectorAll(".cipher-page");
    pages.forEach(page => {
        page.style.display = "none";
    });
    document.getElementById(pageId).style.display = "block";
}

/*function encrypt(cipherType) {
    // Implement encryption logic based on the cipherType
    var plaintext = document.getElementById(cipherType + "Plaintext").value;
    var key = document.getElementById(cipherType + "Key").value;
    // Perform encryption
    alert("Encryption logic for " + cipherType + ": " + plaintext + " with key " + key);
}

function decrypt(cipherType) {
    // Implement decryption logic based on the cipherType
    var ciphertext = document.getElementById(cipherType + "Plaintext").value;
    var key = document.getElementById(cipherType + "Key").value;
    // Perform decryption
    alert("Decryption logic for " + cipherType + ": " + ciphertext + " with key " + key);
}*/

function encrypt(cipherType) {
    var plaintext = document.getElementById(cipherType + "Plaintext").value;
    var key = document.getElementById(cipherType + "Key").value;
    var resultTextArea = document.getElementById(cipherType + "Result");

    // Implement encryption logic based on the cipherType
    if (cipherType === "additive") {
        // Additive Cipher Encryption
        // Example: result = (plaintext + key) % 26
        resultTextArea.value = encryptAdditive(plaintext, parseInt(key));
    } else if (cipherType === "multiplicative") {
        // Multiplicative Cipher Encryption
        // Example: result = (plaintext * key) % 26
        resultTextArea.value = encryptMultiplicative(plaintext, parseInt(key));
    } else if (cipherType === "autokey") {
        // Autokey Cipher Encryption
        resultTextArea.value = encryptAutokey(plaintext, key);
    }
}

function decrypt(cipherType) {
    var ciphertext = document.getElementById(cipherType + "Plaintext").value;
    var key = document.getElementById(cipherType + "Key").value;
    var resultTextArea = document.getElementById(cipherType + "Result");

    // Implement decryption logic based on the cipherType
    if (cipherType === "additive") {
        // Additive Cipher Decryption
        // Example: plaintext = (ciphertext - key + 26) % 26
        resultTextArea.value = decryptAdditive(ciphertext, parseInt(key));
    } else if (cipherType === "multiplicative") {
        // Multiplicative Cipher Decryption
        // Example: plaintext = (ciphertext * modInverse(key, 26)) % 26
        resultTextArea.value = decryptMultiplicative(ciphertext, parseInt(key));
    } else if (cipherType === "autokey") {
        // Autokey Cipher Decryption
        resultTextArea.value = decryptAutokey(ciphertext, key);
    }
}

// Helper functions for encryption and decryption (implement these based on the specific cipher algorithms)
function encryptAdditive(plaintext, key) {
    // Implement additive cipher encryption
    return "Encrypted Text"; // Replace with actual logic
}

function decryptAdditive(ciphertext, key) {
    // Implement additive cipher decryption
    return "Decrypted Text"; // Replace with actual logic
}

function encryptMultiplicative(plaintext, key) {
    // Implement multiplicative cipher encryption
    return "Encrypted Text"; // Replace with actual logic
}

function decryptMultiplicative(ciphertext, key) {
    // Implement multiplicative cipher decryption
    return "Decrypted Text"; // Replace with actual logic
}

function encryptAutokey(plaintext, key) {
    // Implement autokey cipher encryption
    return "Encrypted Text"; // Replace with actual logic
}

function decryptAutokey(ciphertext, key) {
    // Implement autokey cipher decryption
    return "Decrypted Text"; // Replace with actual logic
}

function updateDescription() {
    var cipherSelect = document.getElementById("cipherSelect");
    var description = document.getElementById("description");

    if (cipherSelect.value === "additive") {
        description.innerHTML = `
            <h2>Additive Cipher</h2>
            <p>The additive cipher, also known as the shift cipher, is a type of substitution cipher where each letter in the plaintext is shifted by a fixed number of positions down the alphabet.</p>
        `;
    } else if (cipherSelect.value === "multiplicative") {
        description.innerHTML = `
            <h2>Multiplicative Cipher</h2>
            <p>The multiplicative cipher is another type of substitution cipher where each letter in the plaintext is transformed using a multiplication operation with a fixed key.</p>
        `;
    } else if (cipherSelect.value === "autokey") {
        description.innerHTML = `
            <h2>Autokey Cipher</h2>
            <p>The autokey cipher is a polyalphabetic substitution cipher that uses the plaintext itself as part of the key for encryption. It eliminates the periodic repetition of the key and provides more security compared to simple substitution ciphers.</p>
        `;
    } else {
        // Default description if no cipher is selected
        description.innerHTML = `
            <h2>About Cryptography Algorithms</h2>
            <p>Cryptography is the practice and study of techniques for secure communication in the presence of third parties. Choose a cipher to learn more!</p>
        `;
    }
}


// Call updateDescription initially to set the default description
updateDescription();