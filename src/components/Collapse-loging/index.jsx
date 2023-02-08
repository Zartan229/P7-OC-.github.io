import Collapse from '../Collapse/Collapse'
import classes from './style.module.css'
import CollapseE from '../CollapseE/index'

export default function CollapseLoging({description, equipments}) {
// console.log(description)
//console.log(description)
//console.log(equipments.toString())
//   const id = equipments.toString()
   //   console.log(bobo)
   // let bobo = id.replace(/(,)/g, <br></br>)
   // console.log(bobo)
 
  //console.log(equipments)
    return <section className={classes.sectionCollapse}>
   <div className={classes.divCollapse}><Collapse  title="Description" description={description} /></div>
   <div className={classes.divCollapse}><CollapseE  title="Equipements" equipments={equipments}/></div>

</section>

}