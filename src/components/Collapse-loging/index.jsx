import Collapse from '../Collapse/Collapse'
import classes from './style.module.css'
import CollapseEquipments from '../CollapseEquipments/index'

export default function CollapseLoging({description, equipments}) {

    return <section className={classes.sectionCollapse}>
   <div className={classes.divCollapse}><Collapse  title="Description" description={description} /></div>
   <div className={classes.divCollapse}><CollapseEquipments  title="Equipements" equipments={equipments}/></div>

</section>

}