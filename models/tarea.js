const { v4: uuidv4 } = require('uuid');

class Tarea{
    id = '';
    nombre = '';
    correo = '';
    nacimiento = '';
    tipoCedula = '';
    noCedula = '';
    telefono = '';
    direccion = '';
    pais = '';

    constructor( nombre, correo, nacimiento, tipoCedula, noCedula, telefono, direccion, pais ){
        this.id = uuidv4();
        this.nombre = nombre;
        this.correo = correo;
        this.nacimiento = nacimiento;
        this.noCedula = noCedula;
        this.tipoCedula = tipoCedula;
        this.telefono = telefono;
        this.direccion = direccion;
        this.pais = pais;
    }
}

module.exports  = Tarea