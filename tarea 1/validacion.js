const form = document.querySelector("#calculadora-edades");

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
    if(!/^\d*$/.test(cantidadIntegrantes)) {
      return "La cantidad de integrantes no puede ser expresada con decimales";
    }
    return "";
  }
  
  function validarEdades(edadIntegrante) {
    if (edadIntegrante === "") {
      return "Tenés que completar la edad de los integrantes";
    }
    if (edadIntegrante > 120) {
      return "La edad máxima es 120 años";
    }
    if(!/^\d*$/.test(edadIntegrante)) {
      return "La edad de los integrantes no puede ser expresada con decimales";
    }
    return "";
  }

function validarFormulario(validacion) {
    const cantidadIntegrantes = form.integrantes.value;
    const errorIntegrantes = validarCantidadIntegrantes(cantidadIntegrantes);
  
    const errores = {
      integrantes: errorIntegrantes,
    };
  
    gestionarErrores(errores, form.integrantes);
  
    if (validacion === "edadIntegrante") {
      const edadIntegrante = form.edad;
      const erroresEdades = [];
  
      for (let i = 0; i < edadIntegrante.length; i++) {
        let errorEdad = validarEdades(edadIntegrante[i].value);
        erroresEdades.push(errorEdad);
        gestionarErrores({ edad: errorEdad }, form.edad[i]);
      }
    }
  }
  function gestionarErrores(errores, item) {
    const key = Object.keys(errores)[0];
    const error = errores[key];
  
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
