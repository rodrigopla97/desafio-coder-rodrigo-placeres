let descuentoPrecio = (num) => {
  return num - 1000;
};

function recargoTarjeta(num, cant) {
  const mensajeError =
    "######. No ha ingresado una opción válida, vuelva a empezar ya que sa terminó su posibilidad de compra";
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

// function descuentoEfectivo(num) {
//   return num - num * 0.1;
// }

// funcion de recargo
// let recargoTarjeta = function (num, rec) {
//   return num * rec;
// };
// funcion de recargo (arrow funtion)

let totalCompra = 0;
let tipoPantalon;
let tipoRemera;
let tipoCalzado;

let nombreCliente = prompt("Ingrese su nombre: ").toUpperCase();
alert(
  `Bienvenido ${nombreCliente}!, a continuacion podrás seleccionar que producto deseas cargar al carrito`
);
let productoSeleccionado = parseInt(
  prompt("1.Pantalones - 2.Remeras - 3.Calzado - 4.Cancelar compra")
);
let seguirComprando = true;
let decision;

while (seguirComprando === true) {
  if (productoSeleccionado === 1) {
    tipoPantalon = parseInt(
      prompt("Ingrese tipo de pantalón: 1.Urban - 2.Sport")
    );
    if (tipoPantalon === 1) {
      totalCompra = totalCompra + 2500;
    } else if (tipoPantalon === 2) {
      totalCompra = totalCompra + 2000;
    } else {
      tipoPantalon = parseInt(
        prompt(
          "OPCIÓN INVÁLIDA: Ingrese tipo de pantalón válido: 1.Urban - 2.Sport"
        )
      );
      continue;
    }
  } else if (productoSeleccionado === 2) {
    tipoRemera = parseInt(prompt("Ingrese tipo de remera: 1.Urban - 2.Sport"));
    if (tipoRemera === 1) {
      totalCompra = totalCompra + 1200;
    } else if (tipoRemera === 2) {
      totalCompra = totalCompra + 1500;
    } else {
      tipoRemera = parseInt(
        prompt(
          "OPCIÓN INVÁLIDA: Ingrese tipo de remera válido: 1.Urban - 2.Sport"
        )
      );
      continue;
    }
  } else if (productoSeleccionado === 3) {
    tipoCalzado = parseInt(
      prompt("Ingrese tipo de calzado: 1.Urban - 2.Sport")
    );
    if (tipoCalzado === 1) {
      totalCompra = totalCompra + 6000;
    } else if (tipoCalzado === 2) {
      totalCompra = totalCompra + 8000;
    } else {
      tipoCalzado = parseInt(
        prompt(
          "OPCIÓN INVÁLIDA: Ingrese tipo de calzado válido: 1.Urban - 2.Sport"
        )
      );
      continue;
    }
  } else if (productoSeleccionado === 4) {
    alert("Que lastima! Te esperamos la proxima!");
    totalCompra = 0;
    seguirComprando = false;
    break;
  } else {
    alert(
      "PRODUCTO SELECCIONADO NO EXISTE! Ingrese un producto válido para cargar en el carrito:"
    );
    productoSeleccionado = parseInt(
      prompt("1.Pantalones - 2.Remeras - 3.Calzado - 4.Cancelar compra")
    );
  }

  let decision = parseInt(
    prompt("1.Seguir comprando - 2.Finalizar compra - 3.Cancelar compra")
  );
  if (decision === 1) {
    productoSeleccionado = parseInt(
      prompt("1.Pantalones - 2.Remeras - 3.Calzado - 4.Cancelar compra")
    );
  } else if (decision === 2) {
    seguirComprando = false;
  } else if (decision === 3) {
    alert("Que lastima! Te esperamos la proxima!");
    totalCompra = 0;
    break;
  } else {
    // alert("no ingresaste una opcion valida");
    decision = parseInt(
      prompt(
        "OPCIÓN SELECCIONADA NO EXISTE! Ingrese una opcion válida: 1.Seguir comprando - 2.Finalizar compra - 3.Cancelar compra"
      )
    );
    continue;
  }
}

let tipoPago;
let precioFinal = 0;
let cuotas;

if (totalCompra != 0) {
  alert("El total sin descuento de su de su carrito es de ARS$" + totalCompra);
  if (totalCompra > 9000) {
    precioFinal = descuentoPrecio(totalCompra);
    alert(
      "El precio por ser compra mayor a ARS$9000 de su carrito es de ARS$" +
        precioFinal
    );
  } else {
    alert("El precio final de su carrito es de ARS$" + totalCompra);
  }

  tipoPago = parseInt(prompt("Ingrese tipo de pago: 1.Efectivo - 2.Cuotas"));
  if (tipoPago === 1) {
    alert(
      "El precio final de su carrito es de ARS$" +
        descuentoEfectivo(precioFinal)
    );
  } else if (tipoPago === 2) {
    cuotas = parseInt(
      prompt("Elija cantidad de cuotas: I.1 Cuota - II.2 Cuotas III.3 Cuotas")
    );
    alert(
      "El precio final de su carrito es de ARS$" +
        recargoTarjeta(precioFinal, cuotas)
    );
  }
}
