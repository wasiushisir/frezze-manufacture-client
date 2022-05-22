import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faCoffee, faGear, faHandshakeAngle, faPeopleGroup, faSackDollar, faScrewdriver, faStar } from '@fortawesome/free-solid-svg-icons'

const BusinessSummary = () => {
    return (
        <div>
            <h2 className='text-primary text-center text-4xl font-bold my-28'>Business Summary</h2>

            <div className='grid grid-cols-1 lg:grid-cols-4 gap-3 px-16 sm:text-center'>

           


            <div>
            <p ><FontAwesomeIcon icon={faPeopleGroup} size="3x"/></p>
            <h1 className='text-4xl'>100+</h1>
            <p>Customer</p>

            </div>

            <div>
            <p ><FontAwesomeIcon icon={faSackDollar} size="3x"/></p>
            <h1 className='text-4xl'>120M+</h1>
            <p>Annual Revenue</p>

            </div>


            <div>
            <p ><FontAwesomeIcon icon={faStar} size="3x"/></p>
            <h1 className='text-4xl'>33K+</h1>
            <p>Reviews</p>

            </div>


            <div>
            <p ><FontAwesomeIcon icon={faGear} size="3x"/></p>
            <h1 className='text-4xl'>50+</h1>
            <p>Tools</p>

            </div>







            </div>
            
        </div>
    );
};

export default BusinessSummary;