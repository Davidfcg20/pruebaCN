const argv = require('yargs')
    //Base
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla mult'

    })
    .check((argv, options) => {
        if (isNaN(argv.b)){
            throw 'La base tiene que ser un núm'
        }

        return true;
    })
    //Listar
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Muestra la tabla en cosola'

    })
    //Hasta
    .option('h', {
        alias: 'hasta',
        type: 'number',
        demandOption: true,
        describe: 'Es hasta dónde desea multiplicar'
    })

.argv;

module.exports = argv;