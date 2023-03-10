import './Card.css'

export default function Card(props) {
    return (
        <div className='card'>
            <img src={props.img} alt="images" className="card--image"/>
            <div className='card--stats'>
                <span>{props.rating}</span>
                <span>({props.review_count}).</span>
                <span> {props.country}</span>
            </div>
            <p className='card--title'>
                {props.title}
            </p>
            <p className='card--price'>
                <span className='bold'>{props.price}</span> per person
            </p>
        </div>
    )
}