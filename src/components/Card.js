
import { useState } from 'react';
import './Card.css'

function Card({ id, name, image, info, price, removeTour}) {
    const [readMore, setReadMore] = useState(false);
    const description =  readMore ? info : `${info.substring(0, 200)}....` ;
    function readMorehandler() {
        setReadMore(!readMore)
    }
    return (

        <div className='card'>
            <img src={image} className='image' />

            <div className='tour-info'>
                <div className='tour-details'>
                    <h4 className='tour-price'>₹ {price}</h4>
                    <h4 className='tour-name'>{name}</h4>
                </div>

                <div className='description'>
                    {description}
                    <span className='read-more' onClick={readMorehandler}>
                        {readMore ? 'Show less' : 'Read more'}
                    </span>
                </div>
            </div>

            <button className='btn-red' onClick={() => removeTour(id)}>
                Not Interested
                </button>
        </div>
    )

}

export default Card;