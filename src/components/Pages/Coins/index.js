import './index.scss';
import { useState, useEffect } from 'react';
import axios from 'axios';
import SingleCoin from '../../Helper/singleCoin';
import Pagination from '@mui/material/Pagination';
import ColumnTitles from '../../Helper/Column-titles';


function Coins() {
  const itemsPerPage = 12; // Number of items to show per page
  const [coinData, setCoinData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
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
          limit: '100',
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

  // Filter the coinData based on the search term and names
  const filteredCoins = coinData.filter((coin) =>
    coin.name.toLowerCase().startsWith(searchTerm.toLowerCase())
  );

  // Check if the entered letter exists in the 'name' of any coin
  const letterFound = filteredCoins.length > 0;

  // Calculate the index of the first and last item for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredCoins.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1); // Reset to the first page when searching
  };

  if (loading) { // Display "Loading..." while loading is true
    return <div>Loading...</div>;
  }

  return (
    <div className='full-page-coins'>

      <div className='input-bar'>
      <input
        type="text"
        placeholder='Seacrh Cryptos'
        value={searchTerm}
        onChange={handleSearch}
      />
      </div>

       <ColumnTitles/>
      {letterFound ? (
        <>
          {currentItems.map((coin) => (
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
              // onClick={() => toggleFavoriteCoint(coin)}
              coinData={coin}
            />
          ))}
          <div className="pagination">
            <Pagination
            count={Math.ceil(filteredCoins.length / itemsPerPage)} // Calculate total number of pages
            page={currentPage}
            onChange={handlePageChange}
            variant="outlined"
            shape="rounded"
          />
          </div>
          
        </>
      ) : (
        <p>No matching coins found.</p>
      )}
    </div>
  );
}

export default Coins;
