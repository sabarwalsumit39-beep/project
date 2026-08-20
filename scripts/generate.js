const CryptoJS = require('crypto-js');
const fs = require('fs');

const PASSPHRASE = "MySuperStrongPass@2024#Secure";   
const URL_KEY = "MyUrlKey2024";                       
const BACKEND_URL = "node.yoursomahearts.com";    

const websiteHTML = fs.readFileSync('my-website.html', 'utf8');

const encryptedHTML = CryptoJS.AES.encrypt(websiteHTML, PASSPHRASE).toString();
const encryptedBackendOrigin = CryptoJS.AES.encrypt(BACKEND_URL, URL_KEY).toString();

console.log("========== 🔐 GENERATED SECRETS ==========");
console.log("PASSPHRASE:", PASSPHRASE);
console.log("URL_KEY:", URL_KEY);
console.log("ENCRYPTED_HTML_CIPHER:", encryptedHTML);
console.log("ENCRYPTED_ORIGIN:", encryptedBackendOrigin);
console.log("============================================");

const output = {
  passphrase: PASSPHRASE,
  urlKey: URL_KEY,
  encryptedHTML: encryptedHTML,
  encryptedOrigin: encryptedBackendOrigin
};
fs.writeFileSync('generated-secrets.json', JSON.stringify(output, null, 2));
console.log("✅ Secrets 'generated-secrets.json' में सेव हो गए।");