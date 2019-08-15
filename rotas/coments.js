const express = require('express');
const router = express.Router();

router.get('/coments/:postid', (req , res) => {
    res.json({
        'titulo': 'Mk Badilari',
        'conteudo': 'Blablabla',
        'autor': 'Mk'
    })
});

module.exports = router;