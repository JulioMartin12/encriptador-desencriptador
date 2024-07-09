const vocales = {
  a: "ai",
  e: "enter",
  i: "imes",
  o: "ober",
  u: "ufat",
};

let palabrasEncriptadas=[];

function encriptar() {
  let textArea = document.getElementById("textarea-principal");
  let contenidoTextArea = textArea.value.toLowerCase();
  let codigo = "";
  console.log(contenidoTextArea);

  for (const value of contenidoTextArea) {
    if (value != " ") {
      codigo += encontrarCodigo(value);
    } else {
      codigo += " ";
    }
  }
  palabrasEncriptadas = codigo.split(' ');
  console.log(codigo);
  document.getElementById('main__texto__desencriptar__encriptar__titulo').textContent= "El texto Encriptado";
  document.getElementById('main__texto__desencriptar__encriptar__contenido').value=codigo;
}

function encontrarCodigo(val) {
  for (const clave in vocales) {
    if (clave == val) {
      return vocales[clave];
    }
  }
  return val;
}

function desencriptar(){
    let textoDesencriptado= document.getElementById('textarea-principal').value;
    if(palabrasEncriptadas.length == 0 && textoDesencriptado == " " ){
        console.log("no hay texto para desencriptar");
    }else{ 
        for (const clave in vocales) {
            let expresion = new RegExp( vocales[clave], 'g');
             textoDesencriptado = textoDesencriptado.replace(expresion, clave);
            }
          }
          console.log( textoDesencriptado);
    
          document.getElementById('main__texto__desencriptar__encriptar__contenido').value=textoDesencriptado;
          document.getElementById('main__texto__desencriptar__encriptar__titulo').textContent= "El texto Desencriptado";
    return textoDesencriptado;
}

function limpiarTextArea(){
    document.getElementById('textarea-principal').value="";
}

function restaurarTextAreaPrincipal(){
    if(document.getElementById('textarea-principal').value != ""){

    }else{
        document.getElementById('textarea-principal').value="Ingrese el texto aqui";
    }
}