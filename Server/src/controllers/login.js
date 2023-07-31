const users = require('../utils/users')

function login(req, res) {
    const { email, password } = req.query; //se recibe por query en este caso. (no se recomienda usar query para login porque no es seguro para proteger informacion sensible)

    const found = users.find((user) => {  //Se usa un find para verificar si existe un user con esos valores
       return user.email === email && user.password === password
    } 
    );

    const access = found ? true : false; // se guarda en access si se encontro o no un user (found) de ser asi, el valor sera ture o false según corresponda

    res.status(200).json({access}) //Se devuelve un json con el valor de access que sera true o false
};

module.exports = login;

