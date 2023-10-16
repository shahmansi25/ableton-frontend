import './App.css'
import Header from './assets/header.jpg'
function App() {
  return (
    <div className="ableton">
      <header className="ableton-header">
        <nav>
          <ul>
            <li>
              <a href="#">Live</a>
            </li>
             <li>
              <a href="#">Push</a>
            </li>
            <li>
              <a href="#">Note</a>
            </li>
            <li>
              <a href="#">Link</a>
            </li>
            <li>
              <a href="#">Shop</a>
            </li>   
             <li className='left-side'>
              <a  href="#">Try it for free</a>
            </li>  
             <li>
              <a href="#">Log In or Register</a>
            </li>  
          </ul>
        </nav>
      </header>
      <main>
        <div className='page-about'>
          <img src= {Header} style={{width: "100%"}}/>
        </div>
        <div className='page-about-text'>
          <div className='body-text'>
            <h1>
              We make Live, Push and Link — unique software and hardware
              for music creation and performance. With these products, our community of users creates amazing things.
            </h1>
            <p>
              Ableton was founded in 1999 and released the first version of Live in 2001.
              Our products are used by a community of dedicated musicians, sound designers, and artists from across the world.</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
