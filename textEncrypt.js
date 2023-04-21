const txtToEncrypt = document.getElementById('txt-toEncrypt');
const txtEncrypt = document.getElementById('txt-encrypt');

const btnEncrypt = document.getElementById('btn-encrypt');
const btnDecrypt = document.getElementById('btn-decrypt');
const btnCopy = document.getElementById('btn-copy');

const imgPeople = document.getElementById('img-people');

const a = 'ai';
const e = 'enter';
const i = 'imes';
const o = 'ober';
const u = 'ufat';

btnCopy.style.display = 'none';

//-----eventos-----
btnEncrypt.addEventListener('click', e => {

    e.preventDefault();

//-----variables-----
    let flag = false;
    let txtToEncryptValue = txtToEncrypt.value;

//-----Validaciones-----
//-----Validar si el input esta bacio-----
    if (txtToEncryptValue.length == 0) {
        imgPeople.style.display = 'block';
        alert('escriba algun texto antes de encriptar');
        return;
    }

//-----validar si no hay letras mayusculas-----
//-----comvertir una cadena en string sin espacios en blanco-----
    let txtToArr = txtToEncryptValue.replace(/\s+/g, '').split('');

    txtToArr.forEach(word => {
        if (word == word.toUpperCase()) {
            flag = true;
            alert('Escriba solo letras en minusculas');
        };
    });

    if (flag == true) return;

//-----encriptar texto-----
    encryptFunction(txtToEncryptValue);

});


//------boton desencriptar-----
btnDecrypt.addEventListener('click', e => {

    e.preventDefault();

    let txtToDecryptValue = txtToEncrypt.value;
    let flag = false;

//-----Validaciones-----
//-----Validar si el input esta bacio-----
    if (txtToDecryptValue.length == 0) {
        btnCopy.style.display = 'none';
        imgPeople.style.display = 'block';
        alert('escriba algun texto antes de desencriptar');
        return;
    };

//-----validar si no hay letras mayusculas-----
//-----comvertir una cadena en string sin espacios en blanco-----
    let txtToArr = txtToDecryptValue.replace(/\s+/g, '').split('');

    txtToArr.forEach(word => {
        if (word == word.toUpperCase()) {
            flag = true;
            alert('Escriba solo letras en minusculas');
        };
    });

    if (flag == true) return;

//-----desencriptar texto-----
        decryptFunction(txtToDecryptValue);

});

//-----boton copiar-----
btnCopy.addEventListener('click', e => {

    e.preventDefault();

    let textEncrypt = txtEncrypt.value;

    textCopy(textEncrypt);

});


//-----FUNCIONES-----
//-----funcion encriptadora de texto.
const encryptFunction = (text) => {

    imgPeople.style.display = 'none';
    btnCopy.style.display = 'block';

    let strEncrypt = text.replace(/e/g, e).replace(/i/g, i).replace(/o/g, o).replace(/u/g, u).replace(/a/g, a);

    txtEncrypt.value = strEncrypt;
    
};

//-----funcion desencriptadora de texto-----
const decryptFunction = (text) => {

    imgPeople.style.display = 'none';

    let strDecrypt = text.replace(/ai/g, 'a').replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ober/g, 'o').replace(/ufat/g, 'u');
    
    txtEncrypt.value = strDecrypt;

};

//-----funcion para copiar texto al porta papeles-----
const textCopy = (text) => {

    if (navigator && navigator.clipboard && navigator.clipboard.writeText)
      return navigator.clipboard.writeText(text);

};
