//variables Globales
const text_in = document.getElementById("text-in");
const btn_decrypt = document.getElementById("btn-decrypt");
const btn_encrypt = document.getElementById("btn-encrypt");
const text_out = document.getElementById("text-out");
const muneco = document.getElementById("muneco");
const noMsj = document.getElementById("noMsj");
const enMsj = document.getElementById("enMsj");
const btn_copy = document.getElementById("btn-copy");
const btn_clean = document.getElementById("btn-clean");

function encrypt(text) {
    let encrypt_text = text.value;
    encrypt_text = text.replace(/e/gi, "enter")
                        .replace(/i/gi, "imes")
                        .replace(/a/gi, "ai")
                        .replace(/o/gi, "ober")
                        .replace(/u/gi, "ufat");
    console.log(encrypt_text);
}

function decrypt(text) {
    let decrypt_text = text.value;
    decrypt_text = text.replace(/enter/gi, "e")
                        .replace(/imes/gi, "i")
                        .replace(/ai/gi, "a")
                        .replace(/ober/gi, "o")
                        .replace(/ufat/gi, "u");
    console.log(encrypt_text);
}

const addHidde = () => {
    text_out.classList.remove("hidde");
    muneco.classList.remove("muneco")
    muneco.classList.add("hidde");
    noMsj.classList.add("hidde");
    enMsj.classList.add("hidde");
    btn_copy.classList.remove("hidde");
    btn_clean.classList.remove("hidde");
}

const removeHidde = () => {
    text_out.classList.add("hidde");
    muneco.classList.remove("hidde");
    muneco.classList.add("muneco");
    noMsj.classList.remove("hidde");
    enMsj.classList.remove("hidde");
    btn_copy.classList.add("hidde");
    btn_clean.classList.add("hidde");
}

btn_encrypt.addEventListener("click", () => {
    let text = text_in.value.toLowerCase(); //obtenemos el valor del textarea en minusculas
    //Hacemos la validacion de caracteres (Solo acepra letras y espacios)
    let values = /^[a-zA-z\s]+$/;
    if (!values.test(text)) {
        alert("Solo letras, sin numeros ni caracteres especiales");
        return;
    }else{
        addHidde();
        text_out.innerHTML = `<textarea id="text-out">${encrypt(text)}</textarea>`;
        text_in.value = "";
        encrypt(text);
    }
});

btn_decrypt.addEventListener("click", () => {
    let text = text_in.value;

    let values = /^[a-zA-z\s]+$/;
    if (!values.test(text)) {
        alert("Solo letras, sin numeros ni caracteres especiales");
        return;
    }else{
        removeHidde();
        text_out.innerHTML = `<textarea id="text-out">${encrypt(text)}</textarea>`;
        text_in.value = "";
        encrypt(text);
    }
});