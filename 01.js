// PROBLEMA
// Se está trabajando para la construcción de un termometro, donde la más reciente pregunta es: "Dado un array de temperaturas de un día, calcular la amplitud de temperatura". Tener en cuenta que a veces el sensor marcará error .

// DATOS
const temperaturas = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1. Comprendiendo el problema
    // - Qué es la amplitud de temperatura? Es la diferencia entre la temperatura más alta y la más baja.

    // - Cómo calcular la temperatura más alta y la más baja?

    // - Qué es un error de sensor y qué hacer después?


// 2. Dividiendo el problema en subproblemas más pequeños

    // - Cómo ignorar los errores?
    // - Encontrar el valor máximo de temperatura en el arreglo
    // - Encontrar el valor minimo de temperatura en el arreglo
    // - Restar minimo de maximo y retornarlo

const calcTempAmplitud = (temp) => {

    let max = temp[0]
    let min = temp[0]

    for (let i = 0; i < temp.length; i++) {

        if (typeof temp[i] != "number") continue

        if (temp[i] > max ) {
            max = temp[i]
        }else if(temp[i] < min ) {
            min = temp[i]
        }
    }
    console.log(max,min);
    return max -min
};

const amplitud = calcTempAmplitud( temperaturas);
console.log(amplitud)