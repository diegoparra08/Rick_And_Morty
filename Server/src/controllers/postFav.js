const { Favorite } = require('../DB_connection');

async function postFav(req, res) {

    try {
        const { id, name, origin, status, image, species, gender } = req.body;
        console.log(req.body);
        if (!name || !origin || !image ||!status || !species || !gender) {
            return res.status(401).send('Missing Data!');
        } else {
           const response = await Favorite.findOrCreate({
                where: {
                    id: id,
                    name, //se puede declarar solo name, origin...(obj literal)
                    origin: origin,
                    status: status,
                    image: image,
                    species: species,
                    gender: gender,
                }
                
            }) 
            console.log(response);
            const allFavorites = await Favorite.findAll();
            
            return res.status(200).json(allFavorites);
        }
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }

};

module.exports = postFav;