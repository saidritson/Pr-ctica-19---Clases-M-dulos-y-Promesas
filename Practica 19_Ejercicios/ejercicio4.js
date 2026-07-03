
// Función envolvente declarada con async
async function procesarPeticionAsync(exito) {
    try {
        console.log(`\nIniciando petición Async/Await (Modo éxito: ${exito})...`);
        // Pausamos la ejecución hasta que la promesa se resuelva
        const resultado = await consultarBaseDeDatos(exito);
        console.log("Éxito (try):", resultado);
    } catch (error) {
        // Si la promesa es rechazada, el control pasa directamente al catch
        console.error("Fallo capturado (catch):", error.message);
    }
}

// Ejecutamos ambos casos para verificar el comportamiento en consola
// Nota: Usamos un setTimeout para que no se mezcle en consola con la respuesta del Ejercicio 3
setTimeout(() => {
    procesarPeticionAsync(true);  // Probar caso de éxito
}, 2000);

setTimeout(() => {
    procesarPeticionAsync(false); // Probar caso de error
}, 4000);