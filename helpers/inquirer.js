
require('colors');
const inquirer = require('inquirer');


const preguntas = {
    type: 'list',
    name: 'opcion',
    message: `${'Que desea hacer?'.black.bgWhite.bold}`,
    choices: [
        {
            value: '1',
            name: `${ '1'.green}. ${'Crear usuario'.rainbow }`
        },
        {
            value: '2',
            name: `${ '2'.green}. ${'Lista usuarios'.random}`
        },
        {
            value: '3',
            name: `${ '3'.green}. ${'Crear objetos'.rainbow}`
        },
        {
            value: '4',
            name: `${ '4'.green}. ${'Lista Objetos'.random}`
        },
        {
            value: '5',
            name: `${ '5'.green}. ${'Crear Ciudad'.rainbow}`
        },
        {
            value: '6',
            name: `${ '6'.green}. ${'Lista Ciudades'.random}`
        },
        {
            value: '7',
            name: `${ '7'.green}. ${'Borrar Usuario'.rainbow}`
        },
        /*{
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
        },*/
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
            name: 'password',
            name: 'conPassword',
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

    const { nombre, correo, nacimiento, tipoCedula, noCedula, telefono, direccion, password, conPassword } = await inquirer.prompt(question);

    return nombre, correo, nacimiento, tipoCedula, noCedula, telefono, direccion, password, conPassword;
}

const leerInputObj = async(message) => {
    const question = [
        {
            name: 'nombreO',
            name: 'desc',
            name: 'cant',
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

    const { nombreO, desc, cant} = await inquirer.prompt(question);

    return  nombreO, desc, cant;

}

const leerInputCiu = async(message) => {
    const question = [
        {
            name: 'pais',
            name: 'ciudades',
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

    const { pais, ciudades } = await inquirer.prompt(question);

    return pais, ciudades;

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
    leerInputObj,
    leerInputCiu,
    ListadoTareasBorrar,
    Confirmar,
    MostrarListadoChecklist
}
