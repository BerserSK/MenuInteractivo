const { v4: uuidv4 } = require('uuid');

class Objeto{
    id = '';
    nombreO = '';
    desc = '';
    cant = '';

    constructor( nombreO, desc, cant){
        this.id = uuidv4();
        this.nombreO = nombreO;
        this.desc = desc;
        this.cant = cant;
    }
}

module.exports = Objeto;