const {v4: uuidv4 } = require('uuid')

class Ciudad{
    id = '';
    pais = '';
    ciudades = '';

    constructor( ciudades, pais ){
        this.id = uuidv4();
        this.ciudades = ciudades;
        this.pais = pais;
    }
}

module.exports = Ciudad