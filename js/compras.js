const cliente = prompt(`Digite nombre del cliente...`);
const documento = prompt(`Digite el numero de documento de ${cliente}..`);
const producto = prompt(`Diite nomre del producto...`);
const precio = parseFloat(prompt(`Digite el valor de ${producto}...`));
const cantidad = parseInt(prompt(`Digite la cantidad de productos...`));
const envio = parseInt(prompt(`Diite el tipo de envio (1. Express/2. Normal).`))

//total = 0;
descuento = 0;
tipoEnvio = 0;
total = precio * cantidad;

console.log(total);

if (envio == 1 && total > 5000000) {
    tipoEnvio = 10000;
} else if (envio == 2 && total > 5000000) {
    tipoEnvio = 0;
} else if (envio == 1 && total < 5000000){
    tipoEnvio = 20000;
} else
    tipoEnvio = 10000;



total -= descuento;    
total += tipoEnvio;

document.write(` 
    <h3>Estimad@ ${cliente}, el resumen de su compraes:</h3>
    <ul>
        <li><b>Producto:</b>${producto}</li>
        <li><b>Precio:</b>${precio}</li>
        <li><b>Cantidad:</b>${cantidad}</li>
        <li><b>Envio:</b>${envio}</li>
        <li><b>Descuento:</b>${descuento}</li>
    </ul>
    <h3>Total valor de su compra es: ${total}</h3>`
);

