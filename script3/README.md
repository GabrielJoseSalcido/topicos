Este script genera cinco parrafos con una longitud de entre 50 y 100 palabras. La función generarLongitud() acepta dos números
enteros como parametros, y retorna un número entero aleatorio entre ambos valores. La función generarTexto() acepta un número
entero como parámetro, que define la longitud, y usa un ciclo for para agregar palabras de un arreglo al azar hasta que la variable
de iteración llegue al valor de longitud.

En cada iteración del ciclo for, creamos un parrafo, generamos la longitud al azar con generarLongitud(), le asignamos el texxto al parrafo
con la función generarTexto(), se lo agregamos al cuerpo del documento HTML y finalmente imprimimos la longitud del parrafo en la consola.
