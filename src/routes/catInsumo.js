const {Router} = require('express')

const route = Router()


//Listar todos los datos
//Importando el controlador
const { getCatInsumo, postCatInsumo, putCatInsumo, deleteCatInsumo } = require('../controllers/catInsumo')

route.get('/', getCatInsumo)

route.post('/', postCatInsumo)

route.put('/', putCatInsumo)

route.delete('/', deleteCatInsumo)
// //Consultar un dato
// route.get('/consultarUsuario', (req, res) => {
//     res.json({
//         msg: 'Lista Datos'
//     })
// })

// //Metodo para agregar datos
// route.post('/', (req, res) => {
//     res.json({
//         msg: 'Insercion exitosa'
//     })
// })


module.exports = route 