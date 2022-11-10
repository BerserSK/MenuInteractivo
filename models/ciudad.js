const {v4: uuidv4 } = require('uuid')

class Ciudad{
    id = '';
    ciudades = '';
    continente = '';

    constructor( ciudades){
        this.id = uuidv4();
        this.ciudades = ciudades;
    }
}

module.exports = Ciudad