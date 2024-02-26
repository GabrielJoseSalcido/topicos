function numeroEnteroAleatorio(max) {
    return Math.floor(Math.random() * max);
}

function generarColor() {
    let color_string = "rgb(";
    color_string += String(numeroEnteroAleatorio(256)) + ", ";
    color_string += String(numeroEnteroAleatorio(256)) + ", ";
    color_string += String(numeroEnteroAleatorio(256)) + ")";
    return color_string;
}

let colores = [];

for (let i = 0; i < 10; i++) {
    body = document.querySelector("body");
    const contenedor = document.createElement("div");

    contenedor.style.height = "100px";
    contenedor.style.width = "100px";

    color_string = generarColor();
    while (colores.includes(color_string)) {
        color_string = generarColor();
    }
    colores.push(color_string);
    contenedor.style.backgroundColor = color_string;
    console.log(color_string);

    body.appendChild(contenedor);

}