function encrypt(myMessage){
    var result = "";

    for (var i=0;i<myMessage.length; i++){
        var letterCode = myMessage.charCodeAt(i);
        var binary = letterCode.toString(2);
        while (binary.length<8){
            binary = "0" + binary;
        }
        result = result + binary;
    }

    return result;
}

function decrypt(message){
    var chunk;
    var result = "";

    for (var i=0; i<message.length; i+=8){
        chunk = message.substring(i,i+8);
        var charCode = parseInt(chunk,2);
        var char = String.fromCharCode(charCode);
        result += char;
    }
    return result;
}

function xor(bitstring,message){
    var result = "";
    for (var i=0; i<message.length; i++){
        if (message[i] == bitstring[i]){
            result += "0";
        }
        else{
           result += "1"; 
        }
    }
    return result;
}


var myBitString = "100010101100101001011101010100110101101001010010100110101101001010010100110101101001010010100110110001010110010100101110011010010100101001101011010010100101100010101100101001011100011010110100101001010011010110100101010001010110010100101110100010101100101001011101010100110101101001010010100110101101001010010100110101101001010010100110110001010110010100101110011010010100101001101011010010100101100010101100101001011100011010110100101001010011010110100101010001010110010100101110100010101100101001011101010100110101101001010010100110101101001010010100110101101001010010100110110001010110010100101110011010010100101001101011010010100101100010101100101001011100011010110100101001010011010110100101010001010110010100101110100010101100101001011101010100110101101001010010100110101101001010010100110101101001010010100110110001010110010100101110011010010100101001101011010010100101100010101100101001011100011010110100101001010011010110100101010001010110010100101110100010101100101001011101010100110101101001010010100110101101001010010100110101101001010010100110110001010110010100101110011010010100101001101011010010100101100010101100101001011100011010110100101001010011010110100101010001010110010100101110";

var bs2 = "100100101000101000101010111111010101000100010111010010101101010111111010101000100010111010010101101010111111010101000100010111010010101101010111111010101000100010111010010001010001010101111110101010001000101110100101011010101111110101010001000101110101101010111111010101000100010111010010101101010111111010101000100010111010001010001010101111110101010001000101110100101011010101111110101010001000101110010101100010100010101011111101010100010001011101001010110101011111101010100010001011100010100010101011111101010100010001011101001010110101011111101010100010001011100010100010101011111101010100010001011101001010110101011111101010100010001011100100101000101000101010111111010101000100010111010010101101010111111010101000100010111010010101101010111111010101000100010111010010101101010111111010101000100010111010010001010001010101111110101010001000101110100101011010101111110101010001000101110101101010111111010101000100010111010010101101010111111010101000100010111010001010001010101111110101010001000101110100101011010101111110101010001000101110010101100010100010101011111101010100010001011101001010110101011111101010100010001011100010100010101011111101010100010001011101001010110101011111101010100010001011100010100010101011111101010100010001011101001010110101011111101010100010001011"

var  encryptedMsg = encrypt("this is a secret");
//console.log("binary message: "+encryptedMsg);

var xorMessage = xor(bs2,encryptedMsg);
console.log(xorMessage);

var xorMessage2 = xor(myBitString,xorMessage);

var  decryptedMsg = decrypt(xorMessage2);
//console.log("decrypted message: "+decryptedMsg);