const Objeto = require("./objeto");

class Objetos{
    _listado = {}

    get listadorArrO(){
        const listado = []
        Object.keys(this._listado).forEach(key =>{
            const objeto = this._listado[key];
            listado.push( objeto )
        })

        return listado;
    }

    constructor(){
        this._listado = {}
    }

    crearObjeto(nombreO = '', desc = '', cant = ''){
        const objeto = new Objeto(nombreO, desc, cant)

        this._listado[objeto.id] = objeto
    }

    BorrarTarea( id = '' ){
        if(this._listado[id]){
            delete this._listado[id];
        }
    }

    CargarTareasFromArray( objetos = [] ){
        objetos.forEach( objeto => {
            this._listado[objeto.id] = objeto;
        })
    }

    ListadoCompleto(){
        console.log();
        this.listadorArrO.forEach( (objeto, i) => {

            const idx = `${i + 1}`.green;
            const {nombreO, completadoEn} = objeto;
            const estado = ( completadoEn )
                            ? 'Con Ciudad'.green
                            : 'Sin Ciudad'.red;
            console.log(`${ idx } ${ nombreO } :: ${ estado }`)
        });
    }

    ListarPendientesCompletadas( Completadas = true){

        console.log();
        let contador = 0;
        this.listadorArrO.forEach( objeto => {

            const { nombreO, completadoEn } = objeto;
            const estado = ( completadoEn )
                            ? 'Completada'.green
                            : 'Pendiente'.red;
            if( Completadas ){
                // Mostrar Completadas
                if( completadoEn ){
                    contador += 1;
                    console.log(`${ (contador + '.').green } ${ nombreO } :: ${ completadoEn.green }`);
                }
            }else{
                // Mostrar Pendientes
                if( !completadoEn ){
                    contador += 1;
                    console.log(`${ (contador + '.').green } ${ nombreO } :: ${ estado }`)
                }
            }
        })
    }

    ToggleCompletadas( ids = [] ){

        ids.forEach( id => {

            const objeto = this._listado[id]
            if( !objeto.completadoEn ){
                objeto.completadoEn = new Date().toISOString()
            }
        })

        this.listadoArr.forEach( objeto => {
            if( !ids.includes(objeto .id) ){
                this._listado[objeto.id].completadoEn = null;
            }
        })
    }
}

module.exports = Objetos