import React from 'react';
import { useParams } from 'react-router';

const Services = () => {
    const { id } = useParams()
    return (
        <div>
            <div>
                <h2>{id}</h2>
            </div>
        </div>
    );
};

export default Services;