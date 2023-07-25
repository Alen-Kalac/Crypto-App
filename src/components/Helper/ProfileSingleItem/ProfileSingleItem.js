import './ProfileSingleItem.scss'
import React, { useContext } from 'react';
import { appContext } from '../../../Context';


function ProfileSingleItem({
    uuid,
    rank,
    iconUrl,
    price,
    marketCap,
}) {
    const { favouriteCoins, setFavouriteCoins } = useContext(appContext);

    // Function to add the coin to favorites
    const handleAddToFavorites = () => {
        setFavouriteCoins(prevFavorites => [...prevFavorites, {"uuid":uuid,
        // 'rank':rank,
        // 'icon':iconUrl,
        // 'name':name,
        // 'price':price,
        // 'hVolume':hVolume,
        // 'marketCap':marketCap,
        // 'sparkline':sparkline,
    }]);
    };
    return (
   
            <div className="coin-description" key={uuid}>
                <div className="coin-rank">{rank}</div>
                <div className="coin-icon"><img style={{ width: '50px' }} src={iconUrl} alt="" /></div>
                <div className="coin-price">${Number(price).toLocaleString()}</div>
                <div className="coin-marketCap">${Number(marketCap).toLocaleString()}</div>
            </div>
       
    );
}

export default ProfileSingleItem;

