import axios from 'axios';
import './index.scss';
import { useState,useEffect } from 'react';
import SingleCoin from '../../Helper/singleCoin';
import ColumnTitles from '../../Helper/Column-titles';

function Favorites() {
  const [uuids, setUuids] = useState([]);
  const [coinData, setCoinData] = useState([]);


// Retrieve the data from local storage
useEffect(() => {
  const dataFromLocalStorage = localStorage.getItem('favouriteCoins');
  if (dataFromLocalStorage) {
    setUuids(JSON.parse(dataFromLocalStorage));
  }
}, []);


  useEffect(() => {
    const fetchData = async () => {
      const coinDataArray = [];

      for (const item of uuids) {
        const options = {
          method: 'GET',
          url: `https://coinranking1.p.rapidapi.com/coin/${item.uuid}`,
          params: {
            referenceCurrencyUuid: 'yhjMzLPhuIDl',
            timePeriod: '24h',
          },
          headers: {
            'X-RapidAPI-Key': '4fc7a0a046mshe639402022eb2b2p13e611jsn6d88e3ba564e',
            'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
          },
        };

        try {
          const response = await axios.request(options);
          coinDataArray.push(response.data?.data?.coin || {});
        } catch (error) {
          console.error(error);
        }
      }

      setCoinData(coinDataArray);
    };

    if (uuids.length >= 0) {
      fetchData();
    }
  }, [uuids]);

  return (
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
  );
}

export default Favorites;
