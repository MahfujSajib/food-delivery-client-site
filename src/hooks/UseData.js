import React, { useEffect, useState } from 'react';

const useData = () => {
    const [items, setItems] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/items')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setItems(data);
            });
    }, [])

    return [items, setItems]
};

export default useData;