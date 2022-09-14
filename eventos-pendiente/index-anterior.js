// let descuentoPrecio = (num) => {
//   return num - 1000;
// };

// let descuentoEfectivo = (num) => num - num * 0.1;

// function filterArray(value) {
//   return compra.filtroCarrito.push(`${value.nombre} ${value.tipo}`);
// }

// class Producto {
//   constructor(nombre, tipo, precio) {
//     this.nombre = nombre;
//     this.tipo = tipo;
//     this.precio = precio;
//   }
// }

// class Compra {
//   constructor(cuotas) {
//     this.totalCompra = 0;
//     this.cuotas = cuotas;
//     this.carrito = [];
//     this.filtroCarrito = [];
//     this.error = "######. No ha ingresado una opción válida, vuelva a empezar ya que sa terminó su posibilidad de compra";
//   }
//   recargoTarjeta() {

//     if (this.cuotas === 1) {
//       return this.totalCompra;
//     } else if (this.cuotas === 2) {
//       return this.totalCompra * 1.1;
//     } else if (this.cuotas === 3) {
//       return this.totalCompra * 1.25;
//     } else {
//       return this.error;
//     }
//   }
// }

// let tipoPantalon;
// let tipoRemera;
// let tipoCalzado;
// let productos = []
// const selectTag1 = document.getElementById('select-productos1')
// const selectTag = document.getElementById('select-productos')

// let seguirComprando = true;
// let compraCancelada = false;
// let decision;

// let tipoPago;
// let precioFinal = 0;

// let compra = new Compra()

// const pantalonUrban = new Producto("Pantalón", "Urban", 2500);
// const pantalonSport = new Producto("Pantalón", "Sport", 2000);
// const remeraUrban = new Producto("Remera", "Urban", 1200);
// const remeraSport = new Producto("Remera", "Sport", 1500);
// const calzadoUrban = new Producto("Calzado", "Urban", 6000);
// const calzadoSport = new Producto("Calzado", "Sport", 8000);

// productos.push(pantalonUrban, pantalonSport, remeraUrban, remeraSport, calzadoUrban, calzadoSport);

// console.log(productos);

// productos.forEach(producto => {
//   const option = document.createElement('option');
//   option.innerText = `${producto.nombre} ${producto.tipo}: $${producto.precio}`;
//   selectTag1.append(option);
// })

// // let nombreCliente = prompt("Ingrese su nombre: ").toUpperCase();
// // alert(`Bienvenido ${nombreCliente}!, a continuacion podrás seleccionar que producto deseas cargar al carrito`);

// // let productoSeleccionado = parseInt(prompt("1.Pantalones - 2.Remeras - 3.Calzado - 4.Cancelar compra"));

// // while (seguirComprando === true) {
// //   if (productoSeleccionado === 1) {
// //     tipoPantalon = parseInt(prompt("Ingrese tipo de pantalón: 1.Urban - 2.Sport"));

// //     if (tipoPantalon === 1) {
// //       compra.carrito.push(pantalonUrban);
// //     }
// //     else if (tipoPantalon === 2) {
// //       compra.carrito.push(pantalonSport);
// //     }
// //     else {
// //       alert("OPCIÓN INVÁLIDA!");
// //       continue;
// //     }
// //   }
// //   else if (productoSeleccionado === 2) {
// //     tipoRemera = parseInt(prompt("Ingrese tipo de remera: 1.Urban - 2.Sport"));

// //     if (tipoRemera === 1) {
// //       compra.carrito.push(remeraUrban);
// //     }
// //     else if (tipoRemera === 2) {
// //       compra.carrito.push(remeraSport);
// //     }
// //     else {
// //       alert("OPCIÓN INVÁLIDA!");
// //       continue;
// //     }
// //   }
// //   else if (productoSeleccionado === 3) {
// //     tipoCalzado = parseInt(prompt("Ingrese tipo de calzado: 1.Urban - 2.Sport"));

// //     if (tipoCalzado === 1) {
// //       compra.carrito.push(calzadoUrban);
// //     }
// //     else if (tipoCalzado === 2) {
// //       compra.carrito.push(calzadoSport);
// //     }
// //     else {
// //       alert("OPCIÓN INVÁLIDA!");
// //       continue;
// //     }
// //   }
// //   else if (productoSeleccionado === 4) {
// //     alert("Que lastima! Te esperamos la proxima!");
// //     compra.totalCompra = 0;
// //     seguirComprando = false;
// //     compraCancelada = true;
// //     break;
// //   }
// //   else {
// //     alert("PRODUCTO SELECCIONADO NO EXISTE! Ingrese un producto válido para cargar en el carrito:");
// //     productoSeleccionado = parseInt(prompt("1.Pantalones - 2.Remeras - 3.Calzado - 4.Cancelar compra"));
// //     continue;
// //   }

// //   let decision = parseInt(prompt("1.Seguir comprando - 2.Finalizar compra - 3.Cancelar compra"));

// //   if (decision === 1) {
// //     productoSeleccionado = parseInt(prompt("1.Pantalones - 2.Remeras - 3.Calzado - 4.Cancelar compra"));
// //   }
// //   else if (decision === 2) {
// //     seguirComprando = false;
// //     break;
// //   }
// //   else if (decision === 3) {
// //     alert("Que lastima! Te esperamos la proxima!");
// //     compra.totalCompra = 0;
// //     compraCancelada = true;
// //     break;
// //   }
// //   else {
// //     decision = parseInt(prompt("OPCIÓN SELECCIONADA NO EXISTE! Ingrese una opcion válida: 1.Seguir comprando - 2.Finalizar compra - 3.Cancelar compra"));
// //     continue;
// //   }
// // }

// // if (compraCancelada !== true) {
// //   for (let i = 0; i < compra.carrito.length; i++) {
// //     compra.totalCompra = compra.totalCompra + compra.carrito[i].precio;
// //   }
// // } else {
// //   compra.carrito.splice(0, compra.carrito.length);
// // }

// // if (compra.totalCompra != 0) {

// //   alert("El total sin descuento de su de su carrito es de ARS$" + compra.totalCompra);

// //   if (compra.totalCompra > 9000) {
// //     precioFinal = descuentoPrecio(compra.totalCompra);
// //     alert("El precio por ser compra mayor a ARS$9000 de su carrito es de ARS$" + precioFinal);
// //   }
// //   else {
// //     precioFinal = compra.totalCompra;
// //     alert("El precio final de su carrito es de ARS$" + compra.totalCompra);
// //   }

// //   tipoPago = parseInt(prompt("Ingrese tipo de pago: 1.Efectivo - 2.Cuotas"));

// //   if (tipoPago === 1) {
// //     alert("El precio final de su carrito es de ARS$" + descuentoEfectivo(precioFinal));
// //   }
// //   else if (tipoPago === 2) {
// //     compra.cuotas = parseInt(prompt("Elija cantidad de cuotas: 1.Una cuota - 2.Dos cuotas 3.Tres cuotas"));
// //     alert("El precio final de su carrito es de ARS$" + compra.recargoTarjeta());
// //   }

// console.log(compra.carrito);
// compra.carrito.filter(filterArray);
// console.log(compra.filtroCarrito);

// compra.carrito.forEach(producto => {
//   const option = document.createElement('option');
//   option.innerText = `${producto.nombre} ${producto.tipo}`;
//   selectTag.append(option);
// })

// const carritoContainer = document.getElementById('carrito-container')
// const ulList = document.createElement('ul');

// ulList.setAttribute('id', 'lista');

// compra.carrito.forEach(producto => {

//   const li = document.createElement('li');
//   li.innerText = `${producto.nombre} ${producto.tipo}`
//   ulList.append(li)
// })
// carritoContainer.append(ulList)
// // }

// const boton1 = document.createElement('button')
// boton1.innerText = "Agregar Producto"
// document.body.append(boton1)

// const boton2 = document.createElement('button')
// boton2.innerText = "Finalizar Compra"
// document.body.append(boton2)

// const boton3 = document.createElement('button')
// boton3.innerText = "Cancelar Compra"
// document.body.append(boton3)

// boton1.onclick = () => {
//   const productoIngresado = productos[selectTag.selectedIndex]
//   compra.carrito.push(productoIngresado)
//   console.log(productoIngresado)
// }

// boton2.onclick = () => {
//   console.log(compra.carrito)
//   let totalCompra = 0
//   const p = document.createElement('p')
//   compra.carrito.forEach(producto => {
//     totalCompra = totalCompra + producto.precio
//     p.innerText = `${producto.nombre} ${producto.tipo}`
//     document.body.append(p)
//     console.log(p)
//   })
// }
