const Ciudad = require("./ciudad")


class Ciudades{
    _listadoC = {}

    get listadorArrC(){
        const listado = []
        Object.keys(this._listadoC).forEach( key =>{
            const ciudad = this._listadoC[key]
            listado.push( ciudad )
        })

        return listado;
    }

    constructor(){
        this._listadoC = {}
    }

    crearCiudad(ciudades = ''){ 
        const ciudad = new Ciudad(ciudades)

        this._listadoC[ciudades.id] = ciudad
    }
}

module.exports = Ciudades;