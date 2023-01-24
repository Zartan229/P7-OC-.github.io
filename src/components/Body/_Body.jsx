import '../../styles/_Body-m.css'
import img from '../../images/pres.png'
import Logements from '../../data/logements.json'
        

export default function Body() {

    return<> <section className='section1'>
        <img className='body_presentation' src={img} alt="Présentation"/>
        <div className='body_presentation-text'>Chez vous, partout et ailleurs</div>
    </section>
    <section className='section2'>

{    Logements.map(logement => {
    return(
             <div key={logement.id} className='card'>
                <img className='card-image' src={logement.cover} alt="Couverture"/>
            <h3 className='title'>{logement.title}</h3>
        </div>
        )})
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