/* Ejercicio # 121 letcode // #83 make it real

    Dado un array de precios, donde precios[i] es el precio de una acción determinada en el i-ésimo día. Se desea maximizar sus ganancias eligiendo un único día para comprar una acción y eligiendo un día diferente en el futuro para vender esa acción.

    Se debe retornar la ganancia máxima obtenida, caso contario debe devolver cero.

    Ejemplo:

        Entrada: Array, donde cada posición corresponde al valor de una acción.
        Salida: número entero o flotante, donde corresponde al valor de la ganancia máxima obtenida de la compra y venta.

        Example 1:

        Input: prices: [7,1,5,3,6,4]
        Output: 5
        Explicación: Si se compra en día 2 (price=1) y si se vende en día 5 (price=6), por ende la ganancia es de 5. Cabe resaltar que no es posible comprar en día 2 y vender en día 1 ya que no se puede devolver en el tiempo.

        Input: prices: [7,6,4,3,1]
        Output: 0
        Explicación: En este caso, no se realizan transacciones y el beneficio máximo = 0
/*

/* Pasos:

1. Leer y entender bien el problema, probar casos generados por nosotros.

2. Proponer una solución en pseudocodigo, validar a través de una prueba de escritorio.

    maximaGanancia = 0

    for (i = 0; i <= precios.lenght -2 ; i++)
        for (j = i + 1; j <= precios.lenght -1 ; j++)
            gananciaActual = precios[j]-precios[i]

            if(maximaGanancia <= gananciaActual)
                maximaGanancia = gananciaActual
            end
        end 
    end 
    
    *Prueba escritorio
    precios         = [7,6,4,3,1]
    maximaGanancia  = 0
    i               = 0
    j               = 1
    precios[i]      = 7
    precios[j]      = 6
    gananciaActual  = 6 - 7 = -1

    validando condicional
    0 <= -1 : false


3. Implementar la solución en un lenguaje de programación especifico.

4. Refactorizar.

5. Revisar otras soluciones y anotar aprendizajes


*/

const maximaGanancia = (prices) => {
    
    let maximaGanancia = 0

    for (let i = 0; i <= prices.length -2; i++) {
        for (let j = i + 1; j <= prices.length -1; j++) {
            let gananciaActual = prices[j] - prices[i];
            
            if (maximaGanancia <= gananciaActual) {
                maximaGanancia = gananciaActual
            }
        }
        
    }

    return maximaGanancia
}



// url: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/ 