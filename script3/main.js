function generarLongitud(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function generarTexto(longitud) {
    let texto = "";
    let caracteres = "1234567890qwertyuiopñlkjhgfdsazxcvbnmQWERTYUIOPÑLKJHGFDSAZXCVBNM "
    let num_caracteres = caracteres.length;
    for (let i = 0; i < longitud; i++) {
        ind_caracter = Math.floor(Math.random() * num_caracteres);
        texto += caracteres[ind_caracter];
    }
    return texto;
}

for (let i = 0; i < 5; i++) {
    let body = document.querySelector("body");
    const parrafo = document.createElement("p");
    longitud = generarLongitud(50, 100);
    console.log(longitud);
    parrafo.textContent = generarTexto(longitud);
    body.append(parrafo);
}