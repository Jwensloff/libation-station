import './Error.css';
import PropTypes from 'prop-types';


function Error({ error }) {
  console.log('error --->', error);

  const message = error ? error.message : '404 page not found';
  
  return (
    <div className='mesage-container container'>
      <div className='outter-border container'>
        <div className='inner-border container'>
          <div className='error-message container'>
            <p>{message}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

Error.propTypes = {
  error: PropTypes.object
}
export default Error;
