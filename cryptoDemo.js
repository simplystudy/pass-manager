var crypto = require('crypto-js');

var secretMessage = {
name: 'Andrew',
secreteName:'007'
};

var secretKey='123abc';

var encryptedMessage = crypto.AES.encrypt(JSON.stringify(secretMessage),secretKey);

console.log('Encrypted message :' + encryptedMessage);


var bytes = crypto.AES.decrypt(encryptedMessage,secretKey);
var decryptedMessage = JSON.parse(bytes.toString(crypto.enc.Utf8));

console.log('DecryptedMessage message ' + decryptedMessage);
console.log('DecryptedMessage message ' + decryptedMessage.secretName);