import './Hero.css'
import pics from './Group 77.png'

export default function Hero() {
    return (
        <div className="Hero">
            <img src={pics} alt='collection' className= "hero--img" />
            <h1 className= "hero--h1">
                Online Experiences
            </h1>
            <p className= "hero--h3">
                Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
            </p>
        </div>

    )
}