const { Favorite } = require('../DB_connection');

async function postFav(req, res) {

    try {
        const { id, name, origin, status, image, species, gender } = req.body;
        if (!id || !name || !origin || !status || !image || !species || !gender) {
            return res.status(400).send('Missing Data!');
        } else {
            await Favorite.findOrCreate({
                where: {
                    id,
                    name, //se puede declarar solo name, origin...(obj literal)
                    origin,
                    status,
                    image,
                    species,
                    gender,
                }
            }) 

            const allFavorites = await Favorite.findAll();
            
            return res.status(200).json(allFavorites);
        }
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }

};

module.exports = postFav;