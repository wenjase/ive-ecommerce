import React, { useEffect, useState } from 'react';
import axios from 'axios';


function Api(props) {
    const options = {
        method: 'GET',
        url: 'https://amazon24.p.rapidapi.com/api/category', 
        params: {country: 'US'},
        headers: {
          'X-RapidAPI-Host': 'amazon24.p.rapidapi.com',
          'X-RapidAPI-Key': '8a6d4f5979mshfb5d4e6ef24db94p124d4ajsn9ac4365e7841'
        }
      };
      
      axios.request(options).then(function (response) {
          console.log(response.data);
      }).catch(function (error) {
          console.error(error);
      });


    return (
        <div>
            <section className='container'>
                {options.map((name, id) => {
                    <h2>{options.name}</h2>
                })}
            </section>
        </div>
    );
}

export default Api;