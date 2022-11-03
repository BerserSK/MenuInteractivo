require('colors');

const { guardarDB } = require('./helpers/guardarArchivo');
const { inquireMenu, pausa, leerInput }= require('./helpers/inquirer');
const Tarea = require('./models/tarea');
const Tareas = require('./models/tareas');

const main = async () => {

    let opt = '';
    const tareas = new Tareas();

    do{
        //Imprimir el menu
        opt = await inquireMenu();
        //console.log({opt});


        switch(opt){
            case '1':
                //Crear opcion
                const nombre = await leerInput('Nombre Usuario:')
                const correo = await leerInput('Correo Electronico:')
                const nacimiento = await leerInput('Fecha de Nacimiento:')
                const tipoCedula = await leerInput('Tipo de Documento:')
                const noCedula = await leerInput('Numero de Documento:')
                const telefono = await leerInput('Numero de Telefono:')
                const direccion = await leerInput('Dirreccion:')
                const pais = await leerInput('Pais:')
                tareas.CrearTarea( nombre, correo, nacimiento, tipoCedula, noCedula, telefono, direccion, pais );
            break;
            case '2':
                console.log( tareas.listadoArr);
            break
        }

        guardarDB( tareas.listadoArr );

        await pausa();

    } while(opt !== '0');

    
}



main();