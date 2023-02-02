import Collapse from '../Collapse/Collapse'
import './style.collapseLoging.css'

export default function CollapseLoging({description, equipments}) {
// console.log(description)
console.log(description)
console.log(equipments.toString())
 const id = equipments.toString().replace(',',  " ");
 console.log(id)

    return <section className='section2-about'>
   <Collapse  title="Description" description={description}/>
   <Collapse  title="Equipements" description={equipments}/>

</section>

  }