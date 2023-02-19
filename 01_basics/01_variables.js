const acc_id = 123
let acc_email = "amina@gmail.com"
var acc_pass = "12345"
acc_city = "fsd"    // defining a var in js without defining its type.
let acc_state;      // variable can be declared in js without assinig any val.

// Cant be changed const type.
/*
Prefer not to use var 
because of issue in block scope and functional scope.
*/
console.log(acc_id);
console.table([acc_id, acc_email, acc_pass, acc_city])
