//Función formateadora

function format_currency ( num ) {
    const currencyFormatter = new Intl.NumberFormat("es-CL", {
        style: 'currency',
        currency: 'CLP',
    })
    return currencyFormatter.format(num);
}

//Función Constructora
function Empleado(nombre, salario, departamento) {
    this.nombre = nombre;
    this.salario = salario;
    this.departamento = departamento;

    this.aumentarSalario = (aumento) => {
        this.salario = (parseInt(salario * (1 + aumento)))
    }

    this.cambiarDepartamento = (departamento) => {
        this.departamento = departamento
    }

    this.obtenerDetalles = function() {
        return `Nombre: ${this.nombre}, Salario: ${format_currency(this.salario)}, Departamento: ${this.departamento}`;        
    }
}


//Instanciando
let empleado1 = new Empleado('Juan Pérez', 25000, 'ventas');


//log objeto creado
console.log(empleado1.obtenerDetalles());

//log salario aumentado
empleado1.aumentarSalario(0.1)
console.log(empleado1.obtenerDetalles());

//log departamento cambiado
empleado1.cambiarDepartamento('Marketing')
console.log(empleado1.obtenerDetalles());  