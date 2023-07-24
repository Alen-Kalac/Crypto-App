import './index.scss'
import React, { useContext } from 'react';
import { SparklinesLine, Sparklines } from 'react-sparklines';
import { appContext } from '../../../Context';


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

    // Function to add or remove the coin from favorites
    const handleAddToFavorites = () => {
        // Check if the coin is already in favorites using its UUID
        const isCoinInFavorites = favouriteCoins.some(coin => coin.uuid === uuid);

        if (isCoinInFavorites) {
            // If the coin is already in favorites, remove it from the list
            const updatedFavorites = favouriteCoins.filter(coin => coin.uuid !== uuid);
            setFavouriteCoins(updatedFavorites);
        } else {
            // If the coin is not in favorites, add it to the list
            setFavouriteCoins(prevFavorites => [...prevFavorites, { "uuid": uuid }]);
        }
    };


    return (
   
            <div className="coin-description" key={uuid}>
                <div className="coin-rank">{rank}</div>
                <div className="coin-icon"><img style={{ width: '50px' }} src={iconUrl} alt="" /></div>
                <div className="coin-name">{name}</div>
                <div className="coin-price">${Number(price).toLocaleString()}</div>
                <div className="coin-24hVolume">${Number(hVolume).toLocaleString()}</div>
                <div className="coin-marketCap">${Number(marketCap).toLocaleString()}</div>
                <div className="coin-graph">
                    <Sparklines style={{ width: '200px' }} data={sparkline.map((el) => el)}>
                        <SparklinesLine color="blue" />
                    </Sparklines>
                </div>
                <div className="favorite">
                    <button onClick={handleAddToFavorites}>Add to Favorites</button>
                </div>
                <div className="calc">TBM</div>
            </div>
       
    );
}

export default SingleCoin;
