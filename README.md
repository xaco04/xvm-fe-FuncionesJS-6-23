# xvm-fe-FuncionesJS-6-23
Realiza las actividades adjuntas referentes a la UD07 - JavaScript

1. Crea una aplicación que nos calcule el área de un círculo, cuadrado o triángulo.
Pediremos al usuario que figura queremos calcular su área y según lo introducido pedirá
los valores necesarios para calcular el área. Para ello has de crear un método por cada
figura para calcular cada área, este devolverá un número real. Muestra el resultado por
consola.
Aquí te mostramos que necesita cada figura:
• Circulo: (radio^2)*PI
• Triangulo: (base * altura) / 2
• Cuadrado: lado * lado


2. Crea una aplicación que nos genere una cantidad de números enteros aleatorios pasados
por el usuario (prompt). Crea un método donde pasamos como parámetros entre entre
qué números queremos que los genere, podemos pedirlas al usuario antes de generar
los números. Este método devolverá un número entero aleatorio. Muestra estos
números por consola.

3. Crea una aplicación que nos pida un número por prompt y con un método se lo pasamos
por parámetro para que nos indique si es o no un número primo, debe devolver true si
es primo sino false. Un número primo es aquel que solo puede dividirse entre 1 y sí
mismo. Por ejemplo: 25 no es primo, ya que 25 es divisible entre 5, sin embargo, 17 si
es primo.

4. Crea una aplicación que nos calcule el factorial de un número pedido por prompt, lo
realizará mediante un método al que le pasamos el número como parámetro. Para
calcular el factorial, se multiplica los números anteriores hasta llegar a uno. Por ejemplo,
si introducimos un 5, realizará esta operación 5*4*3*2*1=120.

5. Crea una aplicación que nos convierta un número en base decimal a binario. Esto lo
realizará un método al que le pasaremos el número como parámetro, devolverá un
String con el número convertido a binario. Para convertir un número decimal a binario,
debemos dividir entre 2 el número y el resultado de esa división se divide entre 2 de
nuevo hasta que no se pueda dividir más, el resto que obtengamos de cada división
formará el número binario, de abajo a arriba.

6. Crea una aplicación que nos cuente el número de cifras de un número entero positivo
(hay que controlarlo) pedido por prompt. Crea un método que realice esta acción,
pasando el número por parámetro devolverá el número de cifras.

7. Crea una aplicación que nos convierta una cantidad de euros introducida por prompt a
EJERCICIOS JS - Funciones
otra moneda, estas pueden ser a dólares, yenes o libras. El método tendrá como
parámetros, la cantidad de euros y la moneda a pasar que será una cadena, este no
devolverá ningún valor, mostrará un mensaje indicando el cambio.
El cambio de divisas es:
• 0.86 libras es un 1 €
• 1.28611 $ es un 1 €
• 129.852 yenes es un 1 €

8. Crea un array de 10 posiciones de números con valores pedidos por prompt. Muestra
por consola el índice y el valor al que corresponde. Haz dos métodos, uno para rellenar
valores y otro para mostrar.

9. Crea un array de números donde le indicamos por prompt el tamaño del array,
rellenaremos el array con números aleatorios entre 0 y 9. Al final muestra por consola el
valor de cada posición y la suma de todos los valores. Tareas a realizar: Haz un método
para rellenar el array(que tenga como parámetros los números entre los que tenga que
generar) y otro para mostrar el contenido y la suma del array

10. Crea un array de números de un tamaño pasado por prompt, el array contendrá números
aleatorios primos entre los números deseados, por último, nos indica cuál es el mayor
de todos. Haz un método para comprobar que el número aleatorio es primo, puedes
hacer todos los métodos que necesites.

11. Crea dos arrays de números con la dimensión pasada por teclado. Uno de ellos estará
rellenado con números aleatorios y el otro apuntará al array anterior, reasigna los valores
del segundo array con valores aleatorios. Después, crea un método que tenga como
parámetros, los dos arrays y devuelva uno nuevo con la multiplicación de la posición 0
del array1 con el del array2 y así sucesivamente. Por último, muestra el contenido de
cada array.

12. Crea un array de números de un tamaño pasado por prompt, el array contendránúmeros
aleatorios entre 1 y 300 y mostrará aquellos números que acaben en un dígito que
nosotros le indiquemos por prompt (debes controlar que se introduce un número
correcto), estos deben guardarse en un nuevo array. Por ejemplo, en un array de 10
posiciones le indicamos mostrar los números acabados en 5, podría salir 155, 25, etc.
