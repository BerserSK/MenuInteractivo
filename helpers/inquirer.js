
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
            name: `${ '2'.green}. Lista tareas`
        },
        {
            value: '3',
            name: `${ '3'.green}. Lista tareascompletadas`
        },
        {
            value: '4',
            name: `${ '4'.green}. Lista tareaspendientes`
        },
        {
            value: '5',
            name: `${ '5'.green}. Compltar taras`
        },
        {
            value: '6',
            name: `${ '6'.green}. Borra tareas`
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
            message,
            validate( value ){
                if(value.length === 0){
                    return 'Por favor ingrese un valor';
                }
                return true;
            }
        }
    ]

    const { nombre, correo, nacimiento, tipoCedula, noCedula, telefono, direccion, pais } = await inquirer.prompt(question);
    return nombre, correo, nacimiento, tipoCedula, noCedula, telefono, direccion, pais;
}

module.exports = {
    inquireMenu,
    pausa,
    leerInput
}
