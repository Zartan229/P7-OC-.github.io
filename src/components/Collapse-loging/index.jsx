import Collapse from '../Collapse/Collapse'
import './style.collapseLoging.css'

export default function CollapseLoging({description, equipments}) {
// console.log(description)
console.log(equipments)


    return <section className='section-collapse-loging'>
   <Collapse title="Description" description={description}/>
   <Collapse title="Equipements" description={equipments}/>

</section>

  }