import classes from './style.module.css'
import Logements from '../../data/logements.json'
import Card from '../Card/Card'
        


export default function Housing() {

    return<> 

    <section className={classes.section2}>

  {  Logements.map((logement, key) => { 
    return <Card key={key} id={logement.id} title={logement.title} cover={logement.cover}/>
    
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