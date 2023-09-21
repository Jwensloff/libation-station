import './Error.css';

function Error({error}) {
  console.log('error --->',error)
  return (
     <div className='mesage-container container'>
      <div className='outter-border container'>
        <div className='inner-border container'>
          <div className='error-message container'>
            <p>{error.message}</p>
          </div>
        </div>
      </div>
    </div>
  
  );
}

export default Error;
