const key = document.getElementById("key");
const textToDecrypt = document.querySelector(".textToDecrypt");
const output = document.getElementById("output");

const textAvail = [];

for(let i = 33; i < 127; i++){
    const text = String.fromCharCode(i);
    textAvail.push(text);
}

class Decrypt{
    constructor(textToDecrypt, key){
        this.textToDecrypt = textToDecrypt;
        this.key = Number(key) || 0;
        this.textToDecrypt = new Array(...this.textToDecrypt);
        this.decryptedText = '';
    }
    decrypt(){
        this.decryptedText = '';

        for(let i = 0; i < this.textToDecrypt.length; i++){
            this.textToDecrypt[i] = textAvail.indexOf(this.textToDecrypt[i]);
            this.textToDecrypt[i] -= this.key * i;
            if(this.textToDecrypt[i] < 0) {
                this.textToDecrypt[i] = textAvail.length - (Math.abs(this.textToDecrypt[i] % textAvail.length));
            }
            this.textToDecrypt[i] = textAvail[this.textToDecrypt[i]];
        }

        for(let i = 0; i < this.textToDecrypt.length; i++){
            if(this.textToDecrypt[i] === "~") this.textToDecrypt[i] = " "
            this.decryptedText += this.textToDecrypt[i];
        }
    }
    update(textToDecrypt, key, output){
        this.textToDecrypt = textToDecrypt;
        this.key = Number(key) || 0;
        this.textToDecrypt = new Array(...this.textToDecrypt);
    }
}

const decrypt  = new Decrypt(textToDecrypt.value, key.value);

function update(){
    decrypt.update(textToDecrypt.value, key.value);
    decrypt.decrypt();
    output.textContent  = decrypt.decryptedText;
    requestAnimationFrame(update);
}

requestAnimationFrame(update);