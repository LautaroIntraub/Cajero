let saldo = 0;

let opcion;

const movimientos = [];

while (opcion != 0) {

    opcion = prompt(`
    Bienvenido al cajero 
    Ingrese una de las siguientes opciones:
    *1. Ver saldo
    *2. Ingresar dinero
    *3. Retiro parcial de dinero
    *4. Retiro total del dinero
    *5. Ver ultimos 5 movimientos
    *0. Salir
`);


    switch (opcion) {
        case "1":
            alert(saldo);
            break;
        case "2":
            const input = Number(prompt('Cuanto dinero desea ingresar:'));
            saldo += input;
            alert('Dinero ingresado exitosamente, su saldo actual es: ' + saldo);
            break;
        case "3":
            const retiroParcial = Number(prompt('Cuanto dinero desea retirar: '));
            agregarRetiro(retiroParcial);
            saldo -= retiroParcial;
            alert('Dinero retirado con éxito, su nuevo saldo es: ' + saldo);
            break;
        case "4":
            agregarRetiro(saldo);
            saldo = 0;
            alert('Dinero retirado con éxito, su nuevo saldo es: ' + saldo);
            break;
        case "5":
            alert('Los ultimos' + movimientos.length + 'retiros son: ' + verMovimientos());
            break;
        case "0":
            alert('Gracias por utilizar nuestro cajero');
            break;
        default:
            alert('Ingrese una opción válida');
            break;
    }
}


function agregarRetiro(retiro) {
    if (movimientos.length >= 5) {
        movimientos.shift(); // Elimino el elemento más antiguo si ya hay 5 retiros
    }
    movimientos.push(retiro); // Agrego el nuevo retiro al final
}

function verMovimientos() {
    if (movimientos.length === 0) {
        return "No hay movimientos.";
    }
    return movimientos.join(', '); // Devuelvo los movimientos como una cadena separada por comas
}