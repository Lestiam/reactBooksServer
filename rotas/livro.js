const { Router } = require("express")
const { getLivros } = require("../controladores/livro")

const router = Router()

router.get('/', getLivros)

router.post('/', (req, res) => {
    res.send('Voce fez uma requisição do tipo POST')
})

router.patch('/', (req, res) => {
    res.send('Voce fez uma requisição do tipo PATCH')
})

router.delete('/', (req, res) => {
    res.send('Voce fez uma requisição do tipo DELETE')
})

module.exports = router //exporta a rota para todos os arquivos que querem usa-lo