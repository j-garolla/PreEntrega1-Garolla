alert('¡Bienvenido a la Tienda de Plantas Carnívoras!');

const precioVenus = 100;
const precioNepenthes = 150;
const precioDrosera = 120;
let precioFinal = 0;

do {
    let planta = prompt('Ingrese el número que identifica a la planta que desea comprar:\n1 - Venus\n2 - Nepenthes\n3 - Drosera');
    let cantidad = parseInt(prompt('Ingrese la cantidad que desea comprar:'));
    let total = 0;

    if (planta === '1' || planta === '2' || planta === '3') {
        if (!isNaN(cantidad) && cantidad > 0) {

            if (planta === '1') {
                total = precioVenus * cantidad;
                console.log(`Ha seleccionado ${cantidad} Venus. Precio unitario: $${precioVenus}. Total a pagar: $${total.toFixed(2)}`);
                alert(`Ha seleccionado ${cantidad} Venus.\nPrecio unitario: $${precioVenus}\nTotal a pagar: $${total.toFixed(2)}`);
            } else if (planta === '2') {
                total = precioNepenthes * cantidad;
                console.log(`Ha seleccionado ${cantidad} Nepenthes. Precio unitario: $${precioNepenthes}. Total a pagar: $${total.toFixed(2)}`);
                alert(`Ha seleccionado ${cantidad} Nepenthes.\nPrecio unitario: $${precioNepenthes}\nTotal a pagar: $${total.toFixed(2)}`);
            } else if (planta === '3') {
                total = precioDrosera * cantidad;
                console.log(`Ha seleccionado ${cantidad} Drosera. Precio unitario: $${precioDrosera}. Total a pagar: $${total.toFixed(2)}`);
                alert(`Ha seleccionado ${cantidad} Drosera.\nPrecio unitario: $${precioDrosera}\nTotal a pagar: $${total.toFixed(2)}`);
            }

            precioFinal += total;
            console.log(`Cantidad de plantas compradas: ${cantidad}`);
            console.log(`Precio final acumulado: $${precioFinal.toFixed(2)}`);
        } else {
            console.log('Dato inválido. Por favor, ingrese una cantidad válida.');
            alert('Dato inválido. Por favor, ingrese una cantidad válida.');
            continue;
        }
    } else {
        console.log('Dato inválido. Por favor, seleccione una planta válida.');
        alert('Dato inválido. Por favor, seleccione una planta válida.');
        continue;
    }
} while (confirm('¿Desea comprar más plantas carnívoras?'));

alert(`Precio final acumulado: $${precioFinal.toFixed(2)}`);
console.log('Gracias por su compra. ¡Hasta luego!');
alert('Gracias por su compra. ¡Hasta luego!');