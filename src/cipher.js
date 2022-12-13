const cipher = {

  encode: function(offsetValue, textareaValue) {//se pone primero desplazamiento ya que necesita darle una posicion a lo que se escribe

    if(typeof offsetValue !== "number" || typeof textareaValue !== 'string') {
      throw new TypeError ('Error', "cipher.js", 10);}// pruebas unitarias
    let output="";// se crea una variable output
    let posicioncipher;

    for (let i = 0; i < textareaValue.length; i++) { // creacion del bucle for
      let char ;
      const posicionAscci = textareaValue.charCodeAt(i);// charcodeat(devuelve un numero que indica en el valor unicode) da la posicion de la letra en el alfabeto ascci

      if (posicionAscci >= 65 && posicionAscci <= 90) { // if= condicion de la posicion de las mayuculas
        posicioncipher = (((posicionAscci - 65 + offsetValue) % 26)+ 65); // MAYUCULAS
        char = String.fromCharCode(posicioncipher);// convierte numeros en string y devuelve la cadena creada
      } else if (posicionAscci >=97 && posicionAscci <=122) // CLAUSULA
        char= String.fromCharCode (((posicionAscci - 97 + offsetValue) % 26)+ 97); // MINUSCULAS
      //else if (posicionAscci >=48 && posicionAscci <=57)
        //char= String.fromCharCode (((posicionAscci - 48 + offsetValue) % 10)+ 48); // numeros

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
      //else if (posicionAscci >=48 && posicionAscci <=57)
        //char= String.fromCharCode (((posicionAscci - 57 - offsetValue) % 10)+ 57); // numeros
      if(posicionAscci === 32){
        char=" ";// para el espacio
      }
      output = output + char;
    }
    return output;
  },
};
export default cipher;
