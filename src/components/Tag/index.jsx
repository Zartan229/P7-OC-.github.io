import './style.tag.css'

export default function Tag({tags, location, ratings, title}) {

    return<section className='sectionTags'>
        <h3 className='titleTags'>{title}</h3>
        <h4>{location}</h4>
        <div>{tags}</div>
        <div>{ratings}</div>
        <div>img et duma</div>
    </section>
  
}