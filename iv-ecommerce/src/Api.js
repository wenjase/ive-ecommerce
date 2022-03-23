import React, { useEffect, useState } from 'react';
import axios from 'axios';


function Api(props) {
    const URL = 'https://amazon24.p.rapidapi.com/api/category';

    function Apiurl() {
        const [api, setApi] = useState([])
    }

    useEffect(() => {
        axios.get(URL)
        .then((res) => {
            setApi(res.data)
        }) 
    }, [])

    return (
        <div>
            
        </div>
    );
}

export default Api;