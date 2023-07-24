const cipher = { // Implementación de funciones de cifrado y descifrado
  encode: function (texto, numero) {
    if (!texto) return "";

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

  decode: function (texto, numero) {
    if (!texto) return "";

    let cifradoDetectado = /[a-zA-Z]/.test(texto);

    if (cifradoDetectado) {
      let textoDecodificado = "";
      for (let i = 0; i < texto.length; i++) {
        let codigoASCII = texto.charCodeAt(i);
        if (codigoASCII >= 65 && codigoASCII <= 90) {
          codigoASCII = ((codigoASCII - 65 - numero + 26) % 26) + 65;
        } else if (codigoASCII >= 97 && codigoASCII <= 122) {
          codigoASCII = ((codigoASCII - 97 - numero + 26) % 26) + 97;
        }
        textoDecodificado += String.fromCharCode(codigoASCII);
      }
      return textoDecodificado;
    } else {
      return "";
    }
  },
};

export default cipher;