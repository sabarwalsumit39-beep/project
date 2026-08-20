const CryptoJS = require('crypto-js');
const fs = require('fs');

// =============================================
// 🔑 1. अपनी Passphrase और URL Key यहाँ डालो
// =============================================
const PASSPHRASE = "MySuperStrongPass@2024#Secure";   
const URL_KEY = "MyUrlKey2024";                       
const BACKEND_URL = "https://your-site.pages.dev";    // ⚠️ बाद में Cloudflare URL से बदलना

// =============================================
// 2. अपनी Website का HTML पढ़ो
// =============================================
// ध्यान: अभी हमने my-website.html नहीं बनाई है, 
// लेकिन हम इसे अगले स्टेप में बनाएंगे। 
// फिलहाल ये file exist नहीं करती, इसलिए हम एक dummy डालते हैं।
const websiteHTML = `<!DOCTYPE html><html><head><title>My Site</title></head><body><h1>Hello World</h1></body></html>`;

// =============================================
// 3. AES से Encrypt करो
// =============================================
const encryptedHTML = CryptoJS.AES.encrypt(websiteHTML, PASSPHRASE).toString();
const encryptedBackendOrigin = CryptoJS.AES.encrypt(BACKEND_URL, URL_KEY).toString();

// =============================================
// 4. Output Print करो
// =============================================
console.log("========== GENERATED SECRETS ==========");
console.log("PASSPHRASE:", PASSPHRASE);
console.log("URL_KEY:", URL_KEY);
console.log("ENCRYPTED_HTML_CIPHER:", encryptedHTML);
console.log("ENCRYPTED_ORIGIN:", encryptedBackendOrigin);
console.log("=======================================");

// Secrets को JSON में सेव करो
const output = {
  passphrase: PASSPHRASE,
  urlKey: URL_KEY,
  encryptedHTML: encryptedHTML,
  encryptedOrigin: encryptedBackendOrigin
};
fs.writeFileSync('generated-secrets.json', JSON.stringify(output, null, 2));
console.log("✅ Secrets 'generated-secrets.json' में सेव हो गए।");