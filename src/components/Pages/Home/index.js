import './index.scss';
import { useState,useEffect } from 'react';
import axios from 'axios';
import SingleCoin from '../../Helper/singleCoin';

function Home() {
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
          limit: '10',
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
    <div className='HomePage'>
    <h1>Top 10 Coins</h1>
      <div className="coin-list">
      {coinData.map((coin) => (
       <SingleCoin key={coin.uuid}
       uuid={coin.uuid}
       rank={coin.rank}
       iconUrl={coin.iconUrl}
       name={coin.name}
       price={coin.price}
       hVolume={coin["24hVolume"]}
       marketCap={coin.marketCap}
       sparkline={coin.sparkline.map((coin) => coin)}
      //  onClick={() => toggleFavoriteCoint(coin)}
       coinData={coin} />
      ))}
      </div>
  </div>
  );
}

export default Home;
