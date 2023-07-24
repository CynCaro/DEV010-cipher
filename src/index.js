import cipher from './cipher.js';

console.log(cipher);

// Variables para almacenar el texto capturado y la referencia al elemento HTML
const cajaTextoCapturada = document.getElementById('capturedData');

// Función para realizar el cifrado César
const cifrarTexto = () => {
  const texto = document.getElementById('myTextEdit').value;
  const numero = parseInt(document.getElementById('myNumberInput').value);
  const textoCifrado = cipher.encode(texto, numero);

  console.log(textoCifrado);
  cajaTextoCapturada.value = textoCifrado;
};

// Función para descifrar el texto
function decodificarTexto() {
  const texto = document.getElementById('myTextEdit').value;
  const numero = parseInt(document.getElementById('myNumberInput').value);
  const textoDecodificado = cipher.decode(texto, numero);

  console.log(textoDecodificado);
  cajaTextoCapturada.value = textoDecodificado;
}

// Agregar evento de clic al botón para cifrar automáticamente
document.getElementById('BtnCifrar').addEventListener('click', cifrarTexto);

// Agregar evento de clic al botón para descifrar automáticamente
document.getElementById('BtnDescifrar').addEventListener('click', decodificarTexto);