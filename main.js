const funkos = ["1-ANT-MAN $22000", "2-CAPITAN AMERICA $60000", "3-BLACK PANTHER $45000", "4-BLACK WIDOW $33000", "5-GROOT $25000", "6-IRON MAN $65000", "7-IRON SPIDER $58000", "8-BATMAN $60000", "9-JOKER $45000", "10-THANOS $ 32000"]


let total = 0
let bandera = true
let nombre = prompt("Ingrese su nombre")
let compra = []
function logicaDeCompra(productos, precios) {
    compra.push(productos)
    total += precios

}
while (bandera) {
    let menu = "Hola " + nombre + " Bienvenid@\n  Elija su Personaje Funko Pop de MARVEL-DC\n" + funkos.join("\n")
    let seleccion = prompt(menu)
    switch (parseInt(seleccion)) {
        case 1:
            bandera = confirm("Desea seguir comprando")
            logicaDeCompra("ANT-MAN", 22000)
            break;
        case 2:
            bandera = confirm("Desea seguir comprando")
            logicaDeCompra("CAPITAN AMERICA", 60000)
            break;
        case 3:
            bandera = confirm("Desea seguir comprando")
            logicaDeCompra("BLACK PANTHER", 45000)
            break;
        case 4:
            bandera = confirm("Desea seguir comprando")
            logicaDeCompra("BLACK WIDOW", 33000)
            break;
        case 5:
            bandera = confirm("Desea seguir comprando")
            logicaDeCompra(" GROOT", 25000)
            break;
        case 6:
            bandera = confirm("Desea seguir comprando")
            logicaDeCompra("IRON MAN", 65000)
            break;
        case 7:
            bandera = confirm("Desea seguir comprando")
            logicaDeCompra("IRON SPIDER", 58000)
            break;
        case 8:
            bandera = confirm("Desea seguir comprando")
            logicaDeCompra("BATMAN", 60000)
            break;
        case 9:
            bandera = confirm("Desea seguir comprando")
            logicaDeCompra("JOKER", 45000)
            break;
        case 10:
            bandera = confirm("Desea seguir comprando")
            logicaDeCompra("THANOS", 32000)
            break;
        default:
            alert("Opcion invalida, vuelva a intentar")
            break;
    }
}
let compraMensaje = "Productos a comprar\n" + compra.join("\n") + " Total a pagar $" + total
alert(compraMensaje)

pagar()
function pagar() {

    let metodoDePago = parseInt(prompt("Ingrese una forma de pago\n 1-Efectivo\n 2-Tarjeta de Credito "))
    if (metodoDePago === 1) {
        alert("Precio a pagar en efectivo : $ " + total + "\n Gracias por adquirir nuestros Funkos Pop Marvel-DC");
    } else if (metodoDePago === 2) {
        alert("Precio a pagar con Tarjeta : $ " + total + "\n Gracias por adquirir nuestros Funkos Pop Marvel-DC")
    } else {
        alert("Metodo de ingresado incorrecto; el precio a pagar es: $ " + total)
        let = intentarOtraVez = confirm("Quieres intentarlo de nuevo")
        if (intentarOtraVez) {
            pagar()
        } else {
            alert(nombre + " Gracias por visitar Tienda MARVEL-DC")
        }
    }
}

