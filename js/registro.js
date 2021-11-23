// let cliente = prompt("Escria el nombre del cliente: ");
// let documento = prompt(`Digit el documento de ${cliente}:`);
// let producto = prompt("Digite el nombre del producto: ");
// let precio = parseFloat(prompt(`Digite el precio de ${producto}`));
// let cantidad = parseInt(prompt("Digite cantidad de productos"));
// let envio = parseInt(prompt("Seleccione tipo de envio (1.Normal/ 2.Express)"));

// let listaProductos = ["Disco Duro","Teclado","MOuse","Pantalla","Mermoria USB"];
// let valores = [250000, 100000, 80000, 80000, 50000];

// const continuar;

// const p1 = {"Nombre":"Disco Duro","Precio":250000};
// const p2 = {"Nombre":"Teclado","Precio":100000};
// const p3 = {"Nombre":"Mouse","Precio":80000};
// const p4 = {"Nombre":"Pantalla","Precio":80000};
// const p5 = {"Nombre":"Memoria USB","Precio":50000};

// listaProductos = [p1,p2,p3,p4,p5];

// do {
//     let compra={};

//     compra.cliente = prompt("Escriba el nombre del cliente");
//     compra.documento = prompt(`Escria el documento de ${compra.cliente}`);
//     console.log(compra);

//     continuar = confirm("Desea realizar otra compra");
// } while (condition);


// let total = precio * cantidad;
// let descuento = 0;

// if (cantidad > 10 && envio == 2) {
//     descuento = total * 0.1;
//     total = total - descuento;
// } else if (cantidad > 10 && envio == 1){

// }

// if (envio == 1 && total > 5000000) {
//     descuento = total*0.1
// }

// document.write("<h1>"+total+"</h1>")
// console.log("<h1>"+total+"</h1>")

function saludar(nombre){
    // document.write("Bienvenidos...");
    return `Hola ${nombre} desde funcion`
}

const msj = saludar("juan");
document.write(msj);

const saludar_flecha = (parametros)=>{ //funciones de flecha son permitidas para pasarlas dentro de una funcion
    //logica
};

const saludar_abreviado = (parametros)=>`hola ${parametros} como estas`;