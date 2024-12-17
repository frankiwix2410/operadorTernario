const usuarioActivo = false;
const estado = !usuarioActivo ? 'Usuario activo' : 'Usuario inactivo';
console.log(estado); 

//------------------------------EJERCICIO 1------------------------------------
const esAdmin = true;
const validacion = esAdmin ? 'Acceso Concedido' : 'Acceso Denegado';
console.log(validacion);

//--------------------------EJERCICIO 2---------------------------------------
const enLinea = true;
console.log(enLinea ? "Conectado" : "Desconectado");

//--------------------------EJERCICIO 3---------------------------------------
const texto = '';
const estaVacia = !texto ? "esta Vacia" : "Hay caracteres";
console.log(estaVacia)

//--------------------------EJERCICIO 4---------------------------------------
function calcularPrecioFinal(precio, tieneDescuento) {
    return !tieneDescuento ? precio : precio * 0.2; 
}
const precioOriginal = 1000;
const tieneDescuento = true; 
const precioFinal = calcularPrecioFinal(precioOriginal, tieneDescuento);
console.log("El precio final es: $" + precioFinal);

//--------------------------EJERCICIO 5---------------------------------------
const numero = 7;
const resultado = (numero % 2 === 0) ? "Par" : "Impar";
console.log(`El número ${numero} es ${resultado}.`);

//--------------------------EJERCICIO 6---------------------------------------
const autenticado = true; 
const mensaje = autenticado ? "Bienvenido de nuevo" : "Inicia sesión para continuar";
console.log(mensaje);

//--------------------------EJERCICIO 7---------------------------------------
const configuracion = null;
const MensajeValidacion = (configuracion === null || configuracion === undefined) 
                ? "Configuración predeterminada" 
                : configuracion;
console.log(MensajeValidacion);


//--------------------------EJERCICIO FINAL---------------------------------------
const nombre = ""; 
const edad = 17;


const mensajeNombre = !nombre ? "El nombre no debe estar vacío." : "Nombre válido.";
const mensajeEdad = edad >= 18 ? "Edad válida." : "Debes ser mayor o igual a 18 años.";

console.log(mensajeNombre);
console.log(mensajeEdad);
