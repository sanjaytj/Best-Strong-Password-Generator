function generate() {
    let password = "";

    let length = +document.getElementById("length").value;

    let lowercase = document.getElementById("lowercase").checked;
    let uppercase = document.getElementById("uppercase").checked;
    let numbers = document.getElementById("numbers").checked;
    let special = document.getElementById("special").checked;

    if (lowercase + uppercase + special + numbers <= 0){
        return;
    }

    for(let i = 0; i < length; i++){
        const r = generater(0, 3);
        if(lowercase && r === 0) {
            password += generateRandomLowercase();
        }
        else if(uppercase && r === 1) {
            password += generateRandomUppercase();
        }
        else if(numbers && r === 2) {
            password += generater(0, 9);
        }
        else if(special && r === 3) {
            password += generateRandomSpecial();
        }
        else {
            i--;
        }
    }

    document.getElementById("result").textContent = password;

}

generate();

function generateRandomLowercase() {
    return String.fromCharCode(generater(97, 122));
}

function generateRandomUppercase() {
    return String.fromCharCode(generater(65, 90));
}

function generateRandomSpecial() {
    const symbols = "~!@#$%^&*(){}[]<>";
    return symbols[generater(0, symbols.length -1)];
}

function generater(min = 0, max = 1) {
    return Math.floor(Math.random() * (max + 1 - min) + min);
}