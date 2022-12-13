import cipher from './cipher.js';
//definimos el boton cipher

const cipherBtn = document.getElementById("cipher");
const descipherBtn = document.getElementById("descipher");

cipherBtn.addEventListener("click", function () {//(TIPO DE EVENTO A ESCUCHAR, funcion)
  const offsetValue = parseInt(document.getElementById("offset").value);// numeros
  const textareaValue = document.getElementById("textarea").value;
  const messageElement = document.getElementById("message");
  const answer = cipher.encode(offsetValue, textareaValue);

  messageElement.value = answer;
});

descipherBtn.addEventListener("click",function () {
  const offsetValue = parseInt(document.getElementById("offset").value);
  const textareaValue = document.getElementById("textarea").value;
  const messageElement = document.getElementById("message");
  const answer = cipher.decode(offsetValue, textareaValue);

  messageElement.value = answer;

});
