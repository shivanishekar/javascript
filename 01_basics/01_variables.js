const accountId = 1445533;//cannot change const
let accountEmail= "shivani@google.com"
var accountPassword="12345";
accountCity="Bangalore";
let accountState;

// accountId=2;//not allowed

accountEmail="abc@google.com"
accountPassword="121212"
accountCity="Jaipur"

console.log(accountId);
/*
prefer not to use var because of issue in block scope and functional scope
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);

 