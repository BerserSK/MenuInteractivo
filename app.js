require('colors');

const { guardarDB, leerDB } = require('./helpers/guardarArchivo');
const { inquireMenu, pausa, leerInput, ListadoTareasBorrar, Confirmar, MostrarListadoChecklist }= require('./helpers/inquirer');
const Objetos = require('./models/objetos');
const Tarea = require('./models/tarea');
const Tareas = require('./models/tareas');
const Ciudades = require('./models/ciudades');

const main = async () => {

    let opt = '';
    const tareas = new Tareas();
    const objetos = new Objetos();
    const ciudad = new Ciudades();
    const tareasDB = leerDB();

    if ( tareasDB ){
        //Cargar Tareas
        tareas.CargarTareasFromArray( tareasDB );
    }

    do{
        //Imprimir el menu
        opt = await inquireMenu();
        //console.log({opt});


        switch(opt){
            case '1':
                //Crear opcion de usuario
                const nombre = await leerInput('Nombre Usuario:')
                const correo = await leerInput('Correo Electronico:')
                const password = await leerInput('Escriba la Contraseña:')
                const conPassword = await leerInput('Confirme la Contraseña:')
                const nacimiento = await leerInput('Fecha de Nacimiento:')
                const tipoCedula = await leerInput('Tipo de Documento:')
                const noCedula = await leerInput('Numero de Documento:')
                const telefono = await leerInput('Numero de Telefono:')
                const direccion = await leerInput('Dirreccion:')
                const pais = await leerInput('Pais:')
                tareas.CrearTarea( nombre, correo, nacimiento, tipoCedula, noCedula, telefono, direccion, pais, password, conPassword );
            break;
            case '2':
                console.log( tareas.listadoArr);
            break
            case '3':
                const nombreO = await leerInput('Nombre/Tipo de Objeto')
                const desc = await leerInput('Descripcion del Objeto')
                const cant = await leerInput('Cantidad del Objeto')
                objetos.crearObjeto(nombreO, desc, cant)
                guardarDB( objetos.listadorArrO );
            break;
            case '4':
                console.log( objetos.listadorArrO);
            break;
            case '5':
                const continente = await leerInput ('Nombre del Continente');
                const ciudades = await leerInput('Nombre de la Ciudad');
                ciudad.crearCiudad(continente, ciudades)
            break
            case '6':
                console.log(ciudad.listadorArrC);
            break;
            case '7':
                const id = await ListadoTareasBorrar( tareas.listadoArr );
                if ( id !== '0' ){
                    const ok = await Confirmar('¿Esta Seguro?');
                    if( ok ){
                        tareas.BorrarTarea( id );
                        console.log('Tarea Borrada')
                    }
                }
            break;
            case '8':
                const ids = await MostrarListadoChecklist( tareas.listadoArr );
                tareas.ToggleCompletadas( ids );
            break;
            case '9':
                tareas.ListadoCompleto();
            break;
            case '10':
                tareas.ListarPendientesCompletadas(true);
            break;
            case '11':
                tareas.ListarPendientesCompletadas(false);
            break;
        }

        guardarDB( tareas.listadoArr);

        await pausa();

    } while(opt !== '0');

    
}



main();