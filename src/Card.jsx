import logo from './images/osfi2ccuar131.jpg'

function Card() {
   return (
        <div className="card">
            <img src={logo} alt="Profile picture" width='200px' height='200px' />
            <h2>Tyler S</h2>
            <p>I am learning ReactJS</p>
            
        </div>
   ); 
};

export default Card;