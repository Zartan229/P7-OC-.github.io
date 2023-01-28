import './style.housing.css'
import Logements from '../../data/logements.json'
import Card from '../Card/Card'
        

export default function Housing() {

    return<> 

    <section className='section2'>

  {  Logements.map(logement => { 
    return <Card id={logement.id} title={logement.title} cover={logement.cover}/>
    
  })
}
    </section>
    </>
  
}
//   export default function Body() {
//     return<> <section className='section1'>
//         <img className='body_presentation' src={img}/>
//         <div className='body_presentation-text'>Chez vous, partout et ailleurs</div>
//     </section>
//     <section className='section2'>

// {    Logements.map(logement => {
//     return(
//              <div className='card'>
//             <h3 className='title'>{logement.title}</h3>
//         </div>
//         )})
// }
       
//     </section>
//     </>
//   }