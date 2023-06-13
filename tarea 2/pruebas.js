function probarValidarSalario() {
    console.assert(
        validarSalario("") === "Los campos de salario deben ser completados",
        "Validar salario no funcionó con un campo vacío"
    );
    console.assert(
        validarSalario(0) === "El monto mínimo es de $1",
        "Validar salario no funcionó con un salario inferior al mínimo"
    );
    console.assert(
        validarSalario(10.123) === "El salario no puede expresarse con decimales",
        "Validar salario no funcionó con un valor expresado en decimales"
    );
    console.assert(
        validarSalario(700) === "",
        "Validar salario no funcionó con una respuesta correcta"
    )
}