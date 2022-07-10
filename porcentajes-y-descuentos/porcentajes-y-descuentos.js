function calcularPrecioConDescuento(precio, descuento) {
    let porcentajeConDescuento = 100 - descuento;
    let precioConDescuento = (precio * porcentajeConDescuento) / 100;
    return precioConDescuento;
}

function calcularPrecioFinal() {
    let precio_producto = document.getElementById("precio_producto");
    let valor_precio = precio_producto.value;
    let porcentaje_descuento = document.getElementById("porcentaje_descuento");
    let valor_descuento = porcentaje_descuento.value;
    let precioConDescuento = calcularPrecioConDescuento(valor_precio, valor_descuento);
    let resultado = document.getElementById("resultado");
    resultado.innerText = "El precio final con descuento es $" + precioConDescuento;
}