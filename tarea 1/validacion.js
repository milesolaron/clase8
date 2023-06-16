const form = document.querySelector("#calculadora-edades");

//Funcion que valida la cantidad de integrantes mediante distintos criterios
function validarCantidadIntegrantes(cantidadIntegrantes) {
  if (cantidadIntegrantes === "") {
    return "El campo integrantes no puede estar vacío";
  }
  if (cantidadIntegrantes <= 1) {
    return "La cantidad de integrantes debe ser más de uno";
  }
  if (cantidadIntegrantes > 10) {
    return "La cantidad de integrantes máxima es 10";
  }
  if (!/^\d*$/.test(cantidadIntegrantes)) {
    return "La cantidad de integrantes no puede ser expresada con decimales";
  }
  return "";
}
//Funcion que valida las edades de los integrantes mediante distintos criterios
function validarEdades(edadIntegrante) {
  if (edadIntegrante === "") {
    return "Tenés que completar las edades de los integrantes";
  }
  if (edadIntegrante > 120) {
    return "La edad máxima es 120 años";
  }
  if (!/^\d*$/.test(edadIntegrante)) {
    return "Las edades de los integrantes no pueden ser expresadas con decimales";
  }
  return "";
}

//Función que valida el formulario y se encarga de gestionar los posibles errores.
function validarFormulario(validacion) {
  const cantidadIntegrantes = document.querySelector('#calculadora-edades input[name="integrantes"]').value;
  const errorIntegrantes = validarCantidadIntegrantes(cantidadIntegrantes);

  const errores = {
    integrantes: errorIntegrantes,
  };

  gestionarErrores(errores, document.querySelector('#calculadora-edades input[name="integrantes"]'));

  if (validacion === "edadIntegrante") {
    const edadIntegrante = document.querySelector('#calculadora-edades').edad.value;
    const errorEdad = validarEdades(edadIntegrante);
    gestionarErrores({ edad: errorEdad }, document.querySelector('#calculadora-edades').edad);
  }
}

//Las funciones que validan los inputs son puestas en acción mediante la incorporación de un evento
document.querySelector('#calculadora-edades').addEventListener("submit", function (event) {
  event.preventDefault(); 
  validarCantidadIntegrantes(document.querySelector('#calculadora-edades input[name="integrantes"]').value);
  validarEdades(document.querySelector('#calculadora-edades input[name="edades"]').value);
});
  
    if (error) {
      item.className = "error";
      const mensajeError = document.createElement("label");
      mensajeError.textContent = error;
      mensajeError.className = "mensaje-error";
      item.insertAdjacentElement("afterend", mensajeError);
    } else {
      item.className = "";
    }
}
