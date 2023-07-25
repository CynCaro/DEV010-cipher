# Cifrado César


## 1. ¿Qué hace el proyecto?

El proyecto permite que el usuario ingrese una frase o texto, al escoge el número de desplazamiento (entero, mayor a 0) y al dar clic en cifrar muestra el teto cifrado. Ademas permite realizarlo a la inveresa, es decir, colocar un texto codificado (Cifrado César), escoger el valor de desplazamiento y decifrarlo.

### ¿Qué significa cifrar y descifrar?

Cifrar significa ocultar el contenido de un mensaje a simple vista, de manera
que sólo las partes autorizadas pueden descifrar un texto cifrado.
El [cifrado César](https://en.wikipedia.org/wiki/Caesar_cipher)
es uno de los primeros métodos de cifrado conocidos. 

El cifrado césar es una de las técnicas más simples para cifrar un mensaje. Es
un tipo de cifrado por sustitución, es decir que cada letra del texto original
es reemplazada por otra que se encuentra un número fijo de posiciones
(desplazamiento) más adelante en el mismo alfabeto.

![caeser-cipher](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Caesar3.svg/2000px-Caesar3.svg.png)

El funcionamiento del cifrado César es bastante sencillo: cada letra del texto original se desplaza un número fijo de posiciones hacia la derecha en el alfabeto. Por ejemplo, si el desplazamiento es 3, la letra "A" se convertiría en "D", la "B" en "E", y así sucesivamente. Al llegar al final del alfabeto, las letras se "envuelven", es decir, la "Z" se convertiría en "C".

En la actualidad, todos los cifrados de sustitución simple se descifran con
mucha facilidad y, aunque en la práctica no ofrecen mucha seguridad en la
comunicación por sí mismos; el cifrado César sí puede formar parte de sistemas
más complejos de codificación, como el cifrado Vigenère, e incluso tiene
aplicación en el sistema ROT13.

## 2. ¿Cómo ayuda este proyecto al usuario?

Tener una aplicación de cifrado permite mejorar la seguridad y mantener a salvo cualquier información. Esta aplicación ayudará a crear claves seguras, además que es fácil de usar.

## 3. ¿Cómo funciona?

### Cifrar mensaje

 - Ingresamos el texto que queremos cifrar.
 - Elegimos un número de desplazamiento indicando cuántas posiciones queremos que el cifrado desplace cada caracter en el alfabeto (leer leyenda, no se permite la letra ñ).
 - Ver el resultado en la caja de texto y listo para usarse.

### Descifrar mensaje

Si buscamos descifrar debemos:

 - Insertar el código (palabras que quieres descifrar). El mensaje usa alfabeto inglés (26 letras de la A a la Z, sin ñ).
 - Debemos elegir un número desplazamiento (que corresponda al que usamos para cifrar) # Indicando cuántas posiciones queremos que el cifrado desplace cada caracter en el alfabeto.
 - Ver el resultado del texto cifrado.

Esperamos que puedas sacarle el mayor provecho.

## 4. Proceso de maquetación

# Planeación y organización  

Creé un tablero en FigmaJam para aterrizar y desmenuzar los puntos que tenía que seguir (acciones, preguntas y objetivos).

![Planeación](img/Screnshots/Sprint Planning Cipher.jpeg)

# Prototipo

Usé la herramienta de Figma para crear un prototipo de alta fidelidad, elegí paleta de colores, imagen vectorizda y secciones:

![Pototipo1](img/Screnshots/prototipo-1.jpeg)

Conforme avanzaba fue cambiando la estructura:

![Pototipo2](img/Screnshots/prototipo-2.jpeg)

# Diseño final

El diseño fresco y divertido, la estructura te va guiando a las cajas de texto y los botones. fácil de usar. La interfaz es alegre y colorida.

Todo el contenido está dentro de un recuadro centrado, donde se hará el cifrado y descifrado de su contraseña.

![Pototipo final](img/Screnshots/prototipo-final.png)

## 5. Pruebas unitarios de los métodos

`cipher` (`encode` y `decode`) deben tener cobertura con pruebas unitarias:

![Pruebas unitarios](img/Screnshots/pruebas-unitarios.png)

Aquí puedes ver el cifrador online:

https://cyncaro.github.io/DEV010-cipher/

## Desarrolladora

Cynthia Carolina Valdez Mtz., en proceso con Laboratoria
https://www.laboratoria.la/

