/* Ejercicio # 13. Roman to Integer leetcode // #82 make it real

    Los números romanos están representados por siete símbolos diferentes: I, V, X, L, C, D y M.

    Symbol       Value
        I             1
        V             5
        X             10
        L             50
        C             100
        D             500
        M             1000


    Dado un número romano, conviértelo en un número entero.
/*

/* Pasos:

1. Leer y entender bien el problema, probar casos generados por nosotros.

2. Proponer una solución en pseudocodigo, validar a través de una prueba de escritorio.

    a. definir las variables para los simbolos romanos.

        simbolos = {
            I:            1
            V:            5
            X:            10
            L:            50
            C:            100
            D:            500
            M:            1000
            IV:           4
            IX:           9
            XL:           40
            XC:           90
            CD:           400
            CM:           900
        }

    b. definir reglas

        1. if input [i] == I  || input [i+1] == V
            simbolos = ["IV"]

        2. if input [i] == I  || input [i+1] == X
            simbolos = ["IX"]
            .
            .
            .
        6. if input [i] == C  || input [i+1] == M
            simbolos = ["CM"]

    c. Aplicar las reglas 
    
        resultado = 0
        for (let i = 0; i < input.length - 1; i++)
            enteroActual = reglas(input[i] + input[i+1])
            resultado += enteroActual

        return result


    console.log(I+V)

3. Implementar la solución en un lenguaje de programación especifico.

        

4. Refactorizar.

5. Revisar otras soluciones y anotar aprendizajes


*/

    

    const numerosRomanos = (s) => {

        let resultado = 0;
        let enteroActual =0;

        for (let i = 0; i < s.length; i++) {
            siguienteDigito = i< s.length - 1 ? s[i+1] : "B"
            enteroActual = reglas(s[i], s[i+1])

            resultado += enteroActual
        }

        function reglas (digitoActual, siguienteDigito) {

            const simbolos = {
                I:            1,
                V:            5, 
                X:            10,
                L:            50,
                C:            100,
                D:            500,
                M:            1000,
                IV:           4,
                IX:           9,
                XL:           40,
                XC:           90,
                CD:           400,
                CM:           900
            }

            if (digitoActual == "I"  && digitoActual == "V") {
                return simbolos["IV"]
    
            }else if (digitoActual == "I"  && siguienteDigito == "X") {
                return simbolos["IX"]

            }else if (digitoActual == "X"  && siguienteDigito == "L") {
                return simbolos["XL"]
            
            }else if (digitoActual == "X"&& siguienteDigito == "C") {
                return simbolos["XC"]
            
            }else if (digitoActual == "C"  && siguienteDigito == "D") {
                return simbolos["CD"]
            
            }else if (digitoActual == "C" && siguienteDigito == "M") {
                return simbolos["CM"]
            }else{
                return simbolos[digitoActual]
            }  

        }  
        return resultado
    }

    console.log(numerosRomanos("III"))

