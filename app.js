const express = require("express")
const rotaLivro = require("./rotas/livro")
const cors = require("cors")

const app = express()
app.use(express.json()) //essa linha indica que minha aplicação aceita receber bodys do tipo Json
app.use(cors({origin: "*"}))

app.use('/livros', rotaLivro)

const port = 8000

app.listen(port, () => {
    console.log(`Escutando a porta ${port}`)
})