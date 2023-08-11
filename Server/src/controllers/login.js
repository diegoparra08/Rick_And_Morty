const { User } = require('../DB_connection');

async function login(req, res) {

    try {
        const { email, password } = req.query;

        if (!email || !password) {  //verifica que haya llegado toda la info
            return res.status(400).send('Missing Data');
        } else {
            const response = await User.findOne({ //busca si el email existe
                where: {
                    email: email
                }
            });

            if (!response) { //si no existe el email, retorna error
                return res.status(404).send('User Not Found!')
            } else {
                // bcrypt
                // .compareSync(
                //     password,
                //     response['dataValues']['password']
                //     )
                //     ?  console.log("Passwords Match")
                //el código arriba se usa para comparar la contraseña
                //Si se hace el cifrado en User.js
                return response.password === password ? //si existe el email compara la password
                    res.status(200).json({ access: true }) : //setea el access en true
                    res.status(403).send('Wrong Password!');
            }
        }

    } catch (error) {
        return res.status(500).json({error: error.message})
    }
};

module.exports = login;