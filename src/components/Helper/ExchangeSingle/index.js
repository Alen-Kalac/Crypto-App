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
       
        <div className="rank">#{rank} <img  className="icon"src={icon} alt="" /></div>
        <div className="name"><b>{name}</b></div>
        <div className="price">${Number(price).toLocaleString()}</div>
        <a href={ctabutton}><button>Open Exchange</button></a>
    </div>
    </>
  );
}

export default ExchangeCard;
