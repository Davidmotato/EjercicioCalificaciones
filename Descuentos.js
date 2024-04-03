function calcularDescuento(monto) {
    if (monto > 100) {
        return monto * 0.10; // Descuento del 10% para montos mayores a 100
    } else {
        return monto * 0.02; // Descuento del 2% para montos menores o iguales a 100
    }
}

// Solicitar al usuario que ingrese el monto
var monto = parseFloat(prompt("Ingrese el monto:"));

// Verificar si el usuario ha ingresado un número válido
if (!isNaN(monto)) {
    var descuento = calcularDescuento(monto);
    alert("El descuento es: $" + descuento.toFixed(2));
} else {
    alert("Por favor ingrese un monto válido.");
}