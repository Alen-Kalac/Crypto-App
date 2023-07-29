import './index.scss';
import loader from './loader.svg'



function LoadingPage() {
  return (
    <>
    <div className="loadingPage">
      <img src={loader} alt="" />
    </div>
    </>
  );
}

export default LoadingPage;
