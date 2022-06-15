const fs = require('fs');

const crearArchivo = async (base, listar, hasta) => {

    try{

        let salida = '';
    
        for(let i = 1; i <= hasta; i++){
            salida += `${base} x ${hasta} = ${base * i}\n`;
        }

        if(listar) {

            console.log('===================');
            console.log('   Tabla de: ', base);
            console.log('===================');

            console.log(salida);
        }

        fs.writeFileSync(`tabla-${base}.txt`, salida);
    
        return `tabla-${base}.txt`;

    } catch (err) {

        throw err;
    }

}

module.exports = {
    crearArchivo,
}

