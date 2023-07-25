const cipher = { // Implementación de funciones de cifrado y descifrado

  
  encode: function (numero, texto) {
    if (typeof texto !== 'string' || typeof numero !== 'number') {
      throw new TypeError('Argumentos inválidos: texto debe ser una cadena de texto y numero debe ser un número.');
    }

    let textoCodificado = "";
    for (let i = 0; i < texto.length; i++) {
      let charCode = texto.charCodeAt(i);
      if (charCode >= 65 && charCode <= 90) {
        charCode = ((charCode - 65 + numero) % 26) + 65;
      } else if (charCode >= 97 && charCode <= 122) {
        charCode = ((charCode - 97 + numero) % 26) + 97;
      }
      textoCodificado += String.fromCharCode(charCode);
    }
    return textoCodificado;
  },

  decode: function (numero, texto) {
    if (typeof texto !== 'string' || typeof numero !== 'number') {
      throw new TypeError('Argumentos inválidos: texto debe ser una cadena de texto y numero debe ser un número.');
    }

    const cifradoDetectado = /[a-zA-Z]/.test(texto);

    if (cifradoDetectado) {
      let textoDecodificado = "";
      for (let i = 0; i < texto.length; i++) {
        let codigoASCII = texto.charCodeAt(i);
        if (codigoASCII >= 65 && codigoASCII <= 90) {
          codigoASCII = ((codigoASCII - 65 - numero + 52) % 26) + 65; // Utiliza el valor opuesto de numero al descifrar
        } else if (codigoASCII >= 97 && codigoASCII <= 122) {
          codigoASCII = ((codigoASCII - 97 - numero + 52) % 26) + 97;
        }
        textoDecodificado += String.fromCharCode(codigoASCII);
      }
      return textoDecodificado;
    } else {
      return texto; // Si no es un texto cifrado, devolver el texto original sin modificar
    }
  }
};

export default cipher;