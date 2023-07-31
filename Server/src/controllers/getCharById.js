const axios = require('axios');


const URL_BASE = "https://rickandmortyapi.com/api/character";

async function getCharById(req, res) {   
    const { id: charId } = req.params;  //se recibe por params el id para poder trabajar con el. 
    //el id que viene de paramas entra en conflicto con el id que se saca de la response aca. por eso es necesario 
    //cambiarle de nombre para poder llamarlo sin causar errores.
 
    try {
        const response = await axios(`${URL_BASE}/${charId}`); //se pide una respuesta al api usando await
        const { id, name, gender, species, origin, image, status } = response.data;   //se hace estructuring y se manda res
        response.data.name ? res.status(200).json({ id, name, gender, species, origin, image, status }) : 
        res.status(404).send("Not Found") //este error es de success pero de no encontrado.

} catch (error) {
    res.status(500).json({ error: error.message })  //el catch maneja el error de la peticion
}
}
module.exports =  getCharById;



//! Forma de hacerlo sin async await. 

   // axios(`${URL_BASE}/${id}`)  //Axios es mejor para el backend.
    //     .then((response) => {  
    //         const { id, name, gender, species, origin, image, status } = response.data; //destructuring de la response.data
    //         response.data.name ? res.status(200).json({ id, name, gender, species, origin, image, status }) :  //verifica si esta el nombre del char y lo renderiza
    //             res.status(404).send("Not Found")  //si no está, devuleve exito 404, not found
    //     }).catch((error) => {  //si hay error hace un catch con el error
    //         res.status(500).json({ error: error.message })
    //     })