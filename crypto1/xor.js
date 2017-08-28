function encrypt(myMessage){
    var result = "";

    for (var i=0; i<myMessage.length; i++){
        result = result + myMessage.charCodeAt(i).toString(2);
    }

    return result;
}

function xor(message,bitstring){
    var result = "";
    for (var i=0; i<message.length; i++){
        if (message[i]==bitstring[i]){
            result+="0";
        }
        else {
            result+="1";
        }
    }
    return result;
}

function decrypt(message){
    var chunk, ascii;
    var result = "";
    for (var i=0; i<message.length; i+=7){
       chunk = message.substring(i,i+7);
       ascii = parseInt(chunk,2);
       result += String.fromCharCode(ascii);
    }
    return result;
}

var myBitString = "1010101011101000101001010111000101010001101000111111010101"


var encrypted = encrypt("hello");
console.log(encrypted);
var xored = xor(encrypted,myBitString);
var justTry = decrypt(xored);
console.log(justTry);

var xored2 = xor(xored,myBitString);

var decrypted = decrypt(xored2);
console.log(decrypted);
