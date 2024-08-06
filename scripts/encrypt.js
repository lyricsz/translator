const key = document.getElementById("key");
const textToEncrypt = document.querySelector(".textToEncrypt");
const output = document.getElementById("output");

const textAvail = [];

for(let i = 33; i < 127; i++){
    const text = String.fromCharCode(i);
    textAvail.push(text);
}

console.log(textAvail.includes(","));

class Encrypt{
    constructor(textToEncrypt, key){
        this.textToEncrypt = textToEncrypt;
        this.key = Number(key) || 0;
        this.textToEncrypt = new Array(...this.textToEncrypt);
        this.encryptedText = '';
    }
    encrypt(){
        this.encryptedText = '';
        for(let i = 0; i < this.textToEncrypt.length; i++){
            this.textToEncrypt[i] = textAvail.indexOf(this.textToEncrypt[i]);
            this.textToEncrypt[i] += this.key * i;
            this.textToEncrypt[i] = Math.abs(this.textToEncrypt[i] % textAvail.length);
            this.textToEncrypt[i] = textAvail[this.textToEncrypt[i]];
        }

        for(let i = 0; i < this.textToEncrypt.length; i++){
            if(this.textToEncrypt[i] === "~") this.textToEncrypt[i] = " "
            this.encryptedText += this.textToEncrypt[i];
            
        }
      
    }
    update(textToEncrypt, key, output){
        this.textToEncrypt = textToEncrypt;
        this.key = Number(key) || 0;
        this.textToEncrypt = new Array(...this.textToEncrypt);
    }
}

const encrypt = new Encrypt(textToEncrypt.textContent, key.value);

function update(){
    encrypt.update(textToEncrypt.value, key.value);
    encrypt.encrypt();
    output.textContent = encrypt.encryptedText;
    requestAnimationFrame(update);
}

requestAnimationFrame(update);