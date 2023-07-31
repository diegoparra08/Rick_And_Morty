let myFavorites = [];

function postFav(req, res){
const favorite = req.body; //se recibe lo que viene en body.

myFavorites.push(favorite)  //se agrega un  personaje al myFavorites.
res.status(200).json(myFavorites)   //retorna la res
};

function deleteFav(req, res){
const { id } = req.params;  //Se recibe de params

myFavorites = myFavorites.filter((favorite) => favorite.id !== Number(id));  //en myFavorites se guardara el resultado del filter sin el id que queremos borrar
res.status(200).json(myFavorites) // se retona el status de success y se devuelve el nuevo myFavorites despues de modificado.
}; 


module.exports = { postFav, deleteFav };