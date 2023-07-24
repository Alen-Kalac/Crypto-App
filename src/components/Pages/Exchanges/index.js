import "./index.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import ExchangeCard from "../../Helper/ExchangeSingle";
import Pagination from "@mui/material/Pagination";

function Exchanges() {
  const itemsPerPage = 12; // Number of items to show per page
  const [exchangesData, setExchangesData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: "GET",
        url: "https://coinranking1.p.rapidapi.com/coin/Qwsogvtv82FCd/exchanges",
        params: {
          referenceCurrencyUuid: "yhjMzLPhuIDl",
          limit: "999",
          offset: "0",
          orderBy: "24hVolume",
          orderDirection: "desc",
        },
        headers: {
          "X-RapidAPI-Key": "4fc7a0a046mshe639402022eb2b2p13e611jsn6d88e3ba564e",
          "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        setExchangesData(response.data?.data?.exchanges || []);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  // Calculate the index of the first and last item for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = exchangesData.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  return (
    <div className="exchanges-page">
      <div className="exchanges-list">
        {currentItems.map((exchange) => (
          <ExchangeCard
            key={exchange.uuid}
            icon={exchange.iconUrl}
            rank={exchange.rank}
            name={exchange.name}
            price={exchange.price}
            ctabutton={exchange.coinrankingUrl}
          />
        ))}
      </div>
     <div className="pagination">
     <Pagination
        count={Math.ceil(exchangesData.length / itemsPerPage)} // Calculate total number of pages
        page={currentPage}
        onChange={handlePageChange}
        variant="outlined"
        shape="rounded"
      />
     </div>
    </div>
  );
}

export default Exchanges;
