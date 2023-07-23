import "./index.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import ExchangeCard from "../../Helper/ExchangeSingle";

function Exchanges() {
  const [exchangesData, setExchangesData] = useState([]);

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
          "X-RapidAPI-Key":
            "4fc7a0a046mshe639402022eb2b2p13e611jsn6d88e3ba564e",
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
  return (
    <div>
      <ul>
        {exchangesData.map((exchange) => (
          <ExchangeCard key={exchange.uuid}
            icon={exchange.iconUrl}
            rank={exchange.rank}
            name={exchange.name}
            price={exchange.price}
            ctabutton={exchange.coinrankingUrl}
          />
        ))}
      </ul>
    </div>
  );
}

export default Exchanges;
