const express = require('express');
const router = express.Router();

router.get('/posts', (req , res) => {
    res.json({
        'titulo': 'Jack Padarai Badilari',
        'conteudo': 'Blablabla',
        'autor': 'Mk Lima'
    })
});

module.exports = router;