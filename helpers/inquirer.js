
require('colors');
const inquirer = require('inquirer');


const preguntas = {
    type: 'list',
    name: 'opcion',
    message: 'que desea hacer?',
    choices: [
        {
            value: '1',
            name: `${ '1'.green}. Crear usuario`
        },
        {
            value: '2',
            name: `${ '2'.green}. Lista usuarios`
        },
        {
            value: '3',
            name: `${ '3'.green}. Crear objetos`
        },
        {
            value: '4',
            name: `${ '4'.green}. Lista Objetos`
        },
        {
            value: '5',
            name: `${ '5'.green}. Crear Ciudad`
        },
        {
            value: '6',
            name: `${ '6'.green}. Lista Ciudades`
        },
        {
            value: '7',
            name: `${ '7'.green}. Borrar Usuario`
        },
        {
            value: '8',
            name: `${ '8'.green}. Completar Tarea`
        },
        {
            value: '9',
            name: `${ '9'.green}. Listar Tarea`
        },
        {
            value: '10',
            name: `${ '10'.green}. Listar tareas completadas`
        },
        {
            value: '11',
            name: `${ '11'.green}. Listar tareas pendientes`
        },
        {
            value: '0',
            name: `${ '0'.green}. Salir`
        }

    ]
}


const inquireMenu = async() => {
    console.clear();
    console.log('============================='.green);
    console.log('   Seleccione una opción'.white);
    console.log('=============================\n'.green);

    const { opcion } = await inquirer.prompt(preguntas);

    return opcion;

}

const pausa = async() =>{

const question ={
    type: 'input',
    name: 'enter',
    message: `Presione ${ 'enter'.green } para continuar`
}

console.log('\n');
await inquirer.prompt(question);

}
 
const leerInput = async(message) => {
    const question = [
        {
            type: 'input',
            name: 'nombre',
            name: 'correo',
            name: 'nacimiento',
            name: 'tipoCedula',
            name: 'noCedula',
            name: 'telefono',
            name: 'direccion',
            name: 'pais',
            name: 'password',
            name: 'conPassword',
            name: 'nombreO',
            name: 'desc',
            name: 'cant',
            name: 'ciudad',
            name: 'continente',
            message,
            validate( value ){
                if(value.length === 0){
                    return 'Por favor ingrese un valor';
                }

                if(value.password != value.conPassword){
                    return 'Las contraseñas con coinciden';
                }

                return true;
            }
        }
    ]

    const { nombre, correo, nacimiento, tipoCedula, noCedula, telefono, direccion, pais, password, conPassword, nombreO, desc, cant, ciudad, continente} = await inquirer.prompt(question);

    return nombre, correo, nacimiento, tipoCedula, noCedula, telefono, direccion, pais, password, conPassword, nombreO, desc, cant, ciudad, continente;
}

const ListadoTareasBorrar = async( tareas = [] ) => {

    const choices = tareas.map( (tarea, i) => {
        const idx = `${i + 1}.`.green;

        return {
            value: tarea.id,
            name: `${ idx } ${ tarea.nombre }`
        }
    })

    choices.unshift({
        value: '0',
        name: '0'.green + ' Cancelar'
    })

    const preguntas = [
        {
            type: 'list',
            name: 'id',
            message: 'Borrar',
            choices
        }
    ]

    const { id } = await inquirer.prompt(preguntas);
    return id;
}

const Confirmar = async(message) => {
    
    const question = [
        {
            type: 'confirm',
            name: 'ok',
            message
        }
    ]

    const { ok } = await inquirer.prompt(question)
    return ok
} 

const MostrarListadoChecklist = async( tareas = [] ) => {

    const choices = tareas.map( (tarea, i ) => {
        const idx = `${i + 1}.`.green;

        return {
            value: tarea.id,
            name: `${ idx } ${ tarea.nombre }`,
            checked: ( tarea.correo ) ? true : false
        }
    })

    const pregunta = [
        {
            type: 'checkbox',
            name: 'ids',
            message: 'Selecciones',
            choices
        }
    ]

    const { ids } = await inquirer.prompt(pregunta);
    return ids;
}

module.exports = {
    inquireMenu,
    pausa,
    leerInput,
    ListadoTareasBorrar,
    Confirmar,
    MostrarListadoChecklist
}
