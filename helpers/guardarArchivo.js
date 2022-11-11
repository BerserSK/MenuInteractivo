const fs = require('fs');

const archivo = './db/data.json'
const archivoObj = './db/dataObj.json'
const archivoCiu = './db/dataCiu.json'

// Crear Json Usuarios
const guardarDB = ( data ) =>{

    fs.writeFileSync(archivo, JSON.stringify(data));
}

//Crear Json Objetos
const guardarDBObj = ( data ) =>{

    fs.writeFileSync(archivoObj, JSON.stringify(data));
}

//Crear Json Ciudades
const guardarDBCiu = ( data ) =>{

    fs.writeFileSync(archivoCiu, JSON.stringify(data));
}

// No Borrar los Datos Ya Guardados de Usuarios
const leerDB = () => {

    if( !fs.existsSync(archivo) ){
        return null;
    }

    const info = fs.readFileSync(archivo, { encoding: 'utf-8'});
    const data = JSON.parse( info );

    return data;
}

// No Borrar los Datos Ya Guardados de Objetos
const leerDBObj = () => {

    if( !fs.existsSync(archivoObj) ){
        return null;
    }

    const info = fs.readFileSync(archivoObj, { encoding: 'utf-8'});
    const data = JSON.parse( info );

    return data;

}

// No Borrar los Datos Ya Guardados de ciudades
const leerDBCiu = () => {

    if( !fs.existsSync(archivoCiu) ){
        return null;
    }

    const info = fs.readFileSync(archivoCiu, { encoding: 'utf-8'});
    const data = JSON.parse( info );

    return data;

}

module.exports = {
    guardarDB,
    leerDB,
    guardarDBObj,
    leerDBObj,
    leerDBCiu,
    guardarDBCiu
}