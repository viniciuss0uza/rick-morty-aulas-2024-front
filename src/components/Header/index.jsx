// import { Link } from 'react-router-dom'
// import './styles.css'

// export default function Header() {
//     return (
//         <header className='cabecalho'>
//             <h1>Universo Rick Morty</h1>
//             <nav>
//                 <ol>
//                     <Link to="/.">
//                         <li>Home</li>
//                     </Link >
//                     <Link to="/.About">
//                         <li>Sobre</li>
//                     </Link>
//                     <Link to="/.ApiRickAndMorty">
//                         <li>Personagem</li>
//                     </Link>
//                 </ol>
//             </nav>
//         </header>>
//     )
// }
import { Link } from 'react-router-dom'
import './styles.css'

export default function Header() {
    return (
        <header className='cabecalho'>
            <h1>Universo Rick and Morty</h1>
            <nav>
                <ol>
                    <Link to="/">
                        <li>Home</li>
                    </Link>
                    <Link to="/about">
                        <li>Sobre</li>
                    </Link>
                    <Link to="/apiRickAndMorty">
                        <li>Personagens</li>
                    </Link>
                </ol>
            </nav>
        </header>
    )
}