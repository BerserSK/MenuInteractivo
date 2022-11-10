const Tarea = require("./tarea");

class Tareas{
    _listado = {};

    get listadoArr(){
        const listado = []
        Object.keys(this._listado).forEach( key =>{
            const tarea = this._listado[key]; 
            listado.push( tarea );
        });

        return listado;
    }

    constructor(){
        this._listado = {}
    }

    CrearTarea(nombre = '', correo = '', nacimiento = '', tipoCedula = '', noCedula = '', telefono = '', direccion = '', pais = '', password = '', conPassword){
        const tarea = new Tarea(nombre, correo, nacimiento, tipoCedula , noCedula, telefono , direccion , pais, password, conPassword )

        this._listado[tarea.id] =  tarea
    }

    BorrarTarea( id = '' ){
        if(this._listado[id]){
            delete this._listado[id];
        }
    }

    CargarTareasFromArray( tareas = [] ){
        tareas.forEach( tarea => {
            this._listado[tarea.id] = tarea;
        })
    }

    ListadoCompleto(){
        console.log();
        this.listadoArr.forEach( (tarea, i) => {

            const idx = `${i + 1}`.green;
            const {nombre, completadoEn} = tarea;
            const estado = ( completadoEn )
                            ? 'Completada'.green
                            : 'Pendiente'.red;
            console.log(`${ idx } ${ nombre } :: ${ estado }`)
        });
    }

    ListarPendientesCompletadas( Completadas = true){

        console.log();
        let contador = 0;
        this.listadoArr.forEach( tarea => {

            const { nombre, completadoEn } = tarea;
            const estado = ( completadoEn )
                            ? 'Completada'.green
                            : 'Pendiente'.red;
            if( Completadas ){
                // Mostrar Completadas
                if( completadoEn ){
                    contador += 1;
                    console.log(`${ (contador + '.').green } ${ nombre } :: ${ completadoEn.green }`);
                }
            }else{
                // Mostrar Pendientes
                if( !completadoEn ){
                    contador += 1;
                    console.log(`${ (contador + '.').green } ${ nombre } :: ${ estado }`)
                }
            }
        })
    }

    ToggleCompletadas( ids = [] ){

        ids.forEach( id => {

            const tarea = this._listado[id]
            if( !tarea.completadoEn ){
                tarea.completadoEn = new Date().toISOString()
            }
        })

        this.listadoArr.forEach( tarea => {
            if( !ids.includes(tarea.id) ){
                this._listado[tarea.id].completadoEn = null;
            }
        })
    }
}

module.exports = Tareas;