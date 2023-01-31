import './style.card.css'

export default function Card ({id, title, cover }){
    return <a href={'./loging/' + id}><div key={id} value={id} className='card'>
                <img className='card-image' src={cover} alt="Couverture"/>
            <h3 className='title'>{title}</h3>
        </div></a>
}
