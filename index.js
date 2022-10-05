let nombre = prompt("Ingrese su nombre")
function saludo() {

    alert("hola bienvenido " + nombre)

}
saludo();

const portaNotebook = 2500;
const mesa = 5000;
const biblioteca = 8000;
menu = "";





    function ivaPorta(peso){
        let impuesto = ((portaNotebook*21)+portaNotebook);
        return impuesto;
    }
 function ivaMesa(peso){
    let impuesto = ((mesa*21)+ mesa);
    return impuesto
 }
 function ivabiblio(peso){
    let impuesto = ((biblioteca*21)+ biblioteca);
    return impuesto
 }
 let = productoElegido = prompt("seleccione el producto que desea consultar \n1 Porta notebook \n2 mesa \n3 biblioteca \n s para salir ")
 //while (productoElegido == "s") {
   // alert("Hasta luego");
//}

 while (menu != "s"){
switch (productoElegido){

    case "1":
        alert("Elegiste Porta notebook que tiene un costo de "+portaNotebook);
        let compra1 = prompt("ingresa 5 para confirmar compra")
        if(compra1 == "5"){
            let total1 = ivaPorta(portaNotebook);
            alert("lo que debes abonar es $" + total1);
        }
        else{
            alert("error")

        }
        break;
        case "2":
        alert("Elegiste Mesa que tiene un costo de "+mesa);
        let compra2 = prompt("ingresa 5 para confirmar compra")
        if(compra2 == "5"){
            let total2 = ivaMesa(mesa);
            alert("lo que debes abonar es $" + total2);
        }
        else{
            alert("error")

        }
        break;

        case "3":
        alert("Elegiste biblioteca que tiene un costo de "+biblioteca);
        let compra3 = prompt("ingresa 5 para confirmar compra")
        if(compra1 == "5"){
            let total3 = ivaBiblio(biblioteca);
            alert("lo que debes abonar es $" + total3);
        }
        else{
            alert("error")

        }
        break;

        case "s":
            alert("Hasta luego")
            break;

        default:
            alert("Producto sin stock")
            break;
        
}
let nombre = prompt("Ingrese su nombre")
saludo();
productoElegido = prompt("seleccione el producto que desea consultar \n1 Porta notebook \n2 mesa \n3 biblioteca \n s para salir ")




}
