// Clase Base
class Empleado {
    // Atributo privado (debe declararse con # al inicio de la clase)
    #salarioBase;

    // Constructor con parámetros por defecto (permite instanciación "vacía")
    constructor(nombre = "Sin asignar", salario = 1000) {
        this.nombre = nombre;           // Atributo público
        this.#salarioBase = salario;    // Atributo privado
    }

    // Método público
    obtenerInformacion() {
        // Internamente, el método público puede acceder al método privado
        const bono = this.#calcularBono();
        return `Empleado: ${this.nombre} | Salario+Bono: $${this.#salarioBase + bono}`;
    }

    // Método privado
    #calcularBono() {
        return this.#salarioBase * 0.10; // 10% de bono
    }
}

// Clase Hija que hereda de Empleado
class Gerente extends Empleado {
    constructor(nombre, salario, departamento = "General") {
        super(nombre, salario); // Llama al constructor de la clase base
        this.departamento = departamento;
    }

    // Método exclusivo de la clase hija
    aprobarProyecto(nombreProyecto) {
        return `El gerente del departamento de ${this.departamento} ha aprobado el proyecto "${nombreProyecto}".`;
    }
}

// --- INSTANCIACIÓN Y EJECUCIÓN ---

// Escenario 1: Creación usando un constructor vacío (usa valores por defecto)
const empleadoVacio = new Empleado();
console.log("[Constructor Vacío]:", empleadoVacio.obtenerInformacion());

// Escenario 2: Creación enviando parámetros al constructor
const gerenteTI = new Gerente("Carlos Rivera", 3500, "Tecnología");
console.log("[Con Parámetros - Base]:", gerenteTI.obtenerInformacion());
console.log("[Con Parámetros - Hija]:", gerenteTI.aprobarProyecto("Migración en la Nube"));