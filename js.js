const {crearArchivo} = require('./mutiplicar');
const argv = require('./config/yargs');
const colors = require('colors');

console.clear();


crearArchivo(argv.b, argv.l, argv.h)
    .then(nameFile => console.log(nameFile, 'creado'.underline.red))
    .catch(err => console.log(err));




