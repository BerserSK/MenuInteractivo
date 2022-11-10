const {v4: uuidv4 } = require('uuid')

class Ciudad{
    id = '';
    ciudades = '';
    continente = '';

    constructor( ciudades, continente){
        this.id = uuidv4();
        this.ciudades = ciudades;
        this.continente = continente;
    }
}

module.exports = Ciudad