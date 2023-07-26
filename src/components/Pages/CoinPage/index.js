import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function CoinPage() {
  const { uuid } = useParams();
  const [coinData, setCoinData] = useState(null);

  useEffect(() => {
    const fetchCoinData = async () => {
      const options = {
        method: 'GET',
        url: `https://coinranking1.p.rapidapi.com/coin/${uuid}`,
        params: {
          referenceCurrencyUuid: 'yhjMzLPhuIDl',
          timePeriod: '24h'
        },
        headers: {
          'X-RapidAPI-Key': '4fc7a0a046mshe639402022eb2b2p13e611jsn6d88e3ba564e',
          'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
        }
      };

      try {
        const response = await axios.request(options);
        setCoinData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCoinData();
  }, [uuid]);

  if (!coinData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Coin Page for UUID: {uuid}</h1>
      
      <div>Name: {coinData?.data?.coin?.name}</div>
      <div>Symbol: {coinData?.data?.coin?.symbol}</div>
     
    </div>
  );
}

export default CoinPage;
