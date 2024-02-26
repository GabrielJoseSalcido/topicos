

function numeroEnteroAleatorio(max) {
    return Math.floor(Math.random() * max);
}

for (let i = 0; i < 10; i++) {
    body = document.querySelector("body");
    const contenedor = document.createElement("div");
    let color_string = "rgb(";
    color_string += String(numeroEnteroAleatorio(256)) + ", ";
    color_string += String(numeroEnteroAleatorio(256)) + ", ";
    color_string += String(numeroEnteroAleatorio(256)) + ")";
    

    contenedor.style.height = "100px";
    contenedor.style.width = "100px";
    contenedor.style.backgroundColor = color_string;
    console.log(color_string)

    body.appendChild(contenedor);

}