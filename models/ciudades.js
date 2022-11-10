const Ciudad = require("./ciudad")


class Ciudades{
    _listado = {}

    get listadorArrC(){
        const listado = []
        Object.keys(this._listado).forEach( key =>{
            const ciudad = this._listado[key]
            listado.push( ciudad )
        })

        return listado;
    }

    constructor(){
        this._listado = {}
    }

    crearCiudad(ciudades = '', continente = ''){
        const ciudad = new Ciudad(ciudades, continente)

        this._listado[ciudades.id] = ciudad
    }
}

module.exports = Ciudades;