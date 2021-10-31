import React, { useEffect, useState } from 'react';

const useData = () => {
    const [items, setItems] = useState([])
    useEffect(() => {
        fetch('https://gory-cheateau-60665.herokuapp.com/items')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setItems(data);
            });
    }, [])

    return [items, setItems]
};

export default useData;