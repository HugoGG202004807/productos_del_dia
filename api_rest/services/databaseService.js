const knex = require('knex');

const databaseService = () => {
    const db = knex({
        client: 'sqlite3',
        connection: {
            filename: 'sqlite.db' // Ruta a tu archivo de base de datos SQLite
        },
        useNullAsDefault: true // Necesario para SQLite
    });

    const table = 'lenguajes';

    const getLenguages = () => {
        return db(table).select();
    };

    const crearLenguaje = (nombre, lanzamiento, tipado_estatico) => {
        return db(table).insert({
            nombre: nombre,
            lanzamiento: lanzamiento,
            tipado_estatico: tipado_estatico
        });
    };

    // Retornar las funciones para interactuar con la base de datos
    return { crearLenguaje, getLenguages };
};

module.exports = {
    databaseService
};
