//insert your pseudocode below
/* we need to creat a random password generator with a lest 8 characters and 1 digit, one special symbol. 

here
here we have 3 var to work with.
the 1 var will be characters , the 2 var will be num , the 3 var will be sym.
*/

//insert your code below
function generatePassword() {
    var length = 8,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
}