import logo from './assets/osfi2ccuar131.jpg'

function Card() {
   return (
        <div className="card">
            <img className="card-image" src={logo} alt="Profile picture" width='200px' height='200px' />
            <h2 className='card-title'>Tyler Skidmore</h2>
            <p className='card-text'>I am learning ReactJS</p>
            
        </div>
   ); 
};

export default Card;