import './index.scss';
import React, { useContext, useState } from 'react';
import { SparklinesLine, Sparklines } from 'react-sparklines';
import { appContext } from '../../../Context';
import { AiFillCalculator } from 'react-icons/ai';

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
  const [showNotification, setShowNotification] = useState(false);
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
    } else {
      // If the coin is not in favorites, add it to the list
      setFavouriteCoins((prevFavorites) => [...prevFavorites, { uuid }]);
    }

    // Show the notification for 3 seconds when the button is clicked
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000);
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
      <div className="coin-rank">{rank}</div>
      <div className="coin-icon">
        <img style={{ width: '50px' }} src={iconUrl} alt="" />
      </div>
      <div className="coin-name">{name}</div>
      <div className="coin-price">${Number(price).toLocaleString()}</div>
      <div className="coin-24hVolume">${Number(hVolume).toLocaleString()}</div>
      <div className="coin-marketCap">${Number(marketCap).toLocaleString()}</div>
      <div className="coin-graph">
        <Sparklines style={{ width: '200px' }} data={sparkline.map((el) => el)}>
          <SparklinesLine color="blue" />
        </Sparklines>
      </div>
      <div className="favorite" onClick={handleAddToFavorites}>
        {isCoinInFavorites ? (
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* ... (the SVG path for the filled heart icon) ... */}
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* ... (the SVG path for the empty heart icon) ... */}
          </svg>
        )}
      </div>
      <div className="calc" onClick={() => handleOpenModal(name, iconUrl, price)}>
        <AiFillCalculator className="calc-icon" />
      </div>
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="calc-title">
              <p>{modalData.name}</p>
              <img src={modalData.iconUrl} alt={modalData.name} />
            </div>
            <div className="inputs-div">
              <input className="quantity" type="number" onChange={handleQuantityChange} />
              X
              <input readOnly type="text" value={Number(modalData.price).toLocaleString()} /> =
              <input readOnly value={Number(result).toLocaleString()} />
              <button onClick={handleCloseModal}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SingleCoin;
