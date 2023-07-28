import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './index.scss'
import { SparklinesLine, Sparklines } from 'react-sparklines';
import { Link } from 'react-router-dom';
import {HiOutlineCurrencyDollar} from 'react-icons/hi'
import {BsCurrencyBitcoin} from 'react-icons/bs'
import {BsGraphDown} from 'react-icons/bs'
import {FaDroplet} from 'react-icons/fa6'
import {MdOutlineWaves} from 'react-icons/md'
import {BiSolidBadgeCheck} from 'react-icons/bi'
import {GoVerified} from 'react-icons/go'

function CoinPage() {
  const { uuid } = useParams();
  const [coinData, setCoinData] = useState(null);
  const [btcPrice , setBtcPrice] = useState(0);

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
        setCoinData(response.data.data.coin);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCoinData();
  }, [uuid]);

  useEffect(() => {
    const fetchCoinData = async () => {
      const options = {
        method: 'GET',
        url: `https://coinranking1.p.rapidapi.com/coin/Qwsogvtv82FCd`,
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
        setBtcPrice(response.data.data.coin.price);
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
    <div className='coin-full-page'>
      <div className='coin-title'>
      <div className='coin-title-left'>
      <div>{coinData.rank}</div>
      <div><img style={{width: '50px'}} src={coinData.iconUrl} alt="" /></div>
      <div className='name'>{coinData.name}</div>
      <div>{coinData.symbol}</div>
      <div className='price'>${Number(coinData.price).toLocaleString()}</div>
      </div>

      <div className='coin-links'>
        <Link to='/'><span>Home</span></Link>
        <Link to='/exchanges'><span>Exchanges</span></Link>
      </div>
      </div>

      <div className='under-title'>
        <div className='price-chart'>Price Chart</div>
        <div className='percentage'>24h <span>{coinData.change}%</span></div>
        <div className='high'>High<span>${coinData.allTimeHigh.price.slice(0, 2)  + coinData.allTimeHigh.price.slice(2, 5) + "," + coinData.allTimeHigh.price.slice(6, 10)}</span></div>
      </div>

      <div className='graphic'>
      <Sparklines style={{ width: '100%' }} data={coinData.sparkline.map((el) => el)}>
          <SparklinesLine color="blue" />
        </Sparklines>
      </div>

      <div className="desc-title">
      <div className="value-statistics">
       <h2>Value statistics</h2>
       <p>An overview showing the statistics of Bitcoin, such as the base and</p> <p>quote currency</p> <p>the rank, and trading volume.</p>

       <div className='value-table'>
        <div className='first-row'><span className='icon'><HiOutlineCurrencyDollar /></span> <span>Price to EUR</span>   <span>{Number(coinData.price).toLocaleString()}€</span></div>
        <div className='second-row'><span className='icon'><BsCurrencyBitcoin /></span> <span>Price to BTC</span>  <span>${Number(btcPrice / coinData.price).toLocaleString()}</span></div>
        <div className='third-row'><span className='icon'><BsGraphDown /></span> <span>Rank</span>    <span>#{coinData.rank}</span></div>
        <div className='fourth-row'><span className='icon'><FaDroplet /></span> <span>24 volume</span>    <span>${Number(coinData.price).toLocaleString()}</span></div>
        <div className='fifth-row'><span className='icon'><MdOutlineWaves /></span>  <span>Market cap</span>    <span>${Number(coinData.marketCap).toLocaleString()}</span></div>
        <div className='sixth-row'><span className='icon'><MdOutlineWaves /></span>   <span>Fully diluted market cap</span>   <span>${Number(coinData.marketCap * coinData.price).toLocaleString()}</span></div>
        <div className='seventh-row'><span className='icon'><BiSolidBadgeCheck /></span>   <span>All-time high (daily avg.)</span>   <span>${coinData.allTimeHigh.price.slice(0, 2) +  coinData.allTimeHigh.price.slice(2, 5) + "," + coinData.allTimeHigh.price.slice(6, 10)}</span></div>
       </div>


       <div className="coin-value-description">
         <p className='what-is'>What is {coinData.name}</p>
         <div className='container'>
          <p>{coinData.description}</p>
         </div>
       </div>

      </div>
      <div className="supply-information">
        <h2>Supply information</h2>
        <p>View the total and circulating supply of Bitcoin, including details on how the supplies are calculated.</p>

        <div className='supply-table'>
          <div className='verify-title'>
            <GoVerified />
            <p>Verified supplys</p>
          </div>

          <div className='updated'>Updated 2 minutes ago</div> 
          <div className='total-supply'>Total supply  <span>$ {Number(coinData.supply.total).toLocaleString()}</span></div>
          <div className='max'>Max supply <span>$ {Number(coinData.marketCap).toLocaleString()}</span></div>
          <div className='total-supply2'>Total supply  <span>$ {Number(coinData.price).toLocaleString()}</span></div>
        </div>

      </div>
      </div>
      
    </div>
  );
}

export default CoinPage;
