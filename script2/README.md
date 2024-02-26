Este script es similar al anterior, pero ahora el programa se asegurará de que los colores no se repitan.
El código para generar un color al azar ahora se encuentra dentro de su propia función. Creamos un arreglo
para agregar cada color que generemos. En cada iteración del ciclo for, creamos un color con la función crearColor()
y usamos un ciclo while para revisar si el color generado se encuentra dentro del arreglo. Si la condición es verdadera,
la ejecución se quedará atrapada dentro del ciclo while hasta que genere un color que no esté en el arreglo.
