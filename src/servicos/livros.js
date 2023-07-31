import axios from "axios";

//É só uma referencia para api, não é ela de verdade
const livrosAPI = axios.create({baseURL: "http://localhost:8000/livros"})

function getLivros() {
    const response = livrosAPI.get('/')
    // o = livrosAPI.get faz o request QUE DEVOLVE UMA response!

    return response.data
}

export {
    getLivros
}