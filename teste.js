const fs = require("fs") //fs significa file system

const dadosAtuais = JSON.parse(fs.readFileSync("livros.json"))
const novoDado = { id: '3', nome: 'Livro mais que demais' }

fs.writeFileSync("livros.json", JSON.stringify([...dadosAtuais, novoDado])) //coloca nessa lista tudo que tem nos dados atuais e mais o novo dado

console.log(JSON.parse(fs.readFileSync("livros.json")))