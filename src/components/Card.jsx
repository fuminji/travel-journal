import PropTypes from 'prop-types';
import { BsGeoAltFill } from "react-icons/bs";



function Card(props) {
  return (
    <div className='card-container'>
        <img src={props.imageUrl} className='card-img'/>
        <div className='card-second-container'>
            <div className='card-loc-url'>
                <BsGeoAltFill className='geo' />
                <h4 className='card-location'>{props.location}</h4>
                <a className='card-url' href={props.googleMapsUrl}>View on Google Maps</a>
            </div>
            <h1 className='card-title'>{props.title}</h1>
            <h3 className='date'>{props.startDate} - {props.endDate}</h3>
            <p>{props.description}</p>
        </div>
    </div>
  )
}

Card.propTypes = {
    imageUrl: ['source'],
    location: PropTypes.string,
    googleMapsUrl: PropTypes.string,
    title: PropTypes.string,
    startDate: PropTypes.string,
    endDate: PropTypes.string,
    description: PropTypes.string
}

export default Card