import './index.scss';

function ExchangeCard({
    icon,
    rank,
    name,
    price,
    ctabutton
}) {
  return (
    <>
    <div className="card">
        <div><img  className="icon"src={icon} alt="" />
        <div className="rank">#{rank}</div></div>
        <div className="name">{name}</div>
        <div className="price">${Number(price).toLocaleString()}</div>
        <a href={ctabutton}><button>Open Exchange</button></a>
    </div>
    </>
  );
}

export default ExchangeCard;
