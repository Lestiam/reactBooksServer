const { getTodosLivros, getLivroPorId, insereLivro, modificaLivro, deletaLivroPorId } = require("../servicos/livro")

function getLivros(req, res) {
    try {
        const livros = getTodosLivros()
        res.send(livros)        
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
} //requisição e resposta)

function getLivro(req, res) {
    try {
        const id = req.params.id //aqui eu pego o parametro do id

        if(id && Number(id)) { //se for um id e se o id for um numero...
            //Number(2) -> 2 -> true
            //Number("batata") -> NaN (Not a Number) -> false
            const livro = getLivroPorId(id)
            res.send(livro)
        } else {
            res.status(422)
            res.send("Id inválido")
        }

    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
} //requisição e resposta)

function postLivro(req, res) {
    try {
        const livroNovo = req.body

        if(req.body.nome) { //verifico se o campo nome está preenchido
            insereLivro(livroNovo)
            res.status(201) //201 é o status de criado
            res.send("Livro inserido com sucesso")
        } else {
            res.status(422)
            res.send("O campo nome é obrigatório")
        }

    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function patchLivro(req, res) {
    try {
        const id = req.params.id //primeiro e pego o id

        if(id && Number(id)) { //depois valido se o mesmo é válido
            const body = req.body
            modificaLivro(body, id)
            res.send("Item modificado com sucesso")
        } else {
            res.status(422)
            res.send("Id inválido")
        }

    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function deleteLivro(req, res) {
    try {
        const id = req.params.id

        if(id && Number(id)) {
            deletaLivroPorId(id)
            res.send("Livro deletado com sucesso")
        } else {
            res.status(422)
            res.send("Id inválido")
        }

    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    getLivros,
    getLivro,
    postLivro,
    patchLivro,
    deleteLivro
}