import './index.scss';
import React, { useContext, useState } from 'react';
import { SparklinesLine, Sparklines } from 'react-sparklines';
import { appContext } from '../../../Context';
import { AiFillCalculator } from 'react-icons/ai';
import {RiCloseFill} from 'react-icons/ri'
import { Link } from 'react-router-dom';
import { Toaster,toast} from 'react-hot-toast';

function SingleCoin({
  uuid,
  rank,
  iconUrl,
  name,
  price,
  hVolume,
  marketCap,
  sparkline,
}) {
  const { favouriteCoins, setFavouriteCoins } = useContext(appContext);
  const [result, setResult] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState({ name: '', iconUrl: '', price: 0 });

  const handleOpenModal = (coinName, coinIconUrl, coinPrice) => {
    setModalData({ name: coinName, iconUrl: coinIconUrl, price: coinPrice });
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setResult(0)
    setQuantity(0)
  };

  const handleAddToFavorites = () => {
    // Check if the coin is already in favorites using its UUID
    const isCoinInFavorites = favouriteCoins.some((coin) => coin.uuid === uuid);

   
    
    if (isCoinInFavorites) {
      // If the coin is already in favorites, remove it from the list
      const updatedFavorites = favouriteCoins.filter((coin) => coin.uuid !== uuid);
      setFavouriteCoins(updatedFavorites);
      toast.success('Coin sucessfully removed to favorites !', {
        style: {
          border: '1px solid #124E78',
          padding: '16px',
          color: '#124E78',
          boxShadow:"none"
        },
        iconTheme: {
          primary: '#124E78',
          secondary: '#FFFAEE',
        },
      });
    } else {
      // If the coin is not in favorites, add it to the list
      setFavouriteCoins((prevFavorites) => [...prevFavorites, { uuid }]);

      toast.success('Coin sucessfully added to favorites !', {
        style: {
          border: '1px solid #124E78',
          padding: '16px',
          color: '#124E78',
          boxShadow:"none"
        },
        iconTheme: {
          primary: '#124E78',
          secondary: '#FFFAEE',
        },
      });
    }

  };

  const handleQuantityChange = (event) => {
    const newQuantity = event.target.value;
    setQuantity(newQuantity);
    const calculatedResult = newQuantity * modalData.price;
    setResult(calculatedResult);
  };

  const isCoinInFavorites = favouriteCoins.some((coin) => coin.uuid === uuid);

  return (
    <div className="coin-description" key={uuid}>
      <Toaster 
      position="bottom-left"
      
      />
      <div className="coin-rank">{rank}.</div>
      <div className="coin-icon">
        <Link to={`/${uuid}`}>
          <img style={{ width: '50px' }} src={iconUrl} alt="" />
        </Link>
      </div>
      <div className="coin-name">
      <Link to={`/${uuid}`}>
        <b>{name}</b>
      </Link>
        </div>
      <div className="coin-price">${Number(price).toLocaleString()}</div>
      <div className="coin-24hVolume">${Number(hVolume).toLocaleString()}</div>
      <div className="coin-marketCap">${Number(marketCap).toLocaleString()}</div>
      <div className="coin-graph">
        <Sparklines style={{ width: '200px' }} data={sparkline.map((el) => el)}>
          <SparklinesLine color="blue" />
        </Sparklines>
      </div>
      <div className='favorite' onClick={handleAddToFavorites} >

        {isCoinInFavorites ?
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5C13 20.5 14 19.7294 15.0383 18.9109C17.9806 16.5914 22 14 22 9.1371C22 4.27416 16.4998 0.825464 12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371Z" fill="#ff475a"></path> </g></svg>
          :
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M5.62436 4.4241C3.96537 5.18243 2.75 6.98614 2.75 9.13701C2.75 11.3344 3.64922 13.0281 4.93829 14.4797C6.00072 15.676 7.28684 16.6675 8.54113 17.6345C8.83904 17.8642 9.13515 18.0925 9.42605 18.3218C9.95208 18.7365 10.4213 19.1004 10.8736 19.3647C11.3261 19.6292 11.6904 19.7499 12 19.7499C12.3096 19.7499 12.6739 19.6292 13.1264 19.3647C13.5787 19.1004 14.0479 18.7365 14.574 18.3218C14.8649 18.0925 15.161 17.8642 15.4589 17.6345C16.7132 16.6675 17.9993 15.676 19.0617 14.4797C20.3508 13.0281 21.25 11.3344 21.25 9.13701C21.25 6.98614 20.0346 5.18243 18.3756 4.4241C16.7639 3.68739 14.5983 3.88249 12.5404 6.02065C12.399 6.16754 12.2039 6.25054 12 6.25054C11.7961 6.25054 11.601 6.16754 11.4596 6.02065C9.40166 3.88249 7.23607 3.68739 5.62436 4.4241ZM12 4.45873C9.68795 2.39015 7.09896 2.10078 5.00076 3.05987C2.78471 4.07283 1.25 6.42494 1.25 9.13701C1.25 11.8025 2.3605 13.836 3.81672 15.4757C4.98287 16.7888 6.41022 17.8879 7.67083 18.8585C7.95659 19.0785 8.23378 19.292 8.49742 19.4998C9.00965 19.9036 9.55954 20.3342 10.1168 20.6598C10.6739 20.9853 11.3096 21.2499 12 21.2499C12.6904 21.2499 13.3261 20.9853 13.8832 20.6598C14.4405 20.3342 14.9903 19.9036 15.5026 19.4998C15.7662 19.292 16.0434 19.0785 16.3292 18.8585C17.5898 17.8879 19.0171 16.7888 20.1833 15.4757C21.6395 13.836 22.75 11.8025 22.75 9.13701C22.75 6.42494 21.2153 4.07283 18.9992 3.05987C16.901 2.10078 14.3121 2.39015 12 4.45873Z" fill="#ff475a"></path> </g></svg>
        }

      </div>
      <div className="calc" onClick={() => handleOpenModal(name, iconUrl, price)}>
        <AiFillCalculator className="calc-icon" />
      </div>
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
             <p className='close-button' onClick={handleCloseModal}><RiCloseFill /></p>
            <div className="calc-title">
              <p>{modalData.name}</p>
              <img src={modalData.iconUrl} alt={modalData.name} />
            </div>
            <div className="inputs-div">
              <input className="quantity" type="number" onChange={handleQuantityChange} />
              <RiCloseFill />
              <input readOnly type="text" value={Number(modalData.price).toLocaleString()} /> =
              <input readOnly value={Number(result).toLocaleString()} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SingleCoin;
