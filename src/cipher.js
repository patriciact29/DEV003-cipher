const cipher = {

  encode: function(offsetValue, textareaValue) {

    if(typeof offsetValue !== "number" || typeof textareaValue !== 'string') {
      throw new TypeError ('Error', "cipher.js", 10);}// pruebas unitarias
    let output="";
    let posicioncipher;

    for (let i = 0; i < textareaValue.length; i++) {
      let char ;
      const posicionAscci = textareaValue.charCodeAt(i);// charcodeat da la posicion de la letra en el alfabeto ascci


      if (posicionAscci >= 65 && posicionAscci <= 90) {
        posicioncipher = (((posicionAscci - 65 + offsetValue) % 26)+ 65); // mayusculas
        char = String.fromCharCode(posicioncipher);// convierte numeros en string
      } else if (posicionAscci >=97 && posicionAscci <=122)
        char= String.fromCharCode (((posicionAscci - 97 + offsetValue) % 26)+ 97); // minusculas
      if(posicionAscci === 32){
        char=" ";// para el espacio
      }

      output = output + char;
    }
    return output;
  },

  decode: function(offsetValue,textareaValue) {

    if(typeof offsetValue !== "number" || typeof textareaValue !== 'string') {
      throw new TypeError ('Error', "cipher.js", 15);}
    let output="";

    for (let i = 0; i < textareaValue.length; i++) {
      let char ;
      const posicionAscci = textareaValue.charCodeAt(i);// charcodeat da la posicion de la letra en el alfabeto ascci

      if (posicionAscci >= 65 && posicionAscci <= 90) {
        char = String.fromCharCode(((posicionAscci - 90 - offsetValue) % 26)+ 90);// convierte numeros en string
      }else if (posicionAscci >=97 && posicionAscci <=122)
        char= String.fromCharCode (((posicionAscci - 122 - offsetValue) % 26)+ 122); // minusculas
      if(posicionAscci === 32){
        char=" ";// para el espacio
      }
      output = output + char;
    }
    return output;
  },
};
export default cipher;
