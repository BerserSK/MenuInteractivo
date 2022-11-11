const Ciudad = require("./ciudad")


class Ciudades{
    _listadoC = {}

    get listadoArrC(){
        const listado = []
        Object.keys(this._listadoC).forEach( key =>{
            const ciudad = this._listadoC[key]; 
            listado.push( ciudad );
        });

        return listado;
    }

    constructor(){
        this._listadoC = {}
    }

    CrearCiudad(ciudades = '', pais = ''){
        const ciudad = new Ciudad(ciudades, pais )

        this._listadoC[ciudad.id] = ciudad
    }

    BorrarTarea( id = '' ){
        if(this._listado[id]){
            delete this._listado[id];
        }
    }

    CargarTareasFromArray( ciudades = [] ){
        ciudades.forEach( ciudad => {
            this._listado[ciudad.id] = ciudad;
        })
    }

    ListadoCompleto(){
        console.log();
        this.listadoArrC.forEach( (ciudad, i) => {

            const idx = `${i + 1}`.green;
            const {nombre, completadoEn} = tarea;
            const estado = ( completadoEn )
                            ? 'Con Ciudad'.green
                            : 'Sin Ciudad'.red;
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


module.exports = Ciudades;