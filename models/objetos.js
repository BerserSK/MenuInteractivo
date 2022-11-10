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
}

module.exports = Objetos