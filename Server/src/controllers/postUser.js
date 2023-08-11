const { where } = require('sequelize');
const { User } = require('../DB_connection');

const postUser = async(req, res) => {  //modelo post que requiere User y where
    try {
        const { email, password } = req.body; // info llega x body

        if (!email || !password) { //si falta algún dato se retorna un error
            return res.status(400).send('Missing Data');
        } else {
            const user = await User.findOrCreate({ //findOrCreate busca si existe y si no, lo crea

                where: {  //where es el que hara la busqueda. El parametro acá es email
                    email,
                    password,
                },
            });

            return res.status(200).json(user) //Se retorna el user, (el created retorna si se creo, o si el email ya existia)
        }
    } catch (error) {
        return res.status(500).json({ error: error.message })
    };

};

module.exports = postUser;