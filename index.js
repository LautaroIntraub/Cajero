let saldo = 0;

let opcion;


while (opcion != 0) {

    opcion = prompt(`
    Bienvenido al cajero 
    Ingrese una de las siguientes opciones:
    *1. Ver saldo
    *2. Ingresar dinero
    *3. Retiro parcial de dinero
    *4. Retiro total del dinero
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
            saldo -= retiroParcial;
            alert('Dinero retirado con éxito, su nuevo saldo es: ' + saldo);
            break;
        case "4":
            saldo = 0;
            alert('Dinero retirado con éxito, su nuevo saldo es: ' + saldo);
            break;
        case "0":
            alert('Gracias por utilizar nuestro cajero');
            break;
        default:
            alert('Ingrese una opción válida');
            break;
    }
}
