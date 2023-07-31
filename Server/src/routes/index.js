const { Router } = require('express'); //necesario para poder usar el router abajo.
const  getCharById = require('../controllers/getCharById')
const login  = require('../controllers/login')
const { postFav, deleteFav } = require('../controllers/handleFavorites')

const router = Router();  //para hacer las rutas se necesita de Router de express

router.get("/character/:id", getCharById);  //el router da el tipo de request a cada ruta. get(ruta que que recibira, controller que quiere ejecutar con esa acción)
router.get("/login", login);
router.post("/fav", postFav); //en este caso viene la ruta post. Body solo funciona con post y put
router.delete("/fav/:id", deleteFav); 

module.exports = router;
