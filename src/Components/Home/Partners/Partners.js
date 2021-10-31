import React from 'react';
import './Partners.css'

const Partners = () => {
    return (
        <div>
            <h1 className='mt-5 partners'>Our Partners</h1>
            <hr />
            <div className='brands'>
                <img className='brands' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOGcV8MFSPYNRhkyGXnsIDPcoPyMpwdLFeKWKZQiMp9MECSbYvHAgPyng2b_7USfZeCXM&usqp.jpg" alt="" />
                <img className='brands' src="https://cdn.dribbble.com/users/467144/screenshots/3088498/media/1131b90e93bc261e4ff8bcfd9f3dcace.png" alt="" width='224px' height='224px' />
                <img className='brands' src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/v1488266135/vw9dwa2fbgqzdmkizszx.jpg" alt="" width='224px' height='224px' />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS--SKVJELtNsXImRjw6H3QwtjKkA2KkXGblh22FxLPbyNcEI_1WTRFUz5DSksyTN2czw8&usqp.jpg" alt="" width='224px' height='224px' />
            </div>
        </div>
    );
};

export default Partners;