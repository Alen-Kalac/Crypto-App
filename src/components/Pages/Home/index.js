import './index.scss';
import { useState, useEffect } from 'react';
import axios from 'axios';
import ColumnTitles from '../../Helper/Column-titles';
import SingleCoin from '../../Helper/singleCoin';
import LoadingPage from '../loadingPage';

function Home() {
  const [coinData, setCoinData] = useState([]);
  const [loading, setLoading] = useState(true); // Add a loading state

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
        setLoading(false); // Set loading to false when data is fetched
      } catch (error) {
        console.error(error);
        setLoading(false); // Set loading to false when data is fetched
      }
    };

    fetchData();
  }, []);

  if (loading) { // Display "Loading..." while loading is true
    return <LoadingPage/>;
  }

  return (
    <div className='home-page'>
      <p className='title'>Top 10 <span>List</span> </p>
      <div className="coin-list">
      <ColumnTitles/>
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
