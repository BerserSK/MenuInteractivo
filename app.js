require('colors');

const { guardarDB, leerDB, guardarDBObj, leerDBObj, leerDBCiu, guardarDBCiu } = require('./helpers/guardarArchivo');
const { inquireMenu, pausa, leerInput, ListadoTareasBorrar, Confirmar, MostrarListadoChecklist, leerInputObj, leerInputCiu }= require('./helpers/inquirer');
const Objetos = require('./models/objetos');
const Tarea = require('./models/tarea');
const Tareas = require('./models/tareas');
const Ciudades = require('./models/ciudades');

const main = async () => {

    let opt = '';
    const tareas = new Tareas();
    const objetos = new Objetos();
    const ciudads = new Ciudades();
    const tareasDB = leerDB();
    const objetosBD = leerDBObj();
    const ciudadesDB = leerDBCiu();

    if ( tareasDB ){
        //Cargar Tareas
        tareas.CargarTareasFromArray( tareasDB );
    }

    if( objetosBD ){
        //Cargar Objetos
        objetos.CargarTareasFromArray( objetosBD )
    }

    if( ciudadesDB ){
        //Cargar Objetos
        ciudads.CargarTareasFromArray( ciudadesDB )
    }
    
    

    do{
        //Imprimir el menu
        opt = await inquireMenu();
        //console.log({opt});


        switch(opt){
            case '1':
                //Crear opcion de usuario
                const nombre = await leerInput('Nombre Usuario:'.red.underline)
                const correo = await leerInput('Correo Electronico:'.red.underline)
                const password = await leerInput('Escriba la Contraseña:'.red.underline)
                const conPassword = await leerInput('Confirme la Contraseña:'.red.underline)
                const nacimiento = await leerInput('Fecha de Nacimiento:'.red.underline)
                const tipoCedula = await leerInput('Tipo de Documento:'.red.underline)
                const noCedula = await leerInput('Numero de Documento:'.red.underline)
                const telefono = await leerInput('Numero de Telefono:'.red.underline)
                const direccion = await leerInput('Dirreccion:'.red.underline)

                tareas.CrearTarea( nombre, correo, nacimiento, tipoCedula, noCedula, telefono, direccion, password, conPassword );
                
            break;
            case '2':
                console.log( tareas.listadoArr);
            break
            case '3':
                const nombreO = await leerInputObj('Nombre/Tipo de Objeto:'.grey.underline)
                const desc = await leerInputObj('Descripcion del Objeto:'.grey.underline)
                const cant = await leerInputObj('Cantidad del Objeto:'.grey.underline)
                objetos.crearObjeto(nombreO, desc, cant)
                guardarDB( objetos.listadorArrO );
            break;
            case '4':
                console.log( objetos.listadorArrO);
            break;
            case '5':
                const pais = await leerInputCiu('Pais:'.magenta.underline)
                const ciudades = await leerInputCiu('Nombre de la Ciudad:'.magenta.underline);
                ciudads.CrearCiudad( pais, ciudades )
                guardarDBCiu( ciudads.listadorArrC );
            break
            case '6':
                console.log(ciudads.listadorArrC);
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
        guardarDBObj( objetos.listadorArrO);
        guardarDBCiu( ciudads.listadorArrC);

        await pausa();

    } while(opt !== '0');

    
}



main();