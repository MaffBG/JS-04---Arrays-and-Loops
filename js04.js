/* *EJERCICIO 1: SUM OF RESISTORS IN SERIES*/
/**
 * Suma los valores absolutos de un array de resistencias conectadas en serie. Nota: Este enfoque utiliza el valor absoluto de cada resistencia para asegurar que todos los valores sean positivos.
 * @param {number[]} resistors - Array de resistencias en ohmios.
 * @returns {string} - Suma total en ohmios.
 */

function sumResistance(resistors) {
    // Calcular la suma de valores absolutos
    const total = resistors.reduce((acc, res) => acc + Math.abs(res), 0);
    // Retornar el resultado en formato string con "ohms"
    return `${total} ohms`;
}

/*Aquí 3 ejemplos del E1:*/
function sumResitance(resistors) {
    const total = resistors.reduce((acc, res) => acc + Math.abs(res), 0);
    return `${total} ohms`;
}
console.log(sumResitance([-1, 5, 6, 3]));
console.log(sumResitance([14, 3.5, 6]));
console.log(sumResitance([25, 7, 9]));





/* *EJERCICIO 2: NUMBER DIVIDED INTO HALVES*/
/**
 * Dado un número, devuelve el número dividido en sus mitades en un arreglo.
 * @param {number} num - Número a dividir.
 * @returns {number[]} - Array con las dos mitades.
 */
function numDiv(num) {
    // Dividir el número en dos partes iguales y retornarlas en un array
    return [num / 2, num / 2];
}

/*Aquí 3 ejemplos del E2:*/
function numDiv(num) {
    return [num / 2, num / 2];
}
console.log(numDiv(4));
console.log(numDiv(10));
console.log(numDiv(22));





/* *EJERCICIO 3: SECRET SOCIETY*/
/**
 * Encuentra el nombre de una sociedad secreta basado en la primera letra del nombre de cada miembro.
 * @param {string[]} members - Array de nombres de los miembros.
 * @returns {string} - Letras iniciales de cada nombre en orden alfabético.
 */
function secretName(members) {
    // Obtener la primera letra de cada nombre, ordenarlas y unirlas en un string
    return members.map(name => name[0]).sort().join('');
}

/*Aquí 3 ejemplos del E3:*/
function secretName(members) {
    return members.map(name => name[0]).sort().join('');
}
console.log(secretName(["Esperanza", "Franco", "Nia"]));
console.log(secretName(["Alma", "Bertha", "Carlos"]));
console.log(secretName(["Andrea", "Mafer", "Oscar", "Rosario"]));





/* *EJERCICIO 4: ONLINE STATUS*/
/**
 * Muestra el estado en línea para una lista de usuarios.
 * @param {string[]} users - Array de nombres de usuarios en línea.
 * @returns {string} - Estado en línea en formato de string.
 */
function onlineStatus(users) {
    // Dependiendo de la cantidad de usuarios, construir el mensaje correspondiente
    if (users.length === 1) return `${users[0]} online`;
    if (users.length === 2) return `${users[0]} and ${users[1]} online`;
    return `${users[0]}, ${users[1]} and ${users.length - 2} more online`;
}

/*Aquí 3 ejemplos del E4:*/
function onlineStatus(users) {
    if (users.length === 1) return `${users[0]} online`;
    if (users.length === 2) return `${users[0]} and ${users[1]} online`;
    return `${users[0]}, ${users[1]} and ${users.length - 2} more online`;
}
console.log(onlineStatus(['mockIng99', 'J0eyPunch', 'glassedFer']));
console.log(onlineStatus(['MaffBG', 'PaoKa', 'ViMan', 'MaoKaJ']));
console.log(onlineStatus(['Sara']));





/* *EJERCICIO 5: ARRAY OF MULTIPLES*/
/**
 * Crea una función que tome dos parámetros (número, longitud) y devuelva un arreglo de longitud que contenga múltiplos del número.
 * @param {number} number - Número base.
 * @param {number} length - Longitud del array.
 * @returns {number[]} - Array de múltiplos.
 */
function arrayMultiplos(number, length) {
    // Generar el array usando un bucle y multiplicando el índice por el número base
    return Array.from({ length }, (_, i) => number * (i + 1));
}

/*Aquí 3 ejemplos del E5:*/
function arrayMultiplos(number, length) {
    return Array.from({ length }, (_, i) => number * (i + 1));
}
console.log(arrayMultiplos(2, 10));
console.log(arrayMultiplos(17, 26));
console.log(arrayMultiplos(1, 12));





/* *EJERCICIO 6: POSITIVE DOMINANCE IN ARRAY*/
/**
 * Determina si un array es positivamente dominante.
 * @param {number[]} arr - Array de números.
 * @returns {boolean} - True si el array es positivamente dominante.
 */
function positiveDom(arr) {
    // Contar positivos y negativos, y retornar si hay más positivos
    const positiveCount = arr.filter(num => num > 0).length;
    const negativeCount = arr.filter(num => num < 0).length;
    return positiveCount > negativeCount;
}

/*Aquí 1 ejemplo del E6:*/
function positiveDom(arr) {
    const positiveCount = arr.filter(num => num > 0).length;
    const negativeCount = arr.filter(num => num < 0).length;
    return positiveCount > negativeCount;
}
console.log(positiveDom([-1, -3, -5, 4, 6767]));





/* *EJERCICIO 7: ANTIPODAL AVERAGE*/
/**
 * Dado un arreglo, devuelve un arreglo más corto siguiendo estos pasos:

1. Dividir el arreglo en dos partes iguales. Si el arreglo tiene un número impar de elementos, se elimina el elemento del medio para obtener dos arreglos iguales.
2. Sumar cada número de la primera parte con los números inversos de la segunda parte.
3. Dividir cada número del arreglo resultante por 2.
 * @param {number[]} arr - Array de números.
 * @returns {number[]} - Array de promedios antipodales.
 */
function antipodalAverage(arr) {
    // Si el array es impar, eliminar el elemento central
    if (arr.length % 2 !== 0) arr.splice(Math.floor(arr.length / 2), 1);

    const halfLength = arr.length / 2;
    // Sumar elementos simétricos y dividir cada suma por 2
    return arr.slice(0, halfLength).map((num, i) => (num + arr[arr.length - 1 - i]) / 2);
}

/*Aquí 2 ejemplos del E7:*/
function antipodalAverage(arr) {
    if (arr.length % 2 !== 0) arr.splice(Math.floor(arr.length / 2), 1);
    const halfLength = arr.length / 2;
    return arr.slice(0, halfLength).map((num, i) => (num + arr[arr.length - 1 - i]) / 2);
}
console.log(antipodalAverage([1, 2, 3, 5, 22, 6]));
console.log(antipodalAverage([1, 2, 3, 4, 522, 5, 7]));
console.log(antipodalAverage([1, 2, 8, 10, 25]));