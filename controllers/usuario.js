const {response} = require('express');

const usuarioGet = (req, res=response)=> {
    res.status(201).json({
        msg :'get API'
    });
}


module.exports = {
                 usuarioGet

}
