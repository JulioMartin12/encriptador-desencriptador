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
  palabrasEncriptadas = codigo.split(' ');
  console.log(palabrasEncriptadas.length);
  if(palabrasEncriptadas.length != 0 && contenidoTextArea!="ingrese el texto aquí"){
    for (const value of contenidoTextArea) {
      if (value != " ") {
        codigo += encontrarCodigo(value);
      } else {
        codigo += " ";
      }
    }
 
  console.log(codigo);
  desabilitarImagen();
  document.getElementById('main__texto__desencriptar__encriptar__titulo').textContent= "El texto Encriptado";
  document.getElementById('main__texto__desencriptar__encriptar__contenido').value=codigo;
  habilitarBtnCopiar();
  }else{
    document.getElementById('main__texto__desencriptar__encriptar__titulo').textContent= "Ningún mensaje fue encontrado";
    document.getElementById('main__texto__desencriptar__encriptar__contenido').value="Ingresa el texto que desees encriptar o desencriptar.";
  }
    
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
    let textoDesencriptado = document.getElementById("textarea-principal");
  let contenidoTextArea =  textoDesencriptado.value.toLowerCase();
    console.log(palabrasEncriptadas.length)
    if( palabrasEncriptadas.length == 0 && (contenidoTextArea=="ingrese el texto aqui" ||contenidoTextArea == " ") ){
        console.log("no hay texto para desencriptar");
    }else{ 
        for (const clave in vocales) {
            let expresion = new RegExp( vocales[clave], 'g');
            contenidoTextArea = contenidoTextArea.replace(expresion, clave);
            }
            document.getElementById('main__texto__desencriptar__encriptar__contenido').value=contenidoTextArea;
            document.getElementById('main__texto__desencriptar__encriptar__titulo').textContent= "El texto Desencriptado";
          }
          console.log( contenidoTextArea);
    
         
    return contenidoTextArea;
}

function limpiarTextArea(){
    document.getElementById('textarea-principal').value="";
}

function restaurarTextAreaPrincipal(){
    if(document.getElementById('textarea-principal').value != ""){

    }else{
        document.getElementById('textarea-principal').value="Ingrese el texto aquí";
    }
}

function habilitarBtnCopiar(){
  var botones = document.getElementsByClassName('main__contenedor__copiar');
  for (var i = 0; i < botones.length; i++) {
    botones[i].style.display = "block";
  }

}

function desabilitarImagen(){
  var imagen = document.getElementsByClassName('main__principal__derecha__imagen');
  for (var i = 0; i < imagen.length; i++) {
    imagen[i].style.display = "none";
  }

}



function copiarTexto(){
  let textarea = document.getElementById("main__texto__desencriptar__encriptar__contenido");
  let text = textarea.value;
  let mensaje = document.getElementById("mensaje");

  navigator.clipboard.writeText(text).then(function() {
      mensaje.style.display = "block";
      setTimeout(function() {
          mensaje.style.display = "none";
      }, 2000); 
  }).catch(function(err) {
      console.error('Error al copiar el texto: ', err);
      mensaje.textContent = "No se pudo copiar el texto";
      mensaje.style.backgroundColor = "lightcoral";
      mensaje.style.borderColor = "red";
      mensaje.style.color = "red";
      mensaje.style.display = "block";
      setTimeout(function() {
          mensaje.style.display = "none";
          mensaje.textContent = "Texto copiado al portapapeles";
          mensaje.style.backgroundColor = "lightgreen";
          mensaje.style.borderColor = "green";
          mensaje.style.color = "green";
      }, 2000); 
  });
}

