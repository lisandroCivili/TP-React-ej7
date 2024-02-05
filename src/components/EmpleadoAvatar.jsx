import React from 'react';
import imgMujer from '../img/avatar-mujer.jpg'
import imgVaron from '../img/avatar-varon.jpg'
const EmpleadoAvatar = ({foto}) => {

    return (
        <div className='w-25'>
            {console.log(foto)}
            <img className='w-100' src={foto === "mujer" ? imgMujer : imgVaron} />
        </div>
    );
};

export default EmpleadoAvatar;