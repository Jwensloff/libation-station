import './Homepage.css';
import img from '../../Assets/cocktail-svg.svg';

function Homepage() {
  return (
    <div className='home-mesage-container home-container'>
      <div className='home-outter-border home-container'>
        <div className='home-inner-border home-container'>
          <div className='home-error-message home-container'>
            <img src={img} className='cocktail-svg' />
            <div className='home-text-wrapper'>
              <p className='text'>It's 5 o'clock somewhere!</p>
              <p className='text-directions'>Search some cocktails to get started</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
