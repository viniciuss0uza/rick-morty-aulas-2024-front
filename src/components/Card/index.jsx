import '/.styles.css'

export default function Card({ data: personagem }) {
    return (
        <>
            { personagem.name }
            <img src={personagem.image} alt="" />
        </>
    )
}