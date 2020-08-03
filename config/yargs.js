const opts = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripcion de la tarea'
    }
}

const opts1 = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripcion de la tarea'
    },
    completado: {
        default: true,
        alias: 'c',
        desc: 'Marca como complerado o pendiente la tarea'
    }
}



const argv = require('yargs')

.command('crear', 'Crear un elemento por hacer', opts)
    .command('actualizar', 'Actualiza al estado de completado una tarea', opts1)
    .command('borrar', 'Borra una tarea', opts)
    .help()
    .argv;

module.exports = {
    argv
}