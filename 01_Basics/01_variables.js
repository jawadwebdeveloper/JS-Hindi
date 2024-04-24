const accountId= 123456
let accountEmail = "mjawad.s@gmail.com"
var accountPassword = "123456"
accountCity  = "bhawalpur"
let accountState;
 
//accountId = 2323 // not allow to change the value of same name using const datatype

accountEmail = "hc@gmail.com"
accountPassword = "3322"
accountCity = "bangluru"

/*   
prefer not to use var
 beacuse  of issue in block scope and functional scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
