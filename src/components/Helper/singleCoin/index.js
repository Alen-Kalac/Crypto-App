import './index.scss';
import { SparklinesLine, Sparklines } from 'react-sparklines';

function SingleCoin({
    uuid,
    rank,
    iconUrl,
    name,
    price,
    hVolume,
    marketCap,
    onClick,
    sparkline,
    coinData,
}) {

    return (
        <>
            <div className="coin-description">
                <div className="div">
                 <div className="coin-rank">{rank}</div>
                 <div className="coin-icon"><img style={{width:'50px'}} src={iconUrl} alt="" /></div>
                 <div className="coin-name">{name}</div>
                </div>
               <div>
                 <div className="coin-price">${Number(price).toLocaleString()}</div>
                <div className="coin-24hVolume">${Number(hVolume).toLocaleString()}</div>
                <div className="coin-martkerCap">${Number(marketCap).toLocaleString()}</div>
                </div>
                <div className="coin-graph">
                    <Sparklines style={{width:'200px'}} data={sparkline.map((el) => el)}>
                        <SparklinesLine color="blue" />
                    </Sparklines></div>
                <div className="favorite">
                    {/* <button onClick={onClick}>
                        {!favouriteCoins[uuid] ? (
                            <svg
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="heart"
                                className="w-5 text-red-500"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                            >
                                <path
                                    fill="currentColor"
                                    d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"
                                ></path>
                            </svg>
                        ) : (
                            <svg
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="heart"
                                className="w-5 text-red-500"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                            >
                                <path
                                    fill="currentColor"
                                    d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"
                                ></path>
                            </svg>
                        )}
                    </button> */}
                    heart
                </div>
                <div className="calc">TBM</div>
            </div>
            {/* <div>
      <div
        key={uuid}
       
      >
        <p className="w-5">{rank}</p>
        <img
          src={iconUrl}
          width={50}
          alt={name}
          onClick={() => [navigate(`/coins/${uuid}`), window.scrollTo(0, 0)]}
          
        />
        <div
          onClick={() => [navigate(`/coins/${uuid}`), window.scrollTo(0, 0)]}
        >
          <p>{name}</p>
        </div>
        <div >
          <p >${Number(price).toLocaleString()}</p>
        </div>
        <div >
          ${Number(hVolume).toLocaleString()}
        </div>
        <div>
          ${Number(marketCap).toLocaleString()}
        </div>
        <div >
          <Sparklines data={sparkline.map((el) => el)}>
            <SparklinesLine color="blue" />
          </Sparklines>
        </div>
        <button onClick={onClick}>
          {!favouriteCoins[uuid] ? (
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="heart"
              className="w-5 text-red-500"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"
              ></path>
            </svg>
          ) : (
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="heart"
              className="w-5 text-red-500"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"
              ></path>
            </svg>
          )}
        </button>
        <CalcModal coinData={coinData} />
      </div>
      <hr className="border-t-1 border-indigo-200" />
    </div> */}
        </>
    );
}

export default SingleCoin;
