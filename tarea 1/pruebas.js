function probarValidarCantidadIntegrantes() {
    console.assert(
      validarCantidadIntegrantes("") === "El campo integrantes no puede estar vacío",
      "Validar cantidad de integrantes no funcionó con el campo vacío"
    );
    console.assert(
      validarCantidadIntegrantes(1) === "La cantidad de integrantes debe ser más de uno",
      "Validar cantidad de integrantes no funcionó con un solo integrante"
    );
    console.assert(
      validarCantidadIntegrantes(6.3) === "La cantidad de integrantes no puede ser expresada con decimales",
      "Validar cantidad de integrantes no funcionó con un número decimal"
    );
    console.assert(
      validarCantidadIntegrantes(5) === "",
      "Validar cantidad de integrantes no funcionó con un número válido"
    );
  }
  
  function probarValidarEdades() {
    console.assert(
      validarEdades("") === "Tenés que completar la edad de los integrantes",
      "Validar edades no funcionó con un campo vacío"
    );
    console.assert(
      validarEdades(121) === "La edad máxima es 120 años",
      "Validar edades no funcionó con una edad superior al máximo"
    );
    console.assert(
      validarEdades(3.2) === "La edad de los integrantes no puede ser expresada con decimales",
      "Validar edades no funcionó con un valor expresado en decimales"
    );
    console.assert(
      validarEdades(17) === "",
      "Validar edades no funcionó con un valor válido"
    );
  }
  
  probarValidarCantidadIntegrantes();
  probarValidarEdades();
  