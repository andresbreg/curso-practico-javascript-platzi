let cupones = ["descuento10", "descuento20", "descuento30"];

function calcularDescuento(precio, descuento) {
    let porcentajeConDescuento = 100 - descuento;
    let precioConDescuento = (precio * porcentajeConDescuento) / 100;
    return precioConDescuento;
}

function calcularPrecio() {

    let precio_producto = document.getElementById("precio_producto");
    let valor_precio = precio_producto.value;
  
    let cupon_descuento = document.getElementById("cupon_descuento");
    let valor_cupon = cupon_descuento.value;
    
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

    let precioConDescuento = calcularDescuento(valor_precio, descuento);

    let resultado = document.getElementById("resultado");
    resultado.innerText = "El precio final con descuento es $" + precioConDescuento;
}