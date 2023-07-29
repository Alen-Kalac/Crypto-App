import axios from 'axios';
import './index.scss';
import { useContext, useEffect, useState } from 'react';
import SingleCoin from '../../Helper/singleCoin';
import ColumnTitles from '../../Helper/Column-titles';
import { appContext } from '../../../Context'; // Update the path accordingly
import LoadingPage from '../loadingPage'

function Favorites() {
  const { favouriteCoins } = useContext(appContext);
  const [coinData, setCoinData] = useState([]);
  const [loading, setLoading] = useState(true); // Add a loading state


  // Fetch data when favouriteCoins change
  useEffect(() => {
    const fetchData = async () => {
      const coinDataArray = [];

      for (const item of favouriteCoins) {
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
          setLoading(false); // Set loading to false when data is fetched
        } catch (error) {
          console.error(error);
          setLoading(false); // Set loading to false when data is fetched
        }
      }

      setCoinData(coinDataArray);
    };

    if (favouriteCoins.length >= 0) {
      fetchData();
    }
  }, [favouriteCoins]);

  if (loading) { // Display "Loading..." while loading is true
    return <LoadingPage/>;
  }
  return (
    <div className="favorites-page">
      <div className="title">Your favorites</div>
      <div className="coin-list">
      <ColumnTitles />
      {coinData.map((coin) => (
        <SingleCoin
          key={coin.uuid}
          uuid={coin.uuid}
          rank={coin.rank}
          iconUrl={coin.iconUrl}
          name={coin.name}
          price={coin.price}
          hVolume={coin['24hVolume']}
          marketCap={coin.marketCap}
          sparkline={coin.sparkline.map((coin) => coin)}
          coinData={coin}
        />
      ))}
      
    </div>
    </div>
  );
}

export default Favorites;
