const { Router } = require('express');

const {usuarioGet} = require('../controllers/usuario');

const router = Router();

router.get('/',usuarioGet ); 

/*
router.put('/',  (req, res)=> {
    res.status(201).json({
        msg :'put API'
    })
}); 

router.post('/',  (req, res)=> {
    res.status(201).json({
        msg :'post API'
    })
}); 

router.delete('/',  (req, res)=> {
    res.status(201).json({
        msg :'delete API'
    })
}); 
*/


module.exports = router();
