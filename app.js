
console.log('starting password manager');
 
var storage = require('node-persist');
storage.initSync();
 
// account.name Facebook
// account.username User12!
// account.password Password123!
 
function createAccount (account) {
    var accounts = storage.getItemSync('accounts');
 
    if (typeof accounts === 'undefined') {
        accounts = [];
    }
 
    accounts.push(account);
    storage.setItemSync('accounts', accounts);
 
    return account;
}
 
function getAccount (accountName) {
    var accounts = storage.getItemSync('accounts');
    var matchedAccount;
 
    accounts.forEach(function (account) {
        if (account.name === accountName) {
            matchedAccount = account;
        }
    });
 
    return matchedAccount;
}
 
 /*createAccount([
 {
    name: 'facebook',
    username: 'someemail@facebook.com',
    password: 'Password1234!',
	city: 'pune',
	state:'MH'
	
 },
  
 {
    name: 'twitter',
    username: 'someemail@facebook.com',
    password: 'Password1234!',
	city:'AB',
	state:'MH'
 },
 
 {
	 name:'google account',
	 username:'sujatait@gmail.com',
	 password:'Password1234!',
	 city:'CD',
	 state:'MH'
	 
 },
  {
	 name:'hotmail account',
	 username:'sujatait@hotmail.com',
	 password:'Password1234!',
	 city:'CD',
	 state:'MH'
	 
 },
 	  {
	 name:'rediff account',
	 username:'sujatait@rediff.com',
	 password:'Password1234!',
	 city:'CD',
	 state:'MH'
	 
 }
 
  ]
 );
 */
 
 createAccount(
 {
    name: 'facebook',
    username: 'someemail@facebook.com',
    password: 'Password1234!',
	city: 'pune',
	state:'MH'
 });	
 
 createAccount( {
	 name:'rediff account',
	 username:'sujatait@rediff.com',
	 password:'Password1234!',
	 city:'CD',
	 state:'MH'
	 
 });
 
 createAccount(
 {
	 name:'hotmail account',
	 username:'sujatait@hotmail.com',
	 password:'Password1234!',
	 city:'CD',
	 state:'MH'
	 
 }
 );
 
 createAccount(
 {
	 name:'google account',
	 username:'sujatait@gmail.com',
	 password:'Password1234!',
	 city:'CD',
	 state:'MH'
	 
 }
 );
 
 createAccount({
    name: 'twitter',
    username: 'someemail@facebook.com',
    password: 'Password1234!',
	city:'AB',
	state:'MH'
 });
var twitterAccount = getAccount('twitter');
console.log(twitterAccount);
 
