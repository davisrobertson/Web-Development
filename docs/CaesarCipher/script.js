document.getElementById("buttonEncode").addEventListener("click", encode);
document.getElementById("buttonDecode").addEventListener("click", decode);
document.getElementById("buttonDecrypt").addEventListener("click", decrypt)
var outPut = document.getElementById("output");


function encode() {
	var key = document.getElementById("inputKey").value;
	var input = document.getElementById("inputMessage").value;
  //console.log("Button Pressed");
    //console.log(input);
    var length = input.length;

        outPut.innerHTML = ("");

    for (var i = 0; i < length; i++) {
    var charCode = input.charCodeAt(i);
    //console.log("i=" + i);
    //console.log("charCode=" + charCode);
    key = parseInt(key);
    var letter = charCode + key;
    //console.log("letter=" + letter);

    var PrintNew = (String.fromCharCode(letter));
    //console.log(PrintNew);
    
    outPut.innerHTML += PrintNew;
}
}

function decode() {
        var key = document.getElementById("inputKey").value;
    var input = document.getElementById("inputMessage").value;
  //console.log("Button Pressed");
    //console.log(input);
    var length = input.length;

        outPut.innerHTML = ("");

    for (var i = 0; i < length; i++) {
    var charCode = input.charCodeAt(i);
    //console.log("i=" + i);
    //console.log("charCode=" + charCode);
    key = parseInt(key);
    var letter = charCode - key;
    //console.log("letter=" + letter);

    var PrintNew = (String.fromCharCode(letter));
    //console.log(PrintNew);
    
    outPut.innerHTML += PrintNew;
}
}

function decrypt() {
    var decryptKey = 0;
    var input = document.getElementById("inputMessage").value;
  //console.log("Button Pressed");
    //console.log(input);
    var length = input.length;

        outPut.innerHTML = ("");



    for (var i = 0; i < length; i++) {
    	        for(var x = 0; x < 65536; x++) {
    var charCode = input.charCodeAt(i);
    //console.log("i=" + i);
    //console.log("charCode=" + charCode);
    var letter = charCode + decryptKey;
    //console.log("letter=" + letter);

    var PrintNew = (String.fromCharCode(letter));
    //console.log(PrintNew);
    
    outPut.innerHTML += PrintNew;
    decryptKey++;
}
}
}