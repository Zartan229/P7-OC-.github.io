export default function Card ({id, title, cover }){
    return <div key={id} className='card'>
                <img className='card-image' src={cover} alt="Couverture"/>
            <h3 className='title'>{title}</h3>
        </div>
}
