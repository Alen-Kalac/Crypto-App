import './index.scss';

function ColumnTitles() {
  return (
    <div className="column-titles">
    <div className="coin-rank">Rank</div>
    <div className="coin-icon"></div>
    <div className="coin-name">Name</div>
    <div className="coin-price">Price</div>
    <div className="coin-24hVolume">24h Volume</div>
    <div className="coin-marketCap">Market Cap</div>
    <div className="coin-graph"></div>
    <div className="favorite"></div>
    <div className="calc"></div>
    </div>
    
  );
}

export default ColumnTitles;
