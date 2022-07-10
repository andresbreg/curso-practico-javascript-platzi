let cupones = ["descuento10", "descuento20", "descuento30"];

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

function calcularPrecio() {

    let precio_producto = document.getElementById("precio_producto");
    let valor_precio = precio_producto.value;
  
    let cupon_descuento = document.getElementById("cupon_descuento");
    let valor_cupon = cupon_descuento.value;

    if (!cupones.includes(valor_cupon)) {
        alert("El cupón " + valor_cupon + " no es válido");
    }

    let descuento;

    switch(valor_cupon) {
        case cupones[0]:
        descuento = 10;
        break;
        case cupones[1]:
        descuento = 20;
        break;
        case cupones[2]:
        descuento = 30;
        break;
    }

    let precioConDescuento = calcularPrecioConDescuento(valor_precio, descuento);

    let resultado = document.getElementById("resultado");
    resultado.innerText = "El precio final con descuento es $" + precioConDescuento;
}