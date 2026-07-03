// Función que retorna una Promesa y simula una petición a una base de datos
export function consultarBaseDeDatos(debeTenerExito = true) {
    return new Promise((resolve, reject) => {
        console.log("Consultando base de datos...");
        
        setTimeout(() => {
            if (debeTenerExito) {
                resolve({ id: 101, usuario: "dev_user", rol: "Admin" });
            } else {
                reject(new Error("Error 500: Fallo de conexión con el servidor."));
            }
        }, 1500); // Simula 1.5 segundos de retraso
    });
}

// Consumo de la promesa (Escenario de Éxito)
consultarBaseDeDatos(true)
    .then((datos) => {
        console.log("Respuesta Exitosa (.then):", datos);
    })
    .catch((error) => {
        console.error("Error Capturado (.catch):", error.message);
    });