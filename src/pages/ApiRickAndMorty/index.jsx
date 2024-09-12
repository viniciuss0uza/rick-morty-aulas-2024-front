import { useState } from 'react'
import './styles.css'

const mockResults = [
...
]

export default function ApiRickAndMorty() {
    const [ conteudo, setConteudo ] = useState(<>Carregando...</>)
    return {info: {}, results: mockResults}

    
}
function buldCards() {
    const consulta = getCharacters()

    return consulta.results.map(personagem => <Card data={personagem}

}

return {
    <div class>
}