
//variables de botones y textareas
var text_in = document.getElementById("text-in");
var btn_decrypt = document.getElementById("btn-decrypt");
var btn_encrypt = document.getElementById("btn-encrypt");
var text_out = document.getElementById("text-out");
var muneco = document.getElementById("muneco");
var noMsj = document.getElementById("noMsj");
var enMsj = document.getElementById("enMsj");
var btn_copy = document.getElementById("btn-copy");
var btn_clean = document.getElementById("btn_clean");

const llaves = {
    e: "enter",
    i: "imes",
    a: "ai",
    o: "ober",
    u: "ufat",
};

const addHidde = () => {
    text_out.classList.remove("ocultar");
    muneco.classList.add("ocultar");
    noMsj.classList.add("ocultar");
    enMsj.classList.add("ocultar");
    btn_copy.classList.remove("ocultar");
    btn_clean.classList.remove("ocultar");
}

const removeHidde = () => {
    text_out.classList.add("ocultar");
    muneco.classList.remove("ocultar");
    noMsj.classList.remove("ocultar");
    enMsj.classList.remove("ocultar");
    btn_copy.classList.add("ocultar");
    btn_clean.classList.add("ocultar");
}



function encrypt() {
    result = text_in.value; //le asignamos el valor del textarea a la variable result y lo hacemos minusculas
    result = result.replaceAll("e", enter)
            .replaceAll("i", imes)
            .replaceAll("a", ai)
            .replaceAll("o",over)
            .replaceAll("u", ufat)
    
    console.log(result);
}

function decrypt() {
    result = text_in.toLowerCase().value; 
    result = result.replaceAll("enter", e)
            .replaceAll("imes", i)
            .replaceAll("ai", a)
            .replaceAll("over",o)
            .replaceAll("ufat", u)
}

function result_text() {
    const node = document.createTextNode(result);
    p.appendChild(node);
    text_out.appendChild(p);
    console.log(result);
}

btn_encrypt.addEventListener("click", () => {
    
    encrypt();
    result_text();
});

