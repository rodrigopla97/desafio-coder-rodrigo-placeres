let descuentoPrecio = (num) => {
  return num - 1000;
};

function recargoTarjeta(num, cant) {
  const mensajeError = "######. No ha ingresado una opción válida, vuelva a empezar ya que sa terminó su posibilidad de compra";
  if (cant === 1) {
    return num;
  } else if (cant === 2) {
    return num * 1.1;
  } else if (cant === 3) {
    return num * 1.25;
  } else {
    return mensajeError;
  }
}

let descuentoEfectivo = (num) => num - num * 0.1;

let totalCompra = 0;
let tipoPantalon;
let tipoRemera;
let tipoCalzado;
let carrito = [];

let seguirComprando = true;
let decision;

let tipoPago;
let precioFinal = 0;
let cuotas;
class Producto {
  constructor(nombre, tipo, precio) {
    this.nombre = nombre;
    this.tipo = tipo;
    this.precio = precio;
  }
}

const pantalonUrban = new Producto("Pantalón", "Urban", 2500);
const pantalonSport = new Producto("Pantalón", "Sport", 2000);
const remeraUrban = new Producto("Remera", "Urban", 1200);
const remeraSport = new Producto("Remera", "Sport", 1500);
const calzadoUrban = new Producto("Calzado", "Urban", 6000);
const calzadoSport = new Producto("Calzado", "Sport", 8000);

let nombreCliente = prompt("Ingrese su nombre: ").toUpperCase();
alert(`Bienvenido ${nombreCliente}!, a continuacion podrás seleccionar que producto deseas cargar al carrito`);

let productoSeleccionado = parseInt(prompt("1.Pantalones - 2.Remeras - 3.Calzado - 4.Cancelar compra"));

while (seguirComprando === true) {
  if (productoSeleccionado === 1) {
    tipoPantalon = parseInt(prompt("Ingrese tipo de pantalón: 1.Urban - 2.Sport"));

    if (tipoPantalon === 1) {
      carrito.push(pantalonUrban);
    }
    else if (tipoPantalon === 2) {
      carrito.push(pantalonSport);
    }
    else {
      tipoPantalon = parseInt(
        prompt(
          "OPCIÓN INVÁLIDA: Ingrese tipo de pantalón válido: 1.Urban - 2.Sport"
        )
      );
      continue;
    }
  }
  else if (productoSeleccionado === 2) {
    tipoRemera = parseInt(prompt("Ingrese tipo de remera: 1.Urban - 2.Sport"));

    if (tipoRemera === 1) {
      carrito.push(remeraUrban);
    }
    else if (tipoRemera === 2) {
      carrito.push(remeraSport);
    }
    else {
      tipoRemera = parseInt(prompt("OPCIÓN INVÁLIDA: Ingrese tipo de remera válido: 1.Urban - 2.Sport"));
      continue;
    }
  }
  else if (productoSeleccionado === 3) {
    tipoCalzado = parseInt(prompt("Ingrese tipo de calzado: 1.Urban - 2.Sport"));

    if (tipoCalzado === 1) {
      carrito.push(calzadoUrban);
    }
    else if (tipoCalzado === 2) {
      carrito.push(calzadoSport);
    }
    else {
      tipoCalzado = parseInt(prompt("OPCIÓN INVÁLIDA: Ingrese tipo de calzado válido: 1.Urban - 2.Sport"));
      continue;
    }
  }
  else if (productoSeleccionado === 4) {
    alert("Que lastima! Te esperamos la proxima!");
    totalCompra = 0;
    seguirComprando = false;
    break;
  }
  else {
    alert("PRODUCTO SELECCIONADO NO EXISTE! Ingrese un producto válido para cargar en el carrito:");
    productoSeleccionado = parseInt(prompt("1.Pantalones - 2.Remeras - 3.Calzado - 4.Cancelar compra"));
  }

  let decision = parseInt(prompt("1.Seguir comprando - 2.Finalizar compra - 3.Cancelar compra"));

  if (decision === 1) {
    productoSeleccionado = parseInt(prompt("1.Pantalones - 2.Remeras - 3.Calzado - 4.Cancelar compra"));
  }
  else if (decision === 2) {
    seguirComprando = false;
  }
  else if (decision === 3) {
    alert("Que lastima! Te esperamos la proxima!");
    totalCompra = 0;
    break;
  }
  else {
    decision = parseInt(prompt("OPCIÓN SELECCIONADA NO EXISTE! Ingrese una opcion válida: 1.Seguir comprando - 2.Finalizar compra - 3.Cancelar compra"));
    continue;
  }
}


if (totalCompra != 0) {

  for (let i = 0; i < carrito.length; i++) {
    totalCompra = totalCompra + carrito[i].precio;
  }

  alert("El total sin descuento de su de su carrito es de ARS$" + totalCompra);

  if (totalCompra > 9000) {
    precioFinal = descuentoPrecio(totalCompra);
    alert("El precio por ser compra mayor a ARS$9000 de su carrito es de ARS$" + precioFinal);
  }
  else {
    precioFinal = totalCompra;
    alert("El precio final de su carrito es de ARS$" + totalCompra);
  }

  tipoPago = parseInt(prompt("Ingrese tipo de pago: 1.Efectivo - 2.Cuotas"));

  if (tipoPago === 1) {
    alert("El precio final de su carrito es de ARS$" + descuentoEfectivo(precioFinal));
  }
  else if (tipoPago === 2) {
    cuotas = parseInt(prompt("Elija cantidad de cuotas: 1.Una cuota - 2.Dos cuotas 3.Tres cuotas"));
    alert("El precio final de su carrito es de ARS$" + recargoTarjeta(precioFinal, cuotas));
  }
}
