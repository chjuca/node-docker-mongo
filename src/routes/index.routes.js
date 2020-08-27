const { Router } = require('express')
const router = Router();


router.get('/', (req, res) => {
    res.send("<h1>Ruta Index</h1><br><p>Funcionando...</p>")
})

module.exports = router;