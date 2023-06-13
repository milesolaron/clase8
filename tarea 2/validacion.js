const form = document.querySelector("#calculadora-salarios");

function validarSalario(salarioIntegrante) {
    if (salarioIntegrante === "") {
        return "Los campos de salario deben ser completados";
    } 
    if (salarioIntegrante < 1) {
        return "El monto mínimo es de $1";
    }
    if(!/^\d*$/.test(salarioIntegrante)){
        return "El salario no puede expresarse con decimales";
    }
    return ""
}

function validarFormulario() {
    const salarioIntegrante = form.salario;
    salarioIntegrante.forEach((salario, index) => {
        let errorSalario = validarSalario(salario.value);
        const errores = {
          salario: errorSalario,
        };
        gestionarErrores(errores, form.salario[index]);
      });
}

function gestionarErrores(errores, item) {
    const key = Object.keys(errores)[0];
    const error = errores[key];

    if (error) {
        item.className = "error";
        const mensajeError = document.createElement("label");
        mensajeError.textContent = error;
        mensajeError.className = "mensaje-error";
        item.insertAdjacentElement('afterend', mensajeError);
    } else {
        return item.className="";
    }
}
