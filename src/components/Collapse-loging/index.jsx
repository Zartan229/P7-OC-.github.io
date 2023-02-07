import Collapse from '../Collapse/Collapse'
import classes from './style.module.css'

export default function CollapseLoging({description, equipments}) {
// console.log(description)
//console.log(description)
//console.log(equipments.toString())
 const id = equipments.toString().replace(',',  " ");
 //console.log(id)

    return <section className={classes.sectionCollapse}>
   <div className={classes.divCollapse}><Collapse  title="Description" description={description}/></div>
   <div className={classes.divCollapse}><Collapse  title="Equipements" description={equipments}/></div>

</section>

  }