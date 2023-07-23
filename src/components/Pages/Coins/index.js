import './index.scss';
import { useState,useEffect } from 'react';
import axios from 'axios';

function Coins() {
  const [coinData, setCoinData] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: 'GET',
        url: 'https://coinranking1.p.rapidapi.com/coins',
        params: {
          referenceCurrencyUuid: 'yhjMzLPhuIDl',
          timePeriod: '24h',
          'tiers[0]': '1',
          orderBy: 'marketCap',
          orderDirection: 'desc',
          limit: '10', // select how many coins you want to fetch 
          offset: '0',
        },
        headers: {
          'X-RapidAPI-Key': '4fc7a0a046mshe639402022eb2b2p13e611jsn6d88e3ba564e',
          'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
        },
      };

      try {
        const response = await axios.request(options);
        setCoinData(response.data?.data?.coins || []);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
    <h1>Coins</h1>
  
  </div>
  );
}

export default Coins;
