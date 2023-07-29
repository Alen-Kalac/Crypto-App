import React, { useState, useEffect } from 'react';
import './index.scss';
import axios from 'axios';
import ProfileSingleItem from '../../Helper/ProfileSingleItem/ProfileSingleItem';
import LoadingPage from '../loadingPage';

function MyProfile() {
  const [showModal, setShowModal] = useState(false);
  const [checkedItems, setCheckedItems] = useState([]);
  const [amounts, setAmounts] = useState({});
  const [addedItems, setAddedItems] = useState([]);
  const [coinData, setCoinData] = useState([]);
  const [isLoading,setIsLoading] = useState(true)

  const handleClose = () => setShowModal(false);
  const handleSuccess = () => {
    console.log("Success");
    setShowModal(false);
    setAddedItems([...checkedItems]);
  };

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
          limit: '20',
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
        setIsLoading(false)
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    if (checked) {
      setCheckedItems((prevCheckedItems) => [...prevCheckedItems, name]);
    } else {
      setCheckedItems((prevCheckedItems) =>
        prevCheckedItems.filter((item) => item !== name)
      );
    }
  };

  const handleAmountChange = (event, name) => {
    const { value } = event.target;
    setAmounts((prevAmounts) => ({ ...prevAmounts, [name]: value }));
  };

  if (isLoading) { // Display "Loading..." while loading is true
    return <LoadingPage/>;
  }
  return (
    <>
      <div className='full-page-profile'>
        <div className='left-side'>
          <p>Buy Bitcoin<br /> & Crypto</p>
          <div className='profile-description'>Sign up today and <span>buy 50+</span> <br /> cryptotocurrencies in <br /> minutes <br />Get started with as little as <br /> <span>$10</span></div>
          <button onClick={() => setShowModal(true)}>Crypto Wallet</button>

          {addedItems.length > 0 && (
            <div className='selected-items'>
              <h3>Selected Crypto :</h3>
              <ul>
                {addedItems.map((item) => (
                  <li key={item}>
                    {item} - {amounts[item] || 0} $
                  </li>
                ))}
              </ul>
            </div>
          )}

          {showModal && (
            <div className='modal'>
              <div className='modal-content'>
                <div className='modal-items'>
                  <div className='profile-item-title'>
                    <span className='rank-title'>Rank</span>
                    <span className='name-title'>Name</span>
                    <span className='price-title'>Price</span>
                    <span className='market-cap-title'>MarketCap</span>
                    <span className='check-title'>Check</span>
                    <span className='amount-title'>Amount</span>
                  </div>
                  {coinData.map((coin) => (
                    <div style={{ width: '70vw', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }} key={coin.uuid}>
                      <ProfileSingleItem
                        uuid={coin.uuid}
                        rank={coin.rank}
                        iconUrl={coin.iconUrl}
                        price={coin.price}
                        marketCap={coin.marketCap}
                      />
                      <input
                        className='checkbox'
                        type="checkbox"
                        name={coin.name}
                        onChange={handleCheckboxChange}
                      />
                      <input
                        className='amount'
                        type="number"
                        value={amounts[coin.name] || ""}
                        onChange={(event) => handleAmountChange(event, coin.name)}
                      />
                    </div>
                  ))}
                </div>
                <div className='modal-footer'>
                  <button onClick={handleSuccess}>Add</button>
                  <button onClick={handleClose}>Cancel</button>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className='right-side'>
          <img src='https://i.postimg.cc/wjZfpsYF/Crypto-portfolio-rafiki.png' alt="" />
        </div>
      </div>

    </>
  );
}

export default MyProfile;
