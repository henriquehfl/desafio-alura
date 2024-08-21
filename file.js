const inputText = document.querySelector(".input-text");
const btnCripto = document.querySelector(".cripto");
const btnDescripto = document.querySelector(".descripto");
const textarea = document.querySelector(".input-textarea");

inputText.addEventListener('input', function (e){
    console.log(e.target.value)
})

function criptografar(texto) {
    const troca = {
        'a': 'ai',
        'e': 'enter',
        'i': 'imes',
        'o': 'ober',
        'u': 'ufat'
    };
    let resultado = '';
    for (let i = 0; i < texto.length; i++) {
        const char = texto[i];
        resultado += troca[char] || char;
    }
    return resultado;
}

function descriptografar(texto) {
    const destrocar = {
        'ai': 'a',
        'enter': 'e',
        'imes': 'i',
        'ober': 'o',
        'ufat': 'u'
    };
    let resultado = texto;
    for (const chave in destrocar) {
        while (resultado.includes(chave)) {
            resultado = resultado.replace(chave, destrocar[chave]);
        }
    }
    return resultado;
}

const regex = /^[^A-ZÀ-ÖØ-Ýà-öø-ýÿ]*$/;

function validateInput(texto) {
    if (!regex.test(texto)) {
        throw new Error("String inválida: contém letras maiúsculas ou com acento.");
    }
}

btnCripto.addEventListener("click", () => {
    try {
        const textoOriginal = inputText.value;
        validateInput(textoOriginal);
        const textoCriptografado = criptografar(textoOriginal);
        textarea.value = textoCriptografado;
    } catch (error) {
        alert(error.message);
    }
});

btnDescripto.addEventListener("click", () => {
    try {
        const textoCriptografado = inputText.value;
        validateInput(textoCriptografado);
        const textoDescriptografado = descriptografar(textoCriptografado);
        textarea.value = textoDescriptografado;
    } catch (error) {
        alert(error.message);
    }
});
